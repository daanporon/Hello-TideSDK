var menu = Titanium.UI.createMenu(),
	fileItem = Titanium.UI.createMenuItem('File'),
	exitItem = fileItem.addItem('Exit', function() {
		if(confirm('Are you sure you want to quit?')) {
			Titanium.App.exit();	
		}
	})
;

menu.appendItem(fileItem);
Titanium.UI.setMenu(menu);
