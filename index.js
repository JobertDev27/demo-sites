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

const hiddenElems = document.querySelectorAll(".hidden");
hiddenElems.forEach((elem) => {
  observer.observe(elem);
});
