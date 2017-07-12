function deferLoadImages() {
  var imgDefer = document.getElementsByClassName('img-lazy');

  for (var i = 0; i < imgDefer.length; i++) {
    if(imgDefer[i].getAttribute('data-lazy-src')) {
      imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-lazy-src'));
    }
  }
}

deferLoadImages();
