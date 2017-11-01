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

describe("ChildNode#replaceWith", function () {
	beforeEach(setupHTMLFixture);
	afterEach(tearDownHTMLFixtures);
	it("Replaced <div id='firstDiv'/> with <p/>", function () {
		var firstDiv = document.getElementById("firstDiv");
		var pTag = document.createElement("p");
		firstDiv.replaceWith(pTag);
		expect(sandbox.innerHTML).toEqual('<p></p><div id="secondDiv">two</div>');
	});
});
