import * as actions from './index';

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Test addTodo')).toEqual({
      type: actions.ADD_TODO,
      text: 'Test addTodo'
    });
  });

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(0)).toEqual({
      type: actions.TOGGLE_TODO,
      index: 0
    });
  });

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: actions.SET_VISIBILITY_FILTER,
      filter: 'active'
    });
  });

});