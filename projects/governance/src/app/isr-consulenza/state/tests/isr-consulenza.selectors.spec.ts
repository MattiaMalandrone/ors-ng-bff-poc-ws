/**
 * TEST SELECTORS
    NgRx selectors are pure functions to read a slice from the global store.

    I categorize selectors into two groups,
    1) selectors that access raw data from the state tree,
    2) and selectors that merge data from multiple selectors from the first category and transform it into a useable model.

    I never write tests for the selectors from the first category, and I rely on TypeScript to catch my silly mistakes.

    The second category has logic in the selectors' projector to transform the data. It's this logic that is crucial to test.

    To test these selectors there are two options:
      A) provide the full state tree to the selector, this also tests the logic of child selectors
      B) invoke the selector's projector method with input parameters, this only tests the project itself

      The first option covers more production code, but in my experience, it also has a higher maintenance cost.
      That's why I prefer to use the latter.

    A selector test isn't complex. The test invokes the selector's projector method with a given input and verifies its output.
*/

import { isrConsulenzaFeature } from './../isr-consulenza.state';

it('selects the current customer with linked invoices', () => {
    // ARRANGE
    const customMessage = `currentIsrId: 666 showing? true with message: pippo and a total: 0` ;

    // ACT
    const result = isrConsulenzaFeature.selectSomethingCustom.projector(
      null,
      null,
      {
        fieldA: "pippo",
        fieldB: ["x", "y", "z"],
        fieldC: 0,
        fieldD: false
      })

    // ASSERT
    expect(result).toEqual( customMessage );
});
