<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

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
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true) ?? $_POST;

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid payload"]);
    exit();
}

$fields = [
    'full_name', 'business_name', 'phone', 'email', 'business_address', 'domain_details',
    'social_links', 'logo_url', 'brand_color', 'about_business', 'target_offering',
    'offering_details', 'usp_benefits', 'testimonials_pricing', 'form_requirements_doc_url',
    'extra_docs_url', 'media_files_url', 'payment_gateway_requested', 'razorpay_order_id',
    'razorpay_payment_id', 'payment_status'
];

$insertFields = implode(", ", $fields);
$placeholders = implode(", ", array_map(function($f) { return ":$f"; }, $fields));

$sql = "INSERT INTO intake_submissions ($insertFields) VALUES ($placeholders)";

try {
    $stmt = $pdo->prepare($sql);
    
    $params = [];
    foreach ($fields as $field) {
        $params[":$field"] = $data[$field] ?? null;
    }
    
    $stmt->execute($params);
    
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Data saved successfully"]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Insertion failed: " . $e->getMessage()]);
}
?>
