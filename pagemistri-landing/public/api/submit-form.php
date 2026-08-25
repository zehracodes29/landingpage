<?php
// Set headers for CORS & JSON output
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database Credentials
$servername = "localhost";
$username   = "iqwdcffu_pagemistri_user";
$password   = "xFJd?#6lwY4vfi?W"; 
$dbname     = "iqwdcffu_pmindb";

// Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check Connection
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]);
    exit();
}

// Read raw JSON input from Next.js frontend
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Invalid JSON payload."]);
    exit();
}

// Prepare SQL Statement
$stmt = $conn->prepare("INSERT INTO intake_submissions (
    full_name, business_name, phone, email, business_address, domain_details,
    social_links, logo_url, brand_color, about_business, target_offering,
    offering_details, usp_benefits, testimonials_pricing, form_requirements_doc_url,
    extra_docs_url, media_files_url, payment_gateway_requested, razorpay_order_id,
    razorpay_payment_id, payment_status
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$full_name = $data['full_name'] ?? '';
$business_name = $data['business_name'] ?? '';
$phone = $data['phone'] ?? '';
$email = $data['email'] ?? '';
$business_address = $data['business_address'] ?? '';
$domain_details = $data['domain_details'] ?? '';
$social_links = $data['social_links'] ?? '';
$logo_url = $data['logo_url'] ?? '';
$brand_color = $data['brand_color'] ?? '';
$about_business = $data['about_business'] ?? '';
$target_offering = $data['target_offering'] ?? '';
$offering_details = $data['offering_details'] ?? '';
$usp_benefits = $data['usp_benefits'] ?? '';
$testimonials_pricing = $data['testimonials_pricing'] ?? '';
$form_requirements_doc_url = $data['form_requirements_doc_url'] ?? '';
$extra_docs_url = $data['extra_docs_url'] ?? '';
$media_files_url = $data['media_files_url'] ?? '';
$payment_gateway_requested = $data['payment_gateway_requested'] ?? 'No';
$razorpay_order_id = $data['razorpay_order_id'] ?? '';
$razorpay_payment_id = $data['razorpay_payment_id'] ?? '';
$payment_status = $data['payment_status'] ?? 'Completed';

$stmt->bind_param(
    "sssssssssssssssssssss",
    $full_name, $business_name, $phone, $email, $business_address, $domain_details,
    $social_links, $logo_url, $brand_color, $about_business, $target_offering,
    $offering_details, $usp_benefits, $testimonials_pricing, $form_requirements_doc_url,
    $extra_docs_url, $media_files_url, $payment_gateway_requested, $razorpay_order_id,
    $razorpay_payment_id, $payment_status
);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Data saved successfully!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Execute failed: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>