// const Joi = require("joi");
// const shortid = require("shortid");
// const passwordSchema = Joi.string().min(3).max(10).alphanum();

// console.log(passwordSchema.validate("qw1"));

// console.log(shortid.generate());
const arrow = (a, b) => a + b;

class Hero {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const user = new Hero("Andrew");
