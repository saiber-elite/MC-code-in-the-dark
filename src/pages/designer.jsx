// no need to change anything apart ida theme f syntaxhighlighter wla words

import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MC from './../assets/mclogo.svg'
import Code1 from './code1.js'
import Code2 from './code2.js'
const designer = () => {

  function onCopyHandler(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  return (
    <div className='flex items-center flex-col gap-2 p-5' onCopy={onCopyHandler}>
      <img src={MC} className=' h-14' />
      <div className=' text-center'><h1 className=' font-bold text-3xl mb-5'>Hey <span className=' text-accent'>Designer</span></h1>
      <h1 className=' text-xl'>In this challenges you are going to <span className=' text-secondary'>design</span>  a page </h1> <h1 className=' text-xl'> from a <span className=' text-secondary'>code</span> we provide , u can choose from this two's   </h1></div>
      <div className='flex gap-10 w-full px-10 justify-center' >
        <div>
            <h1 className='text-center font-bold'>Code 1</h1>
          <SyntaxHighlighter language="html" style={nightOwl} className=' rounded-lg' >
            {Code1}
          </SyntaxHighlighter>
        </div>
        
        <div>
            <h1 className='text-center font-bold'>Code 2</h1>
          <SyntaxHighlighter language="html" style={nightOwl} className=' rounded-lg' >
            {Code2}
          </SyntaxHighlighter>
        </div>
        
        
      </div>
    </div>
  )
}

export default designer
