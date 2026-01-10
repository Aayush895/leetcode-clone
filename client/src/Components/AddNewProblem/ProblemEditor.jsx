import { useState } from 'react'
import { Editor } from 'primereact/editor'

function ProblemEditor() {
  const [editorText, setText] = useState('')
  return (
    <>
      <Editor value={editorText} onTextChange={(e) => setText(e.htmlValue)} className='my-3 mb-20 h-100'/>
    </>
  )
}
export default ProblemEditor
