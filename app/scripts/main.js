var colors = [
  {
    color: '#3C96DC',
  },
  {
    color: '#3C96DC',
  },
  {
    color: '#281e50',
  },
  {
    color: '#64A03C',
  },
  {
    color: '#FF8C64',
  },
  {
    color: '#FAB614',
  },
  {
    color: '#DA202C',
  },
];

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

setInterval(function() {
  plusDivs(1);
}, 4000);

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('slide');
  var backgroundContainer = document.getElementsByClassName(
    'background-container'
  )[0];
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove('is-active');
  }
  x[slideIndex - 1].classList.add('is-active');
  backgroundContainer.style.backgroundColor = colors[slideIndex].color;
}

function makeNewPosition($container, $elm) {
  // Get viewport dimensions (remove the dimension of the div)
  $container = ($container || $(window))
  var h = $container.height() - $elm.height();
  var w = $container.width() - $elm.width();

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv(elm, container) {
    var $target = $(elm);
    var newq = makeNewPosition(container, elm);
    var oldq = $target.offset();
    var speed = 3500;

    $(elm).animate({
        top: newq[0],
        left: newq[1]
    }, speed);
};

function createCircle(elm, elmContainer, i) {
    var container = $('.background-container');
    $(elmContainer).addClass('element-container');
    $(elm).addClass('circle' + i);

    $(elmContainer).append(elm);
    container.append(elmContainer);

    var randomTime = Math.random * 3000;

    setInterval(function() {
      animateDiv(elm, elmContainer);
    },randomTime);
}

var buildCircles = function() {
  for (var i = 0; i < 60; ++i) {
    var elm = $('<span></span>');
    var elmContainer = $('<div></div>');
    createCircle(elm, elmContainer, i);
  }
};

// buildCircles();
