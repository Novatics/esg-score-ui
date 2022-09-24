const login = (req, res, ctx) => {
  // Persist user's authentication in the session
  return res(
    // Respond with a 200 status code
    ctx.status(200)
  )
}

const register = (req, res, ctx) => {
  // Persist user's authentication in the session
  return res(
    // Respond with a 200 status code
    ctx.status(200)
  )
}

export default {
  login,
  register,
}
