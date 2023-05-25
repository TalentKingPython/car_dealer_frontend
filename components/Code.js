import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'
import 'prismjs/plugins/toolbar/prism-toolbar.min.js'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'

const Code = ({ language, className, children, style }) => {

  useEffect(() => {
    Prism.highlightAll()
  }, [children])

  return (
    <pre className={`line-numbers ${className}`} style={style}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  )
}

export default Code
