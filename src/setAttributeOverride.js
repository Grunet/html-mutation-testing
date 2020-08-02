origSetAttribute = Element.prototype.setAttribute;

Element.prototype.setAttribute = function mutationTestingSetAttribute(
  qualifiedName,
  value
) {
  if (value === false || value === null || value === undefined) {
    this.removeAttribute(qualifiedName);
  } else if (value == true) {
    origSetAttribute.call(this, qualifiedName, "");
  } else {
    origSetAttribute.call(this, qualifiedName, value);
  }
};
