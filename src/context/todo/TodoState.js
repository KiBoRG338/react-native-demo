import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';

import screenContext from '../screen/screenContext';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';

export default TodoState = ({ children }) => {
    const initialState = {
        todos: [
            { id: '1', title: 'Выучить react-native' }, 
            { id: '2', title: 'Написать приложение' }
        ]
    };
    const { changeScreen } = useContext(screenContext);
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = (title) => dispatch({ type: ADD_TODO, title });

    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })

    const removeTodo = (id) => {
        const todo = state.todos.find(t => t.id === id);
        Alert.alert(
          'Удаление элемента',
          `Вы уверены, что хотите удалить "${todo.title}" ?`,
          [
            {
              text: 'Отмена',
              style: 'cancel'
            },
            {
              text: 'Удалить',
              style: 'destructive',
              onPress: () => {
                changeScreen(null);
                dispatch({ type: REMOVE_TODO, id });
              }
            }
          ],
          {cancelable: false}
        )
    }

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                addTodo,
                removeTodo,
                updateTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    )   
}