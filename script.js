const hamburger = document.getElementById("hamburger");
const menuMobile = document.getElementById("menuMobile");

// Toggle menu saat klik hamburger
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  menuMobile.classList.toggle("active");
});

document.querySelectorAll("#menuMobile a").forEach((link) => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  const isClickInsideMenu = menuMobile.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    menuMobile.classList.remove("active");
  }
});

document.querySelectorAll("#scrollKeTentangKami").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: "#tentang-kami",
        offsetY: 15,
      },
      ease: "power2.out",
    });
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

function fiturBelumTersedia() {
  Swal.fire({
    title: "Maaf Ya!",
    text: "Fitur ini Masih dalam tahap pengembangan",
    icon: "info",
    confirmButtonText: "Okey",
  });
}

function fiturTahapPengembangan() {
  Swal.fire({
    title: "Maaf Ya!",
    text: "Fitur ini Masih dalam tahap pengembangan, Kami akan melakukan yang terbaik untuk anda",
    icon: "info",
    confirmButtonText: "Okey",
  });
}

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

gsap.to(".bef7", {
  x: -1000,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

gsap.to(".bef8", {
  x: -1000,
  duration: 7,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});
