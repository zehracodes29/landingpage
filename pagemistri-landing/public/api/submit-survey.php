<?php
// submit-survey.php - API Endpoint for Business Visibility Survey

// 1. Set CORS and Header Options
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request from browser
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Ensure the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed. Only POST requests are accepted."]);
    exit();
}

// 2. Database Connection Credentials
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
    echo json_encode(["status" => "error", "message" => "Database connection failed."]);
    exit();
}

// 3. Parse Incoming Request JSON
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid or empty JSON body."]);
    exit();
}

// Helper function to handle string inputs and convert multi-select arrays into comma-separated text
function formatField($data, $key) {
    if (!isset($data[$key]) || $data[$key] === null) return null;
    if (is_array($data[$key])) return implode(', ', array_filter($data[$key]));
    return trim((string)$data[$key]);
}

// 4. Extract Form Values (Matching React Form State Keys)
$businessName         = formatField($data, 'businessName');
$businessType         = formatField($data, 'businessType');
$city                 = formatField($data, 'city');
$yearsInBusiness      = formatField($data, 'yearsInBusiness');
$employees            = formatField($data, 'employees');
$monthlyEnquiries     = formatField($data, 'monthlyEnquiries');

$activePlatforms      = formatField($data, 'activePlatforms');
$customerSource       = formatField($data, 'customerSource');
$leadImportance       = formatField($data, 'leadImportance');
$paidAds              = formatField($data, 'paidAds');
$hasWebsite           = formatField($data, 'hasWebsite');
$websiteUse           = formatField($data, 'websiteUse');
$websiteSatisfaction  = formatField($data, 'websiteSatisfaction');
$noWebsiteReason      = formatField($data, 'noWebsiteReason');
$enquiryProcess       = formatField($data, 'enquiryProcess');
$responseSpeed        = formatField($data, 'responseSpeed');

$biggestChallenge     = formatField($data, 'biggestChallenge');
$improvements         = formatField($data, 'improvements');
$onlinePresenceRating = formatField($data, 'onlinePresenceRating');

$fullName             = formatField($data, 'fullName');
$email                = formatField($data, 'email');
$phoneNumber          = formatField($data, 'phoneNumber');
$additionalFeedback   = formatField($data, 'additionalFeedback');

// Basic Validation
if (empty($fullName) || empty($email) || empty($phoneNumber) || empty($businessName)) {
    http_response_code(422);
    echo json_encode(["status" => "error", "message" => "Required fields are missing."]);
    exit();
}

// 5. Execute Prepared Statement
$sql = "INSERT INTO survey_responses (
    business_name, business_type, city, years_in_business, employees, monthly_enquiries,
    active_platforms, customer_source, lead_importance, paid_ads, has_website, website_use,
    website_satisfaction, no_website_reason, enquiry_process, response_speed,
    biggest_challenge, improvements, online_presence_rating,
    full_name, email, phone_number, additional_feedback
) VALUES (
    :businessName, :businessType, :city, :yearsInBusiness, :employees, :monthlyEnquiries,
    :activePlatforms, :customerSource, :leadImportance, :paidAds, :hasWebsite, :websiteUse,
    :websiteSatisfaction, :noWebsiteReason, :enquiryProcess, :responseSpeed,
    :biggestChallenge, :improvements, :onlinePresenceRating,
    :fullName, :email, :phoneNumber, :additionalFeedback
)";

try {
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':businessName'         => $businessName,
        ':businessType'         => $businessType,
        ':city'                 => $city,
        ':yearsInBusiness'      => $yearsInBusiness,
        ':employees'            => $employees,
        ':monthlyEnquiries'     => $monthlyEnquiries,
        ':activePlatforms'      => $activePlatforms,
        ':customerSource'       => $customerSource,
        ':leadImportance'       => $leadImportance,
        ':paidAds'              => $paidAds,
        ':hasWebsite'           => $hasWebsite,
        ':websiteUse'           => $websiteUse,
        ':websiteSatisfaction'  => $websiteSatisfaction,
        ':noWebsiteReason'      => $noWebsiteReason,
        ':enquiryProcess'       => $enquiryProcess,
        ':responseSpeed'        => $responseSpeed,
        ':biggestChallenge'     => $biggestChallenge,
        ':improvements'         => $improvements,
        ':onlinePresenceRating' => $onlinePresenceRating,
        ':fullName'             => $fullName,
        ':email'                => $email,
        ':phoneNumber'          => $phoneNumber,
        ':additionalFeedback'   => $additionalFeedback
    ]);

    http_response_code(201);
    echo json_encode(["status" => "success", "message" => "Survey response submitted successfully."]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to store submission."]);
}