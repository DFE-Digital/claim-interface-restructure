const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Branching
router.post('/claim/student-loan/student-loan', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['student-loan-ok']

  if (over18 === 'rejected') {
    res.redirect('/claim/student-loan/student-loan-failed')
  } else {
    res.redirect('/claim/student-loan/current-school-subject')
  }
})

