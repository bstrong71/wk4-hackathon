function clearBody(){
  document.body.innerHTML = "";
}

function loadLogin(){
  clearBody();
  document.body.innerHTML +=
  `
  <section id="loginContainer">
    <h1>Iron Meetups!</h1>
    <h3>Please Sign Up!</h3>
    <form>
      <input id="loginEmail" type="text" name="email" placeholder="Email Address" required>
      <input id="loginPassword" type="text" name="password" placeholder="Password" required>
      <button id="loginSignUp" type="button" name="signUp">Sign Up!</button>
      <button id="loginLogin" class="active" type="button" name="login">Login</button>
    </form>
  </section>
  <script type="text/javascript" src="../js/login.js"></script>
  `
  console.log('loadLogin() successful');
}

loadLogin();

let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');

let loginLogin = document.getElementById('loginLogin');
let loginSignUp = document.getElementById('loginSignUp');

loginLogin.addEventListener('click', function(){
  if(!loginEmail.value || !loginPassword.value) {
    alert("Please provide email and password");
  } else {
    console.log('True');
    console.log('Email: ', loginEmail.value);
    console.log('Password: ', loginPassword.value);
  }
})

loginSignUp.addEventListener('click', function(){
  // Run loadSignUp();
  console.log('Run loadSignUp();');
})

function loginCheck(){
  let loginFetch = {
    body: {
      'email': document.getElementById('loginEmail').value,
      'password': document.getElementById('loginPassword').value
    },
    method: 'post',
    url: '/api/user/login'
  }
  fetch(loginFetch)
  .then(function(response){
    if(response.status === 200){
      // loadEventList();
    } else {
      alert("Invalid email and/or password. Please try again.")
    }
  })
}
