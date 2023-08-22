
module.exports =  function updateUser(updatedData) {
    localStorage._id = updatedData._id
    localStorage.name = updatedData.name
    localStorage.email = updatedData.email
    localStorage.phone = updatedData.phone
    localStorage.verifyEmail = updatedData.verifyEmail
    localStorage.token = updatedData.token
  }