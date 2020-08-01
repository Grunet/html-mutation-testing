import { Selector } from "testcafe";

fixture`Form Tests`.page`localhost:3000/shell.html`;

test("Fill out all fields and submit", async (t) => {
  await t.typeText("#username", "Some Username").click("input[type='submit']");
});

test("Fill out no fields and submit", async (t) => {
  await t
    .click("input[type='submit']")
    .expect(Selector("form:invalid").exists)
    .ok();
});
