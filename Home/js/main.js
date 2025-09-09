document.addEventListener("DOMContentLoaded", () => {
  const usernameSpan = document.getElementById("username");
  const loggedOutBtn = document.getElementById("loggedOutBtn");

  function getBasePath() {
    if (location.hostname === "127.0.0.1" || location.hostname === "localhost") {
      return "/";
    }
    const parts = location.pathname.split("/").filter(Boolean);
    return parts.length > 0 ? `/${parts[0]}/` : "/";
  }

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const users = JSON.parse(localStorage.getItem("user")) || [];

  if (usernameSpan) {
    if (loggedInUser) {
      const fullUser = users.find(u => u.userEmail === loggedInUser.email);
      usernameSpan.textContent = fullUser ? fullUser.userName : "Guest";
    } else {
      // No logged-in user → show Guest
      usernameSpan.textContent = "Guest";
    }
  }

  if (loggedOutBtn) {
    loggedOutBtn.addEventListener("click", e => {
      e.preventDefault();
      localStorage.removeItem("loggedInUser"); // Clear logged-in user
      window.location.href = getBasePath() + "index.html";
    });
  }
});
