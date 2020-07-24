sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ui.controller.View1", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("/resume", "", false);
			//sap.ui.getCore().setModel(oModel);
			this.getView().setModel(oModel);
		}
	});
});