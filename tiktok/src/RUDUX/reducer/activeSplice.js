import { createSlice } from "@reduxjs/toolkit"
export default createSlice({
    name: 'Id',
    initialState: {
        Id: JSON.parse(localStorage.getItem('id')) ?? null,
        numberRandom: []
    },
    reducers: {
        changeId: (state, action) => {
            state.Id = action.payload
        },
        changeRandom: (state,action) => {
            state.numberRandom.push(action.payload)
        }
    }
})
