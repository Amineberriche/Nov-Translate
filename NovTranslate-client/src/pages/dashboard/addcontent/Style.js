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
        padding: theme.spacing(11, 0, 6), 
        marginTop: theme.spacing(9), 
    },
    card:{
        borderRadius:"14px",
    },
    card2:{
      borderRadius:"14px",
      marginTop:theme.spacing(3),
    },
    input: {
      display: 'none',
    },
    text:{
      display:"flex",
      alignItems:"center",
      fontSize:"18px",
      color:"#6e6d6d",
      fontWeight:"400",
    },
    text2:{
      display:"flex",
      alignItems:"center",
      placeContent:"end",
      fontSize:"18px",
      fontWeight:"400",
    },
    box:{
      display:"flex",
      alignItems:"center",
      //marginTop:"-5px",
    },
    box2:{
      display:"flex",
      alignItems:"center",
      marginRight:15,
      marginLeft:15,
      marginTop:"-10px",
    },
    avatarbox:{
      display:"flex",
      alignItems:"center",
      marginRight:15,
      marginLeft:15,
      marginTop:"-5px",
    },
    listicon:{
      minWidth:"32px"
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
    button:{
      display:"flex",
      alignItems:"center",
      placeContent:"end",
      marginTop:"-1.5px",
    },
    containermodal:{
      padding:theme.spacing(4.5),
      width:500,
      height:246,
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
    error:{
      marginBottom:theme.spacing(-3.5),
      color: "#F30A0A",
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
    lngsrc:{
      marginRight:29,
    },
    progress:{
      color:"#E9E6E6"
    },
    divider:{
      margin:10,
    },
    
  
  }));



export default useStyles;