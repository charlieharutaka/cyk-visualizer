import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import cyk from './cyk/cyk'
import { exampleGrammar, exampleSentence } from './cyk/example'

document.cyk = cyk
document.example = { grammar: exampleGrammar, sentence: exampleSentence }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
