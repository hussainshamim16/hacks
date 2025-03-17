


let Name = document.getElementById("Name");
let Email = document.getElementById("Email");
let Phone = document.getElementById("Phone");
let message = document.getElementById("message");

const Contact_form = ()=>{
    let contact_Form_submit = {
        Name: Name.value,
        Email: Email.value,
        Phone: Phone.value,
        message: message.value,
    }
    console.log(contact_Form_submit)
}