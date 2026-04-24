const AUTH_KEY = 'scanreis_auth'
const PASSWORD = 'scanreis2026'

export function isAuthenticated() {
  return sessionStorage.getItem(AUTH_KEY) === '1'
}

export function login(password) {
  if (password === PASSWORD) {
    sessionStorage.setItem(AUTH_KEY, '1')
    return true
  }
  return false
}

export function logout() {
  sessionStorage.removeItem(AUTH_KEY)
}
