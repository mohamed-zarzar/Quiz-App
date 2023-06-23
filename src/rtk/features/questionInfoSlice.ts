import {createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuestionType } from '../../pages/Home';
import {questionTypeOne} from "../../pages/QuestionPage";
import axios from 'axios';

type StateType ={
    questionInfo:QuestionType,
    data :questionTypeOne[],
    url:string,
    loading:boolean,
}

const initialState: StateType = {
    questionInfo:{
        number : '10',
        category :"0", 
        difficult:"any",
        type:"any",
    },
    data:[],
    url:"",
    loading:false,
}

export const load= createAsyncThunk("questionInfoSlice/load",async(url:string)=>{
    const res = await axios.get(url);
    const data = await res.data;
    return data.results;
})


const API = "https://opentdb.com/api.php?";

const questionInfoSlice = createSlice({
    name: 'questionInfoSlice',
    initialState,
    reducers: {
        addQuestIonInfo: (state, action: PayloadAction<QuestionType>) => {
            let newApi = `${API}amount=${action.payload.number}`;
            if(action.payload.category !== "8") newApi += `&category=${action.payload.category}`;
            if(action.payload.difficult !== "any") newApi += `&diffcult=${action.payload.difficult}`;
            if(action.payload.type !== "any") newApi += `&type=${action.payload.type}`;
            state.url =newApi;
            state.questionInfo =action.payload;
        },
        restart: (state) => {
            state = initialState;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(load.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(load.fulfilled,(state,action)=>{
            state.loading = false;
            if(state.data.length === 0) {
                state.data =action.payload;
            } else return;
        })
    }
}
)

export default questionInfoSlice.reducer;
export const { addQuestIonInfo,restart} = questionInfoSlice.actions;