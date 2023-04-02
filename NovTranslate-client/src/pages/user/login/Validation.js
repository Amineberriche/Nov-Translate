const Validation = (usernameOrEmail,password) => {
  let errors={};

  if(!usernameOrEmail){
    errors.usernameOrEmail="Username or Email is required."
  }
  if(!password){
    errors.password="Password is required."
  }
  
  return errors;
};

export default Validation;