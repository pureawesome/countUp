(function ($) {
  $.fn.countUp = function (options) {
    options = options || {};

    options = $.extend({
            jump: 5,
      			speed: 3
        }, options);

    var self = this,
				$self = $(this),
				data = parseInt($self.attr('data-startnum')) || 2000,
				speed,
        jump;

    function getJump() {
      return Math.floor(Math.random() * options.jump) + 1;
    }

    function getSpeed() {
      return Math.floor(Math.random() * options.speed) + 1;
    }

    function startCount(){
      jump = getJump();
      speed = getSpeed() * 1000;
      data += jump;
      $self.html(data);
      setTimeout(startCount, speed);
    }

    startCount();
  }

}(jQuery));
