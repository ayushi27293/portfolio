var express = require('express');
var port = process.env.PORT || 3000
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
// smtp.sendgrid.net
// smtp.gmail.com
var smtpTransport = nodemailer.createTransport(smtpTransport({
    host : "smtp.sendgrid.net",
    secureConnection : false,
    port: 587,
    auth : {user : "apikey", pass : "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"}
}));


function sendEmail(email, subject, title, message){
  var emailBody = '<html><body style="padding:40px;"><header style="background-color: #6567a5; padding: 10px !important; margin:0px !important;"><h1 style="color: #E3F2FD; text-align:center">AYUSHI DESAI PORTFOLIO</h1></header><div><div style="padding: 3%;"><br><h1>[TITLE]</h1><br>[MESSAGE]<br><br><br>Thank you,<br> Ayushi Desai,<br><br><br><br></div><footer style="background-color: #6567a5; padding: 3px !important; margin:0px !important;color: white; text-align: center; padding: 2%;">&#169; 2017 ayushidesai(dot)herokuapp(dot)com. All Rights Reserved.</footer></body></html>';
  emailBody = emailBody.replace("[TITLE]", title);
  emailBody = emailBody.replace("[MESSAGE]", "Hello "+email+"<br><br> "+message+"");
  var mailOptions={from : "desaiayushi9@gmail.com", to : email, subject : subject,  text : "Your Text", html : emailBody, }
      smtpTransport.sendMail(mailOptions, function(error, response){ 
      });
}

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname)));
// body parser middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res){
  res.render("index.ejs");
});

app.post('/sendEmail', function(req, res){
  var email = req.body.email;
  var message = req.body.message;
  console.log("Email we got here is:"+email);
  sendEmail(email, "thank you for contacting ayushi desai", "I have received your email", " thank you for contacting me, i will get back to you as soon as possible.");
  sendEmail("desaiayushi9@gmail.com", email+" sent you one message", "Some one emailed you,", "Message Body: "+message);

  res.redirect("/")     
});

app.listen(port, function() {
  console.log('Listening on port ' + port)
});
