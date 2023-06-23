import  Home  from "./pages/Home";
import './App.css';
import { Route, Routes } from "react-router-dom";
import QuestionPage from "./pages/QuestionPage";
import { Box} from "@mui/material";
import { themeLight,themeDark } from './theme';
import {ThemeProvider} from "@mui/material"
import {useState} from "react";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';


function App() {
  const [curTheme,setCurTheme] = useState(themeLight);
  return (
    <div className="App">
        <ThemeProvider theme={curTheme}>
          <Box sx={{position:"relative",backgroundColor:curTheme.palette.background.default,height:"100vh",p:"30px 0"}}>
            <Routes>
              <Route path='*' element={<Home/>}/>
              <Route path='/question' element={<QuestionPage/>}/>
            </Routes>
            <Box sx={{position:"absolute",top:"10px",left:"10px",p:"5px",width:"25px",height:"25px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:curTheme.palette.text.primary,cursor:"pointer",
            "&:hover":{
              opacity:"0.9",
            }}}
            onClick={()=>{
              if(curTheme === themeLight){
                setCurTheme(themeDark);
              } else {
                setCurTheme(themeLight);
              }
            }}>
              {curTheme === themeLight ?
                <NightlightRoundIcon sx={{color:curTheme.palette.background.default,width:"15px",height:"15px"}}/>
                : 
                <LightModeIcon sx={{color:curTheme.palette.background.default,width:"15px",height:"15px"}}/>           
              }
            </Box>
          </Box>
        </ThemeProvider>
    </div>
  );
}

export default App;
