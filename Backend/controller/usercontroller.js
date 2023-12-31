//Logic
const User = require("../models/userModel");

exports.home =(req,res)=>{

    res.send("Helloo ");
};


//create user
exports.createUser= async(req,res)=>{

    try{

        const{name, email} = req.body;
        //to check all the details
        if(!name || !email){

            throw new Error("Name and Email are Required");
        }

        //unique email
        const userExits = await User.findOne({email});
        if(userExits){

            throw new Error("Email Already Exits")
        }
 
        //insert  into database
        const user = await User.create({name,email});
        res.status(201).json({
            success: true,
            message:"User Created Successfully",
            user,
        })
        
    } catch (error) {}
};

//get user
exports.getUsers =async(req,res) =>{

    try{
        const users =await User.find();
        res.status(200).json({
            success:true,
            users,

        })

    }catch(error){
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message,
        })

    }
}

//

//edit user
exports.editUser = async(req,res)=>{

    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            success:true,
            message:"user updated  Suceesfully",
        })
    }catch(error){
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message,
        })
    }
}


//delete user
exports.deleteUser = async (req,res) =>{

    try{
 
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        res.status(200).json({
            sucesss:true,
            message: "User deleted Successfully"
        });

    }catch (error){
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message,
        })
    }
}