/* eslint-disable react/button-has-type */
import React from 'react';
import ReactQuill from 'react-quill';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import 'react-quill/dist/quill.snow.css';
import 'highlight.js/styles/monokai-sublime.css';

export interface ITextEditorProps {
  value?: string;
}

hljs.registerLanguage('javascript', javascript);

const modules = { syntax: { highlight: (text: string) => hljs.highlightAuto(text).value } };

const TextEditor: React.FC<ITextEditorProps> = (props) => {
  const { value = '' } = props;
  return <ReactQuill value={value} modules={modules} />;
};

export default TextEditor;
