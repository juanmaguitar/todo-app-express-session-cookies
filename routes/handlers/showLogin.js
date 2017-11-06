function showLogin (req,res) {
  const error = req.flash('error');
  res.render('login', { error })
}

module.exports = showLogin