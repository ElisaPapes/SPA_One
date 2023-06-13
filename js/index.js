import { Router } from './router.js'

const router = new Router()

router.add('/', "./pages/home.html")
router.add("/about", "./pages/about.html")
router.add("/contact", "./pages/contact.html")
router.add(404, "./pages/404.html")

// // Cria as rotas de endereço para os elentos HTML
// const routes = {
//   "/": "/pages/home.html",
//   "/about": "/pages/about.html",
//   "/contact": "/pages/contact.html",
//   404: "/pages/404.html",
// }

// // Exemplo de como ler uma das rotas acima
// console.log(routes["/about"]);

router.handle()

// // Abaixo, faz com que seja possível voltar utilizando as flechas.
window.onpopstate = () => router.handle()
window.route = () => router.route ()