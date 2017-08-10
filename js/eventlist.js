let body = document.getElementsByTagName("body");




function loadEventList() {

  document.body.innerHTML += `<header id="nav_bar">
                                <h2 id="logo">Iron Meetups</h2>
                                <nav id="nav_links">
                                  <div class="nav_buttons">Events</div>
                                  <div class="nav_buttons">Log Out</div>
                                </nav>
                              </header>
                              <main id="main_content">
                              </main>`;

  fetch("url")
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(data) {
          console.log("Here is the data:", data);

          for (var i = 0; i < results.length; i++) {

            let mainContent = document.getElementById("main_content");

            mainContent.innerHTML += `
                                    <article class="each_container">
                                      <div class="event_details">
                                        <h2>${results[i].data.name}</h2>
                                        <p>${results[i].data.city}, ${results[i].data.state}</p>
                                        <p>${results[i].data.date} - ${results[i].data.time}</p>
                                      </div>
                                      <div class="button_container">
                                        <div class="event_buttons">Click to RSVP</div>
                                        <div class="event_buttons">View Event Info</div>
                                      </div>
                                    </article>
                                    `
          }

        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });




}

loadEventList();
