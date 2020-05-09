import { getOwner, setOwner } from '@ember/application';
import { setComponentManager, capabilities} from '@ember/component';

class Manager {
  capabilities = capabilities('3.4');

  constructor(owner) {
    setOwner(this, owner);
    console.log('created manager!');
  }

  createComponent(Klass, args) {
    let instance = new Klass(args.named);

    setOwner(instance, getOwner(this));

    return instance;
  }

  updateComponent() { }

  destroyComponent() { }

  getContext(instance) {
    return instance;
  }
}

export default setComponentManager(
  owner => new Manager(owner),
  class SpecialComponent {}
)
