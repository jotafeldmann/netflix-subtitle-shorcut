// Author: Jorge Feldmann

class CaptionControl {
  constructor(captionElement = '.player-timedtext', shortcutSwitcherKey = 'c') {
    this._captionElement = captionElement
    this._shortcutKey = shortcutSwitcherKey
    this._styleElement = null
    this._captionIsVisible = true
    this._createStyleElement()
    this._bindKeyPressDetector()
    this._warning('Remember to turn on the captions :)')
  }
  
  hide() {
    this._setCaptionDisplayStyle('none')
    return false
  }
  
  show() {
    this._setCaptionDisplayStyle('block')
    return true
  }
  
  switchCaptionStatus() {
    this._captionIsVisible = this._captionIsVisible ? this.hide() : this.show()
  }
  
  _bindKeyPressDetector() {
    var callback = (function (e) {
       if (e.key === this._shortcutKey) this.switchCaptionStatus()
    }).bind(this)
    document.onkeydown = callback
  }
  
  _createStyleElement() {
    this._styleElement = document.createElement('style')
    document.head.appendChild(this._styleElement)
  }
  
  _setCaptionDisplayStyle(displayStyle) {
    this._styleElement.innerHTML = `${this._captionElement} { display: ${displayStyle} !important }`
  }
  
  _warning(msg) {
    console.log(msg)
  }
  
}

var c = new CaptionControl()


