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

describe("Event: CustomEvent()", function () {
	beforeEach(setupHTMLFixture);
	afterEach(tearDownHTMLFixtures);
	it("Ensured window.CustomEvent was a function", function () {
		expect(typeof window.CustomEvent).toBe("function");
	});
});
