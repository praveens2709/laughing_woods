import validator from 'validator';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Get the contact form data from the request body
    const { name, email, phone, address, message } = await req.json();

    // Simple validation
    if (!name || !email || !message || !phone || !address) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400 },
      );
    }

    if (!validator.isEmail(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
      });
    }

    const phoneRegex = /^[7-9][0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
      return new Response(
        JSON.stringify({
          error:
            'Invalid phone number format (must be 10 digits, starting with 7, 8, or 9)',
        }),
        { status: 400 },
      );
    }

    const sanitizedName = validator.escape(name);
    const sanitizedMessage = validator.escape(message);
    const sanitizedPhone = validator.escape(phone);
    const sanitizedAddress = validator.escape(address);

    // Create a Nodemailer transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Using Gmail as an example
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password (or app-specific password)
      },
    });

    // Email options (the message details)
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email address
      to: process.env.EMAIL_RECIPIENT, // Recipient's email address (where the contact form submissions go)
      subject: `New Contact Form Submission from ${name}`, // Email subject
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form Submission</title>
            <style>
                /* General Reset */
                body,
                h1,
                h2,
                p,
                table,
                td,
                th {
                  margin: 0;
                  padding: 0;
                  font-family: Arial, sans-serif;
                  color: #333;
                }
    
                table {
                  width: 100%;
                  max-width: 600px;
                  margin: 20px auto;
                  border-collapse: collapse;
                }
    
                /* Header */
                .email-header {
                  background-color: #e50914; /* Red */
                  padding: 20px;
                  text-align: center;
                }
    
                .email-header h1 {
                  margin: 0;
                  font-size: 24px;
                  color: white !important;
                }
    
                /* Body */
                .email-body {
                  background-color: white;
                  padding: 20px;
                  border: 1px solid #ddd;
                }
    
                .email-body h2 {
                  color: #e50914; /* Red */
                  font-size: 22px;
                  margin-bottom: 15px;
                }
    
                .email-body p {
                  font-size: 16px;
                  line-height: 1.6;
                  margin-bottom: 10px;
                }
    
                .contact-info table {
                  width: 100%;
                  margin-top: 20px;
                  font-size: 16px;
                }
    
                .contact-info td {
                  padding: 8px;
                  border: 1px solid #ddd;
                }
    
                .contact-info th {
                  padding: 8px;
                  background-color: #f7f7f7;
                  text-align: left;
                  border: 1px solid #ddd;
                  width: 25%;
                }
    
                /* Footer */
                .email-footer {
                  background-color: #f7f7f7;
                  padding: 15px;
                  text-align: center;
                  font-size: 14px;
                  color: #777;
                }
    
                .email-footer a {
                  color: #e50914;
                  text-decoration: none;
                }
    
                .email-footer p {
                  margin: 0;
                }
    
                /* Responsive */
                @media only screen and (max-width: 600px) {
                  .email-header h1 {
                    font-size: 20px;
                  }
    
                  .email-body h2 {
                    font-size: 18px;
                  }
    
                  .contact-info td {
                    font-size: 14px;
                  }
                }
            </style>
        </head>
        <body>
            <!-- Email Container -->
            <table>
              <!-- Header Section -->
              <tr>
                <td class="email-header">
                  <h1>New Contact Us Form Submission</h1>
                </td>
              </tr>
    
              <!-- Body Section -->
              <tr>
                <td class="email-body">
                  <h2>Hello,</h2>
                  <p>You have received a new submission from your website's contact form. Below are the details provided by the visitor:</p>
    
                  <!-- Contact Information Table -->
                  <div class="contact-info">
                    <table>
                      <tr>
                        <th>Name</th>
                        <td>${sanitizedName}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>${email}</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td>${sanitizedPhone}</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>${sanitizedAddress}</td>
                      </tr>
                      <tr>
                        <th>Message</th>
                        <td>${sanitizedMessage}</td>
                      </tr>
                    </table>
                  </div>
    
                  <p>Thank you for following up on the request. Feel free to reply or contact the visitor directly.</p>
                </td>
              </tr>
    
              <!-- Footer Section -->
              <tr>
                <td class="email-footer">
                  <p>&copy; 2025 Your Company Name. All rights reserved.</p>
                </td>
              </tr>
            </table>
        </body>
        </html>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);

    // Return a success response
    return new Response(
      JSON.stringify({ success: 'Message sent successfully!' }),
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
    });
  }
}
