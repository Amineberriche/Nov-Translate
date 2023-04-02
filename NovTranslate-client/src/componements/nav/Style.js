import { makeStyles } from "@material-ui/core";
import { alpha } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    navbar:{
      backgroundColor:"white",
    },
    toolbar:{
        backgroundColor:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        textDecoration:"none",  
    },
    logoLg:{
        display:"none",
        color:"#3f3f3f",
        fontSize:"1.75rem",
        marginBottom:"6%",
        [theme.breakpoints.up("md")]:{
            display: "block",
        }
    },
    logoSm:{
        display: "block",
        color: "#3f3f3f",
        fontSize:"1.75rem",
        marginBottom:"6%",
        [theme.breakpoints.up("md")]:{
            display: "none",
        },
    },
    navtext:{
      color:"#3f3f3f",
      display: "flex",
      alignItems:"center",
      fontSize:"16px",
      fontWeight:"500",
      marginRight:theme.spacing(4),
      [theme.breakpoints.down("sm")]:{
          display:"none",
      },
    },
    search:{
        display: "flex",
        alignItems:"center",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        
        [theme.breakpoints.down("xs")]:{
            display: (props)=> props.open ? "flex" : "none",
            width:"70%",
        },
    },
    input:{
        [theme.breakpoints.down("xs")]:{
           padding:"5px 0px", 
        },
       color:"#3f3f3f",
       marginLeft: theme.spacing(1), 
    },
    cancel:{
        color:"#3f3f3f",
        [theme.breakpoints.up("sm")]:{
            display:"none",
        },
    },
    searchButton:{
        color:"#3f3f3f",
        marginRight:theme.spacing(2),
        [theme.breakpoints.up("sm")]:{
            display:"none",
        },
    },
    searchIcon:{
        color:"#3f3f3f",
        marginLeft:theme.spacing(5),
    },
    icons:{
      color:"#3f3f3f",
      alignItems:"center",
      display: (props)=> (props.open ? "none" : "flex"),
    },
    select:{
        color:"#3f3f3f",
        marginRight:theme.spacing(2),
        marginLeft:theme.spacing(2),
        display:"flex",
        alignItems:"center",
    },
    menuItem:{
      display:"flex",
      alignItems:"center",
    },
    menuItemLang:{
      fontSize:"16px",
      //fontWeight:"410",
      marginLeft:theme.spacing(1),
      [theme.breakpoints.down("md")]:{
        display: "none",
      },
    },
    badge:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        color:"#3f3f3f",
        marginRight:theme.spacing(2),
        width:"43px",
        height:"43px",
        //color:'#65676B',
        '&:hover': {
          borderRadius:"100%",
          border:'1px solid white',
          backgroundColor:'#f1f1f1',
          color:'#3997bd',
      },
    },
    avatarbadge:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      marginLeft:theme.spacing(1),
      width:"43px",
      height:"43px",
    },
    span:{
      color:"#2196f3",
      fontSize:"2.20rem",
      marginRight:"2px",
      fontFamily:"Noto Serif Display",
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[300],
    },
    list: {
      width: '100%',
      maxWidth: 360,
      minWidth: 260,
      paddingTop: '2px',
      paddingBottom: '2px',
      backgroundColor: theme.palette.background.paper,
    },
  
  }));



export default useStyles;