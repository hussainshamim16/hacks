let signup = () => {
    let UserName = document.getElementById("UserName");
    let userNumber = document.getElementById("userNumber");
    let user_is = document.getElementById("user_is");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    const user_login = {
        UserName: UserName.value,
        userNumber: userNumber.value,
        user_is: user_is.value,
        email: email.value,
        password: password.value
    }
    console.log("login", signup)
}