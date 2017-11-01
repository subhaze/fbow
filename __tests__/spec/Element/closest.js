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

describe("Element#closest", function () {
	beforeEach(setupHTMLFixture);
	afterEach(tearDownHTMLFixtures);
	it("Ensured <p/> matches <div id='firstDiv'/> as .closest('#firstDiv')", function () {
		var firstDiv = document.getElementById("firstDiv");
		var p = document.createElement("p");
		firstDiv.appendChild(p);
		expect(firstDiv).toBe(p.closest("#firstDiv"));
	});
});
