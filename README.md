<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Luxora Hotel</title>
  <link rel="stylesheet" href="style.css">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>

<header>
  <!-- TOP BAR -->
  <div class="top-bar">
     <div class="top-item">
        <img src="logo.png" class="logo">
     </div>
     <div class="top-item center">
        <i class="fa-solid fa-location-dot"></i>
        Jalan Stesen Sentral 5, KL Sentral, 50470 Kuala Lumpur
     </div>
     <div class="top-item">
        <i class="fa-solid fa-envelope"></i>
        <a href="mailto:info@luxorahotel.gmail.my">info.luxorahotel@gmail.com.my</a>
     </div>
     <div class="top-item">
        <i class="fa-brands fa-whatsapp"></i>
        <a href="https://wa.me/60179326582">+601 7932 6582</a>
     </div>
  </div>

  <div class="line"></div>

  <!-- NAVBAR -->
  <nav class="nav-bar">
     <a href="main.html" class="active">HOME</a>
     <a href="book.html">ROOMS</a>
     <a href="dinner.html">RESTAURANT</a>
     <a href="facilities.html">FACILITIES</a>
     <a href="events.html">EVENTS</a>
     <a href="contact.html">CONTACT US</a>
     <a href="about.html">ABOUT US</a>
  </nav>

  <div class="line"></div>
</header>

<!-- BOOKING BAR -->
<div class="booking-bar">
  <div class="btn-group">
    <div class="date-picker-container">
      <input type="text" id="checkInInput" placeholder="Check In" readonly>
      <input type="text" id="checkOutInput" placeholder="Check Out" readonly>

      <div class="calendar-dropdown" id="calendar">
        <div class="calendar-header">
          <button class="nav" id="prevMonthBtn">‹</button>
          <span id="monthLabel"></span>
          <button class="nav" id="nextMonthBtn">›</button>
        </div>
        <div class="calendar-body">
          <div class="weekdays">
            <span>Sun</span><span>Mon</span><span>Tue</span>
            <span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
          </div>
          <div class="month" id="calendarDays"></div>
        </div>
        <div class="calendar-footer">
          <button id="calendarResetBtn">Reset</button>
          <button id="calendarDoneBtn" class="done">Done</button>
        </div>
      </div>
    </div>

    <div class="field">
      <button id="btnRooms" class="btnRooms">
        <i class="fa fa-user"></i>
        <span id="txtRooms">1 ROOM, 1 ADULT, 1 CHILD</span>
      </button>
      <div id="roomPanel" class="room-panel hidden">
        <div class="row">
          <span>Room</span>
          <button id="roomMinus">-</button>
          <span id="roomCount">1</span>
          <button id="roomPlus">+</button>
        </div>
        <div class="row">
          <span>Adult</span>
          <button id="adultMinus">-</button>
          <span id="adultCount">1</span>
          <button id="adultPlus">+</button>
        </div>
        <div class="row">
          <span>Children</span>
          <button id="childMinus">-</button>
          <span id="childCount">1</span>
          <button id="childPlus">+</button>
        </div>
        <button id="roomDone" class="done-btn">DONE</button>
      </div>
    </div>

    <button class="availability">
      <a href="book.html"> AVAILABILITY</a>
    </button>
  </div>
</div>

<!-- BIG IMAGE -->
<div class="big-img">
  <img src="photo1.jpg" alt="luxora hotel">
</div>

<!-- INFORMATION CONTAINER -->
<div class="info-container">
  <div class="slider">
    <button id="PrevBtn"><i class="fa-solid fa-chevron-left"></i></button>
    <img id="slideImg" src="photo2.jpg" class="slide-pic">
    <button id="NextBtn"><i class="fa-solid fa-chevron-right"></i></button>
  </div>
  <div class="hotel-info">
    <h1>EXPERIENCE, COMFORT, EMBRACE LUXURY</h1>
    <h5>Luxora Hotel is a luxury hotel in the heart of Kuala Lumpur, built in 1980 and beautifully modernized for today's travelers. 
      Located near KL Sentral, it offers stylish rooms, premium comfort, and easy access to the city's main attractions.
      Luxora Hotel combines timeless elegance with modern luxury for a memorable stay.</h5>
  </div>
</div>

<!-- ANOTHER INFORMATION -->
<div class="another-container">
  <div class="info-card">
    <img src="tropical.png" alt="Climate">
    <h3>CLIMATE</h3>
    <p>Tropical</p>
  </div>
  <div class="info-card">
    <img src="money.png" alt="Currency">
    <h3>CURRENCY</h3>
    <p>Ringgit Malaysia (RM)</p>
  </div>
  <div class="info-card">
    <img src="card.png" alt="Credit Card">
    <h3>CREDIT CARD</h3>
    <p>All Major Credit Card Accepted</p>
  </div>
  <div class="info-card">
    <img src="parking.png" alt="Parking">
    <h3>PARKING</h3>
    <p>Complimentary for In-House Guests</p>
    <p>(Except for valet parking service)</p>
  </div>
</div>

<!-- GUEST CONTAINER -->
<div class="guest-container">
  <h1>GUEST ROOM</h1>
  <h5>Just Like Home, Only Better!!</h5>
  <div class="img-grid">
    <div class="img-card">
      <img src="room-2.jpg" alt="room">
      <h1>TWIN DELUXE ROOM</h1>
      <h5>A perfect base with the essentials for a snug stay.</h5>
      <button class="viewBtn"><a href="room2.html">VIEW MORE</a></button>
    </div>
    <div class="img-card">
      <img src="room2.jpg" alt="room">
      <h1>KING DELUXE ROOM</h1>
      <h5>A sanctuary for comfort and simplified luxury.</h5>
      <button class="viewBtn"><a href="room1.html">VIEW MORE</a></button>
    </div>
    <div class="img-card">
      <img src="room3.png" alt="room">
      <h1>SUPERIOR ROOM</h1>
      <h5>A cosy haven with discrete opulence.</h5>
      <button class="viewBtn"><a href="room3.html">VIEW MORE</a></button>
    </div>
    <div class="img-card">
      <img src="room4.jpg" alt="room">
      <h1>PRESIDENTIAL SUITE</h1>
      <h5>Distinctively designed and exquisitely appointed.</h5>
      <button class="viewBtn"><a href="room4.html">VIEW MORE</a></button>
    </div>
  </div>
</div>

<!-- MAP CONTAINER -->
<div class="map-container">
  <div class="left-section">
    <h1>GETTING HERE</h1>
    <h2>LUXORA HOTEL & SUITES</h2>
    <h5>Jalan Stesen Sentral 5, KL Sentral, 50470 Kuala Lumpur</h5>
    <h5><strong>E-mail:</strong> info@luxorahotel.gmail.com</h5>
    <h5><strong>Tel:</strong> +601 7932 6582</h5>

    <!-- Accordion -->
    <div class="accordion">
      <button class="drop-btn">Train</button>
      <div class="dropdown-content"><h5>Kuala Lumpur Sentral<br>Phileo Damansara MRT</h5></div>
    </div>
    <div class="accordion">
      <button class="drop-btn">Airport</button>
      <div class="dropdown-content"><h5>          
          Kuala Lumpur International Airport (KLIA)<br>
          Distance from property: 57.3 KM<br><br>
          Kuala Lumpur International Airport 2 (KLIA2)<br>
          Distance from property: 59.7 KM<br><br>
          Sultan Abdul Aziz Shah Airport (SkyPark)<br>
          Distance from property: 16.2 KM</h5></div>
    </div>
    <div class="accordion">
      <button class="drop-btn">Bus</button>
      <div class="dropdown-content"><h5>Terminal Bersepadu Selatan<br>Kuala Lumpur Sentral</h5></div>
    </div>
    <div class="accordion">
      <button class="drop-btn">Parking Rate</button>
      <div class="dropdown-content"><h5>
          Parking Rates / Per Day<br><br>
          Grace Period - 15 minutes<br>
          Guest (Outlet / Event) - RM 9<br>
          Heavy Vehicle - RM 25 <br>
          Valet Parking - RM 30 Per Entry / Per Day<br><br>
          Clamping - RM 100<br>
          KGPA Members with Sticker - Complimentary<br>
          Motorcycle - Complimentary
      </h5></div>
    </div>
  </div>

  <div class="right-section">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8576661614993!2d101.6849033!3d3.1322910999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c100206e3f%3A0xca9e7285c7ea9d1e!2sJalan%20Stesen%20Sentral%205%2C%2050470%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1767959214853!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>

<!-- ATTRACTIONS -->
<div class="slider-wrapper">
  <button type="button" class="slide-btn left" id="slideLeftBtn">❮</button>
  <div class="slider" id="slider">
    <div class="attraction-card" data-gallery="kl">
      <img src="att1.jpeg"><h4>Petronas Twin Towers</h4>
      <h6>City views</h6>
    </div>

    <div class="attraction-card" data-gallery="batu">
      <img src="att2.png">
      <h4>Batu Caves</h4>
      <h6>Hindu shrines</h6>
    </div>

    <div class="attraction-card" data-gallery="market">
      <img src="att3.png">
      <h4>Food Market</h4>
      <h6>Local spices & crafts</h6>
    </div>

    <div class="attraction-card" data-gallery="park">
      <img src="att4.png">
      <h4>KLCC Park</h4>
      <h6>Lush gardens</h6>
    </div>

    <div class="attraction-card" data-gallery="view">
      <img src="att5.png">
      <h4>City Views</h4>
      <h6>Kuala Lumpur Skyline</h6>
    </div>

    <div class="attraction-card" data-gallery="food">
      <img src="att6.png">
      <h4>Street Food</h4>
      <h6>Malaysian dishes</h6>
    </div>

  </div>
  <button type="button" class="slide-btn right" id="slideRightBtn">❯</button>
</div>

<!-- FOOTER -->
<div class="footer">
  <nav class="nav-bar">
     <a href="main.html">HOME</a>
     <a href="book.html">ROOMS</a>
     <a href="facilities.html">FACILITIES</a>
     <a href="events.html">EVENTS</a>
     <a href="contact.html">CONTACT US</a>
  </nav>
  <div class="line"></div>
  <div class="footer-info">
    <div class="left-section">
      <img src="awards.jpg" alt="hotel awards">
    </div>
    <div class="right-section">
      <h1>FIND US!</h1>
      <div class="row"><i class="fa-brands fa-whatsapp"></i><a href="https://wa.me/60179326582">+601 7932 6582</a></div>
      <div class="row"><i class="fa-solid fa-envelope"></i><a href="mailto:info@luxorahotel.gmail.my">info@luxorahotel.gmail.my</a></div>
      <div class="row"><i class="fa-solid fa-location-dot"></i>Jalan Stesen Sentral 5, KL Sentral</div>
      <div class="below-right-section">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
      </div>
    </div>
  </div>
</div>

<!-- ScrollTopBtn -->
<button id="scrollTopBtn">&#8679;</button>

<!-- GALLERY MODAL -->
<div class="gallery-modal" id="galleryModal">
  <div class="gallery-box">
    <span class="close-btn">✕</span>
    <div class="gallery-grid" id="galleryGrid"></div>
  </div>
</div>

<script src="luxora.js" defer></script>

</body>
</html>
