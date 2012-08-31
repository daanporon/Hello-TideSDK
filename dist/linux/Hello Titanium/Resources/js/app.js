var BV = new $.BigVideo();
BV.init();
BV.show('http://video-js.zencoder.com/oceans-clip.mp4', {ambient:true});

var menu = Titanium.UI.createMenu(),
	fileItem = Titanium.UI.createMenuItem('File'),
	pauseItem = fileItem.addItem('Pause', function() {
		if (pauseItem.getLabel() == 'Pause') {
			BV.getPlayer().pause();
			pauseItem.setLabel('Start');
		} else {
			BV.getPlayer().play();
			pauseItem.setLabel('Pause');
		}
		
	}),
	exitItem = fileItem.addItem('Forward', function() {
		 var whereYouAt = BV.getPlayer().currentTime();
		 BV.getPlayer().currentTime(whereYouAt + 10);
	}),
	exitItem = fileItem.addItem('Exit', function() {
		if(confirm('Are you sure you want to quit?')) {
			Titanium.App.exit();	
		}
	})
;

menu.appendItem(fileItem);
Titanium.UI.setMenu(menu);

var window = Titanium.UI.createWindow('app://video.html');
// window.open();

var contextMenu = Titanium.UI.createMenu();
var menuItem1 = Titanium.UI.createMenuItem('Menu1', function() {
	alert('ok');
});
contextMenu.appendItem(menuItem1);
Titanium.UI.setContextMenu(contextMenu);

var notification = Titanium.Notification.createNotification({
	'title': 'Hello',
	'message': 'Hello again'
});
notification.show();


// Titanium.include('app://js/app_video.js');