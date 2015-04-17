var constraints = {audio: true, video: false};
var bg = chrome.extension.getBackgroundPage();
bg.console.log("started");


document.addEventListener('DOMContentLoaded', function() {


function successCallback(stream) {
  bg.console.log('entered success callback')
  window.stream = stream; // stream available to console
  if (window.URL) {
    audio.src = window.URL.createObjectURL(stream);
  } else {
    audio.src = stream;
  }
}

function errorCallback(error){
  bg.console.log('navigator.getUserMedia error: ', error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);

  // bg.console.log(mediaStream);

  var startButton = document.getElementById('startButton');
  startButton.addEventListener('click', function() {
    bg.console.log('Clicked Start Button');

    
    var recordRTC = RecordRTC(mediaStream); 
    bg.console.log('Clicked Start Button');
    recordRTC.startRecording(function() {
      bg.console.log('recording started');
    }); 
    bg.console.log("didn't crash");
  });

  var stopButton = document.getElementById('stopButton');
  stopButton.addEventListener('click', function() {
    bg.console.log('Clicked Stop Button');

    recordRTC.stopRecording(function(audioURL) { 
          bg.console.log('stopped recording');
          mediaElement.src = audioURL;
          bg.console.log(audioURL); 
      });
  });

});