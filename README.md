# html-mutation-testing

Tooling around appying mutation testing to basic html pages.

## Research Notes

- [This stryker issue](https://github.com/stryker-mutator/stryker/issues/701) and [the unit test](https://github.com/stryker-mutator/stryker/blob/f71ba87a7adfd85131e1dea5fb1d6f3d8bba76df/packages/instrumenter/test/unit/mutators/string-literal-mutator.spec.ts) (search for "JSX" in the file) that was added in the fix suggests to me that html attribute mutation isn't currently possible, though I haven't tried it myself yet

- The only existing HTML-to-JS converters I've found so far only use "document.write" to break up the HTML into smaller string pieces
  - My hunch is that there will be fewer incisive, breaking mutations that apply to this representation vs the one using the DOM creation APIs (but I haven't tried it yet)
  - I also assume that since browsers are very resilient to broken HTML, there will be many more equivalent mutations in this representation (but I haven't tried that yet either)

## Dev Notes

- Need to delete the stryker.conf.json file to get "npm mutation-test" to work on the "getting started w/ stryker" example
