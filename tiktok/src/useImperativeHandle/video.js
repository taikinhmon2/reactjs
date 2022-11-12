import video2 from './video/video2.mp4'
import { forwardRef,useRef,useImperativeHandle} from 'react'
const Video = (props,ref)=> {
    const videoref = useRef()
    useImperativeHandle(ref,()=> {
        return {
            concho() {
                videoref.current.play()
            },
            contrau() {
                videoref.current.pause()
            }
        }
    })
    return (
        <video
        ref = {videoref}
        src = {video2}
        width = {280}
        style = {{
            margin: 'auto',
           display: 'block'
        }}
        />
    )
}
export default forwardRef(Video)