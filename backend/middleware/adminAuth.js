// import jwt from'jsonwebtoken'

// const adminAUth=async(req,resizeBy,next)=>{
//   try {
//     const {token}=req.headers
//     if(!token){
//       return res.json({success:false,message:"Not Authorized Login Again"})
//     }
//     const token_decode=jwt.verify(token,process.env.JWT_SECRET);
//     if(token_decode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
//        return res.json({success:false,message:"Not Authorized Login Again"})
//     }
//     next()
//   } catch (error) {
//         console.log(error);
//     res.json({success:false,message:error.message})
//   }
// }
// export default adminAUth
import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // check if the decoded payload contains the admin email
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ success: false, message: "Not Authorized. Login Again." });
    }

    // attach admin info to request if needed
    req.admin = decoded;
    next();
  } catch (error) {
    console.error("JWT error:", error.message);
    res.status(403).json({ success: false, message: "Invalid token" });
  }
};

export default adminAuth;
