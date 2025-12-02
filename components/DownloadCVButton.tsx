import React from 'react'
import { Download } from 'lucide-react'

interface DownloadCVButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  fileName?: string
}

export default function DownloadCVButton({ 
  variant = 'primary', 
  size = 'md',
  className = '',
  fileName = 'Victor-Musyoka-CV.pdf'
}: DownloadCVButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-orange-400 text-white hover:bg-orange-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
  }

  return (
    <a
      href={`/cv/${fileName}`}
      download
      className={`${sizes[size]} ${variants[variant]} inline-flex items-center gap-2 justify-center rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${className}`}
    >
      <Download size={20} />
      Download CV
    </a>
  )
}
