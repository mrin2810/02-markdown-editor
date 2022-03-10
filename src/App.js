import React, { useState } from 'react';
import './App.css';
import Markdown from 'marked-react';

export default function App() {
  const [markdown, setMarkDown] = useState('# sup');
  return (
    <div className="app">
      <textarea onChange={e => setMarkDown(e.target.value)} value={markdown}/>
      <div className="preview">
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  );
}