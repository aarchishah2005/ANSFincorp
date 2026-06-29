import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import nodemailer from "nodemailer";

export default async function handler(req, res) {
    // Allow only POST requests
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method Not Allowed",
        });
    }

    const { name, email, phone, subject, message } = req.body;

    // Basic Validation
    if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required.",
        });
    }

    try {
        // Gmail Transporter
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log(
            "EMAIL_PASS:",
            process.env.EMAIL_PASS ? "Loaded" : "Missing"
        );
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email to You
        await transporter.sendMail({
            from: `"ANS Fincorp Website" <${process.env.EMAIL_USER}>`,
            to: [
                "ansfincorp@gmail.com",
                "aarchi.shah2005@gmail.com",
            ],
            replyTo: email,
            subject: `New Contact Form - ${subject}`,
            html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2 style="color:#0B5ED7;">New Contact Form Submission</h2>

          <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;width:100%;">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td><strong>Subject</strong></td>
              <td>${subject}</td>
            </tr>

            <tr>
              <td><strong>Message</strong></td>
              <td>${message}</td>
            </tr>
          </table>

          <br>

          <p>
            This enquiry was submitted from the
            <strong>ANS Fincorp Website Contact Form</strong>.
          </p>
        </div>
      `,
        });

        // Auto Reply to Customer
        await transporter.sendMail({
            from: `"ANS Fincorp" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Thank you for contacting ANS Fincorp",
            html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>Thank You, ${name}! 👋</h2>

          <p>
            We have received your enquiry successfully.
          </p>

          <p>
            Our team will review your request and contact you as soon as possible.
          </p>

          <br>

          <p>
            Regards,<br>
            <strong>ANS Fincorp</strong><br>
            Surat, Gujarat
          </p>
        </div>
      `,
        });

        return res.status(200).json({
            success: true,
            message: "Email sent successfully.",
        });

    } catch (error) {
        console.error("========== CONTACT API ERROR ==========");
        console.error(error);
        console.error("Message:", error.message);
        console.error("Stack:", error.stack);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}