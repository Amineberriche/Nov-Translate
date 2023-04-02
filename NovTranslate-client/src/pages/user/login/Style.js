import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
    container:{
        backgroundColor:"white",
        padding: theme.spacing(8, 0, 6), 
        marginTop: theme.spacing(6),
    },
    buttonG:{
        marginTop: theme.spacing(3),
        marginBottom:"5%",
        maxWidth:'400px',
        minWidth:'187px',
        backgroundColor:'#f32b21',
        color:'#fff',
        border:'1px solid #f32b21',
        padding:'13px 28px',
        borderRadius:'40px',
        fontSize:'16px',
        fontWeight:'400',
        lineHeight:'19px',
        textDecoration:'none',
        '&:hover': {
            border:'1px solid #fff',
            backgroundColor:'#f32b21',
            color:'#fff',
        },
    },
    buttonF:{
        marginTop: theme.spacing(3),
        marginBottom:"5%",
        maxWidth:'400px',
        minWidth:'187px',
        backgroundColor:'#2196f3',
        color:'#fff',
        border:'1px solid #3498bd',
        padding:'13px 28px',
        borderRadius:'40px',
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
    buttonLogin:{
        marginTop: theme.spacing(7),
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
    formulaire:{
        marginTop: theme.spacing(3),
    },
    title:{
        marginTop:theme.spacing(3), 
    },
    or:{
        display:"flex",
        alignItems:"center",
        color:"textSecondary",
    },
    error:{
        color: "#F30A0A",
        marginBottom:theme.spacing(-2),
    },
    gridbutton:{
        display:"flex",
        placeContent:"end",
        marginTop:"-56px",
    },
    showpassword:{
        color:"#979797", 
    },
    passwordfield:{
        padding:"18.5px 57px 18.5px 18.5px",
    },
}));

export default useStyles;