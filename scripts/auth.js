// scripts/auth.js
auth.onAuthStateChanged(user => {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.style.display = user ? 'inline-block' : 'none';
    logoutBtn.addEventListener('click', () => {
      auth.signOut().then(() => window.location.href = 'signin.html');
    });
  }

  if (!user && window.location.pathname.includes('admin.html')) {
    window.location.href = 'signin.html';
  }

  if (user && window.location.pathname.includes('signin.html')) {
    window.location.href = 'admin.html';
  }
});
