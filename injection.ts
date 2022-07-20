interface IGreet {
  greetSomeone: () => void;
}
  
class HelloService implements IGreet {
  greetSomeone() { console.log('Hello!!') }
}

class HiService implements IGreet {
  greetSomeone() { console.log('Hi!!') }
}

class Component { constructor(public greetService: IGreet) { } }

class Injector {
  _container;
  constructor(private _services: any[] = []) {
    this._container = new Map();

    this._services.forEach(service => this._container.set(service, new service()));
  }
}

const injector = new Injector([HelloService, HiService]);
const component = new Component(injector._container.get(HelloService));
const componentB = new Component(injector._container.get(HiService));

component.greetService.greetSomeone();
componentB.greetService.greetSomeone();