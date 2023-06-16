import UserService from "../Services/user-service.js";

const userService  = new UserService();

export const signup  = async (req,res)=>{
    try {
        const user = await userService.signup({
            email : req.body.email,
            Password : req.body.Password,
            name : req.body.name
        })
        return res.status(201).json({
            success : true,
            message : ' sccessfully created a user',
            data : user,
            err: {}
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : ' something went wrong ',
            data : {},
            err: error
        })
    }
}