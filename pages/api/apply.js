
var nodemailer = require('nodemailer')
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
  auth: {
      api_key: process.env.SENDGRID_API_KEY
  }
}

export default function handler(req, res) {

  if (req.method === 'POST') {

    const { first_name, last_name, email, phone, martial_arts_background, good_fit } = req.body;

    var mailer = nodemailer.createTransport(sgTransport(options));

    var emailContent = {
      from: `${process.env.FROM_EMAIL}`,
      to: `${process.env.TO_EMAIL}`,
      subject: `New Application from ${email}`,
      html: `
      <p>
      <h3>Application Received from ${first_name} ${last_name}.</h3>
      <br>
      <b>First Name:</b> ${first_name}
      <br>
      <b>Last Name:</b> ${last_name}
      <br>
      <b>Email:</b> ${email}
      <br>
      <b>Phone:</b> ${phone}
      <br>
      <br>
      <b>Martial Arts Background:</b>
      <br>
      ${martial_arts_background}
      <br>
      <br>
      <b>Tell us how you could be a good fit:</b>
      <br>
      ${good_fit}
      <br>
      </p>
      `,
    };

    mailer.sendMail(emailContent, function(err, info){
      if (err) {
        console.log(err)
        res.status(400).json({'status': '400: Bad Request'})
      }
    })

    res.status(200).json({'status': 'OK'})
  } else {
    res.status(405).json({'status': 'Method Not Allowed'});
  }

}