import { errorhandling } from "../helper/errorhandling.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import models from "../model/init-models.js";

const createuser = async (req, res) => {
  try {
    const { usr, pswd } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const passhash = bcrypt.hashSync(pswd, salt);
    const result = await models.users.create(
      {
        username: usr,
        password: passhash,
      },
      { returning: true }
    );
    res.send(errorhandling(result, 200, "sukses"));
  } catch (error) {
    res.send(errorhandling(400, error.message));
  }
};
const loginuser = async (req, res) => {
  try {
    const user = await models.users.findOne({
      where: { username: req.body.usr },
    });
    if (user) {
      const password_valid = await bcrypt.compare(req.body.pswd, user.password);
      if (password_valid) {
        const token = jwt.sign(
          JSON.parse(JSON.stringify(user)),
          process.env.SECRET_KEY,
          { expiresIn: "1d" }
        );
        res.send(errorhandling(token, 200, "sukses"));
      } else {
        res.send(errorhandling(400, "Password Incorrect"));
      }
    } else {
      res.send(errorhandling(400, "User does not exist"));
    }
  } catch (error) {
    res.send(errorhandling(400, error.message));
  }
};

const listhome = async (req, res) => {
  try {
    const user = await models.posting.findOne({
      where: { status: 1 },
    });
    // res.send(errorhandling(user, 200, "suskes"));
    res.status(200).json(user);
  } catch (error) {
    res.send(errorhandling(400, error.message));
  }
};

const about = async (req, res) => {
  try {
    const about = await models.about.findAll();
    res.send(errorhandling(about, 200, "suskes"));
  } catch (error) {
    res.send(errorhandling(400, error.message));
  }
};

const createposting = async (req, res) => {
  try {
    const { title, content, status } = req.body;
    const result = await models.posting.create({
      title: title,
      content: content,
      status: status,
    });
    res.send(errorhandling(result, 200, "sukses"));
  } catch (error) {
    res.send(errorhandling(400, error.message));
  }
};
export default {
  createuser,
  loginuser,
  listhome,
  createposting,
  about,
};
