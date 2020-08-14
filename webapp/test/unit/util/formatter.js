QUnit.module("1st Module");
sap.ui.define(
	["com/dep/pro/util/formatter"],
	function(formatter){
		function callFunctionality(assert, price, unit, expected){
			// debugger;
			var oVal = formatter.currencyFormat(price, unit);
			assert.strictEqual(expected, oVal, "Formatter testcase passed");
		}
		
		QUnit.test("Test EUR format for 550", function(assert){
			callFunctionality.call(this, assert, 550, "INR", "550.00 INR");
		});
		
		QUnit.test("Addition testcase", function(assert){
			var fVal = formatter.addition(160, 20);
			assert.equal(fVal, 30, "Addition test case passed");
		});
		
	});