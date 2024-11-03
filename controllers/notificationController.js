require("dotenv").config();
const { getNotificationsByUserId, markAsRead, markAsReadService } = require("../services/notificationService");
const createError = require('../utils/createError')


module.exports.getNotifications = async (req, res, next) => {
    try {
        const userId = req.user.id
        // const { isRead } = req.query
        // if (isRead !== 'true' || isRead !== 'false') {
        //     return createError(400, 'isRead must be true or false')
        // }
        // where = {}
        
        // if (isRead) {
        //     if (isRead === 'true') {
        //         where.isRead = true
        //     } else if (isRead === 'false') {
        //         where.isRead = false
        //     }
        // }
        // where.userId = userId

        const notifications = await getNotificationsByUserId(+userId)
        console.log(notifications)
        if(!notifications || notifications.length === 0) {
            return createError(404, 'Notifications not found')
        }

        res.status(200).send(notifications)

    } catch (error) {
        next(error)
    }
}

module.exports.markAsRead = async(req, res, next) => {
    try {
        const { id } = req.params
        if(!id ) {
            return createError(400, 'Notification id is required')
        }
        if(isNaN(+id) || +id <= 0 || +id % 1 !== 0) {
            return createError(400, 'Notification id must be a positive integer')
        }
        const IsNotificationExist = await getNotificationsByUserId(+id)
        if(!IsNotificationExist) {
            return createError(404, 'Notification not found')
        }

        const notification = await markAsReadService(+id)
        if(!notification) {
            return createError(404, 'Notification not found')
        }
        res.status(200).send(notification)
    } catch (error) {    
        next(error)
    }

}