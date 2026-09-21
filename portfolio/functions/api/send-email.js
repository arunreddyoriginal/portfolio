export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();

    const { name, email, type, details } = body;

    // Basic validation
    if (!name || !email || !details) {
      return new Response(
        JSON.stringify({ error: "Name, email, and project details are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Access RESEND_API_KEY environment variable set in Cloudflare Pages
    const apiKey = env.RESEND_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Resend API key is not configured on Cloudflare Pages." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Call Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["arunreddy.co@gmail.com"],
        reply_to: email,
        subject: `New Project Enquiry from ${name} (${type || "General"})`,
        html: `
          <h2>New Project Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Project Type:</strong> ${type || "Not specified"}</p>
          <br/>
          <h3>Project Details:</h3>
          <p style="white-space: pre-wrap;">${details}</p>
          <hr/>
          <p><small>Replying directly to this email will send your message to <strong>${email}</strong>.</small></p>
        `,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      return new Response(
        JSON.stringify({ error: resendData.message || "Failed to send email via Resend." }),
        { status: resendResponse.status, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: resendData.id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Internal server error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
