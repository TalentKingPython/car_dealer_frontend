import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Fade from 'react-bootstrap/Fade'

const ComponentPageSection = (props) => {
  return (
    <section id={props.id} className='pb-5 mb-md-2'>
      <Tab.Container defaultActiveKey='preview' transition={Fade}>
        <h2 className='h5 mb-3'>{props.title}</h2>
        <Card className='border-0 shadow-sm'>
          <Card.Header>
            <Nav variant='tabs'>
              <Nav.Item>
                <Nav.Link as='button' eventKey='preview'>
                  <i className='fi-eye-on me-2'></i>
                  Preview
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as='button' eventKey='code'>
                  <i className='fi-code me-2'></i>
                  Code
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Tab.Content>{props.children}</Tab.Content>
          </Card.Body>
        </Card>
      </Tab.Container>
    </section>
  )
}

export default ComponentPageSection
