import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, workEmail, company, phone, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !workEmail) {
      return NextResponse.json(
        { error: "First name, last name, and work email are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }


    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER || "";
    const smtpPass = process.env.SMTP_PASS || "";
    const fromEmail = process.env.SMTP_FROM || smtpUser;
    const toEmail = process.env.DEMO_REQUEST_TO || smtpUser;

    // If SMTP is not configured, log to console and return success
    // This allows the form to work in development without SMTP setup
    if (!smtpUser || !smtpPass) {
      console.log("──────────────────────────────────────────");
      console.log("📧 DEMO REQUEST RECEIVED (SMTP not configured)");
      console.log("──────────────────────────────────────────");
      console.log(`Name: ${firstName} ${lastName}`);
      console.log(`Email: ${workEmail}`);
      console.log(`Company: ${company || "N/A"}`);
      console.log(`Phone: ${phone || "N/A"}`);
      console.log(`Message: ${message || "N/A"}`);
      console.log("──────────────────────────────────────────");
      console.log("⚠️  To enable email sending, set SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local");
      console.log("──────────────────────────────────────────");

      return NextResponse.json({
        success: true,
        message: "Demo request received successfully! (Email not sent - SMTP not configured)",
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // HTML email to the Leucine team
    const adminEmailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 32px;">
        <div style="background: white; border-radius: 16px; padding: 32px; border: 1px solid #e5e7eb;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="display: inline-block; background: #111827; color: white; font-weight: 800; font-size: 14px; padding: 8px 16px; border-radius: 10px;">L</div>
            <h2 style="margin: 12px 0 4px; color: #111827; font-size: 20px; font-weight: 700;">New Demo Request</h2>
            <p style="color: #6b7280; font-size: 13px; margin: 0;">A new demo request has been submitted on the Leucine website</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 20px 0;" />
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px; font-weight: 600;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Work Email</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px;"><a href="mailto:${workEmail}" style="color: #2563eb; text-decoration: none;">${workEmail}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Company</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px; font-weight: 600;">${company}</td>
            </tr>` : ""}
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px;">${phone}</td>
            </tr>` : ""}
            ${message ? `
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px;">${message}</td>
            </tr>` : ""}
          </table>
          
          <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 20px 0;" />
          
          <div style="text-align: center;">
            <a href="mailto:${workEmail}" style="display: inline-block; background: #111827; color: white; padding: 10px 24px; border-radius: 10px; text-decoration: none; font-size: 13px; font-weight: 600;">
              Reply to ${firstName}
            </a>
          </div>
        </div>
        <p style="text-align: center; color: #9ca3af; font-size: 11px; margin-top: 16px;">
          This email was sent from the Leucine website demo request form.
        </p>
      </div>
    `;

    // Confirmation email to the requester
    const confirmationEmailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 32px;">
        <div style="background: white; border-radius: 16px; padding: 32px; border: 1px solid #e5e7eb;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="display: inline-block; background: #111827; color: white; font-weight: 800; font-size: 14px; padding: 8px 16px; border-radius: 10px;">L</div>
            <h2 style="margin: 12px 0 4px; color: #111827; font-size: 20px; font-weight: 700;">Thank you, ${firstName}!</h2>
            <p style="color: #6b7280; font-size: 13px; margin: 0;">We've received your demo request</p>
          </div>
          
          <p style="color: #374151; font-size: 14px; line-height: 1.7;">
            Thank you for your interest in Leucine. One of our product experts will reach out to you within <strong>24 hours</strong> to schedule a personalized 30-minute demo.
          </p>
          
          <p style="color: #374151; font-size: 14px; line-height: 1.7;">
            In the meantime, feel free to explore our <a href="https://www.leucine.io" style="color: #2563eb; text-decoration: none;">website</a> for more information about our AI-powered pharma solutions.
          </p>
          
          <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 20px 0;" />
          
          <p style="color: #9ca3af; font-size: 12px; text-align: center;">
            Leucine | AI for Pharma Manufacturing
          </p>
        </div>
      </div>
    `;

    // Send admin notification email
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `New Demo Request from ${firstName} ${lastName}${company ? ` (${company})` : ""}`,
      html: adminEmailHtml,
    });

    // Send confirmation email to requester
    await transporter.sendMail({
      from: fromEmail,
      to: workEmail,
      subject: "Your Leucine Demo Request — Confirmation",
      html: confirmationEmailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Demo request submitted successfully! Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Error processing demo request:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again later." },
      { status: 500 }
    );
  }
}
