import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
    profilcontainer:{
      padding: theme.spacing(8, 0, 6), 
      marginTop: theme.spacing(6),
    },
    button:{
          maxWidth:'400px',
          minWidth:'187px',
          backgroundColor:'#2196f3',
          color:'#fff',
          border:'1px solid #3498bd',
          padding:'10px 28px',
          borderRadius:'20px',
          fontSize:'16px',
          fontWeight:'400',
          lineHeight:'19px',
          textDecoration:'none',
          '&:hover': {
              border:'1px solid #fff',
              backgroundColor:'#3997bd',
              color:'#fff',
          },
    },
    grid:{
      display:"flex",
      alignItems:"center",
    },
    userimg:{
      width: theme.spacing(22),
      height: theme.spacing(22),
    },
    input: {
      display: 'none',
    },
    text:{
      marginLeft:"5%",
      marginTop:theme.spacing(5),
    },
    buttonimg:{
          marginTop:"5%",
          maxWidth:'400px',
          minWidth:'187px',
          backgroundColor:'#2196f3',
          color:'#fff',
          border:'1px solid #3498bd',
          padding:'10px 28px',
          borderRadius:'20px',
          fontSize:'16px',
          fontWeight:'400',
          lineHeight:'19px',
          textDecoration:'none',
          '&:hover': {
              border:'1px solid #fff',
              backgroundColor:'#3997bd',
              color:'#fff',
          },
    },
  
  
  }));
  




export default useStyles;
