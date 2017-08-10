function loadEventView() {
  let evtvwHeader = document.getElementById('nav_bar');
  let leftContainer = document.getElementById('leftContainer');
  let rightContainer = document.getElementById('rightContainer');



  let evtvwName = results[0].data.name;
  let evtvwDate = results[0].data.date;
  let evtvwLoca = results[0].data.address + ", " + results[0].data.city + ", " + results[0].data.state;
  let evtvwDetails = results[0].data.details;

  evtvwHeader.innerHTML += `
  <h2 id="logo">Iron Meetups</h2>
  <nav id="nav_links">
    <div class="nav_buttons">Events</div>
    <div class="nav_buttons">Log Out</div>
  </nav>
  `

  leftContainer.innerHTML += `
  <h1 id="evtvwName">${evtvwName}</h1>
  <div id="evtvwInfo">
    <h4>When?</h4>
    <p id="evtvwDate">${evtvwDate}</p>
    <h4>Where?</h4>
    <p id="evtvwLoca">${evtvwLoca}</p>
    <h4>What is this all about?</h4>
    <p id="evtvwDetails">${evtvwDetails}</p>
  </div>`

  rightContainer.innerHTML += `
  <h4>Attendees</h4>
  <ul id="attendees">
    <li class="attender">User Name</li>
    <li class="attender">User Name</li>
    <li class="attender">User Name</li>
    <li class="attender">User Name</li>
    <li class="attender">User Name</li>
    <li class="attender">User Name</li>
  </ul>
  `
}

loadEventView();
