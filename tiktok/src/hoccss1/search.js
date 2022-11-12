import style from './hoccss1.module.css'
const Search = ()=> {
    return (
        <div className={style.search}>
            <div className={style.search1}>
                <input placeholder='Xin mời nhập'></input>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
export default Search