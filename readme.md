Sellsuki Auth
=============

Plugin for request authentication from Sellsuki login.

## Requirement
* vue
* vue-router

## Initiate

Initiate plugin by ```Vue.use``` after VueRouter with target url and router

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import SellsukiAuth from 'vue-sellsuki-auth'

...

var router = new VueRouter({
  routes: [
    { path: '/hello', component: Hello },
    { path: '*', redirect: Home }
  ]
})

Vue.use(SellsukiAuth, {target: 'loginURL', router: router})
```

## AuthChecker
Plugin will validate authentication from cookies in local

```javascript
router.beforeEach((to, from, next) => {
  Vue.prototype.$sellsuki_auth.authChecker(next)
})
```
