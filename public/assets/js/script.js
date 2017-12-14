particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
$(document).ready(function(){
   $('.parallax').parallax()
   var app = document.getElementById('typewriter');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('Hello there!')
        .pauseFor(1000)
        .deleteAll()
        .typeString('My name is Joseph')
        .pauseFor(500)
        .deleteChars(17)
        .typeString("I'm a full stack web developer!")
        .pauseFor(1000)
        .start()

    $(".button-collapse").sideNav()
    $('.scrollspy').scrollSpy()

 })
