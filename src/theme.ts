import {createTheme} from "@mui/material"



const darkMode = {
    text: {
        primary: "#fff",
        secondary:"rgba(255, 255, 255, 0.7)",
        disabled:"rgba(255, 255, 255, 0.5)",
    },
    action:{
        active:"#fff",
        hover:"rgba(255, 255, 255, 0.08)",
        selected:"rgba(255, 255, 255, 0.16)",
        disabled:"rgba(255, 255, 255, 0.3)",
        disabledBackground:"rgba(255, 255, 255, 0.12)",
    },
    background:{
        default:"#121858",
        paper:"#121858",
    },
    divider:"rgba(255, 255, 255, 0.12)"
}
const lightMode  = {
    text: {
        primary: "rgba(18,24,88, 0.87)",
        secondary:"rgba(18,24,88, 0.6)",
        disabled:"rgba(18,24,88, 0.38)",
    },
    action:{
        active:"rgba(18,24,88, 0.54)",
        hover:"rgba(18,24,88, 0.04)",
        selected:"rgba(18,24,88, 0.08)",
        disabled:"rgba(18,24,88, 0.26)",
        disabledBackground:"rgba(18,24,88, 0.12)",
    },
    background:{
        default:"#fff",
        paper:"#fff",
    },
    divider:"rgba(18,24,88, 0.12)"
}





export const themeLight = createTheme({
    palette:{
        ...lightMode,
    }
})
export const themeDark = createTheme({
    palette:{
        ...darkMode,
        primary:{
            dark:"#b2a429",
            main:"#ffeb3b",
            light:"#ffef62",
            
        }
    }
})
