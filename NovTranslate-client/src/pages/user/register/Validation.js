const Validation = (name,username,email,password,confirmpassword) => {
  let errors={};

  if(!name){
    errors.name="Name is required."
  }
  if(!username){
    errors.username="Username is required."
  }else if(username.length < 3 || username.length > 20) {
    errors.username="The username must be between 3 and 20 characters."
  }
  if(!email){
    errors.email="Email adress is required."
  }else if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)){
    errors.email="Email adress is invalid."
  }
  if(!password){
    errors.password="Password is required."
  }else if(password.length < 6 || password.length > 40) {
    errors.password="The password must be between 6 and 40 characters."
  }
  if(!confirmpassword){
    errors.confirmpassword="Confirm Pasword is required."
  }else if(confirmpassword!=password) {
    errors.confirmpassword="password is not the same."
  }

  return errors;
};

export default Validation;