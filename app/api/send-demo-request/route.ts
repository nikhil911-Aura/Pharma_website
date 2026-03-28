import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, workEmail, phone, message } = body;

    if (!fullName || !workEmail) {
      return NextResponse.json(
        { error: "Full name and work email are required." },
        { status: 400 }
      );
    }

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
    const toEmail   = process.env.ADMIN_EMAIL || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    // ─── Responsive <style> block injected into <head> ───────────────────────
    // Media queries work in Gmail (Android), Apple Mail, Outlook iOS, Outlook Mac.
    // For Outlook Windows (MSO) we rely on table-based fluid layout as the fallback.
    const responsiveStyles = `
      <style type="text/css">
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }

        /* ── Mobile: max-width 600px ── */
        @media only screen and (max-width: 600px) {
          .outer-td    { padding: 16px 8px !important; }
          .card        { width: 100% !important; border-radius: 14px !important; }
          .e-head td   { padding: 20px 18px 18px !important; }
          .e-head h1   { font-size: 18px !important; }
          .e-body      { padding: 18px 18px !important; }
          .e-cta       { padding: 14px 18px !important; }
          .e-foot td   { padding: 12px 18px !important; }

          /* Hide label column on mobile — value goes full width */
          .dl          { display: none !important; width: 0 !important; max-width: 0 !important; overflow: hidden !important; padding: 0 !important; }
          .dv          { width: 100% !important; display: block !important; }

          /* Stack CTA: hide hint, button goes full width */
          .cta-hint    { display: none !important; }
          .cta-btn-td  { display: block !important; width: 100% !important; text-align: center !important; padding-top: 0 !important; }
          .cta-btn     { width: 90% !important; text-align: center !important; display: block !important; }

          /* Info blocks: hide icon on very small screens */
          .info-icon   { display: none !important; width: 0 !important; padding: 0 !important; }
          .info-text   { padding-left: 16px !important; }

          /* Force long emails to break */
          .break-word  { word-break: break-all !important; }
        }
      </style>
    `;

    // ─── Shared header (dark bar with logo + title) ───────────────────────────
    const emailHeader = (title: string, subtitle: string) => `
      <tr>
        <td class="e-head" style="background:#0a0b0f;padding:28px 28px 24px;border-radius:18px 18px 0 0;">

          <!-- Logo + brand -->
          <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:18px;">
            <tr>
              <td style="vertical-align:middle;">
                <div style="
                  display:inline-block;width:34px;height:34px;line-height:34px;
                  text-align:center;
                  background:rgba(255,255,255,0.07);
                  border:1px solid rgba(255,255,255,0.12);
                  border-radius:9px;
                  font-size:11px;font-weight:800;color:#ffffff;
                  font-family:sans-serif;letter-spacing:-0.5px;">SX</div>
              </td>
              <td style="padding-left:10px;vertical-align:middle;">
                <span style="font-size:13px;font-weight:700;color:#ffffff;display:block;font-family:sans-serif;">SYNCOMX</span>
                <span style="font-size:11px;color:#8891aa;display:block;margin-top:2px;font-family:sans-serif;">Next-Gen Pharma Manufacturing</span>
              </td>
            </tr>
          </table>

          <h1 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;line-height:1.25;font-family:sans-serif;">${title}</h1>
          <p  style="margin:0;font-size:12px;color:#8891aa;line-height:1.5;font-family:sans-serif;">${subtitle}</p>

        </td>
      </tr>`;

    // ─── Shared footer ────────────────────────────────────────────────────────
    const emailFooter = () => `
      <tr>
        <td class="e-foot" style="background:#f9fafb;border-top:1px solid #f0f1f5;padding:14px 28px;border-radius:0 0 18px 18px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="font-size:11px;font-weight:700;color:#0d0f1a;font-family:sans-serif;">SYNCOMX</td>
              <td align="right">
                <a href="#" style="font-size:11px;color:#9ca3af;text-decoration:none;font-family:sans-serif;">Unsubscribe</a>
                <span style="color:#e5e7eb;margin:0 6px;">|</span>
                <a href="#" style="font-size:11px;color:#9ca3af;text-decoration:none;font-family:sans-serif;">Privacy</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>`;

    // ─── Outer wrapper (shared) ───────────────────────────────────────────────
    const wrapEmail = (inner: string) => `
      <!DOCTYPE html>
      <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="x-apple-disable-message-reformatting"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>SYNCOMX</title>
        <!--[if mso]>
        <noscript><xml><o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings></xml></noscript>
        <![endif]-->
        ${responsiveStyles}
      </head>
      <body style="margin:0;padding:0;background:#f0f2f7;-webkit-font-smoothing:antialiased;">

        <!-- Full-width bg -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f2f7;">
          <tr>
            <td class="outer-td" align="center" style="padding:28px 16px;">

              <!-- Card: 600px on desktop, 100% on mobile -->
              <table class="card" cellpadding="0" cellspacing="0" border="0"
                     style="width:600px;max-width:100%;background:#ffffff;border-radius:18px;border:1px solid #eaecf2;border-collapse:separate;">
                ${inner}
              </table>

            </td>
          </tr>
        </table>

      </body>
      </html>`;

    // ─────────────────────────────────────────────────────────────────────────
    // EMAIL 1 — Admin / Team Notification
    // ─────────────────────────────────────────────────────────────────────────
    const adminEmailHtml = wrapEmail(`

      ${emailHeader("New Demo Request", "Submitted via syncomx.com &middot; Needs follow-up within 24h")}

      <!-- Body -->
      <tr>
        <td class="e-body" style="padding:24px 28px;">

          <!-- Status pill -->
          <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
            <tr>
              <td style="background:#fff7ed;border:1px solid #fed7aa;color:#c2410c;font-size:11px;font-weight:600;padding:4px 11px 4px 8px;border-radius:20px;font-family:sans-serif;">
                <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#f97316;vertical-align:middle;margin-right:5px;"></span>
                New &middot; Awaiting response
              </td>
            </tr>
          </table>

          <!-- Data table -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0"
                 style="border-collapse:collapse;border:1px solid #eaecf2;border-radius:12px;overflow:hidden;">

            <tr style="border-bottom:1px solid #f3f4f6;">
              <td class="dl" width="110"
                  style="padding:12px 14px;background:#f8f9fc;border-right:1px solid #f0f1f5;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.07em;vertical-align:top;white-space:nowrap;font-family:sans-serif;">
                Name
              </td>
              <td class="dv" style="padding:12px 14px;font-size:13px;font-weight:700;color:#0d0f1a;font-family:sans-serif;vertical-align:top;">
                ${fullName}
              </td>
            </tr>

            <tr style="border-bottom:1px solid #f3f4f6;">
              <td class="dl" width="110"
                  style="padding:12px 14px;background:#f8f9fc;border-right:1px solid #f0f1f5;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.07em;vertical-align:top;white-space:nowrap;font-family:sans-serif;">
                Email
              </td>
              <td class="dv break-word" style="padding:12px 14px;font-size:13px;font-weight:500;color:#0d0f1a;font-family:sans-serif;vertical-align:top;word-break:break-word;">
                <a href="mailto:${workEmail}" style="color:#3b82f6;text-decoration:none;">${workEmail}</a>
              </td>
            </tr>

            ${phone ? `
            <tr style="border-bottom:1px solid #f3f4f6;">
              <td class="dl" width="110"
                  style="padding:12px 14px;background:#f8f9fc;border-right:1px solid #f0f1f5;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.07em;vertical-align:top;white-space:nowrap;font-family:sans-serif;">
                Phone
              </td>
              <td class="dv" style="padding:12px 14px;font-size:13px;font-weight:500;color:#0d0f1a;font-family:sans-serif;vertical-align:top;">
                ${phone}
              </td>
            </tr>` : ""}

            ${message ? `
            <tr>
              <td class="dl" width="110"
                  style="padding:12px 14px;background:#f8f9fc;border-right:1px solid #f0f1f5;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.07em;vertical-align:top;white-space:nowrap;font-family:sans-serif;">
                Message
              </td>
              <td class="dv" style="padding:12px 14px;font-size:13px;font-weight:400;color:#374155;font-family:sans-serif;vertical-align:top;line-height:1.6;">
                ${message}
              </td>
            </tr>` : ""}

          </table>
        </td>
      </tr>

      <!-- CTA row -->
      <tr>
        <td class="e-cta" style="padding:16px 28px;border-top:1px solid #f3f4f6;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td class="cta-hint" style="font-size:11.5px;color:#9ca3af;line-height:1.5;font-family:sans-serif;">
                Respond within <strong style="color:#374155;">24 hours</strong> for best conversion
              </td>
              <td class="cta-btn-td" align="right" style="white-space:nowrap;">
                <a href="mailto:${workEmail}" class="cta-btn"
                   style="display:inline-block;background:#0a0b0f;color:#ffffff;padding:10px 20px;border-radius:10px;text-decoration:none;font-size:12.5px;font-weight:700;font-family:sans-serif;">
                  Reply to ${fullName} &rarr;
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      ${emailFooter()}
    `);

    // ─────────────────────────────────────────────────────────────────────────
    // EMAIL 2 — Confirmation to Requester
    // ─────────────────────────────────────────────────────────────────────────
    const confirmationEmailHtml = wrapEmail(`

      ${emailHeader(`Thank you, ${fullName.split(" ")[0]}!`, "We&apos;ve received your demo request")}

      <!-- Body -->
      <tr>
        <td class="e-body" style="padding:24px 28px;">

          <!-- Status pill -->
          <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
            <tr>
              <td style="background:#f0fdf4;border:1px solid #bbf7d0;color:#15803d;font-size:11px;font-weight:600;padding:4px 11px 4px 8px;border-radius:20px;font-family:sans-serif;">
                <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#22c55e;vertical-align:middle;margin-right:5px;"></span>
                Request confirmed
              </td>
            </tr>
          </table>

          <!-- Intro -->
          <p style="font-size:13.5px;color:#374155;line-height:1.75;margin:0 0 20px;font-family:sans-serif;">
            Thank you for your interest in SYNCOMX. One of our product experts will reach out to
            <strong style="color:#0d0f1a;">${workEmail}</strong> within
            <strong style="color:#0d0f1a;">24 hours</strong> to schedule a personalized 30-minute demo.
          </p>

          <!-- Info block 1 -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0"
                 style="background:#f8f9fc;border:1px solid #eaecf4;border-radius:12px;border-collapse:separate;margin-bottom:12px;">
            <tr>
              <td class="info-icon" width="66" style="padding:16px 0 16px 16px;vertical-align:top;">
                <div style="width:38px;height:38px;line-height:38px;text-align:center;background:#0a0b0f;border-radius:10px;font-size:16px;">
                  🕐
                </div>
              </td>
              <td class="info-text" style="padding:16px;vertical-align:top;font-family:sans-serif;">
                <strong style="display:block;font-size:13px;font-weight:700;color:#0d0f1a;margin-bottom:4px;">Response within 24 hours</strong>
                <span style="font-size:12px;color:#6b7280;line-height:1.6;">Our team works Mon&ndash;Fri. Weekend submissions get a reply first thing Monday morning.</span>
              </td>
            </tr>
          </table>

          <!-- Info block 2 -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0"
                 style="background:#f8f9fc;border:1px solid #eaecf4;border-radius:12px;border-collapse:separate;margin-bottom:20px;">
            <tr>
              <td class="info-icon" width="66" style="padding:16px 0 16px 16px;vertical-align:top;">
                <div style="width:38px;height:38px;line-height:38px;text-align:center;background:#0a0b0f;border-radius:10px;font-size:16px;">
                  📅
                </div>
              </td>
              <td class="info-text" style="padding:16px;vertical-align:top;font-family:sans-serif;">
                <strong style="display:block;font-size:13px;font-weight:700;color:#0d0f1a;margin-bottom:4px;">30-minute personalized demo</strong>
                <span style="font-size:12px;color:#6b7280;line-height:1.6;">In the meantime, feel free to explore our website for more information about our pharma solutions.</span>
              </td>
            </tr>
          </table>

          <!-- Sign-off -->
          <p style="font-size:12.5px;color:#6b7280;line-height:1.7;margin:0;font-family:sans-serif;">
            Questions before then? Reply to this email or reach us at
            <a href="mailto:hello@syncomx.com" style="color:#3b82f6;text-decoration:none;">hello@syncomx.com</a>.
          </p>

        </td>
      </tr>

      <!-- CTA row -->
      <tr>
        <td class="e-cta" style="padding:16px 28px;border-top:1px solid #f3f4f6;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td class="cta-hint" style="font-size:11.5px;color:#9ca3af;line-height:1.5;font-family:sans-serif;">
                Learn more while you wait
              </td>
              <td class="cta-btn-td" align="right" style="white-space:nowrap;">
                <a href="https://syncomx.com" class="cta-btn"
                   style="display:inline-block;background:#0a0b0f;color:#ffffff;padding:10px 20px;border-radius:10px;text-decoration:none;font-size:12.5px;font-weight:700;font-family:sans-serif;">
                  Explore SYNCOMX &rarr;
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      ${emailFooter()}
    `);

    // Send admin notification
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `New Demo Request from ${fullName}`,
      html: adminEmailHtml,
    });

    // Send confirmation to requester
    await transporter.sendMail({
      from: fromEmail,
      to: workEmail,
      subject: "Your SYNCOMX Demo Request — Confirmation",
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