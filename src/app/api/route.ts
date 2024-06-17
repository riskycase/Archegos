// api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req: { method: string; body: { username: any; email: any; phoneNumber: any; subject: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; error?: string; }): void; new(): any; }; end: { (arg0: string): void; new(): any; }; }; setHeader: (arg0: string, arg1: string[]) => void; }) {
  if (req.method === 'POST') {
    const { username, email, phoneNumber, subject, message } = req.body;

    // Set up nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Replace with your email
        pass: process.env.EMAIL_PASS, // Replace with your email password
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: `"${username}" <${email}>`, // Use the user's email as the sender
        to: process.env.EMAIL_USER, // List of receivers
        subject: subject || 'No Subject', // Subject line
        text: `Name: ${username}\nEmail: ${email}\nPhone: ${phoneNumber}\n\nMessage:\n${message}`, // Plain text body
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
