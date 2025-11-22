import { ButtonHTMLAttributes } from 'react'
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'outline' | 'solid', size?: 'lg' | 'md' }
export function Button({ className='', variant='solid', size='md', ...props }: Props){
  const base = 'inline-flex items-center justify-center rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/40'
  const sizes = size==='lg' ? 'px-6 py-3 text-lg' : 'px-4 py-2'
  const variants = variant==='outline' ? 'border border-white/20 text-white hover:bg-white/10' : 'bg-purple-600 hover:bg-purple-700 text-white'
  return <button className={`${base} ${sizes} ${variants} ${className}`} {...props} />
}