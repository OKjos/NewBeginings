let slideIndex = 0;


document.addEventListener('DOMContentLoaded', () => {
  carousel();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          entry.target.classList.remove('hidden');
        } else {
          entry.target.classList.remove('show');
          entry.target.classList.add('hidden');
        }
      });
    },
    {
      threshold: 0,
    }
  );


  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
});


function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  if (x.length > 0) {
    x[slideIndex - 1].style.display = "block";
  }
  setTimeout(carousel, 2010);
}