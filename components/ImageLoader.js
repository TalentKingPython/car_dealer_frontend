import Image from 'next/legacy/image'

const ImageLoader = (props) => {

  const width = props.width,
        height = props.height,
        alt = props.alt,
        placeholder = props.placeholder,
        light = props.light

  const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="${light ? '#352e44' : '#efedf0'}" offset="20%" />
          <stop stop-color="${light ? '#1f1b2d' : '#d8d7da'}" offset="50%" />
          <stop stop-color="${light ? '#352e44' : '#efedf0'}" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="${light ? '#352e44' : '#efedf0'}" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
    </svg>`
  
  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

  return (
    <Image
      {...props}
      placeholder={placeholder === false ? 'empty' : 'blur'}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
      alt={alt}
    />
  )
}

export default ImageLoader
