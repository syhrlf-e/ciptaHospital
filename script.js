const hamburger = document.getElementById("hamburger");
const menuMobile = document.getElementById("menuMobile");

hamburger.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});

document.querySelectorAll("#menuMobile a").forEach((link) => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("active");
  });
});

document.querySelectorAll("#scrollKeLayanan").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: "#layanan",
        offsetY: -100,
      },
      ease: "power2.out",
    });
  });
});

document.querySelectorAll(".scrollKeDokter").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: "#dokter",
        offsetY: -80,
      },
      ease: "power2.out",
    });
  });
});

document.querySelectorAll(".scrollKeKontak").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: "#kontak",
        offsetY: 100,
      },
      ease: "power2.out",
    });
  });
});

gsap.to(".card-1", {
  y: -10,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

gsap.to(".card-2", {
  y: -15,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

gsap.to(".card-3", {
  y: -12,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});
