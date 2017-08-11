// if (window.sessionStorage.token){
//   // Load eventlist
// } else {
//   // Load login
// }
//*********************************
//         Load scripts
//*********************************
let arr = [0, 1, 2, 3];
arr.forEach(function(event){
  console.log(event);
})
// let events = [];

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
      <input id="loginEmail" type="email" name="email" placeholder="Email Address" value="1" required>
      <input id="loginPassword" type="password" name="password" placeholder="Password" value="1" required>
      <button id="loginSignUp" type="button" name="signUp">Sign Up!</button>
      <button id="loginLogin" class="active" type="button" name="login">Login</button>
    </form>
  </section>
  <script type="text/javascript" src="./main.js"></script>
  `

  let loginEmail = document.getElementById('loginEmail');
  let loginPassword = document.getElementById('loginPassword');

  let loginLogin = document.getElementById('loginLogin');
  let loginSignUp = document.getElementById('loginSignUp');

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

  loginLogin.addEventListener('click', function(){
    if(!loginEmail.value || !loginPassword.value) {
      alert("Please provide email and password");
    } else {
      console.log('True');
      console.log('Email: ', loginEmail.value);
      console.log('Password: ', loginPassword.value);
      // loginCheck();
      loadEventList(); // For testing purposing only
    }
  })

  loginSignUp.addEventListener('click', function(){
    loadSignUp();
    console.log('Run loadSignUp();');
  })
}

function loadSignUp(){
  clearBody();
  document.body.innerHTML +=
  `
  <section id="loginContainer">
    <h1>Iron Meetups</h1>
    <h3>Please Sign Up</h3>

    <form>
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
        loadEventList();
        //createAccount();


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
function loadEventList() {
  clearBody();
  document.body.innerHTML +=
  `
  <header id="nav_bar">
    <h2 id="logo">Iron Meetups</h2>
    <nav id="nav_links">
      <div id="events_button" class="nav_buttons">Events</div>
      <div id="logout_button" class="nav_buttons">Log Out</div>
    </nav>
  </header>
  <main id="main_content">
  </main>
  <script src="./js/sampleData.js"></script>
  <script src="./main.js"></script>
  `

  // fetch("url")
  //   .then(
  //     function(response) {
  //       if (response.status !== 200) {
  //         console.log(response.status);
  //         return;
  //       }
  //       response.json().then(function(data) {
  //         console.log("Here is the data:", data);
//
//  once api is created, change results.length to data
//
          let mainContent = document.getElementById("main_content");

          for (var i = 0; i < results.length; i++) {

            let eventArticle = document.createElement('article');
            eventArticle.setAttribute("class", "each_container");

            let eventDetails = document.createElement('div');
            eventDetails.setAttribute('class', 'event_details');
            eventDetails.innerHTML =
            `
              <h2>${results[i].data.name}</h2>
              <p>${results[i].data.city}, ${results[i].data.state}</p>
              <p>${results[i].data.date} - ${results[i].data.time}</p>
            `
            eventArticle.appendChild(eventDetails);

            let buttonContainer = document.createElement('div');
            buttonContainer.setAttribute('class', 'button_container');

            let rsvp = document.createElement('button');
            rsvp.setAttribute('class', 'event_buttons');
            rsvp.textContent = 'Click to RSVP';
            rsvp.value = i;
            rsvp.addEventListener('click', function(){
              console.log('YOU CLICKED RSVP');
            })
            buttonContainer.appendChild(rsvp);

            let info = document.createElement('button');
            info.setAttribute('class', 'event_buttons');
            info.textContent = 'View event info';
            info.value = i;
            info.addEventListener('click', function(event){
              console.log('event', event);
              console.log('event.target', event.target);
              console.log('event.target.value', event.target.value);
              loadEventView(event.target.value);
            })
            buttonContainer.appendChild(info);

            eventArticle.appendChild(buttonContainer);

            mainContent.appendChild(eventArticle);
          }

    //     });
    //   }
    // )
    // .catch(function(err) {
    //   console.log("Fetch Error :-S", err);
    // });

    let eventButton = document.getElementById("events_button");
    eventButton.addEventListener("click", loadEventList);

    let logOutButton = document.getElementById("logout_button");
    logOutButton.addEventListener("click", loadLogin);
}

function loadEventView(index) {

  clearBody();

  let evtvwName = results[index].data.name;
  let evtvwDate = results[index].data.date;
  let evtvwTime = results[index].data.time;
  let evtvwLoca = results[index].data.address + ", " + results[index].data.city + ", " + results[index].data.state;
  let evtvwDetails = results[index].data.details;

  document.body.innerHTML +=
  `
  <header id="nav_bar">
    <h2 id="logo">Iron Meetups</h2>
    <nav id="nav_links">
      <div id="events_button" class="nav_buttons">Events</div>
      <div id="logout_button" class="nav_buttons">Log Out</div>
    </nav>
  </header>
  <main id="eventBody">
    <article id="leftContainer">
      <h1 id="evtvwName">${evtvwName}</h1>
      <div id="evtvwInfo">
        <h4>When?</h4>
        <p id="evtvwDate">${evtvwDate} at ${evtvwTime}</p>
        <h4>Where?</h4>
        <p id="evtvwLoca">${evtvwLoca}</p>
        <h4>What is this all about?</h4>
        <p id="evtvwDetails">${evtvwDetails}</p>
      </div>
    </article>
    <aside id="rightContainer">
      <h4>Attendees</h4>
      <ul id="attendees"></ul>
    </aside>
  </main>
  `

  let attending = document.getElementById('attendees');
  for (var i = 0; i < results[0].data.attendees.length; i++) {
    let evtvwListItem = document.createElement('li');
    let evtvwUserAtt = results[0].data.attendees[i].username;
    evtvwListItem.innerHTML = evtvwUserAtt;
    attending.appendChild(evtvwListItem);
  }

  let eventButton = document.getElementById("events_button");
  eventButton.addEventListener("click", loadEventList);

  let logOutButton = document.getElementById("logout_button");
  logOutButton.addEventListener("click", loadLogin);

}

//*********************************
//         Login script
//*********************************

loadLogin();

//*********************************
//         Sign Up script
//*********************************

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

//*********************************
//        Event list script
//*********************************

    // There is nothing here :)

//*********************************
//        Event view script
//*********************************

    // There is nothing here >:(
