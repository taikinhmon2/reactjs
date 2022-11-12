import {useStore} from "./hooks"
import { Setjob,Addjob,Deletejob,Fixstate} from "./action"
import { useRef } from "react"
const App1 = ()=> {
    const idFix = useRef()
    const nameref = useRef()
    const [state,dispatch] = useStore()
    const {job,jobs} = state
    const handleAdd = ()=> {
        dispatch(Addjob())
        dispatch(Setjob(''))
        nameref.current.focus()
    }
    const handleSua = ([data,id])=> {
        // nameref.current.value = data
        dispatch(Setjob(data))
        nameref.current.focus()
        idFix.current = id
    }
    const handleSuaTong = ()=>{
        if(idFix.current === 0 || idFix.current) {
            dispatch(Fixstate(idFix.current))
            dispatch(Setjob(''))
           idFix.current = undefined
        }
    }
        console.log(idFix.current)
    return (<div>
        <input
        ref={nameref}
        value={job}
        onChange = {(e)=> {dispatch(Setjob(e.target.value))}}
        />
        <button onClick={handleAdd}>ADD</button>
        <button onClick = {handleSuaTong}>Sửa</button>
        {jobs.map((e,index)=> {
            return <div key={index}>
                <li> {e}<span style={{cursor: 'pointer'}} onClick={()=>{dispatch(Deletejob(index))}}>&times;</span></li>
                <button onClick={()=> {handleSua([e,index])}}>sửa</button>
            </div>
        })}
    </div>)
}
export default App1