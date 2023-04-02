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
        paddingTop:"5px",
    },
    card2:{
      borderRadius:"14px",
      marginTop:theme.spacing(3),
    },
    container_form:{
      padding:theme.spacing(4.5),
      width:500,
      height:550,
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
    box:{
      display:"flex",
      alignItems:"center",
      //justifyContent:"center",

    },
    point: {
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      width:"40px",
      height:"40px",
      //color:'#65676B',
      '&:hover': {
        borderRadius:"100%",
        border:'1px solid white',
        backgroundColor:'#f1f1f1',
        color:'#3997bd',
    },
    },
    form:{
      padding:theme.spacing(1),  
    },
    text2:{
      fontSize:"18px",
      fontWeight:"400",
    },
    item:{
      marginBottom:theme.spacing(1.5),

    },
    buttons:{
      display:"flex",
      placeContent:"end",
  },
    formControl: {
      minWidth: "100%",
      maxWidth: "100%",
    },
    deleteimg:{
      width:"120px",
      display:"block",
      marginLeft:"auto",
      marginRight:"auto",
    },
    deleteButtons:{
      display:"block",
      marginLeft:"auto",
      marginRight:"auto",
      marginBottom:"5px",
    },

}));




export default useStyles;
