import style from './clsx.module.css'
import clsx from 'clsx'
const Clsx = ({ prymary , prymary2,prymary3}) => {
    return <div>
        <button className={clsx(style.heading, {
            [style.prymary]: prymary,
            [style.test]: prymary2,
            [style.test1]: prymary3
        })}> prymary</button>
    </div>
}
export default Clsx