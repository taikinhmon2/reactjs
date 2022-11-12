import Video from "./video"
import { useRef } from "react"
const Context1 = ()=> {
    const videoref = useRef()
    const handleplay = ()=>{
        videoref.current.concho()
    }
    const handlepause = ()=>{
        videoref.current.contrau()
    }
    return <div className="video">
        <Video ref = {videoref}/>
        <div style={{textAlign: 'center'}}>
        <button onClick={handleplay}>PLAY</button>
        <button onClick={handlepause}>PAUSE</button>
        </div>
    </div>
}
export default Context1