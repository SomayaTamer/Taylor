document.addEventListener("DOMContentLoaded", () => {
  const usernameSpan = document.getElementById("username");
  const loggedOutBtn = document.getElementById("loggedOutBtn");

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const users = JSON.parse(localStorage.getItem("user")) || [];

  if (usernameSpan) {
    if (loggedInUser) {
      const fullUser = users.find(u => u.userEmail === loggedInUser.email);
      usernameSpan.textContent = fullUser ? fullUser.userName : "Guest";
    } else {
      // NO logged-in user → always Guest
      usernameSpan.textContent = "Guest";
      // Optional: force redirect to login page
      // window.location.href = 'login.html';
    }
  }

  if (loggedOutBtn) {
    loggedOutBtn.addEventListener("click", e => {
      e.preventDefault();
      localStorage.removeItem("loggedInUser"); // clear login
      window.location.href = '../index.html';
    });
  }
});
