const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all required fields.' })
  }

  // Configure your email transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'max4arthur@gmail.com', // replace with your email
      pass: 'toef hsed tyac tnxm', // replace with your app password
    },
  })

  const mailOptions = {
    from: email,
    to: 'max4arthur@gmail.com', // replace with your receiving email
    subject: subject || 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.json({ success: true, message: 'Message sent successfully!' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message.' })
  }
})

app.listen(PORT, () => {
  console.log(`Contact backend running on http://localhost:${PORT}`)
})
