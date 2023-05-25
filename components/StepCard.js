import Link from 'next/link'

const StepCard = ({
  number,
  title,
  text,
  href,
  light,
  align,
  className,
  ...props
}) => {

  const alignment = align ? ` text-${align}` : '',
        extraClass = className ? ` ${className}` : ''

  return (
    <>
      {href ? <Link href={href} {...props} className={`card card-hover bg-transparent card-body h-100${alignment}${light ? ' card-light' : ' border-0'}${extraClass}`}>
        <div className='h2 text-primary mb-2 pb-1'>{number}</div>
        <h3 className='h5 card-title'>{title}</h3>
        <p className={`card-text fs-sm${light ? ' text-light opacity-60' : ' text-body'}`}>{text}</p>
      </Link> : <div {...props} className={`card card-hover bg-transparent card-body h-100${alignment}${light ? ' card-light' : ' border-0'}${extraClass}`}>
          <div className='h2 text-primary mb-2 pb-1'>{number}</div>
          <h3 className='h5 card-title'>{title}</h3>
          <p className={`card-text fs-sm${light ? ' text-light opacity-60' : ' text-body'}`}>{text}</p>
        </div>
      }
    </>
  )
}

export default StepCard
