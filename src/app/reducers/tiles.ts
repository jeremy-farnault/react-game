import { handleActions } from 'redux-actions'
import { RootState } from './state'
import { TodoActions } from 'app/actions/tiles'
import { TodoModel } from 'app/models'

const initialState: RootState.TileState = [
  {
    id: 1,
    text: 'Use Redux',
    completed: false
  }
]

export const todoReducer = handleActions<RootState.TodoState, TodoModel>(
  {
    [TodoActions.Type.ADD_TODO]: (state, action) => {
      if (action.payload && action.payload.text) {
        return [
          {
            id: state.reduce((max, todo) => Math.max(todo.id || 1, max), 0) + 1,
            completed: false,
            text: action.payload.text
          },
          ...state
        ]
      } else {
        return state
      }
    }
  },
  initialState
)
