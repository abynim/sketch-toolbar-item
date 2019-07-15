const SketchToolbarIconClass = require('@skpm/xcodeproj-loader?raw=true&publicPath=_webpack_resources&outputPath=../Resources/_webpack_resources!./SketchToolbarIcon.framework/SketchToolbarIcon').getClass('SketchToolbarIcon');

module.exports = function() {

  let o = {};

  /**
  * @param {any} context - The current context
  * @param {string} commandID - The identifier of the command this item will trigger
  * @param {string} iconImagePath - A relative path to a 32x32px png image. To include a separate image path for dark mode use | to separate their path names
  */
  o.registerToolbarAction = function(context, commandID, iconImagePath) {
    SketchToolbarIconClass.registerToolbarAction_commandID_iconImagePath(context, commandID, iconImagePath);
  }

  /**
  * @param {any} context - The current context
  * @param {string} commandID - The identifier of the command this item will trigger
  * @param {string} iconImagePath - A relative path to a 32x32px png image. To include a separate image path for dark mode use | to separate their path names
  *  @returns {any} A toolbar item specifier which can be used to register a toolbar item group
  */
  o.specifierForToolbarAction = function(context, commandID, iconImagePath) {
    return SketchToolbarIconClass.specifierForToolbarAction_commandID_iconImagePath(context, commandID, iconImagePath);
  }

  /**
  * @param {any} context - The current context
  * @param {string} identifier - A unique identifier for the group item
  * @param {Array} specifiers - An array of specifiers created using `specifierForToolbarAction`
  */
  o.registerToolbarGroup = function (context, identifier, specifiers) {
    SketchToolbarIconClass.registerToolbarGroup_identifier_specifiers(context, identifier, specifiers);
  }

  /**
  * @param {any} context - The current context
  * @param {string} commandID - A unique identifier for the group item
  * @param {string} iconImagePath - A relative path to a 32x32px png image. To include a separate image path for dark mode use | to separate their path names
  * @returns {any} A menu item specifier to be used when registering a toolbar item with a dropdown menu
  */
  o.menuItemForToolbarAction = function(context, commandID, iconImagePath) {
    return SketchToolbarIconClass.menuItemForToolbarAction_commandID_iconImagePath(context, commandID, iconImagePath);
  }

  /**
  *  @returns {any} A separator menu item specifier to be used when registering a toolbar item with a dropdown menu
  */
  o.separatorMenuItem = function () {
    return SketchToolbarIconClass.separatorMenuItem();
  }

  /**
  * @param {any} context - The current context
  * @param {string} identifier - A unique identifier for the toolbar item
  * @param {string} title - The text to be displayed below in the toolbar item
  * @param {string} iconImagePath - A relative path to a 32x32px png image. To include a separate image path for dark mode use | to separate their path names
  * @param {Array} menuItems - An array of menu item specifiers created using `menuItemForToolbarAction` or `separatorMenuItem`
  */
  o.registerToolbarMenu = function (context, identifier, title, iconImagePath, menuItems) {
    SketchToolbarIconClass.registerToolbarMenu_identifier_title_iconImagePath_menuItems(context, identifier, title, iconImagePath, menuItems);
  }

  return o;

}();