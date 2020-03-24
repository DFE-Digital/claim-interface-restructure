const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get("/claim/student-loan/student-loan", function(req, res) {
  res.render("claim/student-loan/student-loan");
  req.session.data["loanAmount"] = "";
});

router.post("/claim/student-loan/student-loan", function(req, res) {
  let loanAmount = req.session.data["loanAmount"];

  if (loanAmount === "Yes") {
    res.redirect("/claim/student-loan/current-school-subject");
  } else if (loanAmount === "No") {
    res.redirect("/claim/student-loan/decision");
  } else {
    res.redirect("#notes");
  }
});

module.exports = router
