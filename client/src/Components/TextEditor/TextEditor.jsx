import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
// Classic Version
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// Decoupled Version
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import './TextEditor.scss'

class TextEditor extends Component {
   render() {
      return (
         <div className="text-editor__container">
            <CKEditor 
               editor={ClassicEditor} // Here you can change to classic version
               // editor={DecoupledEditor}
               data="<p> </p>"
               data="<p> Write some text here ....</p>"
               onInit={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
               }}
               onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
               }}
               onBlur={(event, editor) => {
                  console.log('Blur.', editor);
               }}
               onFocus={(event, editor) => {
                  console.log('Focus.', editor);
               }}
            />
         </div>
      );
   }
}
export default TextEditor;