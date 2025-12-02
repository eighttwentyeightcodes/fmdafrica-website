import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      company,
      phone,
      budget,
      goals,
      selectedServices,
      qualifiesForDiscount,
    } = body || {}

    if (!name || !email || !Array.isArray(selectedServices) || selectedServices.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    const quotePayload = {
      name,
      email,
      company: company || null,
      phone: phone || null,
      budget: budget || null,
      goals: goals || null,
      selectedServices,
      qualifiesForDiscount: Boolean(qualifiesForDiscount),
      createdAt: new Date().toISOString(),
    }

    console.log('New quotation request:', quotePayload)

    const apiKey = process.env.RESEND_API_KEY
    const receiver = process.env.QUOTE_RECEIVER_EMAIL

    if (!apiKey || !receiver) {
      console.error('Missing RESEND_API_KEY or QUOTE_RECEIVER_EMAIL environment variables')
    } else {
      const resend = new Resend(apiKey)

      const subject = `New FMD Africa quote request – ${name}`
      const discountText = quotePayload.qualifiesForDiscount
        ? 'Yes (10% multi-service discount applies)'
        : 'No'

      const html = `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#020617; padding:32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#020617;border-radius:16px;overflow:hidden;border:1px solid #1e293b;">
            <tr>
              <td style="padding:24px 24px 16px 24px;border-bottom:1px solid #1e293b;">
                <h1 style="margin:0;font-size:22px;color:#f97316;">New FMD Africa Quote Request</h1>
                <p style="margin:8px 0 0 0;font-size:13px;color:#e5e7eb;">A new brand has requested a custom package through your FMD Africa website.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 24px 8px 24px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;color:#e5e7eb;">
                  <tr>
                    <td style="padding:6px 0;width:36%;color:#9ca3af;">Name</td>
                    <td style="padding:6px 0;">${quotePayload.name}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#9ca3af;">Email</td>
                    <td style="padding:6px 0;">${quotePayload.email}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#9ca3af;">Company / Brand</td>
                    <td style="padding:6px 0;">${quotePayload.company || '-'}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#9ca3af;">Phone</td>
                    <td style="padding:6px 0;">${quotePayload.phone || '-'}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#9ca3af;">Approximate Monthly Budget</td>
                    <td style="padding:6px 0;">${quotePayload.budget || '-'}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#9ca3af;">Selected Services</td>
                    <td style="padding:6px 0;">${quotePayload.selectedServices.join(', ')}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#9ca3af;">10% Multi‑service Discount</td>
                    <td style="padding:6px 0;">${discountText}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px 8px 24px;">
                <p style="margin:0 0 6px 0;font-size:13px;color:#e5e7eb;font-weight:600;">Goals, priorities & context</p>
                <p style="margin:0;font-size:13px;color:#9ca3af;white-space:pre-line;">${quotePayload.goals || '-'}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px 20px 24px;border-top:1px solid #1e293b;">
                <p style="margin:0;font-size:11px;color:#6b7280;">Submitted at: ${quotePayload.createdAt}</p>
              </td>
            </tr>
          </table>
        </div>
      `

      try {
        await resend.emails.send({
          from: 'FMD Africa Studio <quotes@fmdafrica.com>',
          to: receiver,
          subject,
          html,
          replyTo: quotePayload.email,
        })
      } catch (emailError) {
        console.error('Failed to send quote email via Resend:', emailError)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error handling quotation request:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
