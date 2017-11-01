var sandbox;
function setupHTMLFixture() {
	sandbox = document.createElement("div");
	document.body.appendChild(sandbox);
	sandbox.style.display = "none";
	sandbox.innerHTML = [
		"<div id='firstDiv'>one</div>",
		"<div id='secondDiv'>two</div>"
	].join("");
}

function tearDownHTMLFixtures() {
	document.body.removeChild(sandbox);
}

describe("ChildNode#remove", function () {
	beforeEach(setupHTMLFixture);
	afterEach(tearDownHTMLFixtures);
	it("Removed <div id='firstDiv'/>", function () {
		var firstDiv = document.getElementById("firstDiv");
		firstDiv.remove();
		expect(sandbox.innerHTML).toEqual('<div id="secondDiv">two</div>');
	});
});
