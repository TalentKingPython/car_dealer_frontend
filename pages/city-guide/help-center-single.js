import Link from 'next/link'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../../components/ImageLoader'

const HelpCenterSinglePage = () => {
  
  // Article links array
  const articles = [
    ['#', 'First question heading in the section'],
    ['#', 'Massa fermentum, eget nec elementum'],
    ['#', 'Eros, dolor in consequat netus?'],
    ['#', 'Eu quam bibendum adipiscing leo?'],
    ['#', 'In quis pulvinar amet morbi praesent'],
    ['#', 'Pellentesque ante quisque sit']
  ]

  return (
    <CityGuidePageLayout
      pageTitle='Help Center - Single Topic'
      activeNav='Pages'
    >

      {/* Page content */}
      <Container as='section' className='my-5 pt-lg-5 pt-4 pb-lg-4'>

        {/* Breadcrumb */}
        <Breadcrumb className='pt-3'>
          <Breadcrumb.Item linkAs={Link} href='/city-guide'>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href='/city-guide/help-center'>Help center</Breadcrumb.Item>
          <Breadcrumb.Item active>Privacy &amp; security</Breadcrumb.Item>
        </Breadcrumb>

        <Row className='pt-3 pt-md-4'>
          
          {/* Sidebar (article links) */}
          <Col as='sidebar' md={4} className='d-md-block d-none position-relative pe-lg-5'>
            <div className='border-start sticky-top' style={{top: '116px'}}>
              <h3 className='h5 mb-2 pb-1 px-4'>Articles in this section</h3>
              <Nav as='ul' className='flex-column fs-sm'>
                {articles.map((article, indx) => (
                  <Nav.Item as='li' key={indx}>
                    <Nav.Link as={Link} href={article[0]} className='py-1 px-4 fw-normal'>{article[1]}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>
          </Col>
          <Col md={8}>
            <div className='pb-md-4 pb-3'>
              <h2 className='h3 mb-4'>Article heading</h2>
              <p>Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque id in metus volutpat. Urna eget velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam rhoncus massa lectus pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat elit condimentum integer tortor porttitor justo vel lobortis risus. Lacinia pellentesque fermentum tellus orci mauris, velit duis eget. Commodo justo, hac ligula molestie felis, iaculis. Vitae dui at ante orci, dictum fusce. Urna, sed urna fringilla faucibus euismod aliquet nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel ipsum sem tempus gravida et. Scelerisque blandit orci, est quis. Nisi, tellus amet est nascetur habitant faucibus ornare et vivamus.</p>
              <p>Convallis massa nunc, tempus eget egestas sollicitudin mauris. Purus donec sed neque arcu, dictumst tortor nisi, odio. A sit lectus sem velit orci, rhoncus pharetra facilisis. Cras sodales a, dui pellentesque enim odio rutrum leo. Auctor viverra sit sit ut. Massa, elit venenatis, ultrices viverra at sagittis, velit. Cursus tempus phasellus consectetur suspendisse a blandit pellentesque diam neque. Massa est nibh congue elit amet, diam faucibus. Morbi non est semper ullamcorper quam iaculis at.</p>
            </div>
            <div className='pb-md-4 pb-3'>
              <h3 className='h5 mb-4'>Paragraph subheading 1</h3>
              <ul>
                <li>Nunc felis neque non sagittis. Sodales eros suspendisse scelerisque varius neque elit elementum quis.</li>
                <li>Sed vitae accumsan lorem pharetra dictum eget vestibulum.</li>
                <li>Non blandit viverra laoreet amet, maecenas auctor leo justo, sit. Vitae vulputate gravida est feugiat.</li>
                <li>Adipiscing tristique mauris, eu sit tortor. Velit in scelerisque sit tincidunt habitant urna nec.</li>
                <li>Justo, non massa metus convallis cursus lorem volutpat eu duis.</li>
                <li>Ipsum dolor feugiat est tristique. Aliquam sed felis risus quis.</li>
              </ul>
            </div>
            <div>
              <h3 className='h5 mb-4'>Paragraph subheading 2</h3>
              <p className='mb-2'>A nunc tempor habitasse amet aliquam in. Arcu eu quam pellentesque sed suspendisse mattis pellentesque blandit. Dui consectetur neque, imperdiet non non amet, integer volutpat condimentum. Laoreet gravida ac faucibus nunc dictum euismod quam egestas. A metus sagittis facilisi dictum cursus bibendum ipsum hendrerit. Adipiscing ornare urna massa nunc, consequat.</p>
            </div>
          </Col>
        </Row>
      </Container>


      {/* Contact CTA */}
      <Container as='section' className='pb-5 mb-2 mb-lg-4'>
        <div className='py-md-4 py-5 bg-secondary rounded-3 mb-2'>
          <Col xs={11} sm={10} className='d-flex flex-md-row flex-column align-items-center justify-content-between mx-auto px-0'>
            <div className='order-md-1 order-2 text-md-start text-center' style={{maxWidth: '524px'}}>
              <h2 className='mb-4 pb-md-3'>Haven&apos;t found the answer? <br/> We can help.</h2>
              <Button as={Link} href='/city-guide/contacts' size='lg' variant='primary rounded-pill w-sm-auto w-100'>Contact us</Button>
            </div>
            <div className='d-flex order-md-2 order-1 ms-md-4'>
              <ImageLoader
                src='/images/city-guide/illustrations/support.svg'
                width={432}
                height={320}
                alt='Illustration'
              />
            </div>
          </Col>
        </div>
      </Container>
    </CityGuidePageLayout>
  )
}

export default HelpCenterSinglePage
