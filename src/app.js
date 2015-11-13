export class App {
  configureRouter(config, router) {
    config.title = '3DHubs';
    config.map([{
      route: ['', 'cart'],
      name: 'cart',
      moduleId: 'cart',
      nav: true,
      title: 'Cart'
    }]);

    this.router = router;
  }
}
