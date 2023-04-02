import { Button, Card, CardActions, CardContent, Grid, TablePagination, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import userService from '../../../services/user.service';
import projectService from '../../../services/projects.service';
import Slidbar from '../../../componements/slid/Slidbar';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';


import { Link } from 'react-router-dom';

import useStyles from './Style';


function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };
  

/*function createDataUser(email,fullname,username,created_at ) {
    return {email,fullname,username,created_at  };
  }
  
  const rows = [
    createDataUser("aberriche15@gmail.com","Berriche Amine", "Amine", "2022-06-08" ),
    createDataUser("mohmmed@gmail.com","Omehdi Mohmmed", "Mohmmed", "2022-06-08" ),
    createDataUser("yassir1999@gmail.com","Orimchi Yassir", "Yassir", "2022-06-08" ),
    createDataUser("abd99@gmail.com","Abdellaoui Mohmmed", "Mohmmed", "2022-06-08" ),
    createDataUser("ouchani13@gmail.com","Ouchani Abdrehmen", "Abdrehmen", "2022-06-08" ),
    createDataUser("Chetouani77@gmail.com","Chetouani", "Ayoub", "2022-06-08" ),
    createDataUser("ouchani13@gmail.com","Ouchani Abdrehmen", "Abdrehmen", "2022-06-08" ),
    createDataUser("abd99@gmail.com","Abdellaoui Mohmmed", "Mohmmed", "2022-06-08" ),
    createDataUser("mohmmed@gmail.com","Omehdi Mohmmed", "Mohmmed", "2022-06-08" ),
    createDataUser("yassir1999@gmail.com","Orimchi Yassir", "Yassir", "2022-06-08" ),
    createDataUser("aberriche15@gmail.com","Berriche Amine", "Amine", "2022-06-08" ),
  ];

  {function createDataUser2(email,project_name,company_name,project_url,langue,created_at ) {
    return {email,project_name,company_name,project_url,langue,created_at  };
  }
  const rows2 = [
    createDataUser2("aberriche15@gmail.com","nov translate", "novelis","www.nov.com","en","2022-06-08" ),
    createDataUser2("mohmmed@gmail.com","nov translate", "novelis","www.nov.com","en","2022-06-08"  ),
    createDataUser2("yassir1999@gmail.com","nov translate", "novelis","www.nov.com","en","2022-06-08"  ),
    createDataUser2("abd99@gmail.com","nov translate", "novelis","www.nov.com","en","2022-06-08"  ),
    createDataUser2("ouchani13@gmail.com","nov translate", "novelis","www.nov.com","en","2022-06-08"  ),
    createDataUser2("Chetouani77@gmail.com","nov translate", "novelis","www.nov.com","en","2022-06-08"  ),
    createDataUser2("ouchani13@gmail.com","nov translate", "novelis","www.nov.com","en","2022-06-08"  ),
    createDataUser2("abd99@gmail.com","nov translate", "novelis","www.nov.com","en","2022-06-08"  ),
    createDataUser2("mohmmed@gmail.com","nov translate", "novelis","www.nov.com","en","2022-06-08" ),
    createDataUser2("yassir1999@gmail.com","nov translate", "novelis","www.nov.com","en","2022-06-08"  ),
    createDataUser2("aberriche15@gmail.com","nov translate", "novelis","www.nov.com","en","2022-06-08" ),
  ];
}*/

const Admin = () => {
    const classes = useStyles();

    const [projects, setProjects] = useState([]);
    const [users,setUsers] = useState([]);

    useEffect(() => {
        init2();
     }, []);
 
     const init2 = () => {
         userService.getAll()
             .then(response => {
                 console.log('Printing users data', response.data);
                 setUsers(response.data)
             })
             .catch(error => {
                 console.log('Something went wrong', error);
             })
     }

    useEffect(() => {
       init();
    }, []);
    
    const init = () => {
        projectService.getAll()
            .then(response => {
                console.log('Printing projects data', response.data);
                setProjects(response.data)
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const handleDelete = (id) => {
        console.log('Printing id', id);
        projectService.remove(id)
            .then(response => {
                alert("Are you sure !");
                console.log('project deleted successfully' , response.data);
                init();
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
        clearInterval(timer);
        };
    }, []);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

    const [page2, setPage2] = React.useState(0);
    const [rowsPerPage2, setRowsPerPage2] = React.useState(5);
    const handleChangePage2 = (event, newPage2) => {
        setPage2(newPage2);
    };

    const handleChangeRowsPerPage2 = event => {
        setRowsPerPage2(parseInt(event.target.value, 10));
        setPage2(0);
    };
   const emptyRows2 = rowsPerPage2 - Math.min(rowsPerPage2, projects.length - page2 * rowsPerPage2);




  return (
    <div className={classes.background}>
    <Grid container>
      <Grid item xs={2} sm={2}>
            <Slidbar/>
      </Grid>
      <Grid item xs={10} sm={10} >
        <br/><br/><br/><br/>
        <h1>Dashboad</h1>
        <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Users
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                    Totals Users: 
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary" gutterBottom>
                    +3% from last week
                    </Typography>
                    <Typography variant="body2" component="p">
                    <LinearProgressWithLabel value={30} />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View Détails</Button>
                </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Projects
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                    Totals Projects: 
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary" gutterBottom>
                    +4% from last week
                    </Typography>
                    <Typography variant="body2" component="p">
                    <LinearProgressWithLabel value={40} />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View Détails</Button>
                </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Orders
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                    Totals Orders: 
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary" gutterBottom>
                    -2.3% from last week
                    </Typography>
                    <Typography variant="body2" component="p">
                    <LinearProgressWithLabel value={60} />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View Détails</Button>
                </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Visits
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                    Totals Visits: 
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary" gutterBottom>
                    + 5% from last week
                    </Typography>
                    <Typography variant="body2" component="p">
                    <LinearProgressWithLabel value={progress} />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View Détails</Button>
                </CardActions>
        </Card>
        
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h4" component="h2" gutterBottom>
                 Users :  
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">email&nbsp;Adress</TableCell>
                        <TableCell align="center">full name</TableCell>
                        <TableCell align="center">username</TableCell>
                        <TableCell align="center">role</TableCell>
                        <TableCell align="center">created_at</TableCell>
                        <TableCell align="center">action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {users
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((user, index) => (
                        <TableRow key={user.id}>
                        <TableCell align="center" component="th" scope="row">
                            {user.email}
                        </TableCell>
                        <TableCell align="center">{user.name}</TableCell>
                        <TableCell align="center">{user.username}</TableCell>
                        { user.roles &&
                        user.roles.map ((role,index) =>
                        <TableCell align="center">{role.name.substring(0, 4).toLowerCase()} {role.name.substring(5, 10).toLowerCase()}</TableCell>)}
                        <TableCell align="center">{user.createdAt.substring(0, 10)} {user.createdAt.substring(11, 16)}</TableCell>
                        <TableCell align="center" >
                            <Button color="primary">View</Button>
                            <Button color="secondary">Delete</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 0 * emptyRows}}>
                            <TableCell align="center" colSpan={6}>No more users !</TableCell>
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
                <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h4" component="h2" gutterBottom>
                 Project :  
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center" >email&nbsp;Adress</TableCell>
                        <TableCell align="center" >project_name</TableCell>
                        <TableCell align="center" >company_name</TableCell>
                        <TableCell align="center" >project_url</TableCell>
                        <TableCell align="center" >langue_src</TableCell>
                        <TableCell align="center" >created_at</TableCell>
                        <TableCell align="center" >action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {projects
                    .slice(page2 * rowsPerPage2, page2 * rowsPerPage2 + rowsPerPage2)
                    .map((project, index) => (
                        <TableRow key={project.id}>
                        <TableCell align="center" component="th" scope="row">
                            {project.emailAdress}
                        </TableCell>
                        <TableCell align="center" >{project.projectName}</TableCell>
                        <TableCell align="center" >{project.companyName}</TableCell>
                        <TableCell align="center" >{project.projectUrl}</TableCell>
                        <TableCell align="center" >{project.langueSrc}</TableCell>
                        <TableCell align="center" >{project.createdAt.substring(0, 10)} {project.createdAt.substring(11, 16)}</TableCell>
                        <TableCell align="center" >
                            <Link style={{textDecoration:"none"}}to={`/addcontent/${project.id}`}><Button color="primary">Update</Button></Link> 
                            <Button color="secondary" onClick={(e) => {
                                handleDelete(project.id)
                            }}>Delete</Button>
                        </TableCell>
                        </TableRow>
                     
                    ))}
                    {emptyRows2 > 0 && (
                        <TableRow style={{ height: 0 * emptyRows2}}>
                            <TableCell align="center" colSpan={7}>No more Projects !</TableCell>
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
                <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={projects.length}
                rowsPerPage={rowsPerPage2}
                page={page2}
                onPageChange={handleChangePage2}
                onRowsPerPageChange={handleChangeRowsPerPage2}
                />
            </TableContainer>
        </Grid>
        </Grid>
        </Grid>
    </Grid>

    </div>
  )
}

export default Admin