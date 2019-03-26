var nodemailer = require('nodemailer');

let sends = nodemailer.createTransport({
   service:'gmail',
   secure:'false',
   port:25,
   auth:{
       user : 'tarunapanchal1612@gmail.com',
       pass: 'T@runa1612'
   },
   tls:{
       rejectUnauthorized:false
   }
});

let helper = {
    from :'"Krishna Soni" <ks.kirshna1510195@gmail.com',
    to:'ks.krishna1510195@gmail.com',
    subject :"Hello NodeMailer ",
    text:"Hiii Kya kar raho madam "
};

sends.sendMail(helper,(err,info) =>{
    if(err){
        console.log(err);
    }
    console.log("Mail send");
    console.log(info);
})
