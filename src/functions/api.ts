export const ApiUrl = 'http://localhost:3000'

// NEW USER
export function AuthRegister() {
  return {
    url: `${ApiUrl}/auth/register`
  }
}
// LOGIN
export function AuthLogin() {
  return {
    url: `${ApiUrl}/auth/login`
  }
}
// UPDATE USER DATA
export function UserDataUpdate() {
  return {
    url: `${ApiUrl}/user/update`
  }
}
// UPDATE USER PASSWORD
export function UserDataPassword() {
  return {
    url: `${ApiUrl}/user/update/password`
  }
}

// GET ALL RULINGS
export function RulingsGET() {
  return {
    url: `${ApiUrl}/rulings`
  }
}
// POST NEW RULING
export function RulingPOST() {
  return {
    url: `${ApiUrl}/rulings`
  }
}
// UPDATE RULING BY ID
export function RulingUPDATE(id: string) {
  return {
    url: `${ApiUrl}/rulings/${id}`
  }
}
// DELETE RULING BY ID
export function RulingDELETE(id: string) {
  return {
    url: `${ApiUrl}/rulings/${id}`
  }
}
