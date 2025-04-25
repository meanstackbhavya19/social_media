const authService = require("../services/auth");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const jwt = require('jsonwebtoken');
const { getDataByCustomFilter } = require("../helper/helper");
const { errors } = require("../constant/errorResponse");
const ERROR_CODES = require("../constant/errorResponse");
require('dotenv').config();




async function createUser(payload) {
  let { name, email, password} = payload;

  password = bcrypt.hashSync(payload.password, saltRounds);
  const newUser = await authService.registerUser({name,email,password,registered_at:new Date()})
}

async function matchUser(data) {

    const { email, password } = data;
    // const user = await users.findOne({ email });
    const [user]=await getDataByCustomFilter('users', ['id', 'name','password'], {
       email
    });
    if (!user) {
      throw ERROR_CODES.USER_NOT_FOUND
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw ERROR_CODES.INVALID_CREDENTIALS
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
    });
    return { token }
   
    

  const userData= await authService.loginUser({last_login_at:new Date(),is_logged_in:true})
};
    
    
  
  

  

module.exports={createUser,matchUser}

