import ClinicModel from '../models/clinicModel.js';

async function registerClinic(req, res) {
  const { name, image, location, opening, closing, admin, doctors } = req.body;

  if (!name || !location || !image || !admin) {
    return res.status(403).json({
      error: 'All details must be provided',
    });
  }
  //check DB if clinic already exists
  const existingClinic = await ClinicModel.findOne({ name: name }).exec();

  if (existingClinic) {
    return res.status(403).json({
      error: 'clinic already exists',
    });
  }
  //create a new DB entry
  const newClinic = await ClinicModel.create({
    name: name,
    location: location,
    image: image,
    opening: opening && opening,
    closing: closing && closing,
    admin: admin,
    doctors: doctors && [...doctors],
  });

  res.status(200).json({
    newClinic: newClinic,
  });
}

export default registerClinic;
