import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useAppDispatch } from '../rtk/hook';
import { restart } from '../rtk/features/questionInfoSlice';
import { Link } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}


type DialogProp = {
  correctAnswer: number,
  allAnswe:number,
}

export default function CustomDialog(props:DialogProp) {
  const dispatch = useAppDispatch();
  const {correctAnswer,allAnswe} = props;
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const handelRestart = () => {
    dispatch(restart());
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box sx={{p:"50px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Typography variant='h2'> Result</Typography>
          <Box sx={{m:"30px 0"}}>
            <Typography variant='h6' color="green" margin="10px ">Correct : {correctAnswer}</Typography>
            <Typography variant='h6' color="error" margin="10px ">False : {allAnswe - correctAnswer}</Typography>
            <Typography variant='h6' color="primary" margin="10px ">All : {allAnswe}</Typography>
          </Box>
          <Typography variant='h4' sx={{fontSize:{xs:"20px",md:"40px"}}}>Your Rate : {Math.round(correctAnswer *100 / allAnswe)}%</Typography>    
          <Link to="*">
            <Button variant="contained" sx={{m:"30px 0 0 0"}}
            onClick={handelRestart}>Restart</Button>
          </Link>
        </Box>
      </BootstrapDialog>
    </div>
  );
}