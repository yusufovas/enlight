module.exports = (req, res, next ) => {
  try {
    const { role } = req.cookies
    if(role !== 'admin') {
        res.redirect('/main')
        next()
      } 
    else {
        res.redirect('/dashboard')
    }
  } catch (error) {
    next(error)
  }
}