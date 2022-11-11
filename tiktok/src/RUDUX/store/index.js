import { configureStore } from '@reduxjs/toolkit'
import addList from '../reducer/addList'
import activeSplice from '../reducer/activeSplice'
const store = configureStore({
    reducer: {
        Jobs: addList.reducer,
        activeId: activeSplice.reducer
    }
})
export default store