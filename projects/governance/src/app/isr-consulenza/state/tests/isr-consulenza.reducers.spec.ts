/**
 * TEST REDUCERS
  A reducer is a (synchronous) pure function that is invoked with the current state and an action.
  Based on the state and the action, the reducer returns a new state.
  Because a reducer is pure, and there are no external dependencies, the test specifications are very simple.
  There's no need to configure and mock anything, in a test we invoke the reducer with a predefined state and an action.
  Given the state and the action, the assertion asserts that the newly returned state is correct.
 */

import { isrConsulenzaFeature, initialState } from '../isr-consulenza.state';
import { IsrConsulenzaApiActions } from '../actions';

const { reducer } = isrConsulenzaFeature;

it('isrConsulenzaApiActions.loadData loads the data object', () => {
    // ARRANGE
    const data = { fieldA: "pippo", fieldB: ["x", "y", "z"], fieldC: 0, fieldD: false } ;

    // ACT
    const state = reducer(initialState, IsrConsulenzaApiActions.loadData({ payload: data  }));

    // ASSERT
    expect(state).toEqual({
      titlePage: null,
      showMessage: false,
      currentIsrId: null,
      data: {
        fieldA: "pippo",
        fieldB: ["x", "y", "z"],
        fieldC: 0,
        fieldD: false
      }
    });
});
