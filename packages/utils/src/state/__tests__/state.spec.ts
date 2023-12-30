import { State } from '../state';

describe('State', () => {
  const origin = {
    user: {
      id: 2000,
      name: 'MAGGIE',
      age: 7,
      address: { street: 'FIGHTER', number: 2 },
    },
  };

  test('current()', () => {
    const sut = State.create(origin);
    expect(sut.current).toBe(origin);
  });

  test('observe()', () => {
    const state = State.create(origin);

    const nameChanges: string[] = [];
    const streetNumberChanges: number[] = [];

    state.observe(
      (draft) => draft.user.name, // observing name
      ({ next }) => {
        nameChanges.push(next);
      }
    );

    const unlistenNumber = state.observe(
      (draft) => draft.user.address.number,
      ({ next }) => {
        streetNumberChanges.push(next);
      }
    );

    expect(nameChanges).toEqual([]);

    // change 1
    state.update((c) => {
      c.user.address.number = 2; // <- not a change, number was already 2
      c.user.name = 'x';
      c.user.name = 'z';
      c.user.name = 'a'; // <- only the last change will be tracked
    });

    // change 2
    state.update((c) => {
      c.user.address.number = 1;
      c.user.name = 'a';
      c.user.name = 'b';
      c.user.name = 'c'; // <- only the last change will be tracked
    });

    // change 3
    state.update((c) => {
      c.user = {
        ...c.user,
        address: {
          ...c.user.address,
          number: 99,
        },
      };
    });

    unlistenNumber();

    // change 4
    state.update((c) => {
      c.user.address.number = 1999; // should not notify streetNumberChanges because unlistenNumber
    });

    expect(nameChanges).toEqual(['a', 'c']);
    expect(streetNumberChanges).toEqual([1, 99]);
    expect(state.current.user.address.number).toEqual(1999);

    // should not change the original object
    expect(origin.user.address.number).toBe(2);
  });

  describe('actions', () => {
    test('withMethods()', () => {
      const state = State.create(origin).withMethods({
        setAge(state, payload: { age: number }) {
          state.user.age = payload.age;
        },
        setStreet(state, street: string) {
          state.user.address.street = street;
        },
      });

      state.setAge({ age: 8 });
      let next = state.setStreet('lua');

      expect(next.user.age).toBe(8);
      expect(next.user.address.street).toBe('lua');
    });

    it('should return the next state after action execution', () => {
      const state = State.create({
        number: 1,
      });

      const actions = state.withMethods({
        sum(state, num: number) {
          state.number += num;
        },
      });

      const next = actions.sum(6);

      expect(next).toEqual({ number: 7 });
    });
  });

  describe('middlewares', () => {
    test('update state using Object.assign', () => {
      const state = State.create({
        num: 0,
        history: [] as number[],
      }) //
        .withMethods({
          sum(s, num: number) {
            s.num += num;
          },
        });

      let middlewareData;
      state.addMiddleware((data) => {
        const { draft, previous, ...rest } = data;
        middlewareData = {
          previous,
          ...rest,
        };
        draft.history = [previous.num, ...draft.history];
      });

      state.sum(1);
      state.sum(0);
      state.sum(3);

      expect(state.current).toEqual({
        history: [1, 1, 0],
        num: 4,
      });

      expect(middlewareData).toEqual({
        context: {
          method: 'sum',
          payload: 3,
        },
        previous: {
          history: [1, 0],
          num: 1,
        },
      });
    });

    test('replace state when returns new object', () => {
      const state = State.create({
        num: 0,
      });

      state.addMiddleware(({ draft: { num } }) => {
        return {
          num: num * 50, // <- replacing the entire object
        };
      });

      state.update('num', 2);
      expect(state.current).toEqual({ num: 100 });
    });
  });
});
