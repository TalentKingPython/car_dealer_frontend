const SocialButton = ({
  brand,
  variant,
  size,
  roundedCircle,
  light,
  className,
  ...props
}) => {

  const brandProp = brand ? brand.toLowerCase() : '',
        variantProp = variant ? variant.toLowerCase() : '',
        roundedCircleClass = roundedCircle ? ' rounded-circle' : '',
        basicLight = light ? ' btn-light' : '',
        solidLight = light ? ' btn-translucent-light' : ' btn-light-primary',
        translucentLight = light ? ' btn-translucent-light' : ' btn-translucent-primary',
        borderLight = light ? ' btn-outline-light border-light' : ' btn-light border',
        extraClass = className ? ` ${className}` : ''
  
  // Button size CSS classes
  let btnSize
  switch (size) {
    case 'sm':
      btnSize = ' btn-xxs'
      break
    case 'lg':
      btnSize = ' btn-sm'
      break
    case 'xl':
      btnSize = ''
      break
    default:
      btnSize = ' btn-xs'
  }

  // Icon size CSS classes (for basic variant)
  let iconSize
  switch (size) {
    case 'sm':
      iconSize = ''
      break
    case 'lg':
      iconSize = ' fs-4'
      break
    case 'xl':
      iconSize = ' fs-3'
      break
    default:
      iconSize = ' fs-lg'
  }

  // CSS classes that depend on prop.variant, prop.size, prop.light, prop.className
  let socialButtonClass
  switch (variantProp) {
    case 'solid':
      socialButtonClass = 'btn btn-icon shadow-sm' + btnSize + roundedCircleClass + solidLight + extraClass
      break
    case 'translucent':
      socialButtonClass = 'btn btn-icon' + btnSize + roundedCircleClass + translucentLight + extraClass
      break
    case 'border':
      socialButtonClass = 'btn btn-icon' + btnSize + roundedCircleClass + borderLight + extraClass
      break
    default:
      socialButtonClass = 'btn btn-link py-1 px-2' + iconSize + basicLight + extraClass
  }

  // Render markup
  return (
    <a {...props} className={socialButtonClass}>
      <i className={`fi-${brandProp}`}></i>
    </a> 
  )
}

export default SocialButton
