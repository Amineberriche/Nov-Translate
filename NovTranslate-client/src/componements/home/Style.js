import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    background:{
        backgroundColor:"white",
    },
    container1: {
       minHeight:'100vh',
       backgroundColor:"#3997bd",
       padding: theme.spacing(14, 0, 6), 
       marginTop: theme.spacing(6),
    },
    container2:{
        padding: theme.spacing(4, 0, 2),
    },
    container3:{
        backgroundColor:"#3997bd",
        padding: theme.spacing(12, 0, 6), 
        marginTop: theme.spacing(6),
    },
    contact_container:{
        backgroundColor:"#125f7c",
        color:"white",
        padding: theme.spacing(8, 0, 6),
    },
    typography:{
        color:"white",
    },
    icon: {
        marginRight: '20px',
    },
    
    buttons1:{
        marginTop: '40px',
        maxWidth:'400px',
        minWidth:'187px',
        backgroundColor:'#fff',
        color:'#3997bd',
        border:'1px solid #3498bd',
        padding:'13px 48px',
        borderRadius:'40px',
        fontSize:'16px',
        fontWeight:'400',
        lineHeight:'19px',
        textDecoration:'none',
        '&:hover': {
            padding:'14px 50px',
            border:'1px solid #3498bd',
            backgroundColor:'#fff',
            color:'#3997bd',
        },
    },
    buttons2: {
        marginTop: '40px',
        maxWidth:'400px',
        minWidth:'187px',
        backgroundColor:'transparent',
        color:'white',
        border:'1px solid white',
        padding:'13px 48px',
        borderRadius:'40px',
        fontSize:'16px',
        fontWeight:'400',
        lineHeight:'19px',
        textDecoration:'none',
        '&:hover': {
            border:'1px solid white',
            backgroundColor:'#fff',
            color:'#3997bd',
        },
    },
    card:{
        borderRadius:'20px',
    },
    contact_button:{
        marginTop: '40px',
        maxWidth:'400px',
        minWidth:'187px',
        backgroundColor:'transparent',
        color:'white',
        border:'1px solid white',
        padding:'13px 48px',
        borderRadius:'40px',
        fontSize:'16px',
        fontWeight:'400',
        lineHeight:'19px',
        textDecoration:'none',
        '&:hover': {
            border:'1px solid white',
            backgroundColor:'#fff',
            color:'#3997bd',
        },
    },
    imghome:{
        [theme.breakpoints.down("sm")]:{
            display:"none",
        },
    },
    footer:{
        backgroundColor:"#222"
    },
    toolbar:{
        color:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        textDecoration:"none",  
    },
    logoLg:{
        display:"none",
        marginBottom:"1%",
        color:"#ffffff4d",
        fontSize:"1.75rem",
        [theme.breakpoints.up("md")]:{
            display: "block",
        }
    },
    logoSm:{
        display: "block",
        marginBottom:"1%",
        color: "#ffffff4d",
        fontSize:"1.75rem",
        [theme.breakpoints.up("md")]:{
            display: "none",
        },
    },
    span:{
        color:"#2196f3",
        fontSize:"2.20rem",
        marginRight:"2px",
        fontFamily:"Noto Serif Display",
      },
      footertext:{
        color:"#ffffff4d",
        display: "flex",
        alignItems:"center",
        fontSize:"16px",
        fontWeight:"300",
        marginRight:theme.spacing(3),
        [theme.breakpoints.down("sm")]:{
            display: "none",
        }
      },
      footericon:{
        color:"#ffffff4d",
        display: "flex",
        alignItems:"center",
        fontSize:"16px",
        fontWeight:"500",
        marginRight:theme.spacing(3),
      },


}));

export default useStyles;