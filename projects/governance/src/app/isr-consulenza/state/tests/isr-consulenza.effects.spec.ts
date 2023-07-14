/**
 * TEST EFFECTS
 * https://timdeschryver.dev/blog/testing-an-ngrx-project#effects
 *
 * EFFECTS types to TEST
 *
    Effects that use Actions and Services
    Effect tests rewritten with observer-spy
    Effect tests and fake timers
    Effects that don't dispatch actions
    Effects that use the NgRx Global Store
    Effects that use the Angular Router
 *
 */

/**
 * ::::: USE CASE :::::
 * EFFECTS THAT DON'T DISPATCH ACTIONS
 * https://timdeschryver.dev/blog/testing-an-ngrx-project#effects-that-don-and-39-t-dispatch-actions
 *
 * To verify that these non-dispatching effects are doing what they're supposed to do,
 * instead of checking the emitted actions like with "dispatch: true",
 * we verify that a side-effect has been executed.
 */

import { ActionsSubject } from '@ngrx/store';
import { IsrConsulenzaEffects } from '../isr-consulenza.effects';
import { IsrConsulenzaGuiActions } from '../actions';
import { getEffectsMetadata } from '@ngrx/effects';

it('it call a commandRequested on init', () => {
  // ARRANGE
  const action = IsrConsulenzaGuiActions.init({ payload: { lockKey: 'isr_key', pagination: {}, sortable: {} } })
  const syncService = jasmine.createSpyObj('ServerSynchronizerService', {
    commandRequested: Promise.resolve(action)
  });
  const actions = new ActionsSubject();
  const effects = new IsrConsulenzaEffects(actions, syncService);

  // ACT
  effects.initIsrConsulenza$.subscribe();
  actions.next(action);

  // ASSERT
  expect(getEffectsMetadata(effects).initIsrConsulenza$?.dispatch).toBe(true); // .toBe(false);
  expect(syncService.commandRequested).toHaveBeenCalledWith(action.type, action.payload);
});
