<?php
// submit-lead.php - Single File API Endpoint for Landing Page Lead Form

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed. Use POST."]);
    exit();
}

require_once __DIR__ . '/db.php';

$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true) ?? $_POST;

// Step 1 Fields
$fullName           = trim($data['full_name'] ?? '');
$businessName       = trim($data['business_name'] ?? '');
$email              = trim($data['email'] ?? '');
$phoneNumber        = trim($data['phone_number'] ?? '');
$businessCategory   = trim($data['business_category'] ?? '');
$whatDoYouOffer     = trim($data['what_do_you_offer'] ?? '');

// Step 2 Fields
$hasWebsite         = trim($data['has_website'] ?? '');
$hasDomain          = trim($data['has_domain'] ?? '');
$reasonsForWebsite  = is_array($data['reasons_for_website'] ?? null) 
                      ? implode(', ', $data['reasons_for_website']) 
                      : trim($data['reasons_for_website'] ?? '');
$existingWebsiteUrl = trim($data['existing_website_url'] ?? '');
$websiteDescription = trim($data['website_description'] ?? '');
$message            = trim($data['message'] ?? '');

if (empty($fullName) || empty($email) || empty($phoneNumber)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Required fields missing (full_name, email, phone_number)."]);
    exit();
}

try {
    $stmt = $pdo->prepare("
        INSERT INTO leads (
            full_name, business_name, email, phone_number, business_category, 
            what_do_you_offer, has_website, has_domain, reasons_for_website, 
            existing_website_url, website_description, message, created_at
        ) VALUES (
            :full_name, :business_name, :email, :phone_number, :business_category, 
            :what_do_you_offer, :has_website, :has_domain, :reasons_for_website, 
            :existing_website_url, :website_description, :message, NOW()
        )
    ");

    $stmt->execute([
        ':full_name'            => $fullName,
        ':business_name'        => $businessName,
        ':email'                => $email,
        ':phone_number'         => $phoneNumber,
        ':business_category'    => $businessCategory,
        ':what_do_you_offer'    => $whatDoYouOffer,
        ':has_website'          => $hasWebsite,
        ':has_domain'           => $hasDomain,
        ':reasons_for_website' => $reasonsForWebsite,
        ':existing_website_url' => $existingWebsiteUrl,
        ':website_description' => $websiteDescription,
        ':message'             => $message
    ]);

    http_response_code(200);
    echo json_encode([
        "status"  => "success",
        "message" => "Lead form submitted successfully!"
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "status"  => "error",
        "message" => "Database insertion failed: " . $e->getMessage()
    ]);
}
?>