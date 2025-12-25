const service = require('../services/notificationService');

create = async (req,res) => {
  const {id,title,message,category} = req.body;
  const result = await service.createNotification(id,title,message,category);
  res.status(201).json(result);
};

list = async (req,res) => {
  const {id} = req.params;
  const list = await service.getNotifications(Number(id));
  res.json(list);
};

remove = async (req,res) => {
   const {id} = req.params;
   await service.deleteNotification(Number(id));
};

read = async(req,res) => {
  const { id } = req.params;
  await service.markAsRead(Number(id));
};


module.exports = {
  create,
  list,
  remove,
  read
};