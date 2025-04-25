
const db=require('../db/knex')
async function registerUser(user){
    const [newUser]=await db('users').insert(user).returning(['id'])
    return newUser

}


async function loginUser(data) {
    const[userData]=await db('users').alter({
        last_login_at,
        is_logged_in

    })
    return userData

}


module.exports={registerUser,loginUser};