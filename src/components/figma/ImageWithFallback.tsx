import { ImgHTMLAttributes, useState } from 'react'
export function ImageWithFallback(props: ImgHTMLAttributes<HTMLImageElement>){
  const [error, setError] = useState(false)
  if(error){ return <div className='w-full h-full bg-gray-800/50 grid place-items-center text-gray-400 text-sm'>image</div> }
  return <img {...props} onError={()=>setError(true)} />
}