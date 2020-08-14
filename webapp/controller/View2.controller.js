sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function(Controller, MToast, MBox) {
	"use strict";

	return Controller.extend("com.dep.pro.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.dep.pro.view.View2
		 */
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.onPattern, this);
		},
		onPattern: function(oEvent) {
			// debugger;
			var bPath = "/" + oEvent.getParameter("arguments").fIdx;
			this.getView().bindElement({
				path: bPath,
				parameters: {
					expand: 'toSupplier'
				}
			});
			// debugger;
			var oServicePath = this.getOwnerComponent().getManifestObject().getEntry("/sap.app").dataSources.ZH_EPM_SRV.uri;
			// this.getView().byId("idImage").setSrc(oServicePath + bPath.split("/")[1] + "/$value");
			this.getView().byId("idObjHdr").setIcon(oServicePath + bPath.split("/")[1] + "/$value");

		},
		onItem: function() {
			// debugger;
		},
		onDelete: function() {
				// debugger;
				var bPath = this.oRouter.getHashChanger().getHash().replace("Detail", "");
				this.getView().getModel().remove(bPath, {
					success: function(data) {
						MToast.show("Successfully Deleted");
					},
					error: function(oErr) {
						MBox.error("Deletion Failed!!");
					}
				});
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf com.dep.pro.view.View2
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.dep.pro.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.dep.pro.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});