import { useState,useRef,useEffect } from 'react'
import style from './slide.module.css'
import anh1 from './img/anh1.jpg'
import anh2 from './img/anh2.jpg'
import anh3 from './img/anh3.JPG'
import anh4 from './img/anh4.JPG'
import anh5 from './img/anh5.JPG'
import anh6 from './img/anh6.JPG'
import anh7 from './img/anh7.JPG'
import anh8 from './img/anh8.JPG'
import anh9 from './img/anh9.JPG'
import anh10 from './img/anh10.JPG'
const arrImg = [anh1,anh2,anh3,anh4,anh5,anh6,anh7,anh8,anh9,anh10]
const Slide = () => {
    const [id,setId] = useState(0)
    const handlePre = () => {
        if(id === 0) {
            setId(arrImg.length - 1)
        }
        else {
            setId((pre)=> (pre - 1))
        }
    }
    const handleNext = () => {
        if(id === (arrImg.length -1)) {
            setId(0)
        }
        else {
            setId((pre)=> (pre + 1))
        }
    }
    const handleClick = (id) => {
        setId(id)
    }
    const nameref = useRef()
    const nextRef = useRef()
    useEffect(() => {
    //   nameref.current.style.animation = 'slide11 5s ease-in-out'
      const idTimeout = setTimeout(() => {
        console.log(nameref.current);
        setId((pre) => {
            if(pre === (arrImg.length-1)) {
                return pre = 0
            }
            else {
                return pre + 1
            }
        })
      }, 6000);

        return () => {
            // nameref.current.style.animation = ''
            clearTimeout(idTimeout)
        }
    },[id])
    const r = Math.floor(Math.random()*266)
    const g = Math.floor(Math.random()*266)
    const b = Math.floor(Math.random()*266)
    const backgroundRd = `rgb(${r} ${g} ${b})`
    return (<div className={style.container}>
        <div className={style.slider} style = {{backgroundColor: `${backgroundRd}`}}>
            <img ref={nameref} src={arrImg[id]} style = {{animation: 'slide11 5s ease-in-out infinity'}}/>
            <div className= {style.pre} onClick = {handlePre} >pre</div>
            <div ref={nextRef} className={style.next} onClick = {handleNext}>next</div>
        </div>
        <div className={style.list_img}>
          {arrImg.map((e,index) => (
            <div className={(id === index) ? style.active1 : undefined} key={index} onClick={() => {handleClick(index)}}>
                <img src={e}/>
            </div>
          ))}
        </div>
    </div>)
} 
export default Slide