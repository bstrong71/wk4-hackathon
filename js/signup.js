let signUp = document.getElementById('loginContainer');
let input = document.getElementById('input');
let signUpButton = document.getElementById('signUpSignUp');
let logInButton = document.getElementById('signUplogin')


function loadSignUp(){
  // document.body.innerHTML +=
  // `
  // <section id="loginContainer">
  //       <h1>Iron Meetups!</h1>
  //       <h3>Please Sign Up!</h3>
  //
  //       <form class="" action="" method="get">
  //
  //         <input type="text" name="" value="" placeholder="Username">
  //         <input type="text" name="" value="" placeholder="Password">
  //         <input type="text" name="" value="" placeholder="Confirm Password">
  //         <button id="signUp" class="active" type="button" name="signUp">Sign Up!</button>
  //         <button id="login" class="" type="button" name="login">Login</button>
  //       </form>
  //
  //     </section>
  //     <script src="../js/signup.js"></script>
  // `
}

function createAccount(){
  let post ={
    url: url,
    method:"post",
    body: {
      email: document.getElementById('userSignUp').value,
      password: document.getElementById('passSignUp').value,
    }

  fetch(post).then(response)
    return response;

    .catch(function(error) {
      console.log("Request failed", error);
 });
}

signUpButton.addEventListener("click", function(){
  let email = document.getElementById('userSignUp').value;
  let password = document.getElementById('passSignUp').value;
  let confirm = document.getElementById('confirmSignUp').value;

  if(!email || !password || !confirm){
      console.log("You done done it wrong");
  } else if((email.indexOf("@") === -1) || (email.indexOf(".") === -1)){
    console.log("Please enter a valid email address");
  } else {
    console.log("You done done it right");
    if (password === confirm){
      console.log("match!");
      // fetch POST
        //if status === 200 {loadNextPage}
        //else {some kind of visible error for the user}

    } else {
      console.log('They do not match.');
    }

  }

})



console.log("clicked");

// let loadLogIn = document.createElement("a");

logInButton.addEventListener("click", function(event){
  window.location.href = "login.html";
  console.log(window.location)
  event.preventDefault();

})

// loadSignUp();
