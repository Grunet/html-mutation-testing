function prependForm(parentEl) {
  const form = document.createElement("form");
  form.setAttribute("action", "/shell.html");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "username");
  input.setAttribute("required", "");
  form.appendChild(input);

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  form.appendChild(submit);

  //Finishing attachment
  parentEl.prepend(form);
}

prependForm(document.body);
