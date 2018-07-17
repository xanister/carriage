export default class Carriage {
  constructor(opts = {}) {
    this.keyboard = {};
    this.mouse = {};

    this.onInputUpdate = opts.onInputUpdate;

    this._bindEvents();
  }

  _bindEvents() {
    window.addEventListener("keydown", this._handleKeydown.bind(this));
    window.addEventListener("keyup", this._handleKeyup.bind(this));
  }

  _handleKeydown(e) {
    this.keyboard[e.key] = true;
    this.onInputUpdate(this.serialize());
  }

  _handleKeyup(e) {
    this.keyboard[e.key] = false;
    this.onInputUpdate(this.serialize());
  }

  serialize() {
    return {
      keyboard: this.keyboard,
      mouse: this.mouse
    };
  }
}