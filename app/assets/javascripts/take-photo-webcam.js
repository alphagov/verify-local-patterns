window.takePhotoWebcam = (function () {

  function enableWebcam(videoEl) {
    return navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false })
      .then(function(stream) {
        videoEl.srcObject = stream
        videoEl.play()
      })
  }

  function setVideoSizes(videoEl, imageEl) {
    return new Promise(function (resolve, reject) {
      function captureSize() {
        videoEl.removeEventListener('canplay', captureSize)
        var height = videoEl.videoHeight / (videoEl.videoWidth / videoEl.width)
        videoEl.setAttribute('height', height)
        imageEl.setAttribute('height', height)
        imageEl.setAttribute('width', videoEl.width)
        resolve()
      }
      videoEl.addEventListener('canplay', captureSize, false)
    })
  }

  function q(selector) {
    return document.querySelector(selector)
  }

  function hide(el) {
    return el.style.display = 'none'
  }

  function show(el) {
    return el.style.display = 'block'
  }

  function captureImage(videoEl) {
    var canvasEl = document.createElement('canvas')
    var context = canvasEl.getContext('2d')
    canvasEl.width = videoEl.width
    canvasEl.height = videoEl.height
    context.drawImage(videoEl, 0, 0, videoEl.width, videoEl.height)
    return canvasEl.toDataURL('image/png')
  }

  function doesBrowserSupport() {
    return window.Promise &&
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia
  }

  function error(err) {
    hide(q('#start-section'))
    show(q('#cannot-section'))
    console.error(err)
  }

  return {
    start: function () {
      if (!doesBrowserSupport()) { return error('no browser support') }

      enableWebcam(q('#webcam-video'))
      .then(setVideoSizes(q('#webcam-video'), q('#webcam-photo')))
      .then(function () {hide(q('#start-section'))})
      .then(function () {show(q('#capture-section'))})
      .catch(error)
    },

    captureImage: function () {
      $('#blackbox').fadeIn(10);
      q('#webcam-photo').src = captureImage(q('#webcam-video'))
      hide(q('#capture-section'))
      $('h1').text('Confirm your photo');
      show(q('#upload-section'))
      $('#blackbox').fadeOut(2000);
    },

    showCaptureSection: function () {
      hide(q('#upload-section'))
      $('h1').text('Take a photo for your bus pass');
      show(q('#capture-section'))
    },

    usePhoto: function(){
      localStorage.setItem('photo', captureImage(q('#webcam-video')))
      window.location.href = "loading";
    }

  }

}())
