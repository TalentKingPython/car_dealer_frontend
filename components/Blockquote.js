const Blockquote = (props) => {

  const thumbShape = props.author.thumbShape ? props.author.thumbShape : 'rounded',
        thumbClass = `flex-shrink-0 bg-repeat-0 bg-position-center bg-size-cover ${thumbShape}`,
        thumbSrc = props.author.thumbSrc,
        thumbSize = props.author.thumbSize + 'px',
        name = props.author.name,
        position = props.author.position,
        light = props.light ? ' text-light' : '',
        alignment = props.align ? ' text-' + props.align : '',
        alignmentFooter = props.align ? ' justify-content-' + props.align : '',
        extraClass = props.className ? ' ' + props.className : '',
        style = props.style,
        children = props.children

  // Blockquote footer
  let footer
  if (thumbSrc) {
    footer = <footer className={`d-flex text-start align-items-center${alignmentFooter}`}>
      <div className={thumbClass} style={{width: thumbSize, height: thumbSize, backgroundImage: 'url(' + thumbSrc + ')'}}></div>
      <div className='ps-3'>
        <h6 className={`fs-base mb-0${light}`}>{name}</h6>
        <div className={`opacity-50 fw-normal fs-sm${light}`}>{position}</div>
      </div>
    </footer>
  } else if (!thumbSrc && position) {
    footer = <footer>
      <h6 className={`fs-base mb-0${light}`}>{name}</h6>
      <div className={`opacity-50 fw-normal fs-sm${light}`}>{position}</div>
    </footer>
  } else {
    footer = <footer className={`blockquote-footer${light}`}>{name}</footer>
  }

  // Render markup
  return (
    <blockquote className={`blockquote${extraClass}${alignment}`} style={style}>
      <div className={`pb-1 mb-3${light}`}>{children}</div>
      {footer}
    </blockquote>
  )
}

export default Blockquote
