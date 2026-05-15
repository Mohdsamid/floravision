import { useState } from 'react'
import './App.css'
import { House, Search, Database, Code, Coffee, Upload, Download, Sparkles} from "lucide-react";

function App() {
  return (
    <>
      <div className="bg-gray-400 m-1.5 p-1.5 gap-2 grid-cols-3">
          <span>
            <House></House>
            </span>
            <span>
          <Search></Search>
          </span>
          <span>
          <Code></Code>
          </span>
          
      </div>
    </>
  )
}

export default App
