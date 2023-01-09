class CaptionControl {
  constructor(captionElement = '.player-timedtext', shortcutSwitcherKey = 'c') {
    this._captionElement = captionElement
    this._shortcutKey = shortcutSwitcherKey
    this._styleElement = null
    this._captionIsVisible = true
    this._createStyleElement()
    this._bindKeyPressDetector()
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
    document.onkeydown = function (e) {
      if (e.key === this._shortcutKey) this.switchCaptionStatus()
    }
  }
  
  _createStyleElement() {
    this._styleElement = document.createElement('style')
    document.head.appendChild(this._styleElement)
  }
  
  _setCaptionDisplayStyle(displayStyle) {
    this._styleElement.innerHTML = `${this._captionElement} { display: ${displayStyle} !important }`
  }
  
}

var c = new CaptionControl()


