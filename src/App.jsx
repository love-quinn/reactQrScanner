import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QrScanner from './Scanner'

export default function App() {
  return (
    <div className="container">
      <QrScanner/>
    </div>
  )
}