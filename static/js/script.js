var DESKTOP = '(min-width: 990px)';
var TABLET = '(min-width: 500px)';

var DESKTOP_EXTENSION = '_1024';
var TABLET_EXTENSION = '_800';
var MOBILE_EXTENSION = '_640';

function deferLoadImages() {
  var imgDefer = document.getElementsByClassName('img-lazy');

  for (var i = 0; i < imgDefer.length; i++) {
    if(imgDefer[i].getAttribute('data-lazy-src')) {
      var isSrcSet = imgDefer[i].getAttribute('data-is-src-set') === 'is-src-set';
      var isThumb = imgDefer[i].getAttribute('data-is-thumb') === 'is-thumb';

      var src = imgDefer[i].getAttribute('data-lazy-src');

      if (isThumb) {
        imgDefer[i].setAttribute('src', getThumbSrc(src));
      } else {
        imgDefer[i].setAttribute('src', isSrcSet ? getMediaQueriedSrc(src) : src);
      }
    }
  }
}

function getMediaQueriedSrc(src) {
  var extension = src.split('.').pop();

  /* the viewport is at least XX pixels wide */
  if (window.matchMedia(DESKTOP).matches) {
    return src.replace(/\.[^/.]+$/, DESKTOP_EXTENSION + '.' + extension);
  } else if (window.matchMedia(TABLET).matches) {
    return src.replace(/\.[^/.]+$/, TABLET_EXTENSION + '.' + extension);
  } else {
    return src.replace(/\.[^/.]+$/, MOBILE_EXTENSION + '.' + extension);
  }
}

function getThumbSrc(src) {
  var extension = src.split('.').pop();
  return src.replace(/\.[^/.]+$/, MOBILE_EXTENSION + '.' + extension);
}

deferLoadImages();
