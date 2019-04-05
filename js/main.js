portfolioAll.onclick = function() {
  portfolioBar.className = "bar state-1"
}

portfolioVallina.onclick = function() {
  portfolioBar.className = "bar state-2"
}

portfolioFramework.onclick = function() {
  portfolioBar.className = "bar state-3"
}


$(window).on('scroll', (event) => {
  // console.log(window.scrollY);
  if (window.scrollY > 0) {
    $('#topNavBar').addClass('notTop');
  } else {
    $('#topNavBar').removeClass('notTop');
  }
});

$('#topNavBar > nav li > a').each((index, el) => {
  if ($(el).attr('href').length === 0) return;
  $(el).on('click', (event) => {
    event.preventDefault();
    let target = $(event.target).attr('href');
    let disToTop = $(target).offset().top;
    $('html, body').animate({
        scrollTop: parseInt(disToTop - 100, 10),
    }, 300);
  });
});

// init distance
$('[data-distance]').each((index, el) => {
  $(el).attr('data-distance', $(el).offset().top);
  $(el).addClass('slideDown');
});

$(window).on('scroll', (event) => {
  const Offset = 73;
  let minIndex = 0;
  const windowDis = $(window).scrollTop();
  let curDis = Math.abs($('[data-distance]').eq(minIndex).attr('data-distance') - windowDis);
  $('[data-distance]').each((index, el) => {
    let dis = Math.abs($(el).attr('data-distance') - windowDis - Offset);
    if (dis < curDis) {
      curDis = dis;
      minIndex = index;
    }
  });
  let id = $('[data-distance]').eq(minIndex).attr('id');
  let $target = $('a[href="#' + id + '"]').parent();
  $target.siblings('li').each((index, el) => {
    $(el).removeClass('current');
  });
  $target.addClass('current');

  $('[data-distance]').eq(minIndex).removeClass('slideDown');

});
