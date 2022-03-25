const router = require("express").Router();
const Employee = require("../models/employee");

//route for creating database insertion
router.route("/create").post(async (req, res) => {
  const {
    employeeID,
    name,
    nic,
    address
  } = req.body;

  const phoneNO = Number(req.body.phoneNO);

  // create a new object using database schema
  const newEmployee = new Employee({
    employeeID,
    name,
    nic,
    address,
    phoneNO
  });

  // check the availability of saving data
  const isAvailable = await Employee.findOne({
    employeeID : { $regex: new RegExp(employeeID, "i") }
  });

  if (isAvailable) {
    return res
      .status(401)
      .json({ error: "Already Exist this Employee! Plz create something new 😀" });
  }

  await newEmployee
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching all the data
router.route("/").get(async (req, res) => {
  await Employee.find()
    .then((employee) => res.json(employee))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await Employee.findById(id)
    .then((employees) => res.json(employees))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await Employee.findByIdAndRemove(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relavant document using id
router.route("/update/:id").put(async (req, res) => {
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const {
    employeeID,
    name,
    nic,
    address,
    phoneNO
  } = req.body;

  //find the document by and update the relavant data
  await Employee.findByIdAndUpdate(id, {
    employeeID,
    name,
    nic,
    address,
    phoneNO
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});


module.exports = router;