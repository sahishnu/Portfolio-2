<<<<<<< HEAD
//Raining effect
var makeItRain = function() {
  //clear out everything
  $(".rain").empty();

  var increment = 0;
  var makeItRain = function() {
    //clear out everything
    $(".rain").empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      //random number between 5 and 2
      var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops +=
        '<div class="drop" style="left: ' +
        increment +
        "%; bottom: " +
        (randoFiver + randoFiver - 1 + 100) +
        "%; animation-delay: 0." +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"><div class="stem" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div><div class="splat" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div></div>';
      backDrops +=
        '<div class="drop" style="right: ' +
        increment +
        "%; bottom: " +
        (randoFiver + randoFiver - 1 + 100) +
        "%; animation-delay: 0." +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"><div class="stem" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div><div class="splat" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div></div>';
    }

    $(".rain.front-row").append(drops);
    $(".rain.back-row").append(backDrops);
  };

  $(".splat-toggle.toggle").on("click", function() {
    $("body").toggleClass("splat-toggle");
    $(".splat-toggle.toggle").toggleClass("active");
    makeItRain();
  });

  $(".back-row-toggle.toggle").on("click", function() {
    $("body").toggleClass("back-row-toggle");
    $(".back-row-toggle.toggle").toggleClass("active");
    makeItRain();
  });

  $(".single-toggle.toggle").on("click", function() {
    $("body").toggleClass("single-toggle");
    $(".single-toggle.toggle").toggleClass("active");
    makeItRain();
  });

  makeItRain();

  //Flipping texts
  (function() {
    var word = [
      "Mathematics",
      "Computer Sc.",
      "AI (ML, DL, NLP)",
      "Robotics",
      "Cybersecurity",
      "Fine Art",
      "Education"
    ];
    var element = document.getElementsByTagName("p")[0];
    var wordIndex = 1;

    var resetAnimation = function() {
      element.classList.remove("flip");
    };

    setInterval(function() {
      switch (wordIndex) {
        case 0:
          element.classList.add("flip");
          element.textContent = word[wordIndex];
          wordIndex = 1;
          setTimeout(resetAnimation, 1000);
          break;

        case 1:
          element.classList.add("flip");
          element.textContent = word[wordIndex];
          wordIndex = 2;
          setTimeout(resetAnimation, 1000);
          break;

        case 2:
          element.classList.add("flip");
          element.textContent = word[wordIndex];
          wordIndex = 3;
          setTimeout(resetAnimation, 1000);
          break;

        case 3:
          element.classList.add("flip");
          element.textContent = word[wordIndex];
          wordIndex = 4;
          setTimeout(resetAnimation, 1000);
          break;

        case 4:
          element.classList.add("flip");
          element.textContent = word[wordIndex];
          wordIndex = 5;
          setTimeout(resetAnimation, 1000);
          break;

        case 5:
          element.classList.add("flip");
          element.textContent = word[wordIndex];
          wordIndex = 6;
          setTimeout(resetAnimation, 1000);
          break;

        case 6:
          element.classList.add("flip");
          element.textContent = word[wordIndex];
          wordIndex = 0;
          setTimeout(resetAnimation, 1000);
          break;
      }
    }, 2000);
  })();
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    //random number between 5 and 2
    var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops +=
      '<div class="drop" style="left: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
    backDrops +=
      '<div class="drop" style="right: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
  }

  $(".rain.front-row").append(drops);
  $(".rain.back-row").append(backDrops);
};

$(".splat-toggle.toggle").on("click", function() {
  $("body").toggleClass("splat-toggle");
  $(".splat-toggle.toggle").toggleClass("active");
  makeItRain();
});

$(".back-row-toggle.toggle").on("click", function() {
  $("body").toggleClass("back-row-toggle");
  $(".back-row-toggle.toggle").toggleClass("active");
  makeItRain();
});

$(".single-toggle.toggle").on("click", function() {
  $("body").toggleClass("single-toggle");
  $(".single-toggle.toggle").toggleClass("active");
  makeItRain();
});

makeItRain();

=======
>>>>>>> 95082a41c7e8c2f94c549e56256462f2e1b70bdc
//Flipping texts
(function() {
  var word = [
    "Mathematics",
    "Computer Sc.",
    "AI (ML, DL, NLP)",
    "Robotics",
    "Cybersecurity",
    "Fine Art",
    "Education"
  ];
  var element = document.getElementsByTagName("p")[0];
  var wordIndex = 1;

  var resetAnimation = function() {
    element.classList.remove("flip");
  };

  setInterval(function() {
    switch (wordIndex) {
      case 0:
        element.classList.add("flip");
        element.textContent = word[wordIndex];
        wordIndex = 1;
        setTimeout(resetAnimation, 1000);
        break;

      case 1:
        element.classList.add("flip");
        element.textContent = word[wordIndex];
        wordIndex = 2;
        setTimeout(resetAnimation, 1000);
        break;

      case 2:
        element.classList.add("flip");
        element.textContent = word[wordIndex];
        wordIndex = 3;
        setTimeout(resetAnimation, 1000);
        break;

      case 3:
        element.classList.add("flip");
        element.textContent = word[wordIndex];
        wordIndex = 4;
        setTimeout(resetAnimation, 1000);
        break;

      case 4:
        element.classList.add("flip");
        element.textContent = word[wordIndex];
        wordIndex = 5;
        setTimeout(resetAnimation, 1000);
        break;

      case 5:
        element.classList.add("flip");
        element.textContent = word[wordIndex];
        wordIndex = 6;
        setTimeout(resetAnimation, 1000);
        break;

      case 6:
        element.classList.add("flip");
        element.textContent = word[wordIndex];
        wordIndex = 0;
        setTimeout(resetAnimation, 1000);
        break;
    }
  }, 2000);
})();
