import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({ 
    background:{
      backgroundColor:"#D3E7EE",
    },
    container:{
        height:"55s0px",
        maxWidth:"60px",
        backgroundColor: "white",
        color:"#555",
        paddingTop: theme.spacing(12),
        position:"absolute",
        top: 0,
        border: "2px solid #ece7e7",
        borderRadius:"0px 0px 10px 0px",
        [theme.breakpoints.up("lg")]: {
          backgroundColor: "white",
          maxWidth:"230px",
          color:"#555",
          border: "1px solid #ece7e7",
        },
    },
    item:{
        display:"flex",
        alignItems:"center",
        color:"#555",
        width:"100%",
        height:"43px",
        marginBottom:theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
          marginBottom: theme.spacing(4),
          cursor:"pointer",
        },
        '&:hover': {
          border:'1px solid white',
          //backgroundColor:'#f1f1f1',
          color:'#3997bd',
      },
      },
      icon:{
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("lg")]: {
          fontSize: "22px",
          },
      },
      text:{
        fontWeight:500,
        [theme.breakpoints.down("md")]: {
        display:"none",
        },
      }
    
}));

export default useStyles;