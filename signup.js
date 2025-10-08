<<<<<<< HEAD
// Handle form submit
    document.getElementById("signupForm").addEventListener("submit", function (e) {
        e.preventDefault();

    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    const confirm = document.getElementById("ConfirmPassword").value;

    if (password !== confirm) {
        alert("❌ Passwords do not match!");
    return;
            }

    // Save email & password to localStorage 
    localStorage.setItem("VendoraUserEmail", email);
    localStorage.setItem("VendoraUserPassword", password);

    // Show popup banner
    const popup = document.getElementById("popupBanner");
    popup.style.display = "block";

            setTimeout(() => {
        popup.style.display = "none";
            }, 3000);

           
        });
=======
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("Email").value;
        const password = document.getElementById("Password").value;
        const confirm = document.getElementById("ConfirmPassword").value;

        if (password !== confirm) {
            alert("❌ Passwords do not match!");
            return;
        }

        localStorage.setItem("VendoraUserEmail", email);
        localStorage.setItem("VendoraUserPassword", password);

        const popup = document.getElementById("popupBanner");
        popup.style.display = "block";

        setTimeout(() => {
            popup.style.display = "none";
        }, 3000);
    });
});
>>>>>>> 3ee52be (html,css)
