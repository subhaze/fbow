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

describe("ParentNode#prepend", function () {
	beforeEach(setupHTMLFixture);
	afterEach(tearDownHTMLFixtures);
	it("Prepended <p/> to sandbox", function () {
		var firstDiv = document.getElementById("firstDiv");
		var pTag = document.createElement("p");
		sandbox.prepend(pTag);
		expect(sandbox.innerHTML).toEqual('<p></p><div id="firstDiv">one</div><div id="secondDiv">two</div>');
	});
});
