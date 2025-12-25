const prisma = require('../prisma/client');

const createNotification = async (req, res) => {
  try {
    const {title, message,category} = req.body; 
    const newNotification = await prisma.notification.create({ 
      data: {title, message,category}
    });
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

const getNotifications = async (req,res) => {
  const {categoryFilter,dateFilter} = req.query;
  try {
      const notifications = await prisma.notification.findMany({
      where:{
        ...(categoryFilter && categoryFilter !== 'all' ? { categoryFilter } : {}),
      },
      orderBy:{
        date: dateFilter === 'oldest' ? 'asc' : 'desc', 
      }
    });

    const lastData = JSON.parse(
      JSON.stringify(notifications, (key, value) =>
        typeof value === 'object' && value && value.constructor && value.constructor.name === 'Decimal' 
          ? value.toString() 
          : value
      )
    );

    res.json(lastData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteNotification = async(req,res) => {
  try {
    const {id} = req.params;
    await prisma.notification.delete({
      where: {id:Number(id)}
    }) ;
    res.json({success: true});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}


const markAsRead = async (req, res) => {
  try {
    const {id} = req.params;
    const updated = await prisma.notification.update({
      where: {id: Number(id) } , 
      data: {isRead: true }
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

module.exports = {
  createNotification,
  getNotifications,
  deleteNotification,
  markAsRead
};