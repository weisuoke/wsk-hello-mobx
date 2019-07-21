import { observable, autorun, action, computed, toJS } from "mobx";

class BirdStore {
  // object arrays
  @observable birds;

  constructor() {
    this.birds = ["wsk"];
  }

  @action addBird = bird => {
    this.birds.unshift(bird);
  };

  @computed get firstBird() {
    return "第一只鸟的名字： " + toJS(this.birds)[0];
  }

  @computed get birdCount() {
    return toJS(this.birds).length;
  }
}

const store = (window.store = new BirdStore());

export default store;

autorun(() => {
  console.log("print");
});
