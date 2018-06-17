export default class Carriage {
  constructor() {
    this.keyboard = {};

    this._bindEvents();
  }

  _bindEvents() {
    window.addEventListener("keydown", this._handleKeydown.bind(this));
    window.addEventListener("keyup", this._handleKeyup.bind(this));
  }

  _handleKeydown(e) {
    this.keyboard[e.key] = true;
  }

  _handleKeyup(e) {
    this.keyboard[e.key] = true;
  }
}