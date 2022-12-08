const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
};

// const appearOnScroll = () => {
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("appear-active");
      observer.unobserve(entry.target);
    }
    // else {
    //   entry.target.classList.remove("appear-active");
    // }
  });
}, appearOptions);
const hiddenElements = document.querySelectorAll(".appear");
hiddenElements.forEach((el) => {
  observer.observe(el);
});
// };

// export default appearOnScroll;
