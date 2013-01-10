
function getPhoneGapPath() {
    var path = window.location.pathname;
    path = path.substr( path, path.length - 10 )+'pliki/';
	return path;
};

        // Audio player
        //
        var my_media = null;
        var mediaTimer = null;

        // Play audio
        //
        function graj(src) {
			src=getPhoneGapPath()+src;
            if (my_media == null) {
                try {my_media = new Media(src, mediaonSuccess, mediaonError);}
				catch(er){}
            } 
            try {my_media.play();}
			catch(er){}
		}


        function playAudio(src) {
			src=getPhoneGapPath()+src;
            if (my_media == null) {
                my_media = new Media(src, onSuccess, onError);
            }
            my_media.play();

            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    my_media.getCurrentPosition(
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " sec");
                            }
                        },
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
        }

        // Pause audio
        // 
        function pauseAudio() {
            if (my_media) {
                my_media.pause();
            }
        }

        // Stop audio
        // 
        function stopAudio() {
            if (my_media) {
                my_media.stop();
            }
            clearInterval(mediaTimer);
            mediaTimer = null;
        }

        // onSuccess Callback
        //
        function mediaonSuccess() {
            //console.log("playAudio():Audio Success");
        }

        // onError Callback 
        //
        function mediaonError(error) {
            //alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
        }

        // Set audio position
        // 
        function setAudioPosition(position) {
            //document.getElementById('audio_position').innerHTML = position;
        }
