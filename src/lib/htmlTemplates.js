export const getClientHTML = (name, message, company_email) => {
  return `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Message Confirmation</title>
    <style>
      /* Global Styles */
      body {
        font-family: Arial, sans-serif;
        color: #333;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }

      .email-container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .email-header {
        background-color: #28a745;
        color: white;
        padding: 15px;
        border-radius: 8px 8px 0 0;
        text-align: center;
      }

      .email-header h2 {
        margin: 0;
        font-size: 24px;
      }

      .email-body {
        padding: 20px;
        font-size: 16px;
        line-height: 1.5;
      }

      .email-body p {
        margin: 10px 0;
      }

      .email-footer {
        text-align: center;
        font-size: 14px;
        color: #777;
        padding: 15px;
        background-color: #f9f9f9;
        border-radius: 0 0 8px 8px;
      }

      .email-footer p {
        margin: 5px 0;
      }

      .email-footer a {
        color: #007bff;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="email-header">
        <h2>Thank You for Contacting Us!</h2>
      </div>
      <div class="email-body">
        <p>Dear ${name},</p>
        <p>Thank you for getting in touch with us. We’ve received your message and our team will get back to you as soon as possible.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <p>If you have any urgent questions, feel free to contact us at any time.</p>
        <p>Best regards,</p>
        <p>The A3 cargo Express Team</p>
      </div>
      <div class="email-footer">
        <p>If you need to reach us directly, feel free to email us at <a href="mailto:${company_email}">${company_email}</a></p>
      </div>
    </div>
  </body>
</html>`;
};

export const getCompanyHTML = (name, email, message) => {
    return `<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Contact Message</title>
          <style>
            /* Global Styles */
            body {
              font-family: Arial, sans-serif;
              color: #333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }

            .email-container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .email-header {
              background-color: #007bff;
              color: white;
              padding: 15px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }

            .email-header h2 {
              margin: 0;
              font-size: 24px;
            }

            .email-body {
              padding: 20px;
              font-size: 16px;
              line-height: 1.5;
            }

            .email-body p {
              margin: 10px 0;
            }

            .email-footer {
              text-align: center;
              font-size: 14px;
              color: #777;
              padding: 15px;
              background-color: #f9f9f9;
              border-radius: 0 0 8px 8px;
            }

            .email-footer p {
              margin: 5px 0;
            }

            .email-footer a {
              color: #007bff;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              <h2>New Contact Message</h2>
            </div>
            <div class="email-body">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>
            <div class="email-footer">
              <p>Thank you for using our contact form. We'll get back to you soon!</p>
            </div>
          </div>
        </body>
      </html>`
}