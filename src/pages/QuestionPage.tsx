import { Box, CircularProgress, Typography } from "@mui/material";
import { useAppSelector,useAppDispatch } from "../rtk/hook";
import {  useEffect, useState } from "react";
import OnlyOneQuestion from "../component/OnlyOneQuestion";
import { load } from "../rtk/features/questionInfoSlice";
import CustomDialog from "../component/CustomDialog";
import { useTheme} from '@mui/material/styles';

export type questionTypeOne = {
    category :string,
    correct_answer:string,
    difficulty:string,
    incorrect_answers :string[],
    question:string,
    type : string,
}

function QuestionPage () {
    const theme = useTheme();
    const url = useAppSelector(state => state.question.url);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(load(url));
    },[])
    const questionData = useAppSelector(state => state.question.data);
    const isLoading = useAppSelector(state => state.question.loading);
    const numberOfQuestion = useAppSelector(state => state.question.questionInfo.number);
    const [questionIndex,setQuestionsIndex] =useState<number>(0);
    const [numberOfCorrect,setNumberOfCorrect] =useState<number>(0);
    const nextQuestion = () => {
        setQuestionsIndex(questionIndex+1);
    };
    const addCorrect = () => {
        setNumberOfCorrect(numberOfCorrect+1);
    }
    return (
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",p:"10px"}}>
            {
            +numberOfQuestion === questionIndex+1 ?
            <CustomDialog correctAnswer={numberOfCorrect} allAnswe={+numberOfQuestion}/> 
            :
            <>
                <Typography variant="h4" color="primary">Question : {questionIndex+1}</Typography>
                {!isLoading && questionData.length !== 0 ? 
                <OnlyOneQuestion question={questionData[questionIndex]} nextQuestion={nextQuestion} addCorrect={addCorrect}/>
                :   <Box sx={{ display: 'flex' ,m:"50px"}}>
                        <CircularProgress size="10rem"/>
                    </Box>
                }
                <Typography variant="h4" color={theme.palette.text.primary}>{numberOfCorrect}/{numberOfQuestion}</Typography>
            </>
        }
        </Box>
    );
}
export default QuestionPage;