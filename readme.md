Sellsuki Auth
=============

Plugin for request authentication from Sellsuki login.

##Requirement
* vue
* vue-router

##Initiate

Initiate plugin by ```Vue.use``` after VueRouter with target url and router

```javascript
var router = new VueRouter({
  routes: [
    { path: '/hello', component: Hello },
    { path: '*', redirect: Home }
  ]
})

Vue.use(SellsukiAuth, {target: "loginURL", router: router})
```

##AuthChecker
Plugin will validate authentication from cookies in local

```javascript
router.beforeEach((to, from, next) => {
 /* Pass with next */
 Vue.prototype.$sellsuki_auth.authChecker(next)
})
```

