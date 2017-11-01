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

describe("Element#matches", function () {
	beforeEach(setupHTMLFixture);
	afterEach(tearDownHTMLFixtures);
	it("Ensured <div id='firstDiv'/> .matches() selector #firstDiv", function () {
		var firstDiv = document.getElementById("firstDiv");
		expect(firstDiv.matches("#firstDiv")).toBe(true);
	});
});
