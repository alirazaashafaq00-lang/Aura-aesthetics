import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_key");

export async function sendBookingConfirmation(to: string, name: string, when: string) {
  return resend.emails.send({
    from: "Aura Aesthetics <bookings@auraaesthetics.example.com>",
    to,
    subject: "Your appointment is confirmed",
    html: `<p>Hi ${name},</p><p>Your appointment on <strong>${when}</strong> is confirmed. We look forward to welcoming you.</p>`,
  });
}

export async function sendContactNotification(name: string, email: string, message: string) {
  return resend.emails.send({
    from: "Aura Aesthetics Website <no-reply@auraaesthetics.example.com>",
    to: "hello@auraaesthetics.example.com",
    subject: `New contact form message from ${name}`,
    html: `<p><strong>${name}</strong> (${email}) wrote:</p><p>${message}</p>`,
  });
}
