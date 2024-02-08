const UserModel = require('../models/userModel');

exports.create = async (req, res) => {
  const { name, email } = req.body;
  try {
    const userId = await UserModel.create(name, email);
    res.json({ success: true, userId });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, error: 'Failed to create user' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await UserModel.getAll();
    res.json({ success: true, users });
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ success: false, error: 'Failed to get users' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const success = await UserModel.update(id, name, email);
    res.json({ success });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ success: false, error: 'Failed to update user' });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const success = await UserModel.delete(id);
    res.json({ success });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ success: false, error: 'Failed to delete user' });
  }
};
