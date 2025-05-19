import { Github, Instagram, Linkedin, Youtube } from 'lucide-react'

export const links = [
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    url: 'https://github.com/lopesmauro',
    bg: 'bg-gradient-to-r from-violet-800 to-purple-900 text-white',
  },
  {
    icon: <Instagram className="w-4 h-4" />,
    label: 'Instagram',
    url: 'https://www.instagram.com/themfcode/?hl=pt',
    bg: 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mauro-felipe-lopes/',
    bg: 'bg-blue-600 text-white',
  },
  {
    icon: <Youtube className="w-5 h-5" />,
    label: 'Youtube',
    url: 'https://linkedin.com/in/seunome',
    bg: 'bg-gradient-to-r from-red-800 to-red-500 text-white',
  },
]