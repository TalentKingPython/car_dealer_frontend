// Basic card component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import ListGroup from 'react-bootstrap/ListGroup'
import Code from '../../components/Code'
import ImageLoader from '../../components/ImageLoader'

const CardsBasicPage = () => {

  const anchorLinks = [
    {
      label: 'No image',
      anchor: 'card-no-image'
    },
    {
      label: 'Alternative card styles',
      anchor: 'card-alt-styles'
    },
    {
      label: 'Light version',
      anchor: 'card-light'
    },
    {
      label: 'Hover effect',
      anchor: 'card-hover'
    },
    {
      label: 'Image on top',
      anchor: 'card-top-image'
    },
    {
      label: 'Image on bottom',
      anchor: 'card-bottom-image'
    },
    {
      label: 'Horizontal layout',
      anchor: 'card-horizontal'
    },
    {
      label: 'Header and footer',
      anchor: 'card-header-footer'
    },
    {
      label: 'Text alignment',
      anchor: 'card-text-alignment'
    },
    {
      label: 'Navigation: Tabs',
      anchor: 'card-nav-tabs'
    },
    {
      label: 'Navigation: Pills',
      anchor: 'card-nav-pills'
    },
    {
      label: 'List group inside card',
      anchor: 'card-list-group'
    },
    {
      label: 'Card styles: Background and color',
      anchor: 'card-bg-color'
    },
    {
      label: 'Card styles: Border and color',
      anchor: 'card-border-color'
    },
    {
      label: 'Card group',
      anchor: 'card-group'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Cards: Basic'
      pageDescription='Flexible and extensible content container.'
      activeNav='/components/cards-basic'
      docsLink='https://react-bootstrap.github.io/components/cards/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* No image */}
      <ComponentPageSection id='card-no-image' title='No image'>
        <Tab.Pane eventKey='preview'>
          <Card style={{maxWidth: '20rem'}}>
            <Card.Body>
              <Card.Title as='h5'>Card Title</Card.Title>
              <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
              <Button as={Link} href='#' size='sm'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

{/* Basic card without image */}
<Card>
  <Card.Body>
    <Card.Title as='h5'>Card Title</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Alternative card styles */}
      <ComponentPageSection id='card-alt-styles' title='Alternative card styles'>
        <Tab.Pane eventKey='preview'>
          <Row className='g-4'>
            <Col xl={5} xxl={4} sm={6}>
              <Card border='0' className='shadow'>
                <Card.Body>
                  <Card.Title as='h5'>Card Title</Card.Title>
                  <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                  <Button as={Link} href='#'  size='sm'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={5} xxl={4} sm={6}>
              <Card bg='secondary'>
                <Card.Body>
                  <Card.Title as='h5'>Card Title</Card.Title>
                  <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                  <Button as={Link} href='#'  size='sm'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

{/* Alternative card style: no border + shadow */}
<Card border='0' className='shadow'>
  <Card.Body>
    <Card.Title as='h5'>Card Title</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>

{/* Alternative card style: gray background */}
<Card bg='secondary'>
  <Card.Body>
    <Card.Title as='h5'>Card Title</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Light version */}
      <ComponentPageSection id='card-light' title='Light version'>
        <Tab.Pane eventKey='preview' className='m-n3 p-4 bg-dark'>
          <Row className='g-4'>
            <Col xl={5} xxl={4} sm={6}>
              <Card className='card-light'>
                <Card.Body>
                  <Card.Title as='h5'>Static card</Card.Title>
                  <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                  <Button as={Link} href='#'  size='sm'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={5} xxl={4} sm={6}>
              <Card className='card-light card-hover'>
                <Card.Body>
                  <Card.Title as='h5'>Hover effect</Card.Title>
                  <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                  <Button as={Link} href='#'  size='sm'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

{/* Static light card */}
<Card className='card-light'>
  <Card.Body>
    <Card.Title as='h5'>Static card</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>

{/* Light card with hover effect */}
<Card className='card-light card-hover'>
  <Card.Body>
    <Card.Title as='h5'>Hover effect</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Hover effect */}
      <ComponentPageSection id='card-hover' title='Hover effect'>
        <Tab.Pane eventKey='preview'>
          <Row className='g-4'>
            <Col xl={5} xxl={4} sm={6}>
              <Card className='card-hover'>
                <Card.Body>
                  <Card.Title as='h5'>Hover over me!</Card.Title>
                  <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                  <Button as={Link} href='#'  size='sm'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={5} xxl={4} sm={6}>
              <Card border='0' className='shadow-sm card-hover'>
                <Card.Body>
                  <Card.Title as='h5'>Hover over me!</Card.Title>
                  <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                  <Button as={Link} href='#'  size='sm'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={5} xxl={4} sm={6}>
              <Card bg='secondary' className='card-hover'>
                <Card.Body>
                  <Card.Title as='h5'>Hover over me!</Card.Title>
                  <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                  <Button as={Link} href='#'  size='sm'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

{/* Hover effect on default card */}
<Card className='card-hover'>
  <Card.Body>
    <Card.Title as='h5'>Hover over me!</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>

{/* Hover effect on card with shadow */}
<Card border='0' className='shadow-sm card-hover'>
  <Card.Body>
    <Card.Title as='h5'>Hover over me!</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>

{/* Hover effect on card with gray background */}
<Card bg='secondary' className='card-hover'>
  <Card.Body>
    <Card.Title as='h5'>Hover over me!</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Image on top */}
      <ComponentPageSection id='card-top-image' title='Image on top'>
        <Tab.Pane eventKey='preview'>
          <Card style={{maxWidth: '308px'}}>
            <ImageLoader
              src='/images/real-estate/catalog/04.jpg'
              width={306}
              height={200}
              layout='responsive'
              alt='Card image'
              className='card-img-top'
            />
            <Card.Body>
              <Card.Title as='h5'>Card title</Card.Title>
              <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
              <Button as={Link} href='#' size='sm'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import ImageLoader from '../components/ImageLoader'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

{/* Image on top */}
<Card style={{maxWidth: '308px'}}>
  <ImageLoader
    src='/images/real-estate/catalog/04.jpg'
    width={306}
    height={200}
    layout='responsive'
    alt='Card image'
    className='card-img-top'
  />
  <Card.Body>
    <Card.Title as='h5'>Card title</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Image on bottom */}
      <ComponentPageSection id='card-bottom-image' title='Image on bottom'>
        <Tab.Pane eventKey='preview'>
          <Card style={{maxWidth: '308px'}}>
            <Card.Body>
              <Card.Title as='h5'>Card title</Card.Title>
              <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
              <Button as={Link} href='#' size='sm'>Go somewhere</Button>
            </Card.Body>
            <ImageLoader 
              src='/images/real-estate/catalog/01.jpg'
              width={306}
              height={200}
              layout='responsive'
              alt='Card image'
              className='card-img-bottom'
            />
          </Card>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import ImageLoader from '../components/ImageLoader'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

{/* Image on bottom */}
<Card style={{maxWidth: '308px'}}>
  <Card.Body>
    <Card.Title as='h5'>Card title</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
  <ImageLoader
    src='/images/real-estate/catalog/01.jpg'
    width={306}
    height={200}
    layout='responsive'
    alt='Card image'
    className='card-img-bottom'
  />
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Horizontal layout */}
      <ComponentPageSection id='card-horizontal' title='Horizontal layout'>
        <Tab.Pane eventKey='preview'>
          <Card className='card-horizontal' style={{maxWidth: '40rem'}}>
            <div className='card-img-top'>
              <ImageLoader
                src='/images/real-estate/catalog/03.jpg'
                layout='fill'
                objectFit='cover'
                quality={100}
                alt='Card image'
              />
            </div>
            <Card.Body>
              <Card.Title as='h5'>Card title</Card.Title>
              <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
              <Button as={Link} href='#' size='sm'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import ImageLoader from '../components/ImageLoader'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

{/* Horizontal card layout */}
<Card className='card-horizontal'>
  <div className='card-img-top'>
    <ImageLoader
      src='/images/real-estate/catalog/03.jpg'
      layout='fill'
      objectFit='cover'
      quality={100}
      alt='Card image'
    />
  </div>
  <Card.Body>
    <Card.Title as='h5'>Card title</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Header and footer */}
      <ComponentPageSection id='card-header-footer' title='Header and footer'>
        <Tab.Pane eventKey='preview'>
          <Card className='text-center'>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title as='h4'>Special title treatment</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button as={Link} href='#' size='sm'>Go somewhere</Button>
            </Card.Body>
            <Card.Footer className='fs-sm text-muted'>3 days ago</Card.Footer>
          </Card>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

{/* Card with header and footer */}
<Card className='text-center'>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title as='h4'>Special title treatment</Card.Title>
    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
  <Card.Footer className='fs-sm text-muted'>3 days ago</Card.Footer>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Text alignment */}
      <ComponentPageSection id='card-text-alignment' title='Text alignment'>
        <Tab.Pane eventKey='preview'>
          <Row className='g-4'>
            <Col xl={5} xxl={4} sm={6}>
              <Card>
                <Card.Body>
                  <Card.Title as='h5'>Card Title</Card.Title>
                  <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                  <Button as={Link} href='#'  size='sm'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={5} xxl={4} sm={6}>
              <Card className='text-center'>
                <Card.Body>
                  <Card.Title as='h5'>Card Title</Card.Title>
                  <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                  <Button as={Link} href='#'  size='sm'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={5} xxl={4} sm={6}>
              <Card className='text-end'>
                <Card.Body>
                  <Card.Title as='h5'>Card Title</Card.Title>
                  <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                  <Button as={Link} href='#'  size='sm'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

{/* Left aligned (default) */}
<Card>
  <Card.Body>
    <Card.Title as='h5'>Card Title</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>

{/* Center aligned */}
<Card className='text-center'>
  <Card.Body>
    <Card.Title as='h5'>Card Title</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>

{/* Right aligned */}
<Card className='text-end'>
  <Card.Body>
    <Card.Title as='h5'>Card Title</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Navigation: Tabs */}
      <ComponentPageSection id='card-nav-tabs' title='Navigation: Tabs'>
        <Tab.Pane eventKey='preview'>
          <Card className='text-center'>
            <Card.Header>
              <Nav variant='tabs' defaultActiveKey='1'>
                <Nav.Item>
                  <Nav.Link eventKey='1'>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='2'>Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='3' disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title as='h4'>Special title treatment</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button as={Link} href='#' size='sm'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

{/* Tabs inside card header */}
<Card className='text-center'>
  <Card.Header>
    <Nav variant='tabs' defaultActiveKey='1'>
      <Nav.Item>
        <Nav.Link eventKey='1'>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='2'>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='3' disabled>Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title as='h4'>Special title treatment</Card.Title>
    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Navigation: Pills */}
      <ComponentPageSection id='card-nav-pills' title='Navigation: Pills'>
        <Tab.Pane eventKey='preview'>
          <Card className='text-center'>
            <Card.Header>
              <Nav variant='pills' defaultActiveKey='1'>
                <Nav.Item>
                  <Nav.Link eventKey='1'>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='2'>Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='3' disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title as='h4'>Special title treatment</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button as={Link} href='#' size='sm'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

{/* Pills inside card header */}
<Card className='text-center'>
  <Card.Header>
    <Nav variant='pills' defaultActiveKey='1'>
      <Nav.Item>
        <Nav.Link eventKey='1'>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='2'>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='3' disabled>Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title as='h4'>Special title treatment</Card.Title>
    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* List group inside card */}
      <ComponentPageSection id='card-list-group' title='List group inside card'>
        <Tab.Pane eventKey='preview'>
          <Row>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title as='h4'>Card title</Card.Title>
                  <Card.Text className='fs-sm text-muted'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                  </Card.Text>
                </Card.Body>
                <ListGroup as='ul' variant='flush'>
                  <ListGroup.Item as='li'>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item as='li'>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item as='li'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button as={Link} href='#'  size='sm'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title as='h4'>Card title</Card.Title>
                  <Card.Text className='fs-sm text-muted'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                  </Card.Text>
                </Card.Body>
                <ListGroup variant='flush'>
                  <ListGroup.Item action href='#link1'>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item action href='#link2'>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item action href='#link3'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button as={Link} href='#'  size='sm'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

{/* Simple list group inside card */}
<Card>
  <Card.Body>
    <Card.Title as='h4'>Card title</Card.Title>
    <Card.Text className='fs-sm text-muted'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
    </Card.Text>
  </Card.Body>
  <ListGroup as='ul' variant='flush'>
    <ListGroup.Item as='li'>Cras justo odio</ListGroup.Item>
    <ListGroup.Item as='li'>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item as='li'>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
  <Card.Body>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>

{/* Actionable list group inside card */}
<Card>
  <Card.Body>
    <Card.Title as='h4'>Card title</Card.Title>
    <Card.Text className='fs-sm text-muted'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
    </Card.Text>
  </Card.Body>
  <ListGroup variant='flush'>
    <ListGroup.Item action href='#link1'>Cras justo odio</ListGroup.Item>
    <ListGroup.Item action href='#link2'>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item action href='#link3'>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
  <Card.Body>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Card styles: Background and color */}
      <ComponentPageSection id='card-bg-color' title='Card styles: Background and color'>
        <Tab.Pane eventKey='preview'>
          <Row className='gy-4'>
            <Col sm={6}>
              <Card bg='primary' text='white'>
                <Card.Header className='border-light'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-white'>Primary card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card bg='accent' text='white'>
                <Card.Header className='border-light'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-white'>Accent card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card bg='secondary'>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5'>Secondary card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card bg='success' text='white'>
                <Card.Header className='border-light'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-white'>Success card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card bg='danger' text='white'>
                <Card.Header className='border-light'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-white'>Danger card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card bg='warning' text='white'>
                <Card.Header className='border-light'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-white'>Warning card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card bg='info' text='white'>
                <Card.Header className='border-light'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-white'>Info card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card bg='dark' text='white'>
                <Card.Header className='border-light'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-white'>Dark card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card bg='gradient' text='white'>
                <Card.Header className='border-light'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-white'>Gradient card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Card from 'react-bootstrap/Card'

{/* Primary card */}
<Card bg='primary' text='white'>
  <Card.Header className='border-light'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-white'>Primary card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Accent card */}
<Card bg='accent' text='white'>
  <Card.Header className='border-light'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-white'>Accent card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Secondary card */}
<Card bg='secondary'>
  <Card.Header>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5'>Secondary card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Success card */}
<Card bg='success' text='white'>
  <Card.Header className='border-light'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-white'>Success card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Danger card */}
<Card bg='danger' text='white'>
  <Card.Header className='border-light'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-white'>Danger card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Warning card */}
<Card bg='warning' text='white'>
  <Card.Header className='border-light'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-white'>Warning card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Info card */}
<Card bg='info' text='white'>
  <Card.Header className='border-light'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-white'>Info card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Dark card */}
<Card bg='dark' text='white'>
  <Card.Header className='border-light'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-white'>Dark card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Gradient card */}
<Card bg='gradient' text='white'>
  <Card.Header className='border-light'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-white'>Gradient card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Card styles: Border and color */}
      <ComponentPageSection id='card-border-color' title='Card styles: Border and color'>
        <Tab.Pane eventKey='preview'>
          <Row className='gy-4'>
            <Col sm={6}>
              <Card border='primary' text='primary'>
                <Card.Header className='border-primary'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-primary'>Primary card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card border='accent' text='accent'>
                <Card.Header className='border-accent'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-accent'>Accent card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card border='success' text='success'>
                <Card.Header className='border-success'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-success'>Success card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card border='danger' text='danger'>
                <Card.Header className='border-danger'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-danger'>Danger card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card border='warning' text='warning'>
                <Card.Header className='border-warning'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-warning'>Warning card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card border='info' text='info'>
                <Card.Header className='border-info'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-info'>Info card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card border='dark' text='dark'>
                <Card.Header className='border-dark'>Header</Card.Header>
                <Card.Body>
                  <Card.Title as='h5' className='text-dark'>Dark card title</Card.Title>
                  <Card.Text className='fs-sm'>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Card from 'react-bootstrap/Card'

{/* Primary card */}
<Card border='primary' text='primary'>
  <Card.Header className='border-primary'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-primary'>Primary card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Accent card */}
<Card border='accent' text='accent'>
  <Card.Header className='border-accent'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-accent'>Accent card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Success card */}
<Card border='success' text='success'>
  <Card.Header className='border-success'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-success'>Success card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Danger card */}
<Card border='danger' text='danger'>
  <Card.Header className='border-danger'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-danger'>Danger card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Warning card */}
<Card border='warning' text='warning'>
  <Card.Header className='border-warning'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-warning'>Warning card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Info card */}
<Card border='info' text='info'>
  <Card.Header className='border-info'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-info'>Info card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>

{/* Dark card */}
<Card border='dark' text='dark'>
  <Card.Header className='border-dark'>Header</Card.Header>
  <Card.Body>
    <Card.Title as='h5' className='text-dark'>Dark card title</Card.Title>
    <Card.Text className='fs-sm'>
      Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
    </Card.Text>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Card group */}
      <ComponentPageSection id='card-group' title='Card group'>
        <Tab.Pane eventKey='preview'>
          <CardGroup>
            <Card>
              <ImageLoader
                src='/images/real-estate/catalog/01.jpg'
                width={360}
                height={236}
                layout='responsive'
                alt='Card image'
                className='card-img-top'
              />
              <Card.Body>
                <Card.Title as='h5'>Dark card title</Card.Title>
                <Card.Text className='fs-sm'>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer className='fs-xs text-muted'>Last updated 3 mins ago</Card.Footer>
            </Card>
            <Card>
              <ImageLoader
                src='/images/real-estate/catalog/04.jpg'
                width={360}
                height={236}
                layout='responsive'
                alt='Card image'
                className='card-img-top'
              />
              <Card.Body>
                <Card.Title as='h5'>Dark card title</Card.Title>
                <Card.Text className='fs-sm'>
                  This card has supporting text below as a natural lead-in to additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer className='fs-xs text-muted'>Last updated 3 mins ago</Card.Footer>
            </Card>
            <Card>
              <ImageLoader
                src='/images/real-estate/catalog/03.jpg'
                width={360}
                height={236}
                layout='responsive'
                alt='Card image'
                className='card-img-top'
              />
              <Card.Body>
                <Card.Title as='h5'>Dark card title</Card.Title>
                <Card.Text className='fs-sm'>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer className='fs-xs text-muted'>Last updated 3 mins ago</Card.Footer>
            </Card>
          </CardGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ImageLoader from '../components/ImageLoader'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

{/* Card group */}
<CardGroup>

  {/* Card */}
  <Card>
    <ImageLoader
      src='/images/real-estate/catalog/01.jpg'
      width={360}
      height={236}
      layout='responsive'
      alt='Card image'
      className='card-img-top'
    />
    <Card.Body>
      <Card.Title as='h5'>Dark card title</Card.Title>
      <Card.Text className='fs-sm'>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer className='fs-xs text-muted'>Last updated 3 mins ago</Card.Footer>
  </Card>

  {/* Card */}
  <Card>
    <ImageLoader
      src='/images/real-estate/catalog/04.jpg'
      width={360}
      height={236}
      layout='responsive'
      alt='Card image'
      className='card-img-top'
    />
    <Card.Body>
      <Card.Title as='h5'>Dark card title</Card.Title>
      <Card.Text className='fs-sm'>
        This card has supporting text below as a natural lead-in to additional content.
      </Card.Text>
    </Card.Body>
    <Card.Footer className='fs-xs text-muted'>Last updated 3 mins ago</Card.Footer>
  </Card>
  
  {/* Card */}
  <Card>
    <ImageLoader
      src='/images/real-estate/catalog/03.jpg'
      width={360}
      height={236}
      layout='responsive'
      alt='Card image'
      className='card-img-top'
    />
    <Card.Body>
      <Card.Title as='h5'>Dark card title</Card.Title>
      <Card.Text className='fs-sm'>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer className='fs-xs text-muted'>Last updated 3 mins ago</Card.Footer>
  </Card>
</CardGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default CardsBasicPage
