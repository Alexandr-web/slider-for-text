const slider = () => {
  let count = 0;

  const slides = document.querySelectorAll('.wrapper__list-item-title');
  const btns = document.querySelectorAll('.wrapper__btn');

  const showActiveSlide = index => slides[index].classList.remove('hide');
  const hideSlides = () => slides.forEach(slide => slide.classList.add('hide'));

  hideSlides();
  showActiveSlide(count);

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const data = btn.dataset.btn;
  
      if (data === 'prev') {
        count--;
  
        checkCount();
        hideSlides();
        showActiveSlide(count);
      } else if (data === 'next') {
        count++;
  
        checkCount();
        hideSlides();
        showActiveSlide(count);
      }
    });
  });

  function checkCount() {
    if (count > slides.length - 1) {
      count = 0;
    } 

    if (count < 0) {
      count = slides.length - 1;
    }
  }
}

slider();