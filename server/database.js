const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const fast2sms = require("fast-two-sms");

const app = express();
app.use(express.json());
app.use(cors());

console.log("=====================");
mongoose
  .connect("mongodb://LocalHost:27017/fooddb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))

  .catch((err) => console.log(err));

const registrationSchema = new mongoose.Schema({
  name: String,
  mobileNumber: Number,
  gmail: String,
  password: String,
});

const registration = new mongoose.model("registration", registrationSchema);

const donationSchema = new mongoose.Schema({
  name: String,
  mobileNumber: Number,
  area: String,
  locationUrl: String,
  foodItems: String,
  quantity: String,
  hostelName: String,
  from: String,
  accepted: Boolean,
  date: String,
});

const donation = new mongoose.model("donation", donationSchema);

app.post("/registration", (req, res) => {
  const user = new registration(req.body);
  user.save().then((item) => res.json(item));
});
app.post("/login", (req, res) => {
  const data = req.body;
  registration
    .find({ gmail: data.gmail })
    .exec()
    .then((dat) => {
      console.log(dat);

      if (dat.length && data.password == dat[0].password) {
        res.send({ isValid: true, userDetails: dat[0] });
      } else {
        res.send({ isValid: false });
      }
    });
});
app.post("/donation", (req, res) => {
  const currentDate = new Date();
  const foodDetails = { ...req.body, accepted: false, date: currentDate };
  const donar = new donation(foodDetails);
  donar.save().then((item) => res.json(item));
});
app.get("/showFood", (req, res) => {
  donation.find({ accepted: false }).then((items) => {
    currentDate = new Date();
    filteredItems = items.filter((item) => {
      const diff = Number(currentDate) - Number(new Date(item.date));
      return diff < 60 * 25 * 60 * 1000;
    });
    console.log(filteredItems);

    res.json(filteredItems);
  });
});
app.post("/updateDocument", (req, res) => {
  donation
    .find({ _id: req.body.id })
    .exec()
    .then((donationDocument) => {
      if (donationDocument[0].accepted === true) {
        console.log("=====================================================");
        res.send({ isAccepted: true });
      } else {
        donation
          .update({ _id: req.body.id }, { $set: { accepted: true } })
          .then(async (response) => {
            let options = {
              authorization:
                "Lp36YePu0E5Cg2KmsfjcOxI9SX1RlAMNGVTzFb7yrnhoqiJtvaHL7mqka6hG2Ki0Cw1oQyIdejzD9SBP",
              message: req.body.message,
              numbers: [`${req.body.mobileNumber}`],
            };
            await fast2sms.sendMessage(options);
            res.send({ isAccepted: false });
          })
          .catch((err) => {
            throw err;
          });
      }
    });
});
app.listen(5000);
