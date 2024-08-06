import { Router } from "express";
import bcrypt from "bcrypt";
import pool from "../db.js";
import jwtGenarator from "../utilis/jwtGenarator.js";


const router = Router();

router.post("/register",async(req,res)=>{
    try{
      //1. distrcture the request body(name,email,password)

      const { name, email, password } = req.body;
      //2.check if the user exist
      const user = await pool.query("SELECT * FROM users WHERE user_email=$1", [
        email,
      ]);
      if (user.rows.length !== 0) {
        return res.status(401).send("user alredy exist");
      }

      //3.ecrypt the yser password
      const saltRound=10;
      const salt= await bcrypt.genSalt
      (saltRound);

      const bcryptPassword= await bcrypt.hash
      (password,salt);

      //4) enter the new user our database
      const newUser = await pool.query(
        "INSERT INTO users(user_username,user_email,user_password) VALUES($1,$2,$3) ",
        [username, email, bcryptPassword]
      );

      //5)genariting our jwt token

      const token = jwtGenarator(newUser.rows[0].user_id);
      res.json({ token });
      
    }catch(err){
        console.error(err.message);
        res.status(500).send("server error")

    }



});
//login route 
router.post("/login",async (req,res)=>{
    try {
      // 1:)destructure the req.body
      const {email,password} =req.body;
      // 2 ) check if the user doesin exist (if not then we throe error)
      const user = pool.query("SELECT * FROM users WHERE user_email=$1",[email]);
      if(user.rows.length===0){
        return res.status(401).json("password or email is incorect");
      }
      // 3 ) check if in comming password if the same database  password
      const validPassword=await bcrypt.compare(password,user.rows[0].user_password);
      if(!validPassword){
        return res.status(401).json("password or email is incorect");
    

      }

      // 4 ) give them the jwt token 
      const token = jwtGenarator(user.rows[0].user_id);
      res.json({token});



    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
    
})

export default  router;


