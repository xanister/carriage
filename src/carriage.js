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

    this.dispatchEvent(new CustomEvent('carriage:keydown', { 
      detail: e.key, 
      state: { 
        keyboard: this.keyboard 
      }
    }));
  }

  _handleKeyup(e) {
    this.keyboard[e.key] = false;

    this.dispatchEvent(new CustomEvent('carriage:keyup', { 
      detail: e.key, 
      state: { 
        keyboard: this.keyboard 
      }
    }));
  }
}