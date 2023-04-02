import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) =>({ 
    background:{
        backgroundColor:"white",
        padding: theme.spacing(13, 0, 0),

    },
    text: {
        padding: theme.spacing(14, 0, 0),
        marginLeft:30,
    },
    text2: {
        marginLeft:30,
        marginTop:"40px",
    },
    imghome:{
        width:"100%",
        height:"100vh",
        [theme.breakpoints.down("sm")]:{
            height:"100vh",
        }
    },
  
  }));



export default useStyles;