function sendMail(){
    let parms = {
        name : document.getElementById("name"),
        subject : document.getElementById("subject"),
        mail : document.getElementById("mail"),
        msg : document.getElementById("msg"),
    }

    emailjs.send("service_nthnbak","template_2zro3kl", parms).then(alert("Email Sent!!"))
}