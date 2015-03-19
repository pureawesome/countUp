A simple jQuery plugin that dynamically updates based upon jump and speed variables.  Speed (in seconds) and jump are random between 1 and the variables passed in the function call. Default: speed: 3 and jump: 5.

Example:

$('.countup').countUp();

or

$('.countup2').countUp({
     speed: 20,
     jump: 100
   })
