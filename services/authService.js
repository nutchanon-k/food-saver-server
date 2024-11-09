const prisma = require("../configs/prisma");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


module.exports.createUserService = async (data) => {
    return await prisma.user.create({
        data:data,
        select :{
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
            profilePicture: true,
            address: true,
            phoneNumber: true,
            isActive: true,
            createdAt: true,
            updatedAt: true,            
        }
    })
}



// ตรวจสอบ Google Access Token
const verifyAccessToken = async (token) => {
    const response = await client.getTokenInfo(token);
    return response;
  };
  
  // ตรวจสอบ Google ID Token (ถ้าใช้ ID Token แทน)
  const verifyIdToken = async (idToken) => {
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload;
  };
  
  // Handle Google Login/Register
 module.exports.handleGoogleAuth = async (token) => {
    try {
      // ตรวจสอบ Access Token กับ Google
      const tokenInfo = await verifyAccessToken(token);
      const email = tokenInfo.email;
      const name = tokenInfo.name || email; // ปรับให้เหมาะสมตามข้อมูลที่ได้รับ
      const picture = tokenInfo.picture || '';
  
      // หา user จากฐานข้อมูล
      let user = await prisma.user.findUnique({
        where: { email },
      });
  
      // ถ้า user ยังไม่มีในฐานข้อมูล ให้สร้างใหม่
      if (!user) {
        user = await prisma.user.create({
          data: {
            email,
            name,
            image: picture,
            role: 'User', // กำหนดบทบาทเริ่มต้น
          },
        });
      }
  
      // สร้าง JWT Token
      const tokenJWT = createJWT(user);
  
      return { success: true, tokenJWT };
    } catch (error) {
      console.error('Error in handleGoogleAuth:', error);
      throw new Error('Invalid token');
    }
  };
