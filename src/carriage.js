export default class Carriage {
  constructor(opts = {}) {
    this.gamepad = null
    this.keyboard = {};
    this.mouse = {};

    this.onInputUpdate = opts.onInputUpdate;

    this._bindEvents();
  }

  _bindEvents() {
    window.addEventListener("keydown", this._handleKeydown.bind(this));
    window.addEventListener("keyup", this._handleKeyup.bind(this));
    window.addEventListener("gamepadconnected", ({ gamepad }) => {
      console.log('gamepad connected')
      // this.gamepad = gamepad
      this.onInputUpdate(this.serialize());
    });
    window.addEventListener("gamepaddisconnected", ({ gamepad }) => {
      console.log('gamepad disconnected')
      // this.gamepad = null
      this.onInputUpdate(this.serialize());
    });
    const updateGamepads = () => {
      this.gamepad = navigator.getGamepads()[0]
      this.onInputUpdate(this.serialize());
      window.requestAnimationFrame(updateGamepads)
    }
    updateGamepads()
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
      gamepad: this.gamepad,
      keyboard: this.keyboard,
      mouse: this.mouse
    };
  }
}