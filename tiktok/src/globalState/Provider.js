import { useReducer } from "react"
import Context from "./context"
import reduce, {initState} from "./reduce"
const Provider = ({children})=> {
    const [state,dispatch] = useReducer(reduce,initState)
    return <Context.Provider value={[state,dispatch]}>
        {children}
    </Context.Provider>
}
export default Provider