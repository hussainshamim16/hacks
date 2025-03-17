let login = () => {
    let loginemail = document.getElementById("loginemail");
    let loginpassword = document.getElementById("loginpassword");

    const user_login = {
        loginemail: loginemail.value,
        loginpassword: loginpassword.value
    }
    console.log("login", user_login)
}