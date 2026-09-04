<?php
session_start();

// Check authentication
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: admin.php");
    exit();
}

if (!isset($_GET['id'])) {
    die("Submission ID is missing.");
}

$id = $_GET['id'];

// Database Connection
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
    
    $stmt = $pdo->prepare("SELECT * FROM intake_submissions WHERE id = ?");
    $stmt->execute([$id]);
    $submission = $stmt->fetch();
    
    if (!$submission) {
        die("Submission not found.");
    }
    
} catch (PDOException $e) {
    die("Database Connection Error: " . $e->getMessage());
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
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intake Submission Details</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = { darkMode: 'class' }
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
        }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        .detail-text {
            word-break: break-word; 
            overflow-wrap: anywhere; 
            white-space: pre-wrap;
        }
    </style>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen p-4 md:p-8 transition-colors">
    
    <div class="max-w-5xl mx-auto">
        <div class="mb-6 flex justify-between items-center">
            <a href="admin.php" class="inline-flex items-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 transition font-medium text-sm shadow-sm">
                <span>&larr;</span> Back to Intake Submissions
            </a>
        </div>

        <div class="mb-8">
            <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Submission Details</h1>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Reviewing intake for <strong><?= renderValue($submission['business_name']) ?></strong></p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <!-- Section 1: Primary Info & Payment Details -->
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
                <div class="bg-slate-50 dark:bg-slate-950/50 p-4 border-b border-slate-200 dark:border-slate-800">
                    <h2 class="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-xs">1. Primary Info & Payment Details</h2>
                </div>
                <div class="p-5 space-y-4">
                    <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Full Name</span><div class="text-sm font-medium detail-text"><?= renderValue($submission['full_name']) ?></div></div>
                    <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Email</span><div class="text-sm font-medium detail-text"><?= renderValue($submission['email']) ?></div></div>
                    <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Phone</span><div class="text-sm font-medium detail-text"><?= renderValue($submission['phone']) ?></div></div>
                    <div class="pt-2 border-t border-slate-100 dark:border-slate-800/50"><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Payment Status</span>
                        <span class="inline-block bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs px-2 py-1 rounded font-semibold border border-emerald-200 dark:border-emerald-500/30">
                            <?= renderValue($submission['payment_status']) ?>
                        </span>
                    </div>
                    <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Razorpay Payment ID</span><div class="text-sm font-medium detail-text font-mono text-slate-600 dark:text-slate-400"><?= renderValue($submission['razorpay_payment_id']) ?></div></div>
                    <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Submitted At</span><div class="text-sm font-medium detail-text"><?= renderValue($submission['created_at']) ?></div></div>
                </div>
            </div>

            <!-- Section 2: Branding & Online Presence -->
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
                <div class="bg-slate-50 dark:bg-slate-950/50 p-4 border-b border-slate-200 dark:border-slate-800">
                    <h2 class="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-xs">2. Branding & Online Presence</h2>
                </div>
                <div class="p-5 space-y-4">
                    <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Business Name</span><div class="text-sm font-bold detail-text text-blue-600 dark:text-blue-400"><?= renderValue($submission['business_name']) ?></div></div>
                    <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Business Address</span><div class="text-sm font-medium detail-text"><?= renderValue($submission['business_address']) ?></div></div>
                    <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Domain Details</span><div class="text-sm font-medium detail-text"><?= renderValue($submission['domain_details']) ?></div></div>
                    <div><span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Social Links</span><div class="text-sm font-medium detail-text"><?= renderValue($submission['social_links']) ?></div></div>
                    <div>
                        <span class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Brand Color</span>
                        <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-md shadow-sm border border-slate-200" style="background-color: <?= htmlspecialchars($submission['brand_color'] ?? '#000') ?>"></div>
                            <span class="text-sm font-medium uppercase font-mono"><?= renderValue($submission['brand_color']) ?></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section 3: Business Strategy & Content -->
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden lg:col-span-2">
                <div class="bg-slate-50 dark:bg-slate-950/50 p-4 border-b border-slate-200 dark:border-slate-800">
                    <h2 class="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-xs">3. Business Strategy & Content</h2>
                </div>
                <div class="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-slate-50/50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50">
                        <span class="block text-[10px] uppercase font-bold text-blue-600 dark:text-blue-500 mb-2">About Business</span>
                        <div class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed detail-text"><?= renderValue($submission['about_business']) ?></div>
                    </div>
                    <div class="bg-slate-50/50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50">
                        <span class="block text-[10px] uppercase font-bold text-blue-600 dark:text-blue-500 mb-2">Target Offering</span>
                        <div class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed detail-text"><?= renderValue($submission['target_offering']) ?></div>
                    </div>
                    <div class="bg-slate-50/50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50">
                        <span class="block text-[10px] uppercase font-bold text-blue-600 dark:text-blue-500 mb-2">Offering Details</span>
                        <div class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed detail-text"><?= renderValue($submission['offering_details']) ?></div>
                    </div>
                    <div class="bg-slate-50/50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50">
                        <span class="block text-[10px] uppercase font-bold text-blue-600 dark:text-blue-500 mb-2">USP & Benefits</span>
                        <div class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed detail-text"><?= renderValue($submission['usp_benefits']) ?></div>
                    </div>
                    <div class="md:col-span-2 bg-slate-50/50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50">
                        <span class="block text-[10px] uppercase font-bold text-blue-600 dark:text-blue-500 mb-2">Testimonials & Pricing</span>
                        <div class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed detail-text"><?= renderValue($submission['testimonials_pricing']) ?></div>
                    </div>
                </div>
            </div>

            <!-- Section 4: Uploaded Requirements & Media -->
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden lg:col-span-2">
                <div class="bg-slate-50 dark:bg-slate-950/50 p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                    <h2 class="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-xs">4. Uploaded Requirements & Media</h2>
                    <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                </div>
                <div class="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-950/10">
                        <span class="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-3">Logo URL</span>
                        <?= parseLinks($submission['logo_url']) ?>
                    </div>
                    <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-950/10">
                        <span class="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-3">Requirements Doc</span>
                        <?= parseLinks($submission['form_requirements_doc_url']) ?>
                    </div>
                    <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-950/10">
                        <span class="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-3">Extra Docs</span>
                        <?= parseLinks($submission['extra_docs_url']) ?>
                    </div>
                    <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-950/10">
                        <span class="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-3">Media Files</span>
                        <?= parseLinks($submission['media_files_url']) ?>
                    </div>
                </div>
            </div>

        </div>
    </div>
</body>
</html>
