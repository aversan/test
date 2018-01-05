import ismobile from 'ismobilejs';
import $ from 'jquery';

$(() => {
  // 60fps scrolling using pointer-events: none
  // https://habrahabr.ru/post/204238/

  const { body } = document;
  let timer;

  window.addEventListener('scroll', () => {
    clearTimeout(timer);
    if (!body.classList.contains('disable-hover')) {
      body.classList.add('disable-hover');
    }
    timer = setTimeout(() => {
      body.classList.remove('disable-hover');
    }, 500);
  }, false);

  if (ismobile.phone) {
    body.classList.add('is-mobile');
  } else if (ismobile.tablet) {
    body.classList.add('is-tablet');
  }
});
