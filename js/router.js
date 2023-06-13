export class Router {
  routes = {}

  add(routeName, page){
    console.log(this.routes);
    this.routes[routeName] = page 
  }

  route(event){
    // Linha abaixo verifica se passou pelo evento, se não, pega o evento que está na janela:
    event = event || window.event;
    event.preventDefault();

    console.log(this.routes);
  
    console.log(event);
    // Coloca a URL que você quer que o site tenha, no modelo relativa, nesse caso.
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }
  
  handle(){
    // Coloca na variável pathname a URL atual do site
    const { pathname } = window.location
    console.log(pathname);
    const route = this.routes[pathname] || this.routes[404]
    console.log(route);
    
    fetch(route)
    .then(data => data.text())
    .then(html => {
      console.log(html);
      document.querySelector('#app').innerHTML = html
    })
  }

} 



