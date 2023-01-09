class CaptionControl {
  constructor(captionElement = '.player-timedtext') {
    this._captionElement = captionElement
    this._styleElement = null
    this._createStyleElement()
  }
  
  hide() {
    this._setCaptionDisplayStyle('none')
  }
  
  show() {
    this._setCaptionDisplayStyle('block')
  }
  
  _createStyleElement() {
    this._styleElement = document.createElement('style')
    document.head.appendChild(this._styleElement)
  }
  
  _setCaptionDisplayStyle(displayStyle) {
    this._styleElement.innerHTML = `${this._captionElement} { display: ${displayStyle} !important }`
  }
  
}
