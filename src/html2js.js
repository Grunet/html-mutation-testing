const { html2json } = require("html2json");
const traverse = require("traverse");

function convertToJsStatements(html) {
  const htmlAsJsonObj = html2json(html);

  //Adding in the variable names to use for the elements
  let elCounter = 1;
  let textNodeCounter = 1;
  traverse(htmlAsJsonObj).forEach(function (_value) {
    if (this.node?.hasOwnProperty("node")) {
      if (this.node["node"] === "root") {
        this.node["varName"] = "document.body";
      } else if (this.node["node"] === "element") {
        this.node["varName"] = `el${elCounter}`;
        elCounter++;
      } else if (this.node["node"] === "text") {
        this.node["varName"] = `txt${textNodeCounter}`;
        textNodeCounter++;
      }
    }
  });

  // Creating the JS statements
  const jsStatements = [];

  traverse(htmlAsJsonObj).forEach(function (_value) {
    const parentElVarName = this?.parent?.parent?.node?.["varName"];

    if (this.node["node"] === "element") {
      const elVarName = this.node["varName"];

      jsStatements.push(
        `var ${elVarName} = document.createElement('${this.node["tag"]}');`
      );

      for (const [attribute, value] of Object.entries(
        this.node["attr"] || {}
      )) {
        jsStatements.push(
          `${elVarName}.setAttribute('${attribute}','${value}');`
        );
      }

      jsStatements.push(`${parentElVarName}.appendChild(${elVarName});`);
    }

    if (this.node["node"] === "text") {
      const txtNodeVarName = this.node["varName"];

      jsStatements.push(
        `var ${txtNodeVarName} = document.createTextNode("${this.node["text"]}");`
      );

      jsStatements.push(`${parentElVarName}.appendChild(${txtNodeVarName});`);
    }
  });

  return jsStatements;
}

module.exports = {
  convertToJsStatements: convertToJsStatements,
};
