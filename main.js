const captionElement = '.player-timedtext'

const styleElement = document.createElement('style')
document.head.appendChild(styleElement)

const hide = () => style.innerHTML = `${captionElement} { display: none !important }`
const show = () => style.innerHTML = `${captionElement} { display: block !important }`
