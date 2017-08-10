let signUp = document.getElementById('loginContainer');
let input = document.getElementById('input');
let signUpButton = document.getElementById('signUpSignUp');
let logInButton = document.getElementById('signUplogin')

function createAccount(){
  let post = {
    url: "http:swapi.co",
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


signUpButton.addEventListener("click", function(){
  let email = document.getElementById('userSignUp').value;
  let password = document.getElementById('passSignUp').value;
  let confirm = document.getElementById('confirmSignUp').value;
  let first = document.getElementById('firstSignUp').value;
  let last = document.getElementById('lastSignUp').value;

  if(!email || !password || !confirm || !first || !last){
      console.log("You done done it wrong");
  // } else if((email.indexOf("@") === -1) || (email.indexOf(".") === -1)){
  //   console.log("Please enter a valid email address");
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

logInButton.addEventListener("click", function(event){
  window.location.href = "login.html";
  console.log(window.location)
  event.preventDefault();

})
