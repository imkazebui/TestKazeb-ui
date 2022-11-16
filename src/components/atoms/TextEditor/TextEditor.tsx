import React from 'react';
import ReactQuill from 'react-quill';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'highlight.js/styles/monokai-sublime.css';

export interface ITextEditorProps {
  value?: string;
  readonly?: boolean;
  toolbar?: boolean | any[];
  placeHolder? : string ;
  theme?: 'snow' | 'bubble' ;
  main?: boolean ;
  // eslint-disable-next-line no-unused-vars
  onHandleChange?(value?: string | number): void;
  // eslint-disable-next-line no-unused-vars
}

hljs.registerLanguage('javascript', javascript);

const modules = {
  syntax: { highlight: (text: string) => hljs.highlightAuto(text).value },
};

const defaultToolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  // ['blockquote', 'code-block'],
  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction
  // [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  // [{ header: [1, 2, 3, 4, 5, 6, false] }],
  // [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  // [{ font: [] }],
  [{ align: [] }],

  // ['clean'], // remove formatting button
];

const TextEditor: React.FC<ITextEditorProps> = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { value = '', readonly = false, toolbar = defaultToolbarOptions, theme = 'snow', onHandleChange, placeHolder, main } = props;

  const newModules = {
    ...modules,
    toolbar,
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
  };
  // eslint-disable-next-line no-unused-vars
  const onHandleChanged = (e:any) => (event:any) => {
  };
  return (
    <ReactQuill
      className=""
      theme={theme}
      // value={value}
      modules={newModules}
      readOnly={readonly}
      preserveWhitespace
      onKeyDown={onKeyDown}
      onChange={onHandleChanged}
      placeholder={placeHolder}
      style={{ height: main ? '250px' : '' }}
    />
  );
};

export default TextEditor;
