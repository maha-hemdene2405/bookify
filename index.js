document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const destination = document.getElementById("destination").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const guests = document.getElementById("guests").value;

  // Send AJAX request to server to get room availability
  fetch(`/search_rooms.php?destination=${destination}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`)
      .then(response => response.json())
      .then(data => {
          let roomResults = document.getElementById("roomResults");
          roomResults.innerHTML = '';
          if (data.length > 0) {
              data.forEach(room => {
                  roomResults.innerHTML += `
                      <div class="room">
                          <h3>${room.room_name}</h3>
                          <p>Price: $${room.price}</p>
                          <p>Available from: ${room.available_from} to ${room.available_to}</p>
                      </div>
                  `;
              });
          } else {
              roomResults.innerHTML = "No available rooms found.";
          }
      });
});
