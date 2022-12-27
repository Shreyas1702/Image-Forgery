const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const cors = require("cors");
const passport = require("passport");
const localpassport = require("passport-local");
const MongoStore = require("connect-mongo");
const bodyparser = require("body-parser");
const User = require("./models/user");
const session = require("express-session");
const axios = require("axios");
const url = process.env.DB_URL;
const fileUpload = require("express-fileupload");
const fs = require("fs");
const binary = mongodb.Binary;
const router = express.Router();

console.log(url);

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const secret = process.env.SECRET || "thisshouldbeabettersecret";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database Connected");
});

const store = new MongoStore({
  mongoUrl: url,
  secret,
  touchAfter: 24 * 60 * 60,
});

store.on("error", function (e) {
  console.log("Session Store Error", e);
});

const sessionConfig = {
  store,
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localpassport(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post("/signin", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    console.log(email, username, password);
    const user = new User({ email, username });
    console.log(user);
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) console.log(e);
      res.status(200).json({
        message: "User Added succesfully",
      });
    });
  } catch (e) {
    res.status(404).json({
      message: e,
    });
    console.log(e);
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "http://localhost:3000/error",
    failureMessage: true,
    keepSessionInfo: true,
  }),
  function (req, res) {
    try {
      console.log("Hello Inside Login controller");
      console.log(req.user);
      res.status(200).json({
        message: req.user,
      });
    } catch (e) {
      res.status(404).json({
        message: "Error",
      });
    }
  }
);

// app.post(
//   "/login",
//   passport.authenticate(
//     "local",
//     {
//       failureRedirect: "http://localhost:3000",
//       failureMessage: true,
//       keepSessionInfo: true,
//     },
//     (res, req) => {
//       try {
//         console.log("Hello Inside Login controller");
//         res.status(200).json({
//           message: req.user,
//         });
//       } catch (e) {
//         res.status(404).json({
//           message: "Error",
//         });
//         console.log(e);
//       }
//     }
//   )
// );

// app.post("/uploads", async (req, res) => {
//   try {
//     console.log(req.body);
//     res.status(201).json({
//       status: "success",
//       data: {
//         audio: req.body,
//       },
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "fail",
//       message: err,
//     });
//   }
// });

router.get("/download", (req, res) => {
  getFiles(res);
});

app.use(fileUpload());

router.post("/upload", (req, res) => {
  // console.log(req.files.uploadedFile.data);
  let file = { file: binary(req.files.uploadedFile.data) };
  axios
    .post("http://127.0.0.1:5000/sum", file, "utf-8")
    .then((resi) => {
      console.log(`statusCode: ${resi.status}`);
      var red = resi.data;
      res.status(200).json(resi.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.use("/", router);

app.listen("8000", (req, res) => {
  console.log("Listening to the Server");
});
