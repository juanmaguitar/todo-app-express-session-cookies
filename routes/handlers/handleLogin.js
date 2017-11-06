const { ADMIN_USER, ADMIN_PASS } = process.env

function handleLogin(req, res) {
  const { username, password } = req.body
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    res.redirect('/tasks/todo')
  } else {
    req.flash('error', 'Credentials are not valid');
    res.redirect('/')
  }

}

module.exports = handleLogin