$(function() {
    var BV = new $.BigVideo();
	BV.init();
	BV.show('http://video-js.zencoder.com/oceans-clip.mp4',{ambient:true});
});