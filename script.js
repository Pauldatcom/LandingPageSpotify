document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".text-animate");
  const text = "Dis Spotify... et laissez la magie opérer !";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }

  typeEffect();
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".preloader img", { opacity: 1, duration: 2 });
  gsap.to(".preloader h1", { opacity: 1, duration: 28, delay: 0.5 });

  setTimeout(() => {
    gsap.to(".preloader", {
      opacity: 0,
      duration: 3,
      onComplete: () => {
        document.querySelector(".preloader").style.display = "none";
      },
    });
    gsap.to("body", { opacity: 1, duration: 1 });
    gsap.to(".hero", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
      ease: "power2.out",
    });
    gsap.to(".btn-spotify", { opacity: 1, duration: 1, delay: 1 });
  }, 2000);
});

gsap.utils.toArray(".feature-box").forEach((box) => {
  gsap.from(box, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});

gsap.utils.toArray("img").forEach((img) => {
  gsap.from(img, {
    opacity: 0,
    scale: 0.9,
    duration: 1.5,
    scrollTrigger: {
      trigger: img,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector('a[href="#features"]')
    .addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector("#features")
        .scrollIntoView({ behavior: "smooth" });
    });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.getElementById("video2").src = "images/HommeParleaSonTel.mp4";

function loadHLS(videoElement, source) {
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(source);
    hls.attachMedia(videoElement);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      videoElement.play();
    });
  } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
    videoElement.src = source;
    videoElement.addEventListener("loadedmetadata", function () {
      videoElement.play();
    });
  }
}

if (Hls.isSupported()) {
  var video = document.getElementById("bgVideo");
  var hls = new Hls();
  hls.loadSource("images/backgroundheader.m3u8"); // Remplace avec le lien de ton fichier
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
}

if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = "images/backgroundheader.m3u8"; // Remplace avec le lien de ton fichier
  video.addEventListener("loadedmetadata", function () {
    video.play();
  });
}

loadHLS(
  document.getElementById("video1"),
  "images/N02wFMpEuFkK4ZiODwLRvxDlLic4ZOi02OdElEOuWR00ZY.m3u8"
);
loadHLS(
  document.getElementById("videoM3U8-2"),
  "images/URfplzvJXKHZwQdF02ePBb00CloawYqM2F9DPpOGTQCHA.m3u8"
);
loadHLS(
  document.getElementById("videoM3U8-1"),
  "images/GJe67Llrfb2OEAWtY9WqZkBdUUqz01MS00jeFveH9svjY.m3u8"
);
