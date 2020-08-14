sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function(Controller, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("com.dep.pro.controller.View1", {
		onExpProductCat: function(){
			// debugger;
			var sVal = this.getView().byId("idSearch").getValue();
			var oModel = this.getView().getModel();
			var sPath = "/getExpPrdCat";
			var that = this;
			oModel.callFunction(sPath,{
				urlParameters : {
					iv_cat : sVal
				},
				success: function(oData){
					// debugger;
					MessageToast.show("Successfully Got Most Expensive Product with Category Filter");
					sPath = "Products('" + oData.PRODUCT_ID + "')";
					that.oRouter.navTo("route2",{
						fIdx : sPath
					});
				},
				error: function(oError){
					// debugger;
				}
			});
		},
		onExpProduct: function(){
			var oModel = this.getView().getModel();
			var sPath = "/getExpPrd";
			var that = this;
			oModel.callFunction(sPath,{
				success: function(oData){
					// debugger;
					sPath = "Products('" + oData.PRODUCT_ID + "')";
					that.oRouter.navTo("route2",{
						fIdx : sPath
					});
					MessageToast.show("Successfully Got Most Expensive Product");
				},
				error: function(oError){
					// debugger;
				}
			});
		},
		onPressPro: function(){
			this.oRouter.navTo("route3");
		},
		onInit: function(){
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.onPatternChange, this);
		},
		onPatternChange: function(){},
		onSelChange: function(oEvent){
			// debugger;
			var sPath = oEvent.getParameter("listItem").getBindingContextPath();
			var fIdx = sPath.split("/")[sPath.split("/").length - 1];
			this.oRouter.navTo("route2",{fIdx: fIdx});
		},
		onSearch: function(oEvent){
			// debugger;
			var sVal = oEvent.getSource().getValue();
			if( sVal === ""){
				MessageToast.show("Enter value to search");
				return;
			}
			var bPath = "/Products('" + sVal + "')";
			if(sVal.indexOf("-") !== -1){
				var that = this;
				var oDataModel = this.getView().getModel();
				oDataModel.read(bPath,{
					success: function(){
						MessageToast.show("Successfully Fetched");
						that.oRouter.navTo("route2",{fIdx : "Products('" + sVal + "')"});
					},
					error: function(){
						MessageBox.error("No Data Found!");
					}
				});
			}else{
				var oFil1 = new sap.ui.model.Filter("CATEGORY",sap.ui.model.FilterOperator.EQ,sVal);
				// var oFilter2 = new sap.ui.model.Filter("CATEGORY",sap.ui.model.FilterOperator.EQ,search);
				var oFils = new sap.ui.model.Filter({
					filters:[oFil1],
					and: false
				});
				this.getView().byId("idList").getBinding("items").filter(oFils);
				}
		},
		oFruitPopup: null,
		onPress: function(){
			// debugger;
			if (!this.oFruitPopup){
				this.oFruitPopup = new sap.ui.xmlfragment("com.dep.pro.fragments.popup");
				this.getView().addDependent(this.oFruitPopup);
			}
			this.oFruitPopup.bindAggregation("items",{
				path: "/fruits",
				template: new sap.m.DisplayListItem({label:"{name}",value:"{type}"})
			});
			this.oFruitPopup.setTitle("Fruit Names");
			this.oFruitPopup.open();
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.dep.pro.view.View1
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.dep.pro.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.dep.pro.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.dep.pro.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});