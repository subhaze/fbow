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

describe("ChildNode#after", function() {
	beforeEach(setupHTMLFixture);
	afterEach(tearDownHTMLFixtures);
	it("Added <p/> after <div id='firstDiv'/>", function() {
		var firstDiv = document.getElementById("firstDiv");
		var pTag = document.createElement("p");
		firstDiv.after(pTag);
		expect(sandbox.innerHTML).toEqual('<div id="firstDiv">one</div><p></p><div id="secondDiv">two</div>');
	});
});
