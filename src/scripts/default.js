let trigger_anime_chart = true;
function animeChart() {
  if (trigger_anime_chart)
  {
    $('.bar').each(function(i){
      var $bar = $(this);
      $(this).append('<span class="count"></span>')
      setTimeout(function(){
        $bar.css('width', $bar.attr('data-percent'));
      }, i*100);
    });

    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
        Counter: $(this).parent('.bar').attr('data-percent')
      }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now) +'%');
        }
      });
    });
    trigger_anime_chart = false;
  }
}
