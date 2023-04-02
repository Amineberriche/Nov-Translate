import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    background:{
        backgroundColor:"#f1f1f1",
        //background: 'linear-gradient(to right bottom, #00EFD1, #00ACEA)',
        
    },
    grid:{
        width:"100%",
        marginLeft:"-16px",
        marginRight:"-16px",
        marginTop:"-16px",
        marginBottom:"0px",
    },
    card:{
        borderRadius:"25px",
    },
    table: {
        minWidth: 650,
    }

}));




export default useStyles;
