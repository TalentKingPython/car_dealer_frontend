import { Link } from 'react-scroll'

const ScrollLink = (props) => {
  return (
    <Link
      activeClass={props.activeClass}
      to={props.to}
      spy={props.spy}
      smooth={props.smooth}
      offset={props.offset}
      duration={props.duration}
      className={props.className}
    >{props.children}</Link>
  )
}

export default ScrollLink
