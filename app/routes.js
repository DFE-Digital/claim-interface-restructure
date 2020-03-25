const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


router.get("/claim/student-loan/index", function(req, res) {
  if (req.session.data.supportTicketRaised){
    res.render("claim/student-loan/index-with-support");
  } else{
    res.render("claim/student-loan/index");
  }
});

router.post("/claim/student-loan/employment", function(req, res) {
    res.redirect("/claim/student-loan/student-loan");
});

router.get("/claim/student-loan/employment", function(req, res) {
  res.render("claim/student-loan/employment");
});

router.post("/claim/student-loan/employment", function(req, res) {
    res.redirect("/claim/student-loan/student-loan");
});

router.get("/claim/student-loan/student-loan", function(req, res) {
  res.render("claim/student-loan/student-loan");
  req.session.data["loanAmount"] = "";
});

router.post("/claim/student-loan/student-loan", function(req, res) {
  res.redirect("/claim/student-loan/current-school-subject");

  // let loanAmount = req.session.data["loanAmount"];

  // if (loanAmount === "Yes") {
  //   res.redirect("/claim/student-loan/current-school-subject");
  // } else if (loanAmount === "No") {
  //   res.redirect("/claim/student-loan/decision");
  // } else {
  //   req.session.data.supportTicketRaised = true;
  //   console.log(req.session.data.supportTicketRaised);
  //   res.redirect("#notes");
  // }
});

module.exports = router
