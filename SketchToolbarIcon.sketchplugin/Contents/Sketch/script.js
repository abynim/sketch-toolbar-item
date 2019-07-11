var sketch = require('sketch/dom');
var UI = require('sketch/ui')

// Handlers for the toolbar item's run action
var sayHello = function(context) {
    UI.alert('Hello from the toolbar!', 'Have a great day 👋');
}

var sayNamaste = function(context) {
    UI.alert('Namaste from the toolbar!', 'Be cool 🙏');
}

var sayGoodbye = function(context) {
    UI.alert('Goodbye from the toolbar!', 'See ya later, maybe ✌️');
}


// The handler for the toolbar item's validate action
// If this method is not implemented, your toolbar item is always enabled
// NOTE: Keep this method light. Doing too much here will slow down Sketch
var validateToolbarItem = function(context) {
    
    // Get a reference to your toolbar item via context
    let toolbarItem = context.toolbarItem;
    
    let doc = sketch.getSelectedDocument();
    let selectedLayers = doc.selectedLayers;
    
    // As an example: enable the toolbar item if selection is not empty
    toolbarItem.enabled = !selectedLayers.isEmpty;
    
    
    // To change the item's icon during validation,
    // pass a relative path to another 32x32px image in your plugin's Resources folder:
    // This is entirely optional!
    
    // toolbarItem.iconImagePath = selectedLayers.isEmpty ? "hello-toolbar-icon-flipped.png" : "hello-toolbar-icon.png";
}

var registerToolbarActions = function(context) {
    
    // load the framework only if it's not already loaded.
    if(!NSClassFromString('SketchToolbarIcon')) {
        loadFramework(context, registerToolbarActions);
        return;
    }
    
    // register a single toolbar item by passing:
    // 1. the current context
    // 2. the command identifier of the action this item will trigger
    // 3. the relative path to a 32x32px icon image in your plugin's Resources folder
    SketchToolbarIcon.registerToolbarAction_commandID_iconImagePath(context, 'goodbye', 'goodbye-toolbar-icon.png');
    
    // to register a group of items, create specifiers for each item then register them as a group
    let item1 = SketchToolbarIcon.specifierForToolbarAction_commandID_iconImagePath(context, 'namaste', 'namaste-toolbar-icon.png');
    let item2 = SketchToolbarIcon.specifierForToolbarAction_commandID_iconImagePath(context, 'hello', 'hello-toolbar-icon.png');
    
    SketchToolbarIcon.registerToolbarGroup_identifier_specifiers(context, 'salutations', [item1, item2]);
    
    
    // to register a toolbar item with a dropdown menu, create a menuItem for each sub-item then register them
    let menuItem1 = SketchToolbarIcon.menuItemForToolbarAction_commandID_iconImagePath(context, 'hello', 'hello-toolbar-icon.png');
    let menuItem2 = SketchToolbarIcon.menuItemForToolbarAction_commandID_iconImagePath(context, 'namaste', 'namaste-toolbar-icon.png');
    let menuItem3 = SketchToolbarIcon.separatorMenuItem();
    let menuItem4 = SketchToolbarIcon.menuItemForToolbarAction_commandID_iconImagePath(context, 'goodbye', 'goodbye-toolbar-icon.png');
    SketchToolbarIcon.registerToolbarMenu_identifier_title_iconImagePath_menuItems(context, 'greetings', 'Greetings', 'hello-toolbar-icon.png', [menuItem1, menuItem2, menuItem3, menuItem4]);
    
}

var loadFramework = function(context, cb) {
    if(Mocha.sharedRuntime().loadFrameworkWithName_inDirectory('SketchToolbarIcon', NSBundle.bundleWithURL(context.plugin.url()).resourceURL().path())) {
        cb(context);
    }
}
