sap.ui.define(
	["sap/ui/core/Control"],function(Control){
	return Control.extend("com.dep.pro.customControls.Heading",{
		metadata:{
			properties:{
				"text": "",
				"color": ""
			}
		},
		init: function(){
			this.setColor("Blue");
		},
		renderer: function(oRm,oControl){
			oRm.write("<h1");
			oRm.addStyle("color", oControl.getColor());
			
			oRm.writeStyles();
			oRm.write(">" + oControl.getText() + "</h1>");
		}
	});
});