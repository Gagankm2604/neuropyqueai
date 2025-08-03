const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const tabId = tab.dataset.tab;
    document.querySelectorAll(".cards").forEach(c => c.classList.add("hidden"));
    document.getElementById(tabId).classList.remove("hidden");
  });
});



  const scrollContainer = document.querySelector(".trending-carousel");
  let scrollAmount = 0;

  setInterval(() => {
    scrollAmount += 260;
    if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
      scrollAmount = 0;
    }
    scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }, 3000);



// testimonal 
const testimonials = [
  {
    quote: "Colan Infotech has done a great job in developing my health & wellness marketplace...",
    name: "DEEPIKA UMASHANKAR",
    role: "Trialetics LLP, Partner",
    image: "https://i.ibb.co/zr2XzkX/deepika.jpg",
    video: "https://img.youtube.com/vi/ScMzIvxBSi4/0.jpg"
  },
  {
    quote: "Their communication and dedication to deadlines are top-notch!",
    name: "ALEX TANNER",
    role: "CTO, FitProX",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    video: "https://img.youtube.com/vi/rUWxSEwctFU/0.jpg"
  },
  {
    quote: "We launched faster than expected. Amazing tech team!",
    name: "PRIYA MEHRA",
    role: "CEO, MindBloom",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    video: "https://img.youtube.com/vi/K4TOrB7at0Y/0.jpg"
  },
  {
    quote: "They solved every bug like pros. Very professional.",
    name: "JAMES CARTER",
    role: "Product Lead, SnapBridge",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    video: "https://img.youtube.com/vi/tgbNymZ7vqY/0.jpg"
  },
  {
    quote: "Superb UI/UX design. My users love the interface.",
    name: "ANJALI RAWAT",
    role: "Founder, ZenStore",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    video: "https://img.youtube.com/vi/LXb3EKWsInQ/0.jpg"
  },
  {
    quote: "Reliable, skilled, and very responsive team!",
    name: "MARK WILLIAMS",
    role: "COO, eComm Pro",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    video: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
  }
];

let currentSlide = 0;
const slider = document.getElementById("slider");

function createSlides() {
  slider.innerHTML = testimonials.map(testimonial => `
    <div class="slide">
      <div class="testimonial-left">
        <p class="testimonial-quote">“${testimonial.quote}”</p>
        <div class="client-info">
          <img src="${testimonial.image}" alt="${testimonial.name}">
          <div>
            <div class="client-name">${testimonial.name}</div>
            <div class="client-role">${testimonial.role}</div>
          </div>
        </div>
      </div>
      <div class="testimonial-right">
        <div class="video-wrapper">
          <img src="${testimonial.video}" alt="Video Thumbnail">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </div>
  `).join("");
}

function showSlide(index) {
  const totalSlides = testimonials.length;
  if (index < 0) currentSlide = totalSlides - 1;
  else if (index >= totalSlides) currentSlide = 0;
  else currentSlide = index;

  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

createSlides();
showSlide(currentSlide);
setInterval(nextSlide, 5000); // auto-slide every 5 seconds






