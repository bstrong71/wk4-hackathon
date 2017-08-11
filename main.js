// if (window.sessionStorage.token){
//   // Load eventlist
// } else {
//   // Load login
// }
//*********************************
//         Load scripts
//*********************************

function clearBody(){
  document.body.innerHTML = "";
}

function loadLogin(){
  clearBody();
  document.body.innerHTML +=
  `
  <section id="loginContainer">
    <h1>Iron Meetups</h1>
    <h3>Please Log In</h3>
    <form>
      <input id="loginEmail" type="email" name="email" placeholder="Email Address" required>
      <input id="loginPassword" type="password" name="password" placeholder="Password" required>
      <button id="loginSignUp" type="button" name="signUp">Sign Up!</button>
      <button id="loginLogin" class="active" type="button" name="login">Login</button>
    </form>
  </section>
  <script type="text/javascript" src="./main.js"></script>
  `
  console.log('loadLogin() successful');
}

function loadSignUp(){
  clearBody();
  document.body.innerHTML +=
  `
  <section id="loginContainer">
    <h1>Iron Meetups</h1>
    <h3>Please Sign Up</h3>

    <form class="" action="" method="get">
      <input type="text" id="firstSignUp" name="" value="" placeholder="First Name">
      <input type="text" id="lastSignUp" name="" value="" placeholder="Last Name">
      <input type="email" id="userSignUp" name="" value="" placeholder="Email address">
      <input type="password" id="passSignUp" name="" value="" placeholder="Password">
      <input type="password" id="confirmSignUp" name="" value="" placeholder="Confirm Password">
      <button id="signUpSignUp" class="active" type="button" name="signUp">Sign Up!</button>
      <button id="signUpLogin" class="" type="submit" name="login">Login</button>
    </form>

  </section>
  <script src="./main.js"></script>
  `
  let signUp = document.getElementById('loginContainer');
  let input = document.getElementById('input');
  let signUpButton = document.getElementById('signUpSignUp');
  console.log(signUpButton);
  let loginButton = document.getElementById('signUpLogin')

  signUpButton.addEventListener("click", function(){
    console.log("Sign Up was clicked");
    let email = document.getElementById('userSignUp').value;
    let password = document.getElementById('passSignUp').value;
    let confirm = document.getElementById('confirmSignUp').value;
    let first = document.getElementById('firstSignUp').value;
    let last = document.getElementById('lastSignUp').value;

    if(!email || !password || !confirm || !first || !last){
        console.log("You done done it wrong");
    } else if((email.indexOf("@") === -1) || (email.indexOf(".") === -1)){
      console.log("Please enter a valid email address");
    } else {
      console.log("You done done it right");
      if (password === confirm){
        console.log("match!");

         createAccount();


        // fetch POST
          //if status === 200 {loadNextPage}
          //else {some kind of visible error for the user}

      } else {
        console.log('They do not match.');
      }

    }

  })
  console.log("clicked");

  loginButton.addEventListener("click", loadLogin);
}

//*********************************
//         Login script
//*********************************


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
  loadSignUp();
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

//*********************************
//         Sign Up script
//*********************************

// let signUp = document.getElementById('loginContainer');
// let input = document.getElementById('input');
// let signUpButton = document.getElementById('signUpSignUp');
// let loginButton = document.getElementById('signUpLogin')

function createAccount(){
  let post = {
    url: "url",
    method:"post",
    body: {
      email: document.getElementById('userSignUp').value,
      password: document.getElementById('passSignUp').value,
      firstName: document.getElementById('firstSignUp').value,
      lastName: document.getElementById('lastSignUp').value
    }
  }
  fetch(post).then(function (response) {
    if (response.status === 200){
      window.location.href = "eventlist.html";
      return response;
      console.log("im here");
    } else {

      console.log("Request failed", error);
    }
  }).catch(function(error) {

  })
}

// signUpButton.addEventListener("click", function(){
//   console.log("Sign Up was clicked");
//   let email = document.getElementById('userSignUp').value;
//   let password = document.getElementById('passSignUp').value;
//   let confirm = document.getElementById('confirmSignUp').value;
//   let first = document.getElementById('firstSignUp').value;
//   let last = document.getElementById('lastSignUp').value;
//
//   if(!email || !password || !confirm || !first || !last){
//       console.log("You done done it wrong");
//   } else if((email.indexOf("@") === -1) || (email.indexOf(".") === -1)){
//     console.log("Please enter a valid email address");
//   } else {
//     console.log("You done done it right");
//     if (password === confirm){
//       console.log("match!");
//
//        createAccount();
//
//
//       // fetch POST
//         //if status === 200 {loadNextPage}
//         //else {some kind of visible error for the user}
//
//     } else {
//       console.log('They do not match.');
//     }
//
//   }
//
// })
// console.log("clicked");
//
// loginButton.addEventListener("click", loadLogin);

//*********************************
//        Event list script
//*********************************
