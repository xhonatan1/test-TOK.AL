const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

 

  if (email === 'example@example.com' && password === 'password') {
    // Redirect the user to the dashboard page or do something else
    alert("You Have Succesfully LOGGED IN ")
    window.location.href= "/styles/views/dashboard.html"
  } else {
    //  error message
     window.alert("WRONG CREDENTIALS")
  }
});