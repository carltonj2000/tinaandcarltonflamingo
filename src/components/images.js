//const fs = require("fs");

//const fileOrStub = f => (fs.existsSync(f) ? require(f) : "stub");
const one = require("../static/optimized/1.png");
const two = require("../static/optimized/2.png");
const three = require("../static/optimized/3.png");
const four = require("../static/optimized/4.png");
const five = require("../static/optimized/5.png");
const six = require("../static/optimized/6.png");
const seven = require("../static/optimized/7.png");

exports.images = [
  { name: "1.png", photo: one, text: "makeup", srctag: "mag2017" },
  { name: "2.png", photo: two, text: "makeup", srctag: "mag2017" },
  { name: "3.png", photo: three, text: "makeup", srctag: "mag2017" },
  { name: "4.png", photo: four, text: "makeup", srctag: "mag2017" },
  { name: "5.png", photo: five, text: "makeup", srctag: "mag2017" },
  { name: "6.png", photo: six, text: "makeup", srctag: "mag2017" },
  { name: "7.png", photo: seven, text: "makeup", srctag: "mag2017" }
];

exports.srcs = [
  {
    tag: "mag2017",
    name:
      "/home/carltonj2000/cj/mounts/local/cj1Tera3/carltonData/cj2018/wedding/wedlikedPics",
    notes: "red rock hair makeup and dress"
  }
];

exports.dsts = [
  {
    name:
      "/home/carltonj2000/cj/mounts/local/cj1Tera3/carltonData/cjSourceControlled/carltonj2000/tinaandcarltonflamingo/src/static/optimized",
    notes: "links to the optimized images"
  }
];
