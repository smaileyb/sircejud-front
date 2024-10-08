'use client'
import React, { Dispatch, SetStateAction } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

type EditorProps = {
  name: string
  value: string | undefined
  onChange: Dispatch<SetStateAction<string | undefined>>
  className: string
}

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'blockquote'],
    [{ align: ['right', 'center', 'justify'] }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' }
    ]
  ]
}

const Editor = ({ name, value, onChange, className }: EditorProps) => {
  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      value={value}
      onChange={onChange}
      placeholder="Digite aqui"
      className="mb-4 h-60 w-full"
    />
  )
}

export default Editor
