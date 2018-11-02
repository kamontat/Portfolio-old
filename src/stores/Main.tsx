import {observable, action} from 'mobx'

class Main {
  @observable
  title = 'Hello world'

  @observable
  hamburger = false

  @action.bound
  updateTitle(title) {
    this.title = title
  }

  @action.bound
  toggleHamburger(status) {
    this.hamburger = status
  }
}

export default Main

export interface MainProps {
  main?: Main;
}

export interface MainStoreProps {
  store?: Main;
}
