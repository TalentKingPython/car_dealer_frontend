const FormGroup = ({ children, light, className, ...props }) => {

  const isLight = light ? ' form-group-light' : '',
        extraClass = className ? ` ${className}` : ''

  return (
    <form {...props} className={`form-group${isLight}${extraClass}`}>
      {children}
    </form>
  )
}

export default FormGroup
