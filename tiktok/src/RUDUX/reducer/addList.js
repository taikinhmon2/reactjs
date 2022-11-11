// const initalValue = JSON.parse(localStorage.getItem('jobs')) || []
// const addList = (state = initalValue,action) => {
//     switch (action.type) {
//         case 'ADD':
//            const newList = [...state]
//            newList.push(action.payload)
//             return newList
//         default:
//             return state;
//     }
// }
import { createSlice } from '@reduxjs/toolkit'
export default createSlice({
    name: 'Jobs',
    initialState: JSON.parse(localStorage.getItem('jobs')) || [],
    reducers: {
        addTodoList: (state, action) => {
          state.push(action.payload)
        }
    }
})
