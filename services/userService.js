const prisma = require("../models/prisma");

module.exports.getUserByEmail = (email) => {
  const user = prisma.user.findFirst({
    where: {
      email,
    },
  });
  return user;
};

module.exports.getUserById = async() => {
  const { id } = req.user;
  const user = await prisma.user.findUnique({
    where: {
      id: +id,
    },
  });
  const { password, createdAt, updatedAt, ...userData } = user;
  res.json(userData);
  return userData
};

module.exports.updateUserProfile = async() => {
  const {
    firstName,
    lastName,
    email,
    password,
    role,
    profilePicture,
    address,
    phoneNumber,
    isActive,
  } = req.input;
  const { id } = req.user;
  const checkUser = getUserById()

  const haveFile = !!req.file
  let uploadResult = {}
  if (haveFile) {
      uploadResult = await cloudinary.uploader.upload(req.file.path, {
          public_id: path.parse(req.file.path).name
      })
      fs.unlink(req.file.path)
      // console.log(checkUser)
      if (checkUser.profilePicture) {
          cloudinary.uploader.destroy(getPublicId(checkUser.profilePicture))
      }
  }
  const user = prisma.user.update({
    where: {
      id: +id,
    },
    data: {
      firstName,
      lastName,
      email,
      password,
      role,
      profilePicture,
      address,
      phoneNumber,
      isActive,
    },
  });
  res.json(user);
};
