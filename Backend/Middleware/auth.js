import jwt from 'jsonwebtoken';

const authMiddleware=async(req,res,next)=>{
const{token}=req.headers;
if(!token){
    return res.json({success:false,message:"Not Authroized Login Again "})
}
try {
   const token_decode=jwt.verify(token,process.env.JWT_SECRET) ;
   req.body.userId=token_decode.id;
//    console.log("Authenticated User ID hr:", token_decode.id); // Debugging log
   next();
} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error ocured"})
    
}
}
export default  authMiddleware;