const express = require('express');
const router = express.Router();
const Booked = require('../../models/booked');
const passport = require('passport');

router.get(
  '/booked',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Booked.find({})
      .then((bookings) => res.status(200).json(bookings))
      .catch((err) =>
        res.status(400).json({ user: 'Error fetching bookings' })
      );
  }
);

router.get('/vessel/:id', (req, res) => {
  Vessel.find({ _id: req.params.id })
    .then((vessel) => res.status(200).json(vessel))
    .catch((err) =>
      res.status(400).json({ id: 'Error fetching vessel by id' })
    );
});

// @route - GET api/vessels/:operator
// @desc - get vessels of the current user
// @access - public

router.get('/operator/:operator', (req, res) => {
  Vessel.find({ operator: req.params.operator })
    .then((vessel) => res.status(200).json(vessel))
    .catch((err) =>
      res
        .status(400)
        .json({ author: 'Error fetching vessels of specific operator' })
    );
});

router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const operator = req.user.user_name;
    const vessel = req.body;
    const { errors, isValid } = validateVesselInput(vessel);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    vessel.operator = operator;
    const newVessel = new Vessel(vessel);
    newVessel
      .save()
      .then((doc) => res.json(doc))
      .catch((err) => console.log({ create: 'Error creating new vessel' }));
  }
);

// @route - PUT api/vessels/update/:id
// @desc - updates an existing vessel
// @access - private

router.patch(
  '/update/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const operator = req.user.user_name;
    const { errors, isValid } = validateVesselInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const { name, description, length, weight, depth } = req.body;
    Vessel.findOneAndUpdate(
      { operator, _id: req.params.id },
      { $set: { name, description, length, weight, depth } },
      { new: true }
    )
      .then((doc) => res.status(200).json(doc))
      .catch((err) =>
        res.status(400).json({ update: 'Error updating existing vessel' })
      );
  }
);

// @route - DELETE api/vessels/delete/:id
// @desc - deletes a vessel
// @access - private

router.delete(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const operator = req.user.user_name;
    Vessel.findOneAndDelete({ operator, _id: req.params.id })
      .then((doc) => res.status(200).json(doc))
      .catch((err) =>
        res.status(400).json({ delete: 'Error deleting a vessel' })
      );
  }
);

module.exports = router;
