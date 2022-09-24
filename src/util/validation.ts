const isValidEmail = (email: string) => {
  return /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/.test(email)
}

export default isValidEmail
