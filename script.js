const routes = [
    {path: '/', component: searchPage},
    {path: '/add', component: creationPage}
]

const router = new VueRouter({routes}) 

const app = new Vue({
    el: '#app',
    router: router
})