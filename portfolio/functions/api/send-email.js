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

    // 1. Send notification email to YOU (Arun)
    const adminEmailPromise = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["arunreddy.co@gmail.com"],
        reply_to: email,
        subject: `⚡ New Lead: ${name} (${type || "Project Enquiry"})`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; color: #111; line-height: 1.6;">
            <h2 style="color: #e65100;">New Project Enquiry</h2>
            <p><strong>Client Name:</strong> ${name}</p>
            <p><strong>Client Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Project Type:</strong> ${type || "Not specified"}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;"/>
            <h3>Project Scope & Details:</h3>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 6px;">${details}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;"/>
            <p><em>Hit "Reply" in your email client to respond directly to ${name}.</em></p>
          </div>
        `,
      }),
    });

    // 2. Send instant "Thank You" confirmation email to the CLIENT (lead retention)
    const clientEmailPromise = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Arun Reddy <onboarding@resend.dev>",
        to: [email],
        reply_to: "arunreddy.co@gmail.com",
        subject: `Thank you for reaching out, ${name.split(' ')[0]}! — Arun Reddy`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; color: #1a1a1a; line-height: 1.6; padding: 20px;">
            <p>Hi ${name.split(' ')[0]},</p>
            <p>Thank you for reaching out about your <strong>${type || "website"}</strong> project!</p>
            <p>I have received your enquiry and details. I review all project briefs carefully and will get back to you personally within 24 hours to discuss the next steps, timeline, and scope.</p>
            <div style="background: #f4f4f5; padding: 16px; border-left: 3px solid #ff5500; border-radius: 4px; margin: 20px 0;">
              <p style="margin: 0 0 8px 0; font-size: 13px; color: #666; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Summary of your enquiry:</p>
              <p style="margin: 0; font-size: 14px; color: #333; white-space: pre-wrap;">${details}</p>
            </div>
            <p>If you have any extra context or materials to share in the meantime, feel free to reply directly to this email.</p>
            <br/>
            <p style="margin-bottom: 4px;">Best regards,</p>
            <p style="margin-top: 0;"><strong>Arun Reddy</strong><br/><span style="color: #666; font-size: 14px;">Creative Frontend Engineer & Interface Designer</span><br/><a href="https://arunreddy.pages.dev" style="color: #ff5500; text-decoration: none;">arunreddy.pages.dev</a></p>
          </div>
        `,
      }),
    });

    const [adminRes, clientRes] = await Promise.all([adminEmailPromise, clientEmailPromise]);
    const adminData = await adminRes.json();

    if (!adminRes.ok) {
      return new Response(
        JSON.stringify({ error: adminData.message || "Failed to send admin notification email." }),
        { status: adminRes.status, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: adminData.id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Internal server error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
