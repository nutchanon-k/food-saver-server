const prisma = require("../configs/prisma");


module.exports.createNotification = async (userId, type, content) => {
    const notification = await prisma.notification.create({
      data: {
        userId,
        type,
        content,
      },
    });
    return notification;
  };
  

module.exports.getNotificationsByUserId = async (userId) => {
    const notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    return notifications;
  };



module.exports.markAsReadService = async (id) => {
    const notification = await prisma.notification.update({
      where: { id },
      data: { isRead: true },
    });
    return notification;
};


