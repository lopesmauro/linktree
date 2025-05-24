import React from 'react'
import { links } from './data/links'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-4">
      <div className="w-full max-w-sm text-center space-y-1">
        <img
          src="/logo.png"
          alt=""
          className="w-40 h-40 rounded-full mb-3 mx-auto border-4 border-stone-900 shadow-lg object-cover"
        />
        <h1 className="text-2xl font-bold text-white">Mauro Felipe</h1>
        <p className="text-slate-400 mb-5">Desenvolvedor Web • Fullstack</p>

        <div className="space-y-4">
          {links.map((link, idx) => {
            const Icon = link.icon
            return(
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-xl font-semibold transition-all duration-300 ease-in-out
                ${link.bg} backdrop-blur-md hover:scale-105 flex justify-between items-center px-5`}
              >
                <span className='flex'>
                  <Icon />
                </span>
                <span>
                  {link.label}
                </span>
              </a>
            )
          })}
        </div>

        <footer className="text-sm text-slate-500 mt-6">
          © 2025 - Feito com ❤️
        </footer>
      </div>
    </div>
  )
}

export default App
