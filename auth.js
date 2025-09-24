document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (window.location.pathname.includes("login.html")) {
                login();
            } else if (window.location.pathname.includes("signup.html")) {
                signup();
            }
        });
    }
});

function signup() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("Email is already registered. Please log in.");
        return;
    }

    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Signup successful! You can now log in.");
    window.location.href = "login.html";
}

function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    const storedUser = localStorage.getItem(email);
    if (!storedUser) {
        alert("User not found. Please sign up first.");
        return;
    }

    const user = JSON.parse(storedUser);
    if (user.password !== password) {
        alert("Incorrect password. Please try again.");
        return;
    }

    alert("Login successful! Redirecting to dashboard...");
    window.location.href = "resumeBuild.html";
}