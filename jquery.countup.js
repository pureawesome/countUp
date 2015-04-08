(function ($) {
  $.fn.countUp = function (options) {
    options = options || {};

    options = $.extend({
            jumpMin: 1,
            jumpMax: 5,
      			speedMin: 1,
            speedMax: 5
        }, options);

    var self = this,
				$self = $(this),
				data = parseInt($self.attr('data-startnum')) || 2000,
				speed,
        jump;

    function getJump() {
      return Math.floor(Math.random() * (options.jumpMax - options.jumpMin + 1)) + options.jumpMin;
    }

    function getSpeed() {
      return Math.floor(Math.random() * (options.speedMax - options.speedMin + 1)) + options.speedMin;
    }

    function translateForCSS(data) {
      setTimeout(function(){
        var dataArray = data.toString().split('');
        var spanArray = [];
        for (var i = 0; i < dataArray.length; i++){
          spanArray.push('<span class="digit digit'+dataArray[i]+' digit'+(dataArray[i]+1)+' ">'+dataArray[i]+'</span>');
        }
        var htmlArray = spanArray.join('');
        writeOut(htmlArray);
      }, 1000);
    }

    function writeOut(data){
      $self.html(data);
    }

    function startCount(){

      jump = getJump();
      speed = getSpeed() * 1000;
      console.log(jump,speed);
      data += jump;
      $self.html(data);
    //  translateForCSS(data);


      setTimeout(startCount, speed);
    }
  //  translateForCSS(data);
    startCount();
  }

}(jQuery));
