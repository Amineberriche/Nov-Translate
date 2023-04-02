import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme) =>({
    main:{
        backgroundColor:"white",
    },
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
    search: {
        position: 'relative',
        borderRadius:"20px",
        backgroundColor: "#f3f1f1",
        '&:hover': {
          backgroundColor: "#fafafa",
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: "13px 18px 13px 18px",
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
      },
      paper: {
          marginTop:"5%",
          borderRadius:"20px",
          backgroundColor: "#f3f1f1",
          padding: "13px 18px 13px 18px", 
      },
      paper2: {
        borderRadius:"20px",
        backgroundColor: "#f3f1f1",
        padding: "13px 18px 13px 18px", 
        marginBottom:"20px",
    },
      text:{
        display:"flex",
        alignItems:"center",
        fontSize:"18px",
        fontWeight:"400",
      },
      text_title:{
        display:"flex",
        alignItems:"center",
        fontSize:"25px",
        fontWeight:"400",
      },
      icon:{
          marginRight:"2%",
      },
      iconlang:{
          display:"flex",
          placeContent:"end",
      },
      iconfile:{
        marginBottom:"-5px",
      },
      button:{
          display:"flex",
          placeContent:"end",
      },
      inputfile: {
        display: 'none',
      },
      imgupload:{
      width:"200px",
      display:"block",
      marginLeft:"auto",
      marginRight:"auto",
      },
      divider:{
        marginBottom:"5px",
      },
      progress:{
        marginBottom:"-3px",
      },
      labelIcon:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
      },
      fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
        width:"60px",
        height:"60px",
        background:"#fff",
        borderRadius:"60px",
        cursor: 'pointer',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        transition:"0.5s",
        '&:hover': {
          width:"60px",
          height:"60px",
        },
        "&::before": {
          position:"absolute",
          content: '""',
          inset:"0",
          borderRadius:"60px",
          background: 'linear-gradient(to right bottom, #56CCF2, #2F80ED)',
          opacity:"0",
          transition:"0.5s",
        },
        '&:hover:before': {
          opacity:"1",
        },
        "&::after": {
          content: '""',
          position:"absolute",
          width:"100%",
          height:"100%",
          borderRadius: "60px",
          background: 'linear-gradient(to right bottom, #56CCF2, #2F80ED)',
          transition:"0.5s",
          filter:"blur(15px)",
          zIndex: "-1",
          opacity: "0",       
        },
        '&:hover:after': {
          opacity:"0.5",
        },
      },
      
      
      fab2: {
        position: "fixed",
        bottom: 100,
        right: 20,
        width:"60px",
        height:"60px",
        background:"#fff",
        borderRadius:"60px",
        cursor: 'pointer',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        transition:"0.5s",
        '&:hover': {
          width:"60px",
          height:"60px",
        },
        "&::before": {
          position:"absolute",
          content: '""',
          inset:"0",
          borderRadius:"60px",
          background: 'linear-gradient(to right bottom, #80FF72, #7EE8FA)',
          opacity:"0",
          transition:"0.5s",
        },
        '&:hover:before': {
          opacity:"1",
        },
        "&::after": {
          content: '""',
          position:"absolute",
          width:"100%",
          height:"100%",
          borderRadius: "60px",
          background: 'linear-gradient(to right bottom, #80FF72, #7EE8FA)',
          transition:"0.5s",
          filter:"blur(15px)",
          zIndex: "-1",
          opacity: "0",
        },
        '&:hover:after': {
          opacity:"0.5",
        },
      },
      fab3: {
        position: "fixed",
        bottom: 180,
        right: 20,
        width:"60px",
        height:"60px",
        background:"#fff",
        borderRadius:"60px",
        cursor: 'pointer',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        transition:"0.5s",
        '&:hover': {
          width:"60px",
          height:"60px",
        },
        "&::before": {
          position:"absolute",
          content: '""',
          inset:"0",
          borderRadius:"60px",
          background: 'linear-gradient(to right bottom, #FF9966, #FF5E62)',
          opacity:"0",
          transition:"0.5s",
        },
        '&:hover:before': {
          opacity:"1",
        },
        "&::after": {
          content: '""',
          position:"absolute",
          width:"100%",
          height:"100%",
          borderRadius: "60px",
          background: 'linear-gradient(to right bottom, #FF9966, #FF5E62)',
          transition:"0.5s",
          filter:"blur(15px)",
          zIndex: "-1",
          opacity: "0",
        },
        '&:hover:after': {
          opacity:"0.5",
        },
      },
      fabIcon: {
        position:"absolute",
        color: "#777",
        fontSize:"1.75em",
        transition:"0.5s",
        transitionDelay:"0.25s",
        transform: "scale(1)",
        '&:hover': {
          transform: "scale(1)",
          color:"#fff",
          transitionDelay:"0s",
          fontSize:"1.75em",
        },
      },
      
      popover: {
        pointerEvents: "none"
      },
      fabText1: {
        //padding: theme.spacing(1),
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"#777",
        fontSize:"1.25em",
        background: '#fff',
        width: "160px",
        height:"60px",
        borderRadius:"60px",
        marginLeft: theme.spacing(-9.5),
      },
      fabText2: {
        //padding: theme.spacing(1),
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"#777",
        fontSize:"1.25em",
        background: '#fff',
        width: "160px",
        height:"60px",
        borderRadius:"60px",
        marginLeft: theme.spacing(-9.5),
      },
      fabText3: {
        //padding: theme.spacing(1),
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"#777",
        fontSize:"1.25em",
        background: '#fff',
        width: "160px",
        height:"60px",
        borderRadius:"60px",
        marginLeft: theme.spacing(-9.5),
      },
    
  
}));



export default useStyles;
