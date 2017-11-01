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

describe("ChildNode#before", function () {
	beforeEach(setupHTMLFixture);
	afterEach(tearDownHTMLFixtures);
	it("Added <p/> before <div id='firstDiv'/>", function () {
		var firstDiv = document.getElementById("firstDiv");
		var pTag = document.createElement("p");
		firstDiv.before(pTag);
		expect(sandbox.innerHTML).toEqual('<p></p><div id="firstDiv">one</div><div id="secondDiv">two</div>');
	});
});
