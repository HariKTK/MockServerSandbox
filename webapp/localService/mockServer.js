sap.ui.define(
	["sap/ui/core/util/MockServer"],
	function(MockServer){
		return {
			mimicData: function(){

				var oMock = new MockServer({
					rootUri: "/sap/opu/odata/sap/ZH_EPM_SRV/"
				});
				
				MockServer.config({
					autoRespond: true,
					autoRespondAfter: 1000
				});
				
				var sPath = jQuery.sap.getModulePath("com.dep.pro.localService");
				var sMeta = sPath + "/metadata.xml";
				
				oMock.simulate(sMeta, {
					sMockdataBaseUrl: sPath + "/mockdata",
					bGenerateMissingMockData: true
				});
				
				oMock.start();
				
			}
		};
	});