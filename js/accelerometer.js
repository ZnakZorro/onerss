    function playBeep() {
        navigator.notification.beep(1);
    }
    function vibrate() {
        navigator.notification.vibrate(200);
    }


//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
var watchLastX=0;
var watchLastY=0;
var watchLastZ=0;

	var scroll_position=0;
	var scroll_step=30;
	
	function scrollNow(poz){
		if (poz>0) {scroll_position=scroll_position+scroll_step;}
		if (poz<0) {scroll_position=scroll_position-scroll_step;}
		//console.log(scroll_position);
 		window.scrollTo(0,scroll_position);
		
		}

    function startWatch() {
        var options = { frequency: 2000 };
		try {watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);}
		catch(er){}
    }

    // Stop watching the acceleration
    function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
    }

    // onSuccess: Get a snapshot of the current acceleration
    function onSuccess(acceleration) {
		if (acceleration){
			var deltaX=acceleration.x - watchLastX;
			var deltaY=acceleration.y - watchLastY;
			var deltaZ=acceleration.z - watchLastZ;
			var suma=deltaY+deltaZ;
			var sumaa=acceleration.y+acceleration.z;
			watchLastY = acceleration.y;
			//$('#title').innerHTML=' : '+acceleration.z;
			//$('#infotest').innerHTML='A :x:'+acceleration.x+' :y:'+acceleration.y+' :z:'+acceleration.z+' :s:'+sumaa+'<br />';
			//$('#infotest').innerHTML+='D :x:'+deltaX+' :y:'+deltaY+' :z:'+deltaZ+' :s:'+suma+'<br />';
			//if (suma < -3) {goback(); return;}
			//if (suma > 9)  {gonext(); return;}
		
			//if (acceleration.z <3)  {vibrate();gonext(); return;}
//acceleration.z=Math.random()*10;
var zz=Math.round(acceleration.z * 100);			
var kolor='#'+zz+zz+zz;
$('#title').style.color=kolor;
$('#test').style.display='block';
$('#test').innerHTML=(zz);
			
			if (acceleration.z >8)  {scrollNow(-1)}
			if (acceleration.z <6)  {scrollNow(1)}
			if (acceleration.z <4)  {graj('page.mp3'); gonext(); return;}
		
			
			
			//if (acceleration.y < -3) {goback(); return;}
			//if (acceleration.y > 9)  {gonext(); return;}
			//acceleration.timestamp
		}
    }

    // onError: Failed to get the acceleration
    function onError() {
        //alert('onError!');
    }

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
