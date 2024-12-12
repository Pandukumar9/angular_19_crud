const Mobile = require('../models/mobile.model');

async function addMobile(req, res) {
  const { name, brand, price } = req.body;
  if (!name || !brand || !price) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newMobile = new Mobile({ name, brand, price });
    const savedMobile = await newMobile.save();
    res.status(201).json(savedMobile);
  } catch (error) {
    res.status(500).json({ error: 'Could not add mobile' });
  }
}

async function getMobiles(req, res) {
  try {
    const mobiles = await Mobile.find();
    res.json(mobiles);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch mobiles' });
  }
}

async function getMobile(req, res) {
  const mobileId = req.params.mobileId;
  try {
    const mobile = await Mobile.findById(mobileId);
    if (mobile) {
      res.json(mobile);
    } else {
      res.status(404).json({ error: 'Mobile does not exist' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch mobile' });
  }
}

async function updateMobile(req, res) {
  const mobileId = req.params.mobileId;
  const { name, brand, price } = req.body;

  try {
    const updatedMobile = await Mobile.findByIdAndUpdate(
      mobileId,
      { name, brand, price },
      { new: true, runValidators: true }
    );
    if (updatedMobile) {
      res.json(updatedMobile);
    } else {
      res.status(404).json({ error: 'Mobile does not exist' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not update mobile' });
  }
}

async function deleteMobile(req, res) {
  const mobileId = req.params.mobileId;

  try {
    const deletedMobile = await Mobile.findByIdAndDelete(mobileId);
    if (deletedMobile) {
      res.json({ message: 'Mobile deleted successfully' });
    } else {
      res.status(404).json({ error: 'Mobile does not exist' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not delete mobile' });
  }
}

async function deleteAllMobiles(req, res) {
  try {
    await Mobile.deleteMany();
    res.json({ message: 'All mobiles deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete all mobiles' });
  }
}

module.exports = {
  addMobile,
  getMobiles,
  getMobile,
  updateMobile,
  deleteMobile,
  deleteAllMobiles,
};
