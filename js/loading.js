// display loading for at least 2 seconds
setTimeout(() => {
  $('.loading-wrapper').css('opacity', '0');
  setTimeout(() => {
    $('.loading-wrapper').css('display', 'none');
  }, 500)
}, 2);
