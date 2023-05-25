import Link from 'next/link'

// Nav item
const CardNavItem = ({ href, icon, children, active, className, ...props }) => (
  <>
    {href ? <Link href={href} {...props} className={`card-nav-link${className ? ` ${className}` : ''}${active ? ' active': ''}`}>
      {icon ? <i className={`${icon} me-2`}></i> : ''}
      {children}
    </Link> : <div {...props} className={`card-nav-link${className ? ` ${className}` : ''}${active ? ' active': ''}`}>
      {icon ? <i className={`${icon} me-2`}></i> : ''}
      {children}
    </div>}
  </>
)

// Main wrapper
const CardNav = ({ children, className, ...props }) => (
  <nav {...props} className={`card-nav${className ? ` ${className}` : ''}`}>
    {children}
  </nav>
)

CardNav.Item = CardNavItem
export default CardNav
