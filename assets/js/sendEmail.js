function sendMail(contactForm) { // Passing in the form as a parameter 
    emailjs.send("gmail", "gaetan.muller2005", { 
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "Project_Request": contactForm.projectsummary.value
    })
    .then( 
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}