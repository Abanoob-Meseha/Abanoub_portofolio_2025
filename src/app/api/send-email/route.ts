import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    await resend.emails.send({
      from: "Abanoub Portofolio <onboarding@resend.dev>", // Use a verified domain/email
      to: "abanoob.meseha@gmail.com",
      subject: `Portofolio Contact Message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Email:</strong> ${subject}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Failed to Send.. please try again Later",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
