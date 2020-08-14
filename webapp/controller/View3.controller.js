sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function(Controller, JSONModule, MessageToast,MessageBox) {
	"use strict";

	return Controller.extend("com.dep.pro.controller.View3", {
		onPress: function(){
			MessageToast.show("We did It");
		},
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			var oLocalM = new JSONModule();
			oLocalM.setData({
				"productData": {
					"PRODUCT_ID": "",
					"TYPE_CODE": "PR",
					"CATEGORY": "Notebooks",
					"NAME": "Harry Potter",
					"DESCRIPTION": "Especto Petronum",
					"SUPPLIER_ID": "0100000047",
					"SUPPLIER_NAME": "Becker Berlin",
					"PRICE": "1249.00"
				}
			});
			this.getView().setModel(oLocalM, "local");
		},
		onSave: function() {
				var payload = this.getView().getModel("local").getProperty("/productData");
				this.getView().getModel().create("/Products",payload,{
					success: function(data){
						MessageToast.show("Successfully Created");        
					},
					error: function(oErr){
						MessageBox.error("Creation Failed");
					}
				});
			}

			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf com.dep.pro.view.View3
			 */
			//	onInit: function() {
			//
			//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.dep.pro.view.View3
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.dep.pro.view.View3
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.dep.pro.view.View3
		 */
		//	onExit: function() {
		//
		//	}

	});

});