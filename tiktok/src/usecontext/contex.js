import Context1 from "./context1"
import { themeContex } from './themecontext'
import { useContext, useDeferredValue, useState, useEffect, useRef } from "react"
import styles from './context.module.css'
import clsx from 'clsx'
import '../App.css'
import GlobalStyles from "./GlobalStyles"
import Hoccss2 from "../hoccss1/hoccss2"
import Content from "../todo/Content"
const Context = () => {
    const [next, setnext] = useState('')
    let chuyen = useRef('block')
    const contex = useContext(themeContex)
    const handlenext = ()=> {
        chuyen.current = 'none'
        setnext(<Hoccss2/>)
        setTimeout(() => {
            setnext(<Content/>)
        }, 5000);
    }
    return (
        <div>
            <div style={{ padding: 20,display: `${chuyen.current}`}}>
                <button className={clsx(styles.heading, styles.test)} onClick={contex.togTheme} style={{ cursor: 'pointer' }}>THEME</button>
                <GlobalStyles>
                    <Context1 />
                </GlobalStyles>
                <button onClick={handlenext}>Chuyển trang</button>
            </div>
            {next}
        </div>
    )
}
export default Context