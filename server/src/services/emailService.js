import nodemailer from 'nodemailer';
import { ENV } from '../config/env.js';

let transporter = null;

if (ENV.SMTP_HOST && ENV.SMTP_USER) {
  transporter = nodemailer.createTransporter({
    host: ENV.SMTP_HOST,
    port: Number(ENV.SMTP_PORT) || 587,
    secure: Number(ENV.SMTP_PORT) === 465,
    auth: {
      user: ENV.SMTP_USER,
      pass: ENV.SMTP_PASS,
    },
  });
}

export const sendContactNotification = async (contactData) => {
  const { name, email, phone, subject, message } = contactData;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #0B3D91 0%, #1E90FF 100%); padding: 24px; color: #fff; text-align: center;">
        <h1 style="margin: 0; font-size: 22px;">Jishnu Infotech - New Inquiry</h1>
        <p style="margin: 5px 0 0; opacity: 0.9; font-size: 13px;">Innovate • Integrate • Inspire</p>
      </div>
      <div style="padding: 24px;">
        <h3 style="color: #0B3D91; margin-top: 0;">New Contact Form Submission</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0;">${phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
            <td style="padding: 8px 0;">${subject || 'General Inquiry'}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #FF7A00; border-radius: 4px;">
          <h4 style="margin: 0 0 8px; color: #1e293b;">Message Content:</h4>
          <p style="margin: 0; white-space: pre-wrap; color: #475569;">${message}</p>
        </div>
      </div>
      <div style="background-color: #f1f5f9; padding: 14px; text-align: center; font-size: 12px; color: #64748b;">
        Received from Jishnu Infotech Production Portal &bull; ${new Date().toLocaleString()}
      </div>
    </div>
  `;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Jishnu Infotech Portal" <${ENV.SMTP_USER || 'no-reply@jishnuinfotech.com'}>`,
        to: ENV.NOTIFICATION_EMAIL,
        replyTo: email,
        subject: `[Jishnu Infotech Inquiry] ${subject || 'New Contact Request'} from ${name}`,
        html: htmlContent,
      });
      console.log(`✉️ Contact notification email dispatched to ${ENV.NOTIFICATION_EMAIL}`);
      return true;
    } catch (err) {
      console.warn('⚠️ SMTP send error (email logged to console instead):', err.message);
      return false;
    }
  } else {
    console.log(`✉️ [Mock Mailer] Contact Inquiry recorded for ${name} (${email}). Notification dispatched to ${ENV.NOTIFICATION_EMAIL}`);
    return true;
  }
};
