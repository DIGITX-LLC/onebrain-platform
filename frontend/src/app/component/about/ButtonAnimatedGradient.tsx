'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'


interface ButtonProps {
  text?: string   // Make text optional since we will be using children for dynamic content
  onClick?: () => void
  gradientFrom?: string
  gradientTo?: string
  borderColor?: string
  className?: string
  link?: string
  children?: React.ReactNode  // Allow children to be passed
}

const ButtonAnimatedGradient: React.FC<ButtonProps> = ({
  text,
  onClick,
  gradientFrom = '#0f1747',
  gradientTo = '#0f1747',
  borderColor = '#0f1747',
  className = '',
  link,
  children,
}) => {
  const divRef = useRef<HTMLButtonElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!divRef.current || isFocused) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const button = (
    <button
      ref={divRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onFocus={() => {
        setIsFocused(true)
        setOpacity(1)
      }}
      onBlur={() => {
        setIsFocused(false)
        setOpacity(0)
      }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative inline-flex w-fit mx-auto h-12 items-center justify-center overflow-hidden border-2 px-6 font-medium text-white shadow-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 ${className}`}
      style={{
        borderColor: borderColor,
        background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
      }}
      aria-label={text}  // Adding an aria-label for accessibility
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, #656fe288, #00000026)`,
        }}
      />
      <span className="relative z-20">{children || text}</span> {/* Use children if available */}
    </button>
  )

  return link ? <Link href={link}>{button}</Link> : button
}

export default ButtonAnimatedGradient
