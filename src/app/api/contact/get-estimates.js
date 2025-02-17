import nodemailer from 'nodemailer';
import { validateEmail, validatePhone, sanitizeInput, validatePincode } from '@utils/functions';

export async function POST(req) {
    try {
        const { name, email, phone, pincode, bhk, purpose } = await req.json();

        // Validate required fields
        if (!name || !email || !phone || !pincode || !bhk || !purpose) {
            return new Response(
                JSON.stringify({ error: 'All fields are required' }),
                { status: 400 },
            );
        }

        // Validate email format
        if (!validateEmail(email)) {
            return new Response(JSON.stringify({ error: 'Invalid email format' }), {
                status: 400,
            });
        }

        // Validate phone number
        if (!validatePhone(phone)) {
            return new Response(
                JSON.stringify({
                    error: 'Invalid phone number format (must be 10 digits, starting with 7, 8, or 9)',
                }),
                { status: 400 },
            );
        }

        // Validate pincode
        const isPincodeValid = await validatePincode(pincode);
        if (!isPincodeValid) {
            return new Response(JSON.stringify({ error: 'Invalid pincode' }), { status: 400 });
        }

        // Sanitize inputs
        const sanitizedData = {
            name: sanitizeInput(name),
            email,
            phone: sanitizeInput(phone),
            pincode: sanitizeInput(pincode),
            bhk: sanitizeInput(bhk),
            purpose: sanitizeInput(purpose),
        };

        // Nodemailer setup and sending email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECIPIENT,
            subject: `New Estimate Request from ${sanitizedData.name}`,
            html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Estimate Request</title>
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
                  <h1>New Estimate Request</h1>
                </td>
              </tr>
      
              <!-- Body Section -->
              <tr>
                <td class="email-body">
                  <h2>Hello,</h2>
                  <p>You have received a new estimate request from the website. Below are the details:</p>
      
                  <!-- Estimate Information Table -->
                  <div class="contact-info">
                    <table>
                      <tr>
                        <th>Name</th>
                        <td>${sanitizedData.name}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>${sanitizedData.email}</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td>${sanitizedData.phone}</td>
                      </tr>
                      <tr>
                        <th>Pincode</th>
                        <td>${sanitizedData.pincode}</td>
                      </tr>
                      <tr>
                        <th>BHK</th>
                        <td>${sanitizedData.bhk}</td>
                      </tr>
                      <tr>
                        <th>Purpose</th>
                        <td>${sanitizedData.purpose}</td>
                      </tr>
                    </table>
                  </div>
      
                  <p>Please follow up with the customer as soon as possible.</p>
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

        return new Response(
            JSON.stringify({ success: 'Estimate request sent successfully!' }),
            { status: 200 },
        );
    } catch (error) {
        console.error('Error sending estimate request:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
        });
    }
}
