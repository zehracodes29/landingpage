# Pagemistri — Landing Page & Checkout Engine

![Next.js](https://img.shields.io/badge/Next.js-14.x-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-cPanel_Backend-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-Payment_Gateway-0C2340?style=for-the-badge&logo=razorpay&logoColor=white)

Pagemistri is a high-converting landing page and client onboarding engine. It features an interactive **5-step checkout questionnaire**, automated **Razorpay payment processing**, client **email confirmations**, and a dedicated **cPanel administration dashboard** for viewing intake submissions.

---

## 📌 Key Features

- **High-Converting Landing Pages:** Optimized conversion-driven layout built with Next.js and Tailwind CSS.
- **Interactive 5-Step Checkout:** Onboarding form collecting brand identity, target audience, copywriting assets, and project files.
- **Razorpay Integration:** Seamless ₹5,000 payment processing with dynamic payment ID verification.
- **Automated Email Notifications:** Branded HTML payment receipts sent automatically upon checkout completion.
- **Admin Dashboard (`/admin.php`):** Centralized cPanel panel to view, inspect, and export submission entries from `intake_submissions`.
- **Static Export Support:** Configured for seamless deployment on traditional cPanel web hosting.

---

## 🛠 Tech Stack & Architecture

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | Next.js (App Router), React, Tailwind CSS | UI components, form state management, static build output |
| **Backend** | PHP (cPanel hosted) | `submit.php` handler for data insertion and email firing |
| **Database** | MySQL / phpMyAdmin | Stores records in the `intake_submissions` table |
| **Payments** | Razorpay Checkout SDK | Payment gateway integration |
| **Storage** | Cloudinary / External Storage | Secure hosting for user-uploaded logo and media assets |

---

## 📁 Repository Structure

```text
├── public/                  # Static assets & email HTML templates (email-preview.html)
├── src/
│   ├── app/                 # Next.js App Router (/checkout, /thank-you, etc.)
│   ├── components/          # Reusable UI components & 5-step form sections
│   └── utils/               # API utilities & email trigger scripts
├── cpanel-backend/          # Backend PHP files hosted on cPanel
│   ├── submit.php           # Onboarding form endpoint & DB handler
│   └── admin.php            # Admin management dashboard & submission viewer
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

* **Node.js**: `v18.0.0` or higher
* **npm** or **yarn**

### Local Setup

1. **Clone the Repository**
```bash
git clone https://github.com/socialmistry/pagemistri.com.git
cd pagemistri.com
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment Variables**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_here
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

4. **Run Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Build & cPanel Deployment

To generate static output files for cPanel hosting:

1. **Run Production Build**
```bash
npm run build
```

2. **Deploy Build Output**
Upload the contents generated inside the `/out` directory to your cPanel `public_html` root folder alongside `submit.php` and `admin.php`.

---

## 🗄 Database Management

Submitted intake data is managed through the `intake_submissions` table in MySQL.

Access `/admin.php` on the production server to:

* Review user contact details, payment IDs, and timestamps.
* Inspect full questionnaire responses (brand colors, target audience, business details).
* Open media assets and requirement document links directly.
* Export submission data to CSV.

---


