import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({ 
    navbar:{
        backgroundColor:"#3fafdd",
        marginTop: "61px",
    },
    toolbar:{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      color:"white",
    },
    container:{
        padding: theme.spacing(12, 0, 6), 
        marginTop: theme.spacing(9), 
    },
    card:{
        borderRadius:"14px",
    },
    fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    container_form:{
      padding:theme.spacing(4.5),
      width:500,
      minHeight:550,
      maxHeight:570,
      backgroundColor:"white",
      borderRadius:"15px",
      position:"absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin:"auto",
      [theme.breakpoints.down("xs")]:{
          width:"100vw",
          height:"100vh",
          borderRadius:"0%",
      }
    },
    form:{
      padding:theme.spacing(2),  
    },
    item:{
      marginBottom:theme.spacing(3.5),
    },
    formControl: {
      minWidth: "100%",
      maxWidth: "100%",
    },
    error:{
      marginBottom:theme.spacing(-3.5),
      color: "#F30A0A",

    },

}));




export default useStyles;
