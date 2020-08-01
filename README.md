# html-mutation-testing

Tooling around appying mutation testing to basic html pages.

## Research Notes

- [This stryker issue](https://github.com/stryker-mutator/stryker/issues/701) and [the unit test](https://github.com/stryker-mutator/stryker/blob/f71ba87a7adfd85131e1dea5fb1d6f3d8bba76df/packages/instrumenter/test/unit/mutators/string-literal-mutator.spec.ts) (search for "JSX" in the file) that was added in the fix suggests to me that html attribute mutation isn't currently possible, though I haven't tried it myself yet

## Dev Notes

- Need to delete the stryker.conf.json file to get "npm mutation-test" to work on the "getting started w/ stryker" example
