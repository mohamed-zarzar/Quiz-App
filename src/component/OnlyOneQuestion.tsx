import { Box, Button, Typography } from "@mui/material";
import { questionTypeOne } from "../pages/QuestionPage";
import { useTheme} from '@mui/material/styles';


function OnlyOneQuestion (props:{
    question:questionTypeOne,
    nextQuestion:()=>void,
    addCorrect:()=>void,
    }) {
        const theme = useTheme();
        const nextQuestion =props.nextQuestion;
        const addCorrect =props.addCorrect;
        const {type,correct_answer,incorrect_answers,question} =props.question;
        const all_answer : string[] = [correct_answer,...incorrect_answers];
        const onClickAnswer = (answer:string)=> {
            if(answer === correct_answer) addCorrect();
            nextQuestion();
        }
        function BooleanQuestion () {
            return (
                <Box sx={{display:"flex",}}>
                        <Button variant="contained" sx={{m:"50px 20px"}}
                        color="success"
                        onClick={()=>onClickAnswer("True")}>
                        True</Button>
                        <Button variant="contained" sx={{m:"50px 20px"}}
                        color="error"
                        onClick={()=>onClickAnswer("False")}>
                        False</Button>
                </Box>
            )
        };
        function MultipleQuestion () {
        let mySet = new Set<number>();
        while(mySet.size < 4) {
            mySet.add(Math.ceil(Math.random()*4));
        }
        let randomNumber: number[] =[] ;
        mySet.forEach((num)=>randomNumber.push(num));
            return (
                <Box sx={{display:"flex",flexDirection:"column",p:"40px 0"}}>
                    {      
                        all_answer.map((answer,index)=>(
                        <Button key={index} variant="contained" sx={{m:"10px 0",width:{xs:"300px",sm:"350px",md:"500px"}}}
                        style={{order:`${randomNumber[index]}`}}
                        onClick={()=>onClickAnswer(answer)}>
                        {answer}</Button>
                    ))}
                </Box>
            )
        };
        return (
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                <Typography margin="20px 0" color={theme.palette.text.primary}>{question}</Typography>
                {type === "multiple" ? <MultipleQuestion/> : <BooleanQuestion/>}
            </Box>
        );
}





export default OnlyOneQuestion;