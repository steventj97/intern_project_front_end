import {router} from '../router/index'

const API_URL = 'http://localhost:8123/'
const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'

export default {
  user: {
    authenticated: false
  },
  login (context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)
      this.user.authenticated = true
      if (redirect) {
        router.go(redirect)
      }
    }).error((err) => {
      context.error = err
    })
  },
  download_csv: function (csv, filename) {
    var csvFile
    var downloadLink
  // CSV file
    csvFile = new Blob([csv], {type: 'text/csv'})
  // Download link
    downloadLink = document.createElement('a')
  // File name
    downloadLink.download = filename
  // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile)
  // Hide download link
    downloadLink.style.display = 'none'
  // Add the link to DOM
    document.body.appendChild(downloadLink)
  // Click download link
    downloadLink.click()
  },
  signup (context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)
      this.user.authenticated = true
      if (redirect) {
        router.go(redirect)
      }
    }).error((err) => {
      context.error = err
    })
  },
  withValue: function (value) {
    var d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null
    }
    d.value = value
    return d
  },
  logout () {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },
  checkAuth () {
    var jwt = localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}
