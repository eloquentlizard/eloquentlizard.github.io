/*\
The grid widget.

This example renders a table made up of tiddlers titled `MySheet_A_1`, `MySheet_A_2`, `MySheet_A_3`, ... , `MySheet_B_1`, `MySheet_B_2`, `MySheet_B_3` etc.

```
<$grid prefix="MySheet" rows=20 cols=20/>
```

\*/

(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var GridWidget = function(parseTreeNode,options) {
	this.initialise(parseTreeNode,options);
};

/*
Inherit from the base widget class
*/
GridWidget.prototype = new Widget();

/*
Render this widget into the DOM
*/

GridWidget.prototype.render = function(parent,nextSibling) {
	// Save the parent dom node
	this.parentDomNode = parent;
	// Compute our attributes
	this.computeAttributes();
	// Execute our logic
	this.execute();
	// Create a root domNode to contain our widget
	var domNode = this.create(parent,nextSibling);
	// Assign classes to our domNode
	var classes = this["class"].split(" ") || [];
	classes.push("tw-grid-frame");
	domNode.className = classes.join(" ");
	// Insert the root domNode for this widget
	this.domNodes.push(domNode);
	parent.insertBefore(domNode,nextSibling);
	// Render the child widgets into the domNode
	this.renderChildren(domNode,null);
};

GridWidget.prototype.create = function(parent,nextSibling) {
	// Create a simple div element to contain the table
	return this.document.createElement("div");
};

GridWidget.prototype.execute = function() {
	// Get the widget attributes
	this.prefix = this.getAttribute("prefix","Grid");
	this.rows = parseInt(this.getAttribute("rows","5"),10);
	this.cols = parseInt(this.getAttribute("cols","5"),10);
	this["class"] = this.getAttribute("class","");
	// Build the child widget tree
	var table = {type: "element",tag: "table", children:[]};
	var tbody = {type: "element",tag: "tbody", children:[]};	
	for(var row=0; row<this.rows; row++) {
		var tr = {type: "element",tag: "tr", children:[]};	
		for(var col=0; col<this.cols; col++) {
			var td = {type: "element",tag: "td", children:[]};
			var contents = {
				type: "transclude",
				attributes: {tiddler: {type: "string", value: this.getTableCellTitle(col,row)}},
				isBlock: true				
			};
			td.children.push(contents);
			tr.children.push(td);
		}
		tbody.children.push(tr);
	}
	table.children.push(tbody);
	// Append the contents enclosed by the grid widget
	var children = [table];
	if (this.parseTreeNode && this.parseTreeNode.children) {
		children = children.concat(this.parseTreeNode.children);
	}
	// Make all of the child widgets
	this.makeChildWidgets(children);
};

GridWidget.prototype.getTableCellTitle = function(col,row) {
	var c = String.fromCharCode(col % 26 + "A".charCodeAt(0));
	col = Math.floor(col/26);
	while(col>0) {
		c = String.fromCharCode(col % 26 + "A".charCodeAt(0) - 1) + c;
		col = Math.floor(col/26);
	}
	return this.prefix + "_" + c + "_" + (row + 1);
};

GridWidget.prototype.refresh = function(changedTiddlers) {
	var changedAttributes = this.computeAttributes();
	if(changedAttributes.tiddler || changedAttributes["class"]) {
		this.refreshSelf();
		return true;
	} else {
		return this.refreshChildren(changedTiddlers);
	}
};

exports.grid = GridWidget;

})();
