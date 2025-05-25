async function logOutRouterGet(req, res, next) {
  return req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

module.exports = logOutRouterGet;