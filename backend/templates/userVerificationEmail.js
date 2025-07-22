export const userVerificationEmail = () => {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Verification</title>
    <style>
      body {
        background-color: #f4f4f7;
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      .email-container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
      }
      h1 {
        color: #333333;
        font-size: 24px;
      }
      p {
        color: #555555;
        font-size: 16px;
        line-height: 1.5;
      }
      .otp-code {
        display: inline-block;
        background-color: #f0f0f0;
        color: #111111;
        font-size: 32px;
        letter-spacing: 12px;
        padding: 15px 25px;
        margin: 20px 0;
        font-weight: bold;
        border-radius: 6px;
      }
      .footer {
        margin-top: 30px;
        font-size: 12px;
        color: #999999;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <h1>Email Verification</h1>
      <p>Hello,</p>
      <p>Thank you for signing up. To complete your registration, please enter the following One-Time Password (OTP) in the app or website:</p>
      <div class="otp-code">825317</div>
      <p>This OTP is valid for the next 10 minutes. Do not share it with anyone.</p>
      <p>If you did not request this, you can safely ignore this email.</p>
      <div class="footer">
        &copy; 2025 Saylani Papa. All rights reserved.
      </div>
    </div>
  </body>
</html>

    `;
};
