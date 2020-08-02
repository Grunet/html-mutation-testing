var form;
function l1() {
  form = document.createElement("form");
}
function l2() {
  form.setAttribute("action", "/shell.html");
}
var input;
function l3() {
  input = document.createElement("input");
}
function l4() {
  input.setAttribute("type", "text");
}
function l5() {
  input.setAttribute("id", "username");
}
function l6() {
  input.setAttribute("required", true);
}
function l7() {
  form.appendChild(input);
}
var submit;
function l8() {
  submit = document.createElement("input");
}
function l9() {
  submit.setAttribute("type", "submit");
}
function l10() {
  form.appendChild(submit);
}
//Finishing attachment
function l11() {
  document.body.prepend(form);
}

function prependForm() {
  l1();
  l2();
  l3();
  l4();
  l5();
  l6();
  l7();
  l8();
  l9();
  l10();
  l11();
}

prependForm();
