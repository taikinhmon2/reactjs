import style from './hoccss1.module.css'
import { useState, useRef } from 'react'
import Hoccss3 from './hoccss3'
import Context from '../useImperativeHandle/context'
const Validate = () => {
    const nameref = useRef()
    const fixStyle = useRef()
    const [reset, setReset] = useState('')
    const HandleBlur = () => {
        if (nameref.current.value) {
            console.log(nameref.current.style)
            console.log(style)
        }
    }
    let chuyen = useRef('flex')
const HandleClick = () => {
    chuyen.current = 'none'
    setReset(<Hoccss3/>)
    setTimeout(() => {
        setReset(<Context/>)
    }, 5000);
    }
    return (
        <div>
            <div className={style.container} style = {{display: `${chuyen.current}`}}>
                <div className={style.login}>
                    <div className={style.body}>
                        <img src='https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg' />
                        <h4>Đăng nhập</h4>
                        <p>Sử dụng Tài khoản Google của bạn</p>
                        <input style={fixStyle} ref={nameref} placeholder='Email hoặc số điện thoại' onBlur={HandleBlur}></input>
                        <a href=''>Bạn quên địa chỉ email?</a>
                        <p className={style.text}>Đây không phải máy tính của bạn? Hãy sử dụng chế độ Khách để đăng nhập một cách riêng tư. <a href=''>Tìm hiểu thêm</a></p>
                    </div>
                    <div className={style.footer}>
                        <a href=''>Tạo tài khoản</a>
                        <button onClick={HandleClick}>Tiếp theo</button>
                    </div>
                </div>
            </div>
            {reset}
        </div>
    )
}
export default Validate;