<?php
session_start();

define('ADMIN_PASSWORD', 'pmadmin');

if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    unset($_SESSION['admin_logged_in']);
    session_destroy();
    header("Location: admin.php");
    exit();
}

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

if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true):
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PageMistri - Admin Portal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>tailwind.config = { darkMode: 'class' }</script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>body { font-family: 'Inter', sans-serif; }</style>
    <script>
        if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    </script>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex items-center justify-center min-h-screen p-4 transition-colors">
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-extrabold text-blue-600 dark:text-blue-500 tracking-tight">PageMistri</h1>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Admin Dashboard Portal</p>
        </div>
        <?php if ($login_error): ?>
            <div class="bg-rose-50 border border-rose-200 text-rose-600 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400 p-3 rounded-lg text-sm mb-6 text-center"><?= htmlspecialchars($login_error) ?></div>
        <?php endif; ?>
        <form method="POST" class="space-y-5">
            <div>
                <label class="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 mb-2">Password</label>
                <input type="password" name="password" required placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" class="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition text-sm">
            </div>
            <button type="submit" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition shadow-md shadow-blue-600/20 text-sm">Access Dashboard</button>
        </form>
    </div>
</body>
</html>
<?php exit(); endif;

// ── DB ──
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
} catch (PDOException $e) {
    die("Database Connection Error: " . $e->getMessage());
}

// ── CSV EXPORT ──
if (isset($_GET['export'])) {
    $type = $_GET['export'];
    $filename = $type . "_export_" . date('Y-m-d') . ".csv";
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    $output = fopen('php://output', 'w');

    $exports = [
        'leads'        => "SELECT * FROM leads ORDER BY created_at DESC",
        'surveys'      => "SELECT * FROM survey_responses ORDER BY submitted_at DESC",
        'intakes'      => "SELECT * FROM intake_submissions ORDER BY created_at DESC",
        'transactions' => "SELECT full_name, email, phone, razorpay_payment_id, razorpay_order_id, amount, payment_status, created_at FROM intake_submissions WHERE razorpay_payment_id IS NOT NULL AND razorpay_payment_id != '' ORDER BY created_at DESC",
    ];

    if (isset($exports[$type])) {
        $rows = $pdo->query($exports[$type])->fetchAll();
        if (!empty($rows)) fputcsv($output, array_keys($rows[0]));
        foreach ($rows as $row) fputcsv($output, $row);
    }
    fclose($output);
    exit();
}

// ── DATA ──
$leads        = $pdo->query("SELECT * FROM leads ORDER BY created_at DESC")->fetchAll();
$surveys      = $pdo->query("SELECT * FROM survey_responses ORDER BY submitted_at DESC")->fetchAll();
$intakes      = $pdo->query("SELECT * FROM intake_submissions ORDER BY created_at DESC")->fetchAll();
$transactions = $pdo->query("SELECT full_name, email, phone, razorpay_payment_id, razorpay_order_id, amount, payment_status, created_at, id FROM intake_submissions WHERE razorpay_payment_id IS NOT NULL AND razorpay_payment_id != '' ORDER BY created_at DESC")->fetchAll();

$totalLeads        = count($leads);
$totalSurveys      = count($surveys);
$totalIntakes      = count($intakes);
$totalTransactions = count($transactions);
$todayDate         = date('Y-m-d');
$todayLeads        = count(array_filter($leads, fn($l) => strpos($l['created_at'], $todayDate) === 0));
$todaySurveys      = count(array_filter($surveys, fn($s) => strpos($s['submitted_at'], $todayDate) === 0));
$todayIntakes      = count(array_filter($intakes, fn($i) => strpos($i['created_at'], $todayDate) === 0));
$todayTotal        = $todayLeads + $todaySurveys + $todayIntakes;

// ── INTAKE DETAIL ──
$page = $_GET['page'] ?? 'overview';
$intakeDetail = null;
if ($page === 'intake-detail' && isset($_GET['id'])) {
    $stmt = $pdo->prepare("SELECT * FROM intake_submissions WHERE id = ?");
    $stmt->execute([$_GET['id']]);
    $intakeDetail = $stmt->fetch();
    if (!$intakeDetail) { $page = 'intake'; }
}

function parseLinks($value) {
    if (empty($value)) return '<span class="text-slate-400 dark:text-slate-500 italic">N/A</span>';
    if ($value === 'Array' || $value === '[]') return '<span class="text-slate-400 dark:text-slate-500 italic">N/A</span>';
    $decoded = json_decode($value, true);
    $urls = is_array($decoded) ? $decoded : [$value];
    $html = '<div class="flex flex-col gap-2">';
    foreach ($urls as $url) {
        if (!empty($url) && is_string($url)) {
            $html .= '<a href="' . htmlspecialchars($url) . '" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg> Open Document / Media</a>';
        }
    }
    $html .= '</div>';
    return $html;
}

function renderValue($value) {
    if (empty($value)) return '<span class="text-slate-400 dark:text-slate-500 italic">N/A</span>';
    return htmlspecialchars($value);
}

$navItems = [
    ['key' => 'overview',   'icon' => '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>', 'label' => 'Dashboard',      'count' => null],
    ['key' => 'leads',      'icon' => '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>', 'label' => 'Landing Page Leads', 'count' => $totalLeads],
    ['key' => 'surveys',    'icon' => '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>', 'label' => 'Visibility Surveys', 'count' => $totalSurveys],
    ['key' => 'intake',     'icon' => '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>', 'label' => 'Intake Submissions', 'count' => $totalIntakes],
    ['key' => 'transactions','icon' => '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>', 'label' => 'Transactions', 'count' => $totalTransactions],
];

$pageTitles = [
    'overview' => 'Dashboard Overview',
    'leads' => 'Landing Page Leads',
    'surveys' => 'Visibility Surveys',
    'intake' => 'Intake Submissions',
    'transactions' => 'Transactions',
    'intake-detail' => 'Submission Details',
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PageMistri - Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>tailwind.config = { darkMode: 'class' }</script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        .tx-word-break { word-break: break-word; overflow-wrap: anywhere; }
        .detail-text { word-break: break-word; overflow-wrap: anywhere; white-space: pre-wrap; }
        @media (max-width: 1023px) {
            .sidebar-open .sidebar-backdrop { opacity: 1; pointer-events: auto; }
            .sidebar-open .sidebar-panel { transform: translateX(0); }
        }
    </style>
    <script>
        if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');

        function toggleTheme() {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            document.getElementById('theme-icon').textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
            document.getElementById('theme-label').textContent = isDark ? 'Light Mode' : 'Dark Mode';
        }

        function toggleSidebar() {
            document.body.classList.toggle('sidebar-open');
        }

        function filterTable(tab) {
            const query = document.getElementById(tab + '-search').value.toLowerCase();
            document.querySelectorAll('#page-' + tab + ' table tbody tr').forEach(row => {
                row.style.display = row.innerText.toLowerCase().includes(query) ? '' : 'none';
            });
        }

        function openModal(data) {
            const c = document.getElementById('modal-content');
            c.innerHTML = '';
            const linkFields = ['logo_url','form_requirements_doc_url','extra_docs_url','media_files_url'];
            for (const [k, v] of Object.entries(data)) {
                let dv = v ? v : '<em class="text-slate-400 dark:text-slate-600">N/A</em>';
                if (v && linkFields.includes(k)) dv = '<a href="'+v+'" target="_blank" class="text-blue-600 hover:underline break-all">'+v+'</a>';
                c.innerHTML += '<div class="bg-slate-50 dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800/80"><span class="text-[10px] uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400 block mb-1">'+k.replace(/_/g,' ')+'</span><span class="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">'+dv+'</span></div>';
            }
            document.getElementById('details-modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('details-modal').classList.add('hidden');
        }
    </script>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen transition-colors">

<!-- ═══ SIDEBAR BACKDROP (mobile) ═══ -->
<div onclick="toggleSidebar()" class="sidebar-backdrop fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity lg:hidden"></div>

<!-- ═══ SIDEBAR ═══ -->
<aside class="sidebar-panel fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 -translate-x-full lg:translate-x-0">
    <!-- Brand -->
    <div class="p-5 border-b border-slate-200 dark:border-slate-800">
        <h1 class="text-lg font-extrabold text-blue-600 dark:text-blue-500 tracking-tight">PageMistri</h1>
        <p class="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">Admin Panel</p>
    </div>

    <!-- Nav Links -->
    <nav class="flex-1 overflow-y-auto p-3 space-y-1">
        <?php foreach ($navItems as $item): ?>
            <?php
                $active = ($page === $item['key']) || ($page === 'intake-detail' && $item['key'] === 'intake');
                $activeClass = $active ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 font-semibold border border-blue-200 dark:border-blue-500/20' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent';
            ?>
            <a href="?page=<?= $item['key'] ?>" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs transition <?= $activeClass ?>">
                <?= $item['icon'] ?>
                <span class="flex-1"><?= $item['label'] ?></span>
                <?php if ($item['count'] !== null): ?>
                    <span class="text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-full font-bold"><?= $item['count'] ?></span>
                <?php endif; ?>
            </a>
        <?php endforeach; ?>
    </nav>

    <!-- Sidebar Footer -->
    <div class="p-3 border-t border-slate-200 dark:border-slate-800">
        <a href="?action=logout" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-slate-600 dark:text-slate-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 hover:text-rose-600 dark:hover:text-rose-400 transition border border-transparent">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
            <span>Log Out</span>
        </a>
    </div>
</aside>

<!-- ═══ MAIN CONTENT ═══ -->
<div class="lg:ml-64 min-h-screen flex flex-col">

    <!-- Top Bar -->
    <header class="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div class="flex items-center justify-between px-4 md:px-6 h-14">
            <div class="flex items-center gap-3">
                <!-- Hamburger -->
                <button onclick="toggleSidebar()" class="lg:hidden p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    <svg class="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
                <h2 class="text-sm font-bold text-slate-800 dark:text-white"><?= $pageTitles[$page] ?? 'Dashboard' ?></h2>
                <span class="hidden sm:inline bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-[10px] px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-500/20 font-medium">Live</span>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="toggleTheme()" class="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs px-3 py-2 rounded-lg transition font-medium">
                    <span id="theme-icon"><script>document.write(localStorage.getItem('theme')==='dark'?'\u2600\uFE0F':'\uD83C\uDF19')</script></span>
                    <span id="theme-label"><script>document.write(localStorage.getItem('theme')==='dark'?'Light Mode':'Dark Mode')</script></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Page Content -->
    <main class="flex-1 p-4 md:p-6 lg:p-8">

    <?php if ($page === 'overview'): ?>
    <!-- ═══ OVERVIEW ═══ -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Total Leads</p>
            <span class="text-3xl font-extrabold text-slate-900 dark:text-white"><?= $totalLeads ?></span>
            <p class="text-[10px] text-blue-600 dark:text-blue-400 mt-1"><?= $todayLeads ?> today</p>
        </div>
        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Total Surveys</p>
            <span class="text-3xl font-extrabold text-slate-900 dark:text-white"><?= $totalSurveys ?></span>
            <p class="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1"><?= $todaySurveys ?> today</p>
        </div>
        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Intake Submissions</p>
            <span class="text-3xl font-extrabold text-slate-900 dark:text-white"><?= $totalIntakes ?></span>
            <p class="text-[10px] text-amber-600 dark:text-amber-400 mt-1"><?= $todayIntakes ?> today</p>
        </div>
        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Transactions</p>
            <span class="text-3xl font-extrabold text-blue-600 dark:text-blue-400"><?= $totalTransactions ?></span>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1">payments with IDs</p>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Recent Leads -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950">
                <h3 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Recent Leads</h3>
                <a href="?page=leads" class="text-[10px] text-blue-600 dark:text-blue-400 hover:underline font-semibold">View All</a>
            </div>
            <div class="divide-y divide-slate-100 dark:divide-slate-800/50">
                <?php foreach (array_slice($leads, 0, 5) as $l): ?>
                <div class="px-4 py-3 flex items-center justify-between">
                    <div>
                        <p class="text-xs font-semibold text-slate-900 dark:text-white"><?= htmlspecialchars($l['full_name']) ?></p>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400"><?= htmlspecialchars($l['business_name']) ?></p>
                    </div>
                    <span class="text-[10px] text-slate-400 dark:text-slate-500 whitespace-nowrap"><?= htmlspecialchars($l['created_at']) ?></span>
                </div>
                <?php endforeach; ?>
                <?php if (empty($leads)): ?><p class="p-6 text-center text-xs text-slate-400">No leads yet.</p><?php endif; ?>
            </div>
        </div>

        <!-- Recent Transactions -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950">
                <h3 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Recent Transactions</h3>
                <a href="?page=transactions" class="text-[10px] text-blue-600 dark:text-blue-400 hover:underline font-semibold">View All</a>
            </div>
            <div class="divide-y divide-slate-100 dark:divide-slate-800/50">
                <?php foreach (array_slice($transactions, 0, 5) as $tx): ?>
                <div class="px-4 py-3 flex items-center justify-between">
                    <div>
                        <p class="text-xs font-semibold text-slate-900 dark:text-white"><?= htmlspecialchars($tx['full_name']) ?></p>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono tx-word-break"><?= htmlspecialchars($tx['razorpay_payment_id']) ?></p>
                    </div>
                    <div class="text-right">
                        <p class="text-xs font-bold text-slate-900 dark:text-white"><?= ($tx['amount'] != null) ? '&#8377;'.number_format((float)$tx['amount'],0) : 'N/A' ?></p>
                        <?php $st = strtolower(trim($tx['payment_status'] ?? '')); ?>
                        <?php if ($st==='success'||$st==='captured'||$st==='paid'): ?>
                            <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Success</span>
                        <?php elseif ($st==='pending'||$st==='created'): ?>
                            <span class="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">Pending</span>
                        <?php else: ?>
                            <span class="text-[10px] text-rose-600 dark:text-rose-400 font-semibold"><?= htmlspecialchars($tx['payment_status'] ?? 'Unknown') ?></span>
                        <?php endif; ?>
                    </div>
                </div>
                <?php endforeach; ?>
                <?php if (empty($transactions)): ?><p class="p-6 text-center text-xs text-slate-400">No transactions yet.</p><?php endif; ?>
            </div>
        </div>
    </div>

    <?php elseif ($page === 'leads'): ?>
    <!-- ═══ LEADS PAGE ═══ -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 bg-slate-50 dark:bg-slate-950">
            <input type="text" id="leads-search" onkeyup="filterTable('leads')" placeholder="Search by name, email, phone..." class="w-full sm:w-72 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500">
            <a href="?export=leads" class="bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 transition font-medium flex items-center gap-2 shadow-sm whitespace-nowrap"><span>&#8595;</span> Export CSV</a>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                <thead class="bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 uppercase font-bold border-b border-slate-200 dark:border-slate-800">
                    <tr>
                        <th class="p-4">Date</th><th class="p-4">Full Name</th><th class="p-4">Business</th><th class="p-4">Email</th><th class="p-4">Phone</th><th class="p-4">Category</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800/50">
                    <?php foreach ($leads as $lead): ?>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td class="p-4 whitespace-nowrap text-slate-500 dark:text-slate-400"><?= htmlspecialchars($lead['created_at']) ?></td>
                        <td class="p-4 font-semibold text-slate-900 dark:text-white"><?= htmlspecialchars($lead['full_name']) ?></td>
                        <td class="p-4"><?= htmlspecialchars($lead['business_name']) ?></td>
                        <td class="p-4"><a href="mailto:<?= htmlspecialchars($lead['email']) ?>" class="text-blue-600 dark:text-blue-400 hover:underline"><?= htmlspecialchars($lead['email']) ?></a></td>
                        <td class="p-4"><a href="tel:<?= htmlspecialchars($lead['phone_number']) ?>" class="text-blue-600 dark:text-blue-400 hover:underline"><?= htmlspecialchars($lead['phone_number']) ?></a></td>
                        <td class="p-4"><span class="bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded text-[10px] font-medium border border-blue-200 dark:border-blue-500/20"><?= htmlspecialchars($lead['business_category']) ?></span></td>
                    </tr>
                    <?php endforeach; ?>
                    <?php if (empty($leads)): ?><tr><td colspan="6" class="p-8 text-center text-slate-400">No leads recorded yet.</td></tr><?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>

    <?php elseif ($page === 'surveys'): ?>
    <!-- ═══ SURVEYS PAGE ═══ -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 bg-slate-50 dark:bg-slate-950">
            <input type="text" id="surveys-search" onkeyup="filterTable('surveys')" placeholder="Search by name, business, phone..." class="w-full sm:w-72 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500">
            <a href="?export=surveys" class="bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 transition font-medium flex items-center gap-2 shadow-sm whitespace-nowrap"><span>&#8595;</span> Export CSV</a>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                <thead class="bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 uppercase font-bold border-b border-slate-200 dark:border-slate-800">
                    <tr>
                        <th class="p-4">Date</th><th class="p-4">Full Name</th><th class="p-4">Business</th><th class="p-4">Phone</th><th class="p-4">Type</th><th class="p-4">Rating</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800/50">
                    <?php foreach ($surveys as $survey): ?>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td class="p-4 whitespace-nowrap text-slate-500 dark:text-slate-400"><?= htmlspecialchars($survey['submitted_at']) ?></td>
                        <td class="p-4 font-semibold text-slate-900 dark:text-white"><?= htmlspecialchars($survey['full_name']) ?></td>
                        <td class="p-4"><?= htmlspecialchars($survey['business_name']) ?></td>
                        <td class="p-4"><a href="tel:<?= htmlspecialchars($survey['phone_number']) ?>" class="text-blue-600 dark:text-blue-400 hover:underline"><?= htmlspecialchars($survey['phone_number']) ?></a></td>
                        <td class="p-4"><span class="bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded text-[10px] font-medium border border-emerald-200 dark:border-emerald-500/20"><?= htmlspecialchars($survey['business_type']) ?></span></td>
                        <td class="p-4 text-amber-500 dark:text-amber-400 font-semibold"><?= htmlspecialchars($survey['online_presence_rating']) ?></td>
                    </tr>
                    <?php endforeach; ?>
                    <?php if (empty($surveys)): ?><tr><td colspan="6" class="p-8 text-center text-slate-400">No survey submissions recorded yet.</td></tr><?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>

    <?php elseif ($page === 'intake'): ?>
    <!-- ═══ INTAKES PAGE ═══ -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 bg-slate-50 dark:bg-slate-950">
            <input type="text" id="intake-search" onkeyup="filterTable('intake')" placeholder="Search by name, business, phone, email..." class="w-full sm:w-72 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500">
            <a href="?export=intakes" class="bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 transition font-medium flex items-center gap-2 shadow-sm whitespace-nowrap"><span>&#8595;</span> Export CSV</a>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                <thead class="bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 uppercase font-bold border-b border-slate-200 dark:border-slate-800">
                    <tr>
                        <th class="p-4">Date</th><th class="p-4">Full Name</th><th class="p-4">Business</th><th class="p-4">Phone</th><th class="p-4">Email</th><th class="p-4">Payment ID</th><th class="p-4">Action</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800/50">
                    <?php foreach ($intakes as $intake): ?>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td class="p-4 whitespace-nowrap text-slate-500 dark:text-slate-400"><?= htmlspecialchars($intake['created_at'] ?? 'N/A') ?></td>
                        <td class="p-4 font-semibold text-slate-900 dark:text-white"><?= htmlspecialchars($intake['full_name'] ?? 'N/A') ?></td>
                        <td class="p-4"><?= htmlspecialchars($intake['business_name'] ?? 'N/A') ?></td>
                        <td class="p-4"><a href="tel:<?= htmlspecialchars($intake['phone'] ?? '') ?>" class="text-blue-600 dark:text-blue-400 hover:underline"><?= htmlspecialchars($intake['phone'] ?? 'N/A') ?></a></td>
                        <td class="p-4"><a href="mailto:<?= htmlspecialchars($intake['email'] ?? '') ?>" class="text-blue-600 dark:text-blue-400 hover:underline tx-word-break"><?= htmlspecialchars($intake['email'] ?? 'N/A') ?></a></td>
                        <td class="p-4 tx-word-break font-mono text-slate-500 dark:text-slate-400"><?= htmlspecialchars($intake['razorpay_payment_id'] ?: 'N/A') ?></td>
                        <td class="p-4"><a href="?page=intake-detail&id=<?= $intake['id'] ?>" class="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-3 py-1.5 rounded-md transition text-[11px] font-semibold border border-slate-300 dark:border-slate-700">View Details</a></td>
                    </tr>
                    <?php endforeach; ?>
                    <?php if (empty($intakes)): ?><tr><td colspan="7" class="p-8 text-center text-slate-400">No intake submissions recorded yet.</td></tr><?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>

    <?php elseif ($page === 'transactions'): ?>
    <!-- ═══ TRANSACTIONS PAGE ═══ -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 bg-slate-50 dark:bg-slate-950">
            <input type="text" id="transactions-search" onkeyup="filterTable('transactions')" placeholder="Search by name, email, payment ID..." class="w-full sm:w-72 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500">
            <a href="?export=transactions" class="bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 transition font-medium flex items-center gap-2 shadow-sm whitespace-nowrap"><span>&#8595;</span> Download CSV</a>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                <thead class="bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 uppercase font-bold border-b border-slate-200 dark:border-slate-800">
                    <tr>
                        <th class="p-4">Date</th><th class="p-4">Customer</th><th class="p-4">Email</th><th class="p-4">Phone</th><th class="p-4">Payment ID</th><th class="p-4">Order ID</th><th class="p-4">Amount</th><th class="p-4">Status</th><th class="p-4">Action</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800/50">
                    <?php foreach ($transactions as $tx): ?>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td class="p-4 whitespace-nowrap text-slate-500 dark:text-slate-400"><?= htmlspecialchars($tx['created_at'] ?? 'N/A') ?></td>
                        <td class="p-4 font-semibold text-slate-900 dark:text-white"><?= htmlspecialchars($tx['full_name'] ?? 'N/A') ?></td>
                        <td class="p-4"><a href="mailto:<?= htmlspecialchars($tx['email'] ?? '') ?>" class="text-blue-600 dark:text-blue-400 hover:underline tx-word-break"><?= htmlspecialchars($tx['email'] ?? 'N/A') ?></a></td>
                        <td class="p-4"><a href="tel:<?= htmlspecialchars($tx['phone'] ?? '') ?>" class="text-blue-600 dark:text-blue-400 hover:underline"><?= htmlspecialchars($tx['phone'] ?? 'N/A') ?></a></td>
                        <td class="p-4 tx-word-break font-mono text-slate-600 dark:text-slate-400"><?= htmlspecialchars($tx['razorpay_payment_id'] ?? 'N/A') ?></td>
                        <td class="p-4 tx-word-break font-mono text-slate-600 dark:text-slate-400"><?= htmlspecialchars($tx['razorpay_order_id'] ?? 'N/A') ?></td>
                        <td class="p-4 font-semibold text-slate-900 dark:text-white"><?= ($tx['amount'] != null) ? '&#8377;'.number_format((float)$tx['amount'],0) : 'N/A' ?></td>
                        <td class="p-4">
                            <?php $st = strtolower(trim($tx['payment_status'] ?? '')); ?>
                            <?php if ($st==='success'||$st==='captured'||$st==='paid'): ?>
                                <span class="bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 px-2.5 py-1 rounded-md text-[11px] font-semibold border border-emerald-200 dark:border-emerald-500/20">Success</span>
                            <?php elseif ($st==='pending'||$st==='created'): ?>
                                <span class="bg-amber-100 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 px-2.5 py-1 rounded-md text-[11px] font-semibold border border-amber-200 dark:border-amber-500/20">Pending</span>
                            <?php else: ?>
                                <span class="bg-rose-100 dark:bg-rose-500/15 text-rose-700 dark:text-rose-400 px-2.5 py-1 rounded-md text-[11px] font-semibold border border-rose-200 dark:border-rose-500/20"><?= htmlspecialchars($tx['payment_status'] ?? 'Unknown') ?></span>
                            <?php endif; ?>
                        </td>
                        <td class="p-4"><a href="?page=intake-detail&id=<?= $tx['id'] ?>" class="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-3 py-1.5 rounded-md transition text-[11px] font-semibold border border-slate-300 dark:border-slate-700">View Details</a></td>
                    </tr>
                    <?php endforeach; ?>
                    <?php if (empty($transactions)): ?><tr><td colspan="9" class="p-8 text-center text-slate-400">No payment transactions recorded yet.</td></tr><?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>

    <?php elseif ($page === 'intake-detail' && $intakeDetail): ?>
    <!-- ═══ INTAKE DETAIL ═══ -->
    <div class="mb-6">
        <a href="?page=intake" class="inline-flex items-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 transition font-medium text-sm shadow-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            Back to Intake Submissions
        </a>
    </div>
    <div class="mb-8">
        <h1 class="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Submission Details</h1>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Reviewing intake for <strong><?= renderValue($intakeDetail['business_name']) ?></strong></p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Section 1: Primary Info & Payment -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
            <div class="bg-slate-50 dark:bg-slate-950/50 p-4 border-b border-slate-200 dark:border-slate-800">
                <h2 class="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-xs">Primary Info & Payment Details</h2>
            </div>
            <div class="p-5 space-y-4">
                <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Full Name</span><div class="text-sm font-medium detail-text"><?= renderValue($intakeDetail['full_name']) ?></div></div>
                <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Email</span><div class="text-sm font-medium detail-text"><?= renderValue($intakeDetail['email']) ?></div></div>
                <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Phone</span><div class="text-sm font-medium detail-text"><?= renderValue($intakeDetail['phone']) ?></div></div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800/50"><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Payment Status</span>
                    <span class="inline-block bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs px-2 py-1 rounded font-semibold border border-emerald-200 dark:border-emerald-500/30"><?= renderValue($intakeDetail['payment_status']) ?></span>
                </div>
                <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Razorpay Payment ID</span><div class="text-sm font-medium detail-text font-mono text-slate-600 dark:text-slate-400"><?= renderValue($intakeDetail['razorpay_payment_id']) ?></div></div>
                <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Submitted At</span><div class="text-sm font-medium detail-text"><?= renderValue($intakeDetail['created_at']) ?></div></div>
            </div>
        </div>

        <!-- Section 2: Branding & Online Presence -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
            <div class="bg-slate-50 dark:bg-slate-950/50 p-4 border-b border-slate-200 dark:border-slate-800">
                <h2 class="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-xs">Branding & Online Presence</h2>
            </div>
            <div class="p-5 space-y-4">
                <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Business Name</span><div class="text-sm font-bold detail-text text-blue-600 dark:text-blue-400"><?= renderValue($intakeDetail['business_name']) ?></div></div>
                <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Business Address</span><div class="text-sm font-medium detail-text"><?= renderValue($intakeDetail['business_address']) ?></div></div>
                <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Domain Details</span><div class="text-sm font-medium detail-text"><?= renderValue($intakeDetail['domain_details']) ?></div></div>
                <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Social Links</span><div class="text-sm font-medium detail-text"><?= renderValue($intakeDetail['social_links']) ?></div></div>
                <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Brand Color</span>
                    <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-md shadow-sm border border-slate-200" style="background-color: <?= htmlspecialchars($intakeDetail['brand_color'] ?? '#000') ?>"></div>
                        <span class="text-sm font-medium uppercase font-mono"><?= renderValue($intakeDetail['brand_color']) ?></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 3: Business Strategy & Content -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden lg:col-span-2">
            <div class="bg-slate-50 dark:bg-slate-950/50 p-4 border-b border-slate-200 dark:border-slate-800">
                <h2 class="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-xs">Business Strategy & Content</h2>
            </div>
            <div class="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-slate-50/50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50">
                    <span class="block text-[10px] uppercase font-bold text-blue-600 dark:text-blue-500 mb-2">About Business</span>
                    <div class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed detail-text"><?= renderValue($intakeDetail['about_business']) ?></div>
                </div>
                <div class="bg-slate-50/50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50">
                    <span class="block text-[10px] uppercase font-bold text-blue-600 dark:text-blue-500 mb-2">Target Offering</span>
                    <div class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed detail-text"><?= renderValue($intakeDetail['target_offering']) ?></div>
                </div>
                <div class="bg-slate-50/50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50">
                    <span class="block text-[10px] uppercase font-bold text-blue-600 dark:text-blue-500 mb-2">Offering Details</span>
                    <div class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed detail-text"><?= renderValue($intakeDetail['offering_details']) ?></div>
                </div>
                <div class="bg-slate-50/50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50">
                    <span class="block text-[10px] uppercase font-bold text-blue-600 dark:text-blue-500 mb-2">USP & Benefits</span>
                    <div class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed detail-text"><?= renderValue($intakeDetail['usp_benefits']) ?></div>
                </div>
                <div class="md:col-span-2 bg-slate-50/50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50">
                    <span class="block text-[10px] uppercase font-bold text-blue-600 dark:text-blue-500 mb-2">Testimonials & Pricing</span>
                    <div class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed detail-text"><?= renderValue($intakeDetail['testimonials_pricing']) ?></div>
                </div>
            </div>
        </div>

        <!-- Section 4: Uploaded Requirements & Media -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden lg:col-span-2">
            <div class="bg-slate-50 dark:bg-slate-950/50 p-4 border-b border-slate-200 dark:border-slate-800">
                <h2 class="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-xs">Uploaded Requirements & Media</h2>
            </div>
            <div class="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-950/10">
                    <span class="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-3">Logo URL</span>
                    <?= parseLinks($intakeDetail['logo_url']) ?>
                </div>
                <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-950/10">
                    <span class="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-3">Requirements Doc</span>
                    <?= parseLinks($intakeDetail['form_requirements_doc_url']) ?>
                </div>
                <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-950/10">
                    <span class="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-3">Extra Docs</span>
                    <?= parseLinks($intakeDetail['extra_docs_url']) ?>
                </div>
                <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-950/10">
                    <span class="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-3">Media Files</span>
                    <?= parseLinks($intakeDetail['media_files_url']) ?>
                </div>
            </div>
        </div>
    </div>

    <?php endif; ?>
    </main>
</div>

<!-- MODAL -->
<div id="details-modal" class="hidden fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950">
            <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Record Details</h3>
            <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 dark:hover:text-white text-xl font-bold">&times;</button>
        </div>
        <div id="modal-content" class="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-3"></div>
        <div class="p-4 border-t border-slate-200 dark:border-slate-800 text-right bg-slate-50 dark:bg-slate-950">
            <button onclick="closeModal()" class="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-5 py-2 rounded-lg text-xs font-semibold transition">Close</button>
        </div>
    </div>
</div>

</body>
</html>
