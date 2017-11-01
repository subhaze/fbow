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

describe("ParentNode#append", function () {
	beforeEach(setupHTMLFixture);
	afterEach(tearDownHTMLFixtures);
	it("Appended <p/> to sandbox", function () {
		var firstDiv = document.getElementById("firstDiv");
		var pTag = document.createElement("p");
		sandbox.append(pTag);
		expect(sandbox.innerHTML).toEqual('<div id="firstDiv">one</div><div id="secondDiv">two</div><p></p>');
	});
});
