// luxora.js
document.addEventListener("DOMContentLoaded", () => {

  /* ==================== SLIDER (ATTRACTIONS / MAIN PAGE) ==================== */
  const slider = document.getElementById("slider");
  if (slider) {
    window.slideLeft = () => slider.scrollLeft -= 260;
    window.slideRight = () => slider.scrollLeft += 260;

    document.getElementById("slideLeftBtn")?.addEventListener("click", window.slideLeft);
    document.getElementById("slideRightBtn")?.addEventListener("click", window.slideRight);

    document.querySelectorAll(".attraction-card").forEach(card => {
      card.addEventListener("click", () => {
        const galleryName = card.dataset.gallery;
        openGallery(galleryName);
      });
    });
  }

  /* ==================== GALLERY (ATTRACTIONS) ==================== */
  const galleries = {
    kl: ["att1.jpeg","kl1.png","kl2.png","kl3.jpeg","kl4.png","kl5.png","kl6.png","kl7.png"],
    batu: ["att2.png","batu1.png","batu2.png","batu3.png","batu4.png","batu5.png","batu6.png","batu7.jpeg"],
    market: ["att3.png","market1.png","market2.png","market3.png","market4.png","market5.png","market6.png","market7.jpeg"],
    park: ["att4.png","park1.png","park2.png","park3.png","park4.png","park5.png","park6.jpeg","park7.jpeg"],
    view: ["att5.png","view1.png","view2.png","view3.png","view4.png","view5.png","view6.png","view7.jpeg"],
    food: ["att6.png","food1.png","food2.png","food3.png","food4.png","food5.png","food6.jpeg","food7.jpeg"]
  };

  const galleryModal = document.getElementById("galleryModal");
  const galleryGrid = document.getElementById("galleryGrid");
  const closeBtn = document.querySelector(".close-btn");

  if (galleryModal && galleryGrid && closeBtn) {
    window.openGallery = (name) => {
      galleryGrid.innerHTML = "";
      galleries[name].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        galleryGrid.appendChild(img);
      });
      galleryModal.style.display = "flex";
    };

    closeBtn.addEventListener("click", () => {
      galleryModal.style.display = "none";
    });
  }

  /* ==================== HOTEL IMAGE SLIDER ==================== */
  const slideImg = document.getElementById("slideImg");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (slideImg && nextBtn && prevBtn) {
    const images = ["photo2.jpg","photo3.jpg","photo4.jpg"];
    let currentIndex = 0;

    const updateImage = () => slideImg.src = images[currentIndex];

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });
  }

  /* ==================== EVENTS PAGE SLIDER WITH DOTS ==================== */
  const slidesImg = document.getElementById("slidesImg");
  const eventsNext = document.getElementById("nextBtn");
  const eventsPrev = document.getElementById("prevBtn");
  const dotsContainer = document.getElementById("dots");

  if (slidesImg && eventsNext && eventsPrev && dotsContainer) {
    const images = ["photo6.jpg","photo7.jpg","photo8.jpg","photo9.jpg","photo10.jpg"];
    let currentIndex = 0;

    // create dots
    dotsContainer.innerHTML = "";
    images.forEach((_, idx) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (idx === 0) dot.classList.add("active");
      dotsContainer.appendChild(dot);
      dot.addEventListener("click", () => {
        currentIndex = idx;
        updateSlide();
      });
    });
    const dots = dotsContainer.querySelectorAll(".dot");

    function updateSlide() {
      slidesImg.src = images[currentIndex];
      dots.forEach(dot => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
    }

    eventsNext.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlide();
    });
    eventsPrev.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlide();
    });
  }

  /* ==================== CALENDAR ==================== */
  const calendar = document.getElementById("calendar");
  const checkInInput = document.getElementById("checkInInput");
  const checkOutInput = document.getElementById("checkOutInput");

  if (calendar && checkInInput && checkOutInput) {
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let currentDate = new Date();
    let mode = "in";
    let checkInDate = null;
    let checkOutDate = null;

    const monthLabel = document.getElementById("monthLabel");
    const calendarDays = document.getElementById("calendarDays");

    const calendarPrev = calendar.querySelector(".calendar-header button:first-child");
    const calendarNext = calendar.querySelector(".calendar-header button:last-child");
    const resetBtn = calendar.querySelector(".calendar-footer button:first-child");
    const doneBtn = calendar.querySelector(".calendar-footer button.done");

    const renderCalendar = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      monthLabel.innerText = `${monthNames[month]} ${year}`;
      calendarDays.innerHTML = "";

      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      // empty slots
      for (let i = 0; i < firstDay; i++) calendarDays.appendChild(document.createElement("div"));

      // days
      for (let d = 1; d <= daysInMonth; d++) {
        const div = document.createElement("div");
        div.className = "day";
        div.innerText = d;
        div.addEventListener("click", () => {
          const chosen = new Date(year, month, d);
          const label = chosen.toLocaleDateString();
          if (mode === "in") {
            checkInDate = chosen;
            checkOutDate = null;
            checkInInput.value = label;
            checkOutInput.value = "";
          } else {
            if (!checkInDate || chosen <= checkInDate) {
              alert("Invalid Check Out date");
              return;
            }
            checkOutDate = chosen;
            checkOutInput.value = label;
          }
          calendar.style.display = "none";
        });
        calendarDays.appendChild(div);
      }
    };

    checkInInput.addEventListener("click", () => { mode = "in"; calendar.style.display = "block"; renderCalendar(); });
    checkOutInput.addEventListener("click", () => { mode = "out"; calendar.style.display = "block"; renderCalendar(); });
    calendarPrev.addEventListener("click", () => { currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(); });
    calendarNext.addEventListener("click", () => { currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(); });
    resetBtn.addEventListener("click", () => { checkInDate = checkOutDate = null; checkInInput.value = ""; checkOutInput.value = ""; renderCalendar(); });
    doneBtn.addEventListener("click", () => { calendar.style.display = "none"; });

    renderCalendar();
  }

  /* ==================== ROOM COUNTER ==================== */
  const roomPanel = document.getElementById("roomPanel");
  if (roomPanel) {
    const roomCount = document.getElementById("roomCount");
    const adultCount = document.getElementById("adultCount");
    const childCount = document.getElementById("childCount");

    document.getElementById("roomPlus").addEventListener("click", () => roomCount.innerText++);
    document.getElementById("roomMinus").addEventListener("click", () => roomCount.innerText > 1 && roomCount.innerText--);
    document.getElementById("adultPlus").addEventListener("click", () => adultCount.innerText++);
    document.getElementById("adultMinus").addEventListener("click", () => adultCount.innerText > 1 && adultCount.innerText--);
    document.getElementById("childPlus").addEventListener("click", () => childCount.innerText++);
    document.getElementById("childMinus").addEventListener("click", () => childCount.innerText > 0 && childCount.innerText--);

    document.getElementById("roomDone").addEventListener("click", () => {
      roomPanel.classList.add("hidden");
      document.getElementById("txtRooms").innerText =
        `${roomCount.innerText} ROOM, ${adultCount.innerText} ADULT, ${childCount.innerText} CHILD`;
    });

    document.getElementById("btnRooms").addEventListener("click", () => roomPanel.classList.toggle("hidden"));
  }

  /* ==================== MAP DROPDOWN ==================== */
  document.querySelectorAll(".drop-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const content = btn.nextElementSibling;
      content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px";
    });
  });

  /* ==================== SCROLL TO TOP ==================== */
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none");
    scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

});
