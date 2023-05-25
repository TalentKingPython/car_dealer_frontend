import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Accordion from 'react-bootstrap/Accordion'
import FormGroup from '../../components/FormGroup'

const HelpCenterPage = () => {

  return (
    <CarFinderPageLayout
      pageTitle='Help Center'
      activeNav='Pages'
    >
      <section className='position-relative mb-5 pt-5 pb-lg-5'>

        {/* Overlay bg */}
        <span className='d-block position-absolute top-0 left-0 w-100 h-100 zindex-1' style={{background: 'linear-gradient(26.21deg, rgba(93, 60, 242, 0.15) 0%, rgba(253, 86, 49, 0.15) 108.88%'}}></span>

        {/* Overlay content */}
        <Container className='position-relative zindex-5 py-5'>

          {/* Breadcrumb */}
          <Breadcrumb className='breadcrumb-light mb-4 pt-md-3'>
            <Breadcrumb.Item linkAs={Link} href='/car-finder'>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Help Center</Breadcrumb.Item>
          </Breadcrumb>

          <Row className='g-0'>
            <Col xs={12} md={10} lg={8} className='mx-auto pt-2'>
              <h1 className='mb-4 pb-2 text-center text-light'>Hello, what can we do for you?</h1>

              {/* Search form */}
              <FormGroup light className='mb-4'>
                <Form.Control size='lg' placeholder='What are you looking for?' />
                <Button size='lg' variant='primary' className='px-sm-4 px-3'>
                  <i className='fi-search me-sm-2'></i>
                  Button
                </Button>
              </FormGroup>
              <div className='d-flex flex-md-row flex-column align-items-md-center justify-content-md-center'>
                <div className='pb-3 mb-2 me-2 flex-shrink-0 fw-bold text-light opacity-70'>Popular sections:</div>
                <div className='text-nowrap overflow-auto pb-3'>
                  <div>
                    <Button size='xs' variant='translucent-light' className='fw-normal mb-2 me-2'>General inquiries</Button>
                    <Button size='xs' variant='translucent-light' className='fw-normal mb-2 me-2'>Warranties &amp; more</Button>
                    <Button size='xs' variant='translucent-light' className='fw-normal mb-2 me-2'>Account questions</Button>
                    <Button size='xs' variant='translucent-light' className='fw-normal mb-2 me-2'>Payment &amp; Documentation</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* FAQ */}
      <Container as='section' className='mb-5 pt-1 pb-2 py-lg-5'>
        <Row className='justify-content-center'>
          <Col xs={12} md={10} lg={8}>
            <h2 className='h3 mb-4 pb-3 text-light text-center'>Frequently Asked Questions</h2>

            {/* Nav tabs */}
            <div className='overflow-auto mx-n2'>
              <Nav variant='tabs' justify defaultActiveKey='general' className='nav-tabs-light flex-nowrap mb-md-4 mb-3 text-nowrap'>
                <Nav.Item className='px-2'>
                  <Nav.Link eventKey='general'>General questions</Nav.Link>
                </Nav.Item>
                <Nav.Item className='px-2'>
                  <Nav.Link eventKey='rent'>Buy or rent cars</Nav.Link>
                </Nav.Item>
                <Nav.Item className='px-2'>
                  <Nav.Link eventKey='sell'>Sell cars</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            {/* Tabs content */}
            <div className='pt-3'>
              <Accordion defaultActiveKey='0' className='accordion-light'>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>How much does it cost to sell a car on Finder?</Accordion.Header>
                  <Accordion.Body className='text-light opacity-70'>
                    Aut dolores nemo rem commodi neque voluptatem molestiae cupiditate unde consequatur impedit, enim rerum eum ipsam. Eligendi, blanditiis ad? Laboriosam, distinctio nemo, culpa suscipit tenetur at est quis commodi similique impedit illum non dignissimos et cum aut, asperiores fugiat unde. Possimus autem iusto fugit ipsa natus, fugiat libero. Nemo sed nisi error.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>How do I take the best pictures of my car?</Accordion.Header>
                  <Accordion.Body className='text-light opacity-70'>
                    Porta mi integer lectus cras augue amet tellus. Mus in justo orci est urna facilisis vitae. Sem sagittis potenti scelerisque justo, etiam pharetra. In augue egestas nec rhoncus. Lectus tincidunt phasellus eu in erat eget id egestas nec. Purus massa blandit nibh ut sed tellus. Sit cras aliquam velit tellus leo. Sed vulputate erat dui eros, viverra. Cursus et nulla turpis sit. Egestas at non elementum non. Molestie nunc, diam etiam diam. Ac et turpis vestibulum porta.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>Can I sell a vehicle if I live outside of the United States?</Accordion.Header>
                  <Accordion.Body className='text-light opacity-70'>
                    Delectus perferendis libero ad sapiente unde cupiditate vero error autem ex sed culpa beatae vel, alias amet quam officiis repudiandae ab nobis! Animi ullam obcaecati praesentium at officia quos doloremque nihil aperiam debitis quasi placeat atque, amet laborum illo voluptates autem totam in mollitia! At, autem, ipsum quam minima doloribus distinctio aspernatur id et, cum reiciendis iste officia. Architecto tempore deserunt voluptates?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>How does the buyer get in contact with me and make payment?</Accordion.Header>
                  <Accordion.Body className='text-light opacity-70'>
                    Impedit iusto cum vitae pariatur. Veritatis totam neque, libero non odio doloremque sequi ut, delectus optio cumque rerum illum? Libero corrupti neque magnam aliquam tempora debitis at voluptate alias, facilis ipsa dignissimos repellendus quaerat soluta dolorem ad ipsam nemo quisquam voluptatum quibusdam dolorum. Labore qui saepe ducimus iure fuga accusamus, commodi quod ex sed excepturi corrupti! Ducimus natus repellendus placeat mollitia harum nostrum similique earum qui ratione?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                  <Accordion.Header>Who writes the listing description for my car?</Accordion.Header>
                  <Accordion.Body className='text-light opacity-70'>
                    Facere unde eveniet explicabo quidem, quaerat, nesciunt, minus in vel incidunt natus qui recusandae neque laudantium est vitae ipsam? Dolores natus nesciunt culpa accusantium tempora, recusandae, debitis, labore maxime a optio similique rem nam fuga vel doloremque suscipit repellendus veritatis necessitatibus. Architecto sit qui dolorum nihil ea!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                  <Accordion.Header>Are there rules to follow in the comments?</Accordion.Header>
                  <Accordion.Body className='text-light opacity-70'>
                    Perspiciatis iste atque in quis recusandae libero maxime, quo sed itaque, totam quaerat earum dolorum accusantium? Optio quidem aliquam corporis, nesciunt nobis incidunt numquam commodi debitis cumque quisquam eum veniam quae eaque voluptates totam culpa aperiam sapiente minima sint sit facere dolorum excepturi ab odit? Adipisci exercitationem distinctio dolores obcaecati eligendi explicabo, ipsa dicta, tempore, enim molestias excepturi nihil vel! Quas, culpa.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6'>
                  <Accordion.Header>What currency does Finder use?</Accordion.Header>
                  <Accordion.Body className='text-light opacity-70'>
                    Dolores assumenda dolorem saepe, consequatur praesentium alias numquam accusantium explicabo distinctio omnis voluptatum eum enim aspernatur vel, minus optio dolore ratione quasi sunt. Ab distinctio laborum dolore explicabo hic omnis iste quibusdam minus mollitia ad voluptate suscipit accusantium, laudantium sapiente? Aperiam est minus veniam explicabo repellendus id velit sit adipisci quam in!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='7'>
                  <Accordion.Header>How do I contact a seller privately?</Accordion.Header>
                  <Accordion.Body className='text-light opacity-70'>
                    Exercitationem vel perferendis temporibus corrupti laudantium sapiente. Nihil doloremque, tempora possimus cum aut cupiditate blanditiis, voluptates amet exercitationem officia nam animi distinctio sapiente iste ratione neque aspernatur? Voluptatum, nostrum maiores perspiciatis dolore consequatur minus voluptatem, numquam sunt voluptate esse fugiat illum culpa praesentium. Hic dicta quam id.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>


      {/* Contact Us */}
      <section className='position-relative py-5'>

        {/* Overlay bg */}
        <span className='d-block position-absolute top-0 left-0 w-100 h-100 zindex-1' style={{background: 'linear-gradient(26.21deg, rgba(93, 60, 242, 0.15) 0%, rgba(253, 86, 49, 0.15) 108.88%)'}}></span>

        {/* Overlay content */}
        <Container className='position-relative zindex-5 py-lg-5'>
          <Row className='g-0'>
            <Col xs={12} md={10} lg={8} className='mx-auto text-center'>
              <h2 className='text-light'>Haven&apos;t found the answer? We can help.</h2>
              <p className='mb-4 pb-3 text-light opacity-70'>
                Contact us and we&apos;ll get back to you as soon as possible.
              </p>
              <Button as={Link} href='/car-finder/contacts' size='lg' variant='primary'>
                Contact us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </CarFinderPageLayout>
  )
}

export default HelpCenterPage
