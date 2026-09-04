<?php
session_start();

// 1. ADMIN CONFIGURATION
define('ADMIN_PASSWORD', 'pmadmin'); 

// Handle Logout
if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    unset($_SESSION['admin_logged_in']);
    session_destroy();
    header("Location: admin.php");
    exit();
}

// Handle Login
$login_error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])) {
    if ($_POST['password'] === ADMIN_PASSWORD) {
        $_SESSION['admin_logged_in'] = true;
        header("Location: admin.php");
        exit();
    } else {
        $login_error = 'Invalid password provided.';
    }
}

// Render Login Screen if not authenticated
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true):
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PageMistri - Admin Portal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = { darkMode: 'class' }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>body { font-family: 'Inter', sans-serif; }</style>
    <script>
        // Apply saved theme or default to light mode
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    </script>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex items-center justify-center min-h-screen p-4 transition-colors">
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-extrabold text-blue-600 dark:text-blue-500 tracking-tight">PageMistri</h1>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Admin Dashboard Portal</p>
        </div>

        <?php if ($login_error): ?>
            <div class="bg-rose-50 border border-rose-200 text-rose-600 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400 p-3 rounded-lg text-sm mb-6 text-center">
                <?= htmlspecialchars($login_error) ?>
            </div>
        <?php endif; ?>

        <form method="POST" class="space-y-5">
            <div>
                <label class="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 mb-2">Password</label>
                <input type="password" name="password" required placeholder="••••••••••••" 
                       class="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition text-sm">
            </div>
            <button type="submit" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition shadow-md shadow-blue-600/20 text-sm">
                Access Dashboard
            </button>
        </form>
    </div>
</body>
</html>
<?php
exit();
endif;

// 2. DATABASE CONNECTION
$db_host = 'localhost';
$db_port = '3306';
$db_name = 'iqwdcffu_pmindb';
$db_user = 'iqwdcffu_pagemistri_user';
$db_pass = 'xFJd?#6lwY4vfi?W';

try {
    $pdo = new PDO("mysql:host=$db_host;port=$db_port;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);

    // CSV EXPORT LOGIC
    if (isset($_GET['export'])) {
        $type = $_GET['export'];
        $filename = $type . "_export_" . date('Y-m-d') . ".csv";
        
        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="' . $filename . '"');
        
        $output = fopen('php://output', 'w');
        
        if ($type === 'leads') {
            $stmt = $pdo->query("SELECT * FROM leads ORDER BY created_at DESC");
            $rows = $stmt->fetchAll();
            if (!empty($rows)) fputcsv($output, array_keys($rows[0]));
            foreach ($rows as $row) fputcsv($output, $row);
        } elseif ($type === 'surveys') {
            $stmt = $pdo->query("SELECT * FROM survey_responses ORDER BY submitted_at DESC");
            $rows = $stmt->fetchAll();
            if (!empty($rows)) fputcsv($output, array_keys($rows[0]));
            foreach ($rows as $row) fputcsv($output, $row);
        } elseif ($type === 'intakes') {
            $stmt = $pdo->query("SELECT * FROM intake_submissions ORDER BY created_at DESC");
            $rows = $stmt->fetchAll();
            if (!empty($rows)) fputcsv($output, array_keys($rows[0]));
            foreach ($rows as $row) fputcsv($output, $row);
        }
        fclose($output);
        exit();
    }

    // FETCH LEADS & SURVEYS & INTAKES
    $leads = $pdo->query("SELECT * FROM leads ORDER BY created_at DESC")->fetchAll();
    $surveys = $pdo->query("SELECT * FROM survey_responses ORDER BY submitted_at DESC")->fetchAll();
    $intakes = $pdo->query("SELECT * FROM intake_submissions ORDER BY created_at DESC")->fetchAll();

    $totalLeads = count($leads);
    $totalSurveys = count($surveys);
    $totalIntakes = count($intakes);
    $todayDate = date('Y-m-d');
    
    $todayLeads = count(array_filter($leads, fn($l) => strpos($l['created_at'], $todayDate) === 0));
    $todaySurveys = count(array_filter($surveys, fn($s) => strpos($s['submitted_at'], $todayDate) === 0));
    $todayIntakes = count(array_filter($intakes, fn($i) => strpos($i['created_at'], $todayDate) === 0));
    $todayTotal = $todayLeads + $todaySurveys + $todayIntakes;

} catch (PDOException $e) {
    die("Database Connection Error: " . $e->getMessage());
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PageMistri - Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = { darkMode: 'class' }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>body { font-family: 'Inter', sans-serif; }</style>
    <script>
        // Set theme from localStorage or default to Light Mode
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        function toggleTheme() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                document.getElementById('theme-toggle-btn').innerText = '🌙 Dark Mode';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                document.getElementById('theme-toggle-btn').innerText = '☀️ Light Mode';
            }
        }

        function switchTab(tabName) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.tab-btn').forEach(el => {
                el.classList.remove('bg-blue-600', 'text-white');
                el.classList.add('bg-white', 'dark:bg-slate-900', 'text-slate-600', 'dark:text-slate-400');
            });
            document.getElementById(tabName).classList.remove('hidden');
            document.getElementById(tabName + '-btn').classList.add('bg-blue-600', 'text-white');
            document.getElementById(tabName + '-btn').classList.remove('bg-white', 'dark:bg-slate-900', 'text-slate-600', 'dark:text-slate-400');
        }

        function filterTable(tab) {
            const query = document.getElementById(tab + '-search').value.toLowerCase();
            const rows = document.querySelectorAll('#' + tab + ' table tbody tr');
            rows.forEach(row => {
                const text = row.innerText.toLowerCase();
                row.style.display = text.includes(query) ? '' : 'none';
            });
        }

        function openModal(data) {
            const container = document.getElementById('modal-content');
            container.innerHTML = '';
            const linkFields = ['logo_url', 'form_requirements_doc_url', 'extra_docs_url', 'media_files_url'];
            for (const [key, value] of Object.entries(data)) {
                const formattedKey = key.replace(/_/g, ' ');
                let displayValue = value ? value : '<em class="text-slate-400 dark:text-slate-600">N/A</em>';
                
                if (value && linkFields.includes(key)) {
                    displayValue = `<a href="${value}" target="_blank" class="text-blue-600 hover:underline break-all">${value}</a>`;
                }

                container.innerHTML += `
                    <div class="bg-slate-50 dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800/80">
                        <span class="text-[10px] uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400 block mb-1">${formattedKey}</span>
                        <span class="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">${displayValue}</span>
                    </div>
                `;
            }
            document.getElementById('details-modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('details-modal').classList.add('hidden');
        }
    </script>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen p-4 md:p-8 transition-colors">

    <!-- Top Header -->
    <header class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-slate-200 dark:border-slate-800/80 pb-6">
        <div>
            <div class="flex items-center gap-3">
                <h1 class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">PageMistri</h1>
                <span class="bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-500/20 font-medium">Live Dashboard</span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Real-time overview of incoming leads and survey responses</p>
        </div>
        <div class="flex items-center gap-3">
            <button id="theme-toggle-btn" onclick="toggleTheme()" class="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 transition font-medium shadow-sm">
                <script>document.write(localStorage.getItem('theme') === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode');</script>
            </button>
            <a href="?action=logout" class="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 transition font-medium shadow-sm">
                Log Out
            </a>
        </div>
    </header>

    <main class="max-w-7xl mx-auto space-y-8">

        <!-- Stat Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-xl">
                <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Total Landing Page Leads</p>
                <div class="flex items-baseline justify-between">
                    <span class="text-3xl font-extrabold text-slate-900 dark:text-white"><?= $totalLeads ?></span>
                    <span class="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2 py-1 rounded border border-blue-200 dark:border-blue-500/20">pagemistri.in</span>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-xl">
                <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Total Survey Responses</p>
                <div class="flex items-baseline justify-between">
                    <span class="text-3xl font-extrabold text-slate-900 dark:text-white"><?= $totalSurveys ?></span>
                    <span class="text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-500/20">survey page</span>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-xl">
                <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Submissions Today</p>
                <div class="flex items-baseline justify-between">
                    <span class="text-3xl font-extrabold text-amber-500 dark:text-amber-400"><?= $todayTotal ?></span>
                    <span class="text-xs text-slate-500 dark:text-slate-400"><?= date('M d, Y') ?></span>
                </div>
            </div>
        </div>

        <!-- Tab Controls -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div class="flex gap-3 bg-slate-200 dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800 flex-wrap">
                <button id="leads-btn" onclick="switchTab('leads')" class="tab-btn bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-xs transition">
                    Landing Page Leads (<?= $totalLeads ?>)
                </button>
                <button id="surveys-btn" onclick="switchTab('surveys')" class="tab-btn bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 px-5 py-2.5 rounded-lg font-semibold text-xs transition">
                    Visibility Surveys (<?= $totalSurveys ?>)
                </button>
                <button id="intakes-btn" onclick="switchTab('intakes')" class="tab-btn bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 px-5 py-2.5 rounded-lg font-semibold text-xs transition">
                    Intake Submissions (<?= $totalIntakes ?>)
                </button>
            </div>
        </div>

        <!-- LEADS TABLE CONTAINER -->
        <div id="leads" class="tab-content bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden shadow-sm dark:shadow-xl">
            <div class="p-4 border-b border-slate-200 dark:border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50 dark:bg-slate-900">
                <input type="text" id="leads-search" onkeyup="filterTable('leads')" placeholder="Search leads by name, email, phone..." 
                       class="w-full md:w-80 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500">
                <a href="?export=leads" class="bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 transition font-medium flex items-center gap-2 shadow-sm">
                    <span>↓</span> Export Leads CSV
                </a>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                    <thead class="bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 uppercase font-bold border-b border-slate-200 dark:border-slate-800/80">
                        <tr>
                            <th class="p-4">Date</th>
                            <th class="p-4">Full Name</th>
                            <th class="p-4">Business</th>
                            <th class="p-4">Email</th>
                            <th class="p-4">Phone</th>
                            <th class="p-4">Category</th>
                            <th class="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800/50">
                        <?php foreach ($leads as $lead): ?>
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                                <td class="p-4 whitespace-nowrap text-slate-500 dark:text-slate-400"><?= htmlspecialchars($lead['created_at']) ?></td>
                                <td class="p-4 font-semibold text-slate-900 dark:text-white"><?= htmlspecialchars($lead['full_name']) ?></td>
                                <td class="p-4 text-slate-700 dark:text-slate-300"><?= htmlspecialchars($lead['business_name']) ?></td>
                                <td class="p-4"><a href="mailto:<?= htmlspecialchars($lead['email']) ?>" class="text-blue-600 dark:text-blue-400 hover:underline"><?= htmlspecialchars($lead['email']) ?></a></td>
                                <td class="p-4"><a href="tel:<?= htmlspecialchars($lead['phone_number']) ?>" class="text-blue-600 dark:text-blue-400 hover:underline"><?= htmlspecialchars($lead['phone_number']) ?></a></td>
                                <td class="p-4"><span class="bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 px-2.5 py-1 rounded-md text-[11px] font-medium border border-blue-200 dark:border-blue-500/20"><?= htmlspecialchars($lead['business_category']) ?></span></td>
                                <td class="p-4">
                                    <button onclick='openModal(<?= json_encode($lead, JSON_HEX_APOS | JSON_HEX_QUOT) ?>)' class="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-3 py-1.5 rounded-md transition text-[11px] font-semibold border border-slate-300 dark:border-slate-700">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        <?php if (empty($leads)): ?>
                            <tr><td colspan="7" class="p-8 text-center text-slate-400 dark:text-slate-500">No leads recorded yet.</td></tr>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SURVEYS TABLE CONTAINER -->
        <div id="surveys" class="tab-content hidden bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden shadow-sm dark:shadow-xl">
            <div class="p-4 border-b border-slate-200 dark:border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50 dark:bg-slate-900">
                <input type="text" id="surveys-search" onkeyup="filterTable('surveys')" placeholder="Search surveys by name, business, phone..." 
                       class="w-full md:w-80 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500">
                <a href="?export=surveys" class="bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 transition font-medium flex items-center gap-2 shadow-sm">
                    <span>↓</span> Export Surveys CSV
                </a>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                    <thead class="bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 uppercase font-bold border-b border-slate-200 dark:border-slate-800/80">
                        <tr>
                            <th class="p-4">Date</th>
                            <th class="p-4">Full Name</th>
                            <th class="p-4">Business</th>
                            <th class="p-4">Phone</th>
                            <th class="p-4">Type</th>
                            <th class="p-4">Rating</th>
                            <th class="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800/50">
                        <?php foreach ($surveys as $survey): ?>
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                                <td class="p-4 whitespace-nowrap text-slate-500 dark:text-slate-400"><?= htmlspecialchars($survey['submitted_at']) ?></td>
                                <td class="p-4 font-semibold text-slate-900 dark:text-white"><?= htmlspecialchars($survey['full_name']) ?></td>
                                <td class="p-4 text-slate-700 dark:text-slate-300"><?= htmlspecialchars($survey['business_name']) ?></td>
                                <td class="p-4"><a href="tel:<?= htmlspecialchars($survey['phone_number']) ?>" class="text-blue-600 dark:text-blue-400 hover:underline"><?= htmlspecialchars($survey['phone_number']) ?></a></td>
                                <td class="p-4"><span class="bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-2.5 py-1 rounded-md text-[11px] font-medium border border-emerald-200 dark:border-emerald-500/20"><?= htmlspecialchars($survey['business_type']) ?></span></td>
                                <td class="p-4 text-amber-500 dark:text-amber-400 font-semibold"><?= htmlspecialchars($survey['online_presence_rating']) ?></td>
                                <td class="p-4">
                                    <button onclick='openModal(<?= json_encode($survey, JSON_HEX_APOS | JSON_HEX_QUOT) ?>)' class="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-3 py-1.5 rounded-md transition text-[11px] font-semibold border border-slate-300 dark:border-slate-700">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        <?php if (empty($surveys)): ?>
                            <tr><td colspan="7" class="p-8 text-center text-slate-400 dark:text-slate-500">No survey submissions recorded yet.</td></tr>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
        </div>

    </main>

    <!-- INTAKES TABLE CONTAINER -->
    <div id="intakes" class="tab-content hidden max-w-7xl mx-auto mt-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden shadow-sm dark:shadow-xl">
        <div class="p-4 border-b border-slate-200 dark:border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50 dark:bg-slate-900">
            <input type="text" id="intakes-search" onkeyup="filterTable('intakes')" placeholder="Search intakes by name, business, phone, email..." 
                   class="w-full md:w-80 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500">
            <a href="?export=intakes" class="bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 transition font-medium flex items-center gap-2 shadow-sm">
                <span>↓</span> Export Intakes CSV
            </a>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                <thead class="bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 uppercase font-bold border-b border-slate-200 dark:border-slate-800/80">
                    <tr>
                        <th class="p-4">Date</th>
                        <th class="p-4">Full Name</th>
                        <th class="p-4">Business Name</th>
                        <th class="p-4">Phone</th>
                        <th class="p-4">Email</th>
                        <th class="p-4">Payment ID</th>
                        <th class="p-4">Action</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800/50">
                    <?php foreach ($intakes as $intake): ?>
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                            <td class="p-4 whitespace-nowrap text-slate-500 dark:text-slate-400"><?= htmlspecialchars($intake['created_at'] ?? 'N/A') ?></td>
                            <td class="p-4 font-semibold text-slate-900 dark:text-white"><?= htmlspecialchars($intake['full_name'] ?? 'N/A') ?></td>
                            <td class="p-4 text-slate-700 dark:text-slate-300"><?= htmlspecialchars($intake['business_name'] ?? 'N/A') ?></td>
                            <td class="p-4"><a href="tel:<?= htmlspecialchars($intake['phone'] ?? '') ?>" class="text-blue-600 dark:text-blue-400 hover:underline"><?= htmlspecialchars($intake['phone'] ?? 'N/A') ?></a></td>
                            <td class="p-4"><a href="mailto:<?= htmlspecialchars($intake['email'] ?? '') ?>" class="text-blue-600 dark:text-blue-400 hover:underline"><?= htmlspecialchars($intake['email'] ?? 'N/A') ?></a></td>
                            <td class="p-4 text-slate-500 dark:text-slate-400"><?= htmlspecialchars($intake['razorpay_payment_id'] ?: 'N/A') ?></td>
                            <td class="p-4">
                                <button onclick='openModal(<?= json_encode($intake, JSON_HEX_APOS | JSON_HEX_QUOT) ?>)' class="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-3 py-1.5 rounded-md transition text-[11px] font-semibold border border-slate-300 dark:border-slate-700">
                                    View Details
                                </button>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                    <?php if (empty($intakes)): ?>
                        <tr><td colspan="7" class="p-8 text-center text-slate-400 dark:text-slate-500">No intake submissions recorded yet.</td></tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>

    <!-- FULL DETAILS MODAL -->
    <div id="details-modal" class="hidden fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950">
                <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Submission Record Details</h3>
                <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 dark:hover:text-white text-xl font-bold">&times;</button>
            </div>
            <div id="modal-content" class="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-3"></div>
            <div class="p-4 border-t border-slate-200 dark:border-slate-800 text-right bg-slate-50 dark:bg-slate-950">
                <button onclick="closeModal()" class="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-5 py-2 rounded-lg text-xs font-semibold transition">Close Window</button>
            </div>
        </div>
    </div>

</body>
</html>