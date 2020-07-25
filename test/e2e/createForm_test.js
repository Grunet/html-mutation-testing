fixture`Form Tests`.page`localhost:3000/shell.html`;

test("Fill out all fields and submit", async (t) => {
  await t.typeText("#username", "Some Username").click("input[type='submit']");
});
