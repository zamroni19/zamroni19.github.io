// scripts.js header

// Smooth scrolling for anchor links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      // Check if the section exists
      if (targetSection) {
          targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});


// scripts.js banner

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Reset dot styles
    dots.forEach(dot => dot.classList.remove("active"));

    // Increment slide index and reset if it exceeds number of slides
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide and add "active" class to current dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // Change slide every 5 seconds
    setTimeout(showSlides, 5000);
}

// Function to jump to specific slide
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// scripts.js profile

// Optional: Scroll animation for profile section
window.addEventListener('scroll', function() {
  const profileSection = document.querySelector('.profile-section');
  const sectionPosition = profileSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
      profileSection.classList.add('fade-in');
  }
});

// scripts.js program sekolah

// Optional: Scroll animation for program section
window.addEventListener('scroll', function() {
  const programSection = document.querySelector('.program-section');
  const sectionPosition = programSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
      programSection.classList.add('fade-in');
  }
});

// scripts.js berita & kegiatan

// Optional: Scroll animation for news section
window.addEventListener('scroll', function() {
  const newsSection = document.querySelector('.news-section');
  const sectionPosition = newsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
      newsSection.classList.add('fade-in');
  }
});

// scripts.js fasilitas

// Optional: Scroll animation for facilities section
window.addEventListener('scroll', function() {
  const facilitiesSection = document.querySelector('.facilities-section');
  const sectionPosition = facilitiesSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
      facilitiesSection.classList.add('fade-in');
  }
});

// scripts.js prestasi

// Optional: Scroll animation for achievements section
window.addEventListener('scroll', function() {
  const achievementsSection = document.querySelector('.achievements-section');
  const sectionPosition = achievementsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
      achievementsSection.classList.add('fade-in');
  }
});

// scripts.js pendaftaran

// Optional: Scroll animation for registration section
window.addEventListener('scroll', function() {
  const registrationSection = document.querySelector('.registration-section');
  const sectionPosition = registrationSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
      registrationSection.classList.add('fade-in');
  }
});






