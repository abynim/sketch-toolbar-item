# Sketch Toolbar Item
An skpm module for adding custom toolbar items in Sketch.

![Image](https://github.com/abynim/sketch-toolbar-item/blob/master/gh-image.png?raw=true)

## Installation
```bash
npm install --save sketch-toolbar-item
```

## Demo
To see the module in action, check out the demo plugin [https://github.com/abynim/sketch-toolbar-item-demo](https://github.com/abynim/sketch-toolbar-item-demo).


## Usage

### Import the module
```js
import SketchToolbar from 'sketch-toolbar-item'
```

### Define a Startup handler for your plugin in manifest.json
```json
{
  "commands" : [
    {
      "script": "./my-command.js",
      "handlers": {
        "actions": {
          "Startup": "registerToolbarActions"
        }
      }
    }
  ]
}
```

### Registering toolbar items 
All items are registered within the Startup handler
```js
export function registerToolbarActions(context) {
  // register items here...
}
```

#### Register a single toolbar action
Pass in the following arguments
- the context  
- the identifier of the command this action will trigger
- and a relative path to an icon image (32x32px) from your plugin's Resources folder. To include a separate image for dark mode, separate the image paths with `|`.
```js
// SketchToolbar.registerToolbarAction(context, commandIdentifier, iconImagePath)
SketchToolbar.registerToolbarAction(context, 'goodbye', 'goodbye-toolbar-icon.png|goodbye-toolbar-icon-dark.png')
```

#### Register a group of toolbar actions
First, create specifiers for each action, then register them as a group
```js
// SketchToolbar.specifierForToolbarAction(context, commandIdentifier, iconImagePath)
let item1 = SketchToolbar.specifierForToolbarAction(context, 'namaste', 'namaste-toolbar-icon.png|namaste-toolbar-icon-dark.png')
let item2 = SketchToolbar.specifierForToolbarAction(context, 'hello', 'hello-toolbar-icon.png|hello-toolbar-icon-dark.png')

// SketchToolbar.registerToolbarGroup(context, groupIdentifier, specifiers)
SketchToolbar.registerToolbarGroup(context, 'salutations', [item1, item2])
```

#### Register a toolbar item with a dropdown menu
First, create menuItems for each sub-item, then register them as a toolbar menu
```js
// SketchToolbar.menuItemForToolbarAction(context, commandIdentifier, iconImagePath)
let menuItem1 = SketchToolbar.menuItemForToolbarAction(context, 'hello', 'hello-toolbar-icon.png|hello-toolbar-icon-dark.png')
let menuItem2 = SketchToolbar.menuItemForToolbarAction(context, 'namaste', 'namaste-toolbar-icon.pngnamaste-toolbar-icon-dark.png')
let menuItem3 = SketchToolbar.separatorMenuItem()
let menuItem4 = SketchToolbar.menuItemForToolbarAction(context, 'goodbye', 'goodbye-toolbar-icon.png|goodbye-toolbar-icon-dark.png')

// SketchToolbar.registerToolbarMenu(context, menuIdentifier, iconImagePath, menuItems)
SketchToolbar.registerToolbarMenu(context, 'greetings', 'Greetings', 'greetings-toolbar-icon.png|greetings-toolbar-icon-dark.png', [menuItem1, menuItem2, menuItem3, menuItem4])
```

### Validate toolbar items (optional)
You can validate toolbar items when the selection changes, but please use this sparingly. Doing too much in this method will make Sketch crawl.

If this method is not defined, your toolbar items will always be enabled (which is acceptable in most situations).

When defining the command in manifest.json, add an additional handler for `ValidateToolbarItem`.

```json
{
  "commands" : [
    {
      "script": "./my-command.js",
      "handlers": {
        "run": "sayHello",
        "ValidateToolbarItem": "validateToolbarItem"
      },
      "name": "Hello",
      "identifier": "hello"
    }
  ]
}
```

In the handler, access the toolbar item via the context, and set its enabled property.
```js
export function validateToolbarItem(context) {

  let toolbarItem = context.toolbarItem

  // As an example: enable the toolbar item if selection is not empty
  toolbarItem.enabled = !sketch.getSelectedDocument().selectedLayers.isEmpty

}
```

### Note:
Please set a unique identifier for your plugin in your manifest. It's required to identify your plugin and avoid conflicts with other plugins. If using `skpm` this is already handled for you.

---

Do create an issue here if you find any weirdness. 

Follow along on [Twitter](https://twitter.com/abynim) for more experiments and content related to Sketch plugins. I spend most of my time building a little plugin called [Sketch Runner](https://sketchrunner.com), do check it out.
