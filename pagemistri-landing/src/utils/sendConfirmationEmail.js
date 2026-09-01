export const sendConfirmationEmail = async ({ userEmail, userName, paymentId }) => {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Pagemistri <onboarding@resend.dev>", // Replace with your domain once verified (e.g., support@pagemistri.com)
        to: [userEmail],
        subject: "Thank You! Payment Received - Pagemistri",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #2563eb;">Thank You for Your Payment!</h2>
            <p>Hi <strong>${userName || "Valued Customer"}</strong>,</p>
            <p>We have successfully received your payment of <strong>₹5,000</strong> for your website project.</p>
            <p style="background: #f3f4f6; padding: 10px; border-radius: 5px; font-size: 14px;">
              <strong>Payment Reference ID:</strong> ${paymentId}
            </p>
            <p>Our team is reviewing your project requirements and uploaded assets. <strong>We will contact you within 48 hours</strong> to get started on your design.</p>
            <br/>
            <p>Best regards,<br/><strong>Team Pagemistri</strong></p>
          </div>
        `,
      }),
    });

    return await res.json();
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
  }
};
