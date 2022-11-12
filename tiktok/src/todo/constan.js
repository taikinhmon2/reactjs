export const Set_job = 'set_job'
export const Add_job = 'add_job'
export const Delete_job = 'delete_job'
export const Set_fix = 'set_fix'
// const [type,settype] = useState('posts')
    // const [post,setpost] = useState([])
    // const [scroll1,setscroll1] = useState(false)
    // const [resize, setResize] = useState(window.innerWidth)
    // useEffect(() => { 
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //     .then((reponse) => {
    //         return reponse.json()
    //     })
    //     .then((data)=> {
    //         setpost(data)
    //     })
    // },[type])
    // useEffect(()=> {
    //     const handleResize = () => {
    //         setResize(window.innerWidth)
    //     }
    //     window.addEventListener('resize',handleResize)
    //     return ()=> {
    //         window.removeEventListener('resize',handleResize)
    //     }
    // },[])
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if(window.scrollY > 200) {
    //             setscroll1(true)
    //         }else {
    //             setscroll1(false)
    //         }
    //     }
    //    window.addEventListener('scroll',handleScroll)
    //    return () => {
    //     window.removeEventListener('scroll',handleScroll)
    //    }
    // },[])
    //bài avarta
    // const [ava,setava] = useState()
    // useEffect(() => {
    //     return () => {
    //         ava && URL.revokeObjectURL(ava.preview)
    //     }
    // },[ava])
    // const handleAva = function(e) {
    //     const file = e.target.files[0]
    //     file.preview = URL.createObjectURL(file)
    //     setava(file)
    //     e.target.value = null
    // }
    /* <input
        type= 'file'
        onChange = {handleAva}
        />
        {ava && (<img src= { ava.preview} width = '20%' height='30%'/>)} */
    //     const [name,setname] = useState('')
    //     const [price,setpice] = useState('')
    //     const [produce,setproduce] = useState([])
    //     const nameref = useRef()
    //     const handleProduce = ()=> {
    //         setproduce([...produce,{
    //             name: name,
    //             price: parseInt(price)
    //         }])
    //         setname('')
    //         setpice('')
    //         nameref.current.focus()
    //     }
    //    const handledelete = (index) => {
    //     const result3 = produce.filter((e,id3)=>{
    //         return id3!==index
    //     })
    //     setproduce(result3)
    //    }
    //    const totol =  useMemo(()=> {
    //         const result = produce.reduce((result1,rerult2)=> {
    //             return result1 + rerult2.price
    //            },0)
    //            return result
    //     },[produce])
    // <input
    //         ref = {nameref} 
    //         placeholder="Nhập tên sản phẩm"
    //         value={name}
    //         onChange = {(e)=> {setname(e.target.value)}}
    //         />
    //         <input 
    //         placeholder="Nhập giá sản phẩm"
    //         value={price}
    //         onChange = {(e) => {
    //             setpice(e.target.value)
    //         }}
    //         />
    //         <button onClick={handleProduce}>ADD</button>
    //         <h1>TỔNG: {totol}</h1>
    //         <ul>
    //             {produce.map((e,id)=> {
    //                 return (<div key={id}>
    //                     <li  style = {{color: 'green',fontSize: '50px'}}>{e.name}-{e.price}</li>
    //                     <button onClick={()=> {handledelete(id)}}>XÓA</button>
    //                     </div>)
    //             })}
    //         </ul>