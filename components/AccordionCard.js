import { useContext } from 'react'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import AccordionContext from 'react-bootstrap/AccordionContext'

const AccordionCard = ({ children, eventKey, callback, className, ...props }) => {

  const { activeEventKey } = useContext(AccordionContext)
  const handleClick = useAccordionButton(eventKey, () => callback && callback(eventKey))
  const isCurrentEventKey = activeEventKey === eventKey
  const extraClass = className ? ` ${className}` : ''

  return (
    <div className={`card accordion-card bg-secondary mb-2${isCurrentEventKey ? '' : ' collapsed'}${extraClass}`} {...props}>
      <div className='position-absolute top-0 start-0 w-100 h-100' onClick={handleClick}></div>
      {children}
    </div>
  )
}

export default AccordionCard
