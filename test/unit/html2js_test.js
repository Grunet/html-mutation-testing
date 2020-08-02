const { convertToJsStatements } = require("../../src/html2js.js");

const { JSDOM } = require("jsdom");
const assert = require("assert");

describe("convertToJsStatements", function () {
  it("turns Html into imperative creation statements that use DOM apis", function () {
    //ARRANGE
    const origHtml = `<div id="1" class="foo">
                    <h2>sample text with <code>inline tag</code></h2>
                    <pre id="demo" class="foo bar">foo</pre>
                    <pre id="output" class="goo">goo</pre>
                    <input id="execute" type="button" value="execute">
                </div>`;

    //ACT
    const jsCommmands = convertToJsStatements(origHtml);
    const jsCommandsOnSingleLine = jsCommmands.join("");

    const { window } = new JSDOM(``, { runScripts: "dangerously" });
    const scriptEl = window.document.createElement("script");
    const scriptElementSafeText = jsCommandsOnSingleLine.replace(/\n/g, "\\n");
    scriptEl.textContent = scriptElementSafeText;
    window.document.head.appendChild(scriptEl);

    //ASSERT
    assert.equal(window.document.body.innerHTML, origHtml);
  });
});
