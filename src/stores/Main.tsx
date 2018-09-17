import {observable} from 'mobx'

class Main {
  id = Math.random()
  @observable
  title = ''
  @observable
  finished = false
}

export default new Main()
