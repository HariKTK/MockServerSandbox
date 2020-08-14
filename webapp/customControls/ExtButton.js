sap.ui.define([],function(){
	return sap.m.Button.extend("com.dep.pro.customControls.ExtButton",{
		metadata:{
			events:{
				"hover":{}
			}
		},
		onmouseover: function(){
			this.fireHover();
		},
		renderer:{}
	});
});