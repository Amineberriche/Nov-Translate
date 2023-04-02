const Validation = (projectName,companyName,emailAdress,langueSrc) => {
  let errors={};

  if(!projectName){
    errors.projectName="Project Name is required."
  }
  if(!companyName){
    errors.companyName="Comapany Name is required."
  }
  if(!emailAdress){
    errors.emailAdress="Email adress is required."
  }else if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailAdress)){
    errors.emailAdress="Email adress is invalid."
  }
  if(!langueSrc){
    errors.langueSrc="Langue source is required."
  }
  return errors;
};

export default Validation;