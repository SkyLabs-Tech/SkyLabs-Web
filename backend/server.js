// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
      user: 'contact-us@skylabs-developments.com', // Your email address
      pass: 'google321.nvidia321.' // Your email password
    }
  });

  // Set up email data
  const mailOptions = {
    from: email, // Sender address
    to: [
      'contact-us@skylabs-developments.com',
      'ifrecia@skylabs-developments.com',
      'fparedes@skylabs-developments.com'
    ], // List of recipients
    subject: 'Contact Form Submission', // Subject line
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` // Plain text body
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running at port {8080}`);
});