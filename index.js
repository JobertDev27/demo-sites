const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry);
      }
    });
  },
  { threshold: 0.3 }
);

const lesserObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry);
      }
    });
  },
  { threshold: 0.2 }
);

const hiddenElems = document.querySelectorAll(".hidden");
hiddenElems.forEach((elem) => {
  observer.observe(elem);
});

const lessHiddenElems = document.querySelectorAll(".less-hidden");
lessHiddenElems.forEach((elem) => {
  lesserObserver.observe(elem);
});
