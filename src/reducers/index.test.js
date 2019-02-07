import { todos, visibilityFilter } from './index';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        text: 'Test todo reducer'
      })
    ).toEqual([
      {
        text: 'Test todo reducer',
        completed: false
      }
    ])

    expect(
      todos([
        {
          text: 'I am already here',
          completed: true
        }
      ], {
        type: 'ADD_TODO',
        text: 'I will be added'
      })
    ).toEqual([
      {
        text: 'I am already here',
        completed: true
      },
      {
        text: 'I will be added',
        completed: false
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: false,
          }, {
            text: 'Use Redux',
            completed: false,
          }
        ], {
          type: 'TOGGLE_TODO',
          index: 0
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
      }, {
        text: 'Use Redux',
        completed: false,
      }
    ])
  });
});