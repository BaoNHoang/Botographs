// scripts/signin.js
document.getElementById('login-form').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = 'admin.html')
    .catch(err => {
      errorMsg.textContent = err.message;
      errorMsg.classList.remove('hidden');
    });
});

auth.onAuthStateChanged(user => {
  if (user) {
    window.location.href = 'admin.html';
  } else {
    document.getElementById("body").style.display = "block";
  }
  });
