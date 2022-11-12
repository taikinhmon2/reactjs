import { createContext, useState } from "react"
export const themeContex = createContext()
const Provider = ({children}) => {
    const [theme, setTheme] = useState('light')
    const togTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    const themeT = {
        theme,
        togTheme
    }
    return <themeContex.Provider value={themeT}>
        {children}
    </themeContex.Provider>
}
export default Provider