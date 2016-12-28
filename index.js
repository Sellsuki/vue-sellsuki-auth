/* global localStorage */
const PrepareLogin = require('./PrepareLogin.vue')

exports.install = function (Vue, options) {
  options.router.options.routes.push(
    { path: '/prepare_login/:storeId', component: PrepareLogin }
  )
  Vue.prototype.$sellsuki_auth = {}
  Vue.prototype.$sellsuki_auth.test = () => {
    console.log('Plugin is worked!')
  }
  Vue.prototype.$sellsuki_auth.validateAuth = () => {
    return validatecookie(options.target)
  }
  Vue.prototype.$sellsuki_auth.authChecker = (next) => {
    if ((document.cookie.search('sellsuki.fblogintoken') !== -1 &&
    document.cookie.search('sellsuki.facebook') !== -1) ||
    document.cookie.search('sellsuki.user') !== -1 &&
    document.cookie.search('sellsuki.store_' + window.localStorage.getItem('store.id')) !== -1) {
      next()
    } else {
      window.location.href = options.target
    }
  }
  function getCookie (cname) {
    var name = cname + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }
  function validatecookie (target) {
    console.log('validatecookie')
    var facebook = getCookie('sellsuki.facebook')
    var fblogintoken = getCookie('sellsuki.fblogintoken')
    var user = getCookie('sellsuki.user')
    var storeIdmergeName = 'sellsuki.store_' + (window.location.href.split('/')).pop()
    let storeId = getCookie(storeIdmergeName)
    if (user && storeId) {
      localStorage.setItem('sellsuki.facebook', unescape(facebook))
      localStorage.setItem('sellsuki.fblogintoken', unescape(fblogintoken))
      localStorage.setItem('sellsuki.user', unescape(user))
      localStorage.setItem('sellsuki.bearer', unescape(storeId))
      localStorage.setItem('store.id', (window.location.href.split('/')).pop())
      try {
        let temp = JSON.parse(unescape(storeId))
        let stringbear = temp.auth.token_type + ' ' + temp.auth.access_token
        localStorage.setItem('ssk_token', stringbear)
      } catch (e) {}
      return true
    } else {
      window.location.href = target
    }
  }
}
