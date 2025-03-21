import { createUserWithEmailAndPassword ,addDoc, collection, getFirestore,auth} from "../configration/db.js";

const db = getFirestore(); // Firestore instance

let signup = async () => {
    let UserName = document.getElementById("UserName");
    let userNumber = document.getElementById("userNumber");
    let user_is = document.getElementById("user_is");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    try {
        console.log("Processing signup...");

        // Create user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;

        // Firestore user data (excluding password for security reasons)
        const userData = {
            uid: user.uid, // Unique user ID
            UserName: UserName.value,
            userNumber: userNumber.value,
            user_is: user_is.value,
            email: email.value,
            createdAt: new Date()
        };

        // Add user to Firestore
        await addDoc(collection(db, "signupUser"), userData);

        alert("Registration Successful! 🎉");
    } catch (error) {
        console.error("Signup Error:", error.message);
        alert("Error: " + error.message);
    } finally {
        console.log("Signup process completed.");
    }
};

window.signup = signup;
