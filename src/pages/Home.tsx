import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../rtk/hook";
import {addQuestIonInfo} from "../rtk/features/questionInfoSlice";
import { Link } from "react-router-dom";
import { useTheme,} from '@mui/material/styles';

const categorys :string[]= ["Any Category","General Knowledge","Entertainment:Books","Entertainment:Film","Entertainment:Music","Entertainment:Musicals & Theaters","Entertainment:Television","Entertainment:Books","Entertainment:Video Games","Entertainment:Board Games","Science & Nature","Science:Computers","Science:Mathematics","Mythology","Sports","Geography","History","Politics","Art","Celebrities","Animals","Vehickes","Entertainment:Comics","Science:Gadgets","Entertainment:Anime","Entertainment:Cartoon"];

export type QuestionType = {
    number: string,
    category:string,
    difficult: string,
    type:string,
}


function Home () {
    const [isNumberValid,setIsNumberValid] =useState<boolean>(false);
    const dispatch = useAppDispatch();
    const [info,setInfo] =useState<QuestionType>({
        number : '10',
        category :"0", 
        difficult:"any",
        type:"any",
    });
    const handleChangeCategoty = (event: SelectChangeEvent) => {
        setInfo({...info,"category":event.target.value});
    };
    const handleChangeNumber = (value:string) => {
        if(+value < 10) {
            setInfo({...info,"number":value});
            setIsNumberValid(true);
        } else {
            setInfo({...info,"number":value});
            setIsNumberValid(false);
        }
    };
    const handleChangeType = (event: SelectChangeEvent) => {
        setInfo({...info,"type":event.target.value});
    };
    const handleChangeDiffcult = (event: SelectChangeEvent) => {
        setInfo({...info,"difficult":event.target.value});
    };
    const OnClickGetStart = () => {
        dispatch(addQuestIonInfo(info));
    }
    return (
        <Box sx={{display:"flex",flexDirection:"column",p:"50px",justifyContent:"center",alignItems:"center"}}>
            <Typography variant="h2" sx={{fontWeight:"bold",m:"30px 0",textAlign:"center",fontSize:{xs:"40px",md:"60px"}}} color="primary" >Quiz App</Typography>
            <TextField sx={{width:{xs:"250px",sm:"400px",md:"500px",lg:"600px"}}}
            color={`${isNumberValid ? "error" : "primary"}`}
            focused={isNumberValid}
            id="outlined-number"
            label="Number"
            type="number"
            value={info.number}
            InputProps={{ 
                inputProps: {
                    min:10 , max:50,
                }
            }}
            onChange={(e)=>{handleChangeNumber(e.target.value)}}
            InputLabelProps={{
                shrink: true,
            }}
            />
            <Box sx={{ width:{xs:"250px",sm:"400px",md:"500px",lg:"600px"},m:"10px 0 0 0" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={`${+info.category+8}`}
                    label="info"
                    onChange={handleChangeCategoty}
                    >
                        {categorys.map((category,index)=>(
                            <MenuItem key={index} value={`${+index+8}`}>{category}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ width:{xs:"250px",sm:"400px",md:"500px",lg:"600px"},m:"10px 0 0 0" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">type</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={info.type}
                    label="info"
                    onChange={handleChangeType}
                    >
                        <MenuItem value={"any"}>any Type</MenuItem>
                        <MenuItem value={"multiple"}>multiple</MenuItem>
                        <MenuItem value={"boolean"}>True Or False</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ width:{xs:"250px",sm:"400px",md:"500px",lg:"600px"},m:"10px 0 0 0" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Diffcult</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={info.difficult}
                    label="info"
                    onChange={handleChangeDiffcult}
                    >
                        <MenuItem value={"any"}>Any Diffcult</MenuItem>
                        <MenuItem value={"easy"}>Easy</MenuItem>
                        <MenuItem value={"medium"}>Medium</MenuItem>
                        <MenuItem value={"hard"}>Hard</MenuItem>
                    </Select>
                </FormControl>
            </Box>
                <Link to="/question" style={{pointerEvents:`${isNumberValid ? "none" : "auto"}`}}>
                    <Button  variant="contained" sx={{ width:{xs:"250px",sm:"400px",md:"500px",lg:"600px"},m:"10px 0 0 0" }}
                    onClick={OnClickGetStart} disabled={isNumberValid}>Get Started</Button>
                </Link>
        </Box>
    );
}






export default Home;