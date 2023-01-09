// Author: Jorge Feldmann

class SubtitleControl {
  constructor(subtitleElement = '.player-timedtext', shortcutSwitcherKey = 'c') {
    this._subtitleElement = subtitleElement
    this._shortcutKey = shortcutSwitcherKey
    this._styleElement = null
    this._subtitleIsVisible = true
    this._createStyleElement()
    this._bindKeyPressDetector()
    this._warning('Remember to turn on the subtitles :)')
  }
  
  hide() {
    this._setSubtitleDisplayStyle('none')
    return false
  }
  
  show() {
    this._setSubtitleDisplayStyle('block')
    return true
  }
  
  switchSubtitleStatus() {
    this._subtitleIsVisible = this._subtitleIsVisible ? this.hide() : this.show()
  }
  
  _bindKeyPressDetector() {
    var callback = (function (e) {
       if (e.key === this._shortcutKey) this.switchSubtitleStatus()
    }).bind(this)
    document.onkeydown = callback
  }
  
  _createStyleElement() {
    this._styleElement = document.createElement('style')
    document.head.appendChild(this._styleElement)
  }
  
  _setSubtitleDisplayStyle(displayStyle) {
    this._styleElement.innerHTML = `${this._subtitleElement} { display: ${displayStyle} !important }`
  }
  
  _warning(msg) {
    console.log(msg)
  }
  
}

var c = new SubtitleControl()


