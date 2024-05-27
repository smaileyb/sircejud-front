export const ApiUrl = 'http://localhost:3030'

// NEW USER
export function AuthRegister() {
  return {
    url: `${ApiUrl}/auth/register`
  }
}
// CURRENT USER
export function CurrentUser() {
  return {
    url: `${ApiUrl}/user`
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
// GET ALL RULINGS
export function RulingGET(id: string) {
  return {
    url: `${ApiUrl}/rulings/${id}`
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
// POST NEW TOPIC
export function TopicPOST(id: string) {
  return {
    url: `${ApiUrl}/rulings/${id}/topic`
  }
}
// UPDATE TOPIC BY ID
export function TopicUPDATE(id: string) {
  return {
    url: `${ApiUrl}/rulings/topic/${id}`
  }
}
// DELETE TOPIC BY ID
export function TopicDELETE(id: string) {
  return {
    url: `${ApiUrl}/rulings/topic/${id}`
  }
}
