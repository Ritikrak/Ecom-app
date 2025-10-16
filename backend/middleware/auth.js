// import jwt from 'jsonwebtoken'

// const authUser=async(req,res,next)=>{
//   const {token}=req.headers;
//   if(!token){
//     return res.json({success:false,message:'Not authorized Login Again'})
//   }
//   try {
//     const token_decode=jwt.verify(token, process.env.JWT_SECRET)
//     req.body.userId=token_decode.id
//     next()
//   } catch (error) {
//     console.log(error)
//     res.json({success:false,message:error.message})
//   }

// }
// export default  authUser
// import jwt from "jsonwebtoken";

// const authUser = (req, res, next) => {
//   const token = req.headers.token || req.headers.authorization?.split(" ")[1];
//   if (!token) {
//     return res.status(401).json({ success: false, message: "Not authorized. Login again." });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = { id: decoded.id }; // attach user info to request
//     next();
//   } catch (error) {
//     console.error("JWT error:", error.message);
//     return res.status(403).json({ success: false, message: "Invalid token" });
//   }
// };

// export default authUser;
import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ success: false, message: "Not authorized. Login again." });
  }

  const token = authHeader.split(" ")[1]; // Bearer <token>
  if (!token) {
    return res.status(401).json({ success: false, message: "Not authorized. Login again." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id }; // attach user info to request
    next();
  } catch (error) {
    console.error("JWT error:", error.message);
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};

export default authUser;

