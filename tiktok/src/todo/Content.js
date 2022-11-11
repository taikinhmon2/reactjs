import { useReducer, useRef, useState } from "react"
import handleAdd ,{setJob,addJob,deleteJob,setFix} from "./action"
import reduce, {initstate} from "./reduce"
const Content = (a) => {
    const [state, dispatch] = useReducer(reduce, initstate)
    const nameref = useRef()
    const addRef = useRef()
    const fixRef = useRef()
    const idRef = useRef('')
    // const buttonRef = useRef()
    const { job, jobs } = state
    localStorage.setItem('jobs',JSON.stringify(jobs))
    const handleAdd = ()=> {
        dispatch(addJob())
        dispatch(setJob(''))
        nameref.current.focus()
    }
    const handleFix = (value,id)=> {
        addRef.current.style.display = 'none'
        fixRef.current.style.display = 'inline-block'
        idRef.current = id
        dispatch(setJob(value))
    }
    const endFix = () => {
        dispatch(setFix(idRef.current))
        dispatch(setJob(''))
        addRef.current.style.display = 'inline-block'
        fixRef.current.style.display = 'none'
    }
    const student = [
        {
            name: 'le van tài',
            age: 20,
            id: 1
        },
        {
            name: 'phan thi luan',
            age: 30,
            id: 2
        },
        {
            name: 'đào thị kiều',
            age: 28,
            id: 3
        },
        {
            name: 'cảnh chung',
            age: 21,
            id: 4
        }

    ]
    const school = [
        {
            id: 4,
            school1: 'thpt hải dương'
        },
        {
            id: 1,
            school1: 'thpt hải phòng'
        },
        {
            id: 2,
            school1: 'thpt thái bình'
        },
        {
            id: 3,
            school1: 'thpt hà nội'
        },
    ]
    const infor = student.map((std)=> {
        const findStd = school.find((scl)=> {
            return scl.id === std.id
        })
        return {
            name: std.name,
            age: std.age,
            school: findStd.school1
        }
    })
    return <div>
        <input
            ref={nameref}
            value={job}
            onChange={(e) => { dispatch(setJob(e.target.value)) }}
        />
        <button ref={addRef} onClick={handleAdd}>ADD</button>
        <button ref={fixRef} style = {{display: 'none'}} onClick = {() => {endFix()}}  >FIX</button>
        {
            jobs.map((e, index) => {
                return <div key={index}>
                    <li>{e} <span style={{cursor: 'pointer'}} onClick={()=> {dispatch(deleteJob(index))}}>&times;</span> <button onClick={() => {handleFix(e,index)}}>sửa</button></li>
                </div>
            })
        }
    </div>
}
export default Content
