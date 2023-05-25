import Link from 'next/link'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../../components/ImageLoader'
import FormGroup from '../../components/FormGroup'
import IconBox from '../../components/IconBox'

const HelpCenterPage = () => {
  
  // Help center topics array
  const topics = [
    {
      href: '#',
      icon: 'fi-settings',
      color: 'accent',
      title: 'Getting started',
      links: [
        ['/city-guide/help-center-single', 'Quis arcu euismod est, varius nisi?'],
        ['/city-guide/help-center-single', 'Aliquam, commodo sed nibh?'],
        ['/city-guide/help-center-single', 'Faucibus felis fames mauris dolor purus?'],
        ['/city-guide/help-center-single', 'Odio diam, tellus facilisi?'],
        ['/city-guide/help-center-single', 'Eu quisque libero, sed neque?'],
        ['/city-guide/help-center-single', 'Lectus sed sit cursus amet, vitae tempor?'],
      ]
    },
    {
      href: '#',
      icon: 'fi-file',
      color: 'warning',
      title: 'Partnership',
      links: [
        ['/city-guide/help-center-single', 'Tincidunt molestie scelerisque?'],
        ['/city-guide/help-center-single', 'Nunc, ipsum ut augue fusce ornare?'],
        ['/city-guide/help-center-single', 'Velit, mauris amet feugiat condimentum mollis?'],
        ['/city-guide/help-center-single', 'Lacus, sed fames mi cras id?'],
        ['/city-guide/help-center-single', 'Adipiscing magna suspendisse?'],
        ['/city-guide/help-center-single', 'Libero pellentesque ultricies maecenas?'],
      ]
    },
    {
      href: '#',
      icon: 'fi-user',
      color: 'danger',
      title: 'Account & profile',
      links: [
        ['/city-guide/help-center-single', 'Cursus fusce volutpat tempor?'],
        ['/city-guide/help-center-single', 'A senectus auctor sodales gravida non elit?'],
        ['/city-guide/help-center-single', 'Mauris accumsan vel rhoncus?'],
        ['/city-guide/help-center-single', 'Cras nunc, semper lectus turpis?'],
        ['/city-guide/help-center-single', 'Pulvinar sed morbi massa nulla dolor eget?'],
        ['/city-guide/help-center-single', 'Bibendum mattis amet amet?'],
      ]
    },
    {
      href: '#',
      icon: 'fi-security',
      color: 'success',
      title: 'Privacy & security',
      links: [
        ['/city-guide/help-center-single', 'Nunc, ipsum ut augue fusce ornare?'],
        ['/city-guide/help-center-single', 'Eu quam bibendum adipiscing leo?'],
        ['/city-guide/help-center-single', 'Massa fermentum, eget nec elementum?'],
        ['/city-guide/help-center-single', 'In quis pulvinar amet morbi praesent?'],
        ['/city-guide/help-center-single', 'Eros, dolor in consequat netus?'],
        ['/city-guide/help-center-single', 'Quis gravida felis dui non gravida?'],
      ]
    },
    {
      href: '#',
      icon: 'fi-credit-card',
      color: 'primary',
      title: 'Transactions',
      links: [
        ['/city-guide/help-center-single', 'Nisl urna id aliquam sed vitae pellentesque?'],
        ['/city-guide/help-center-single', 'Eu quam bibendum adipiscing leo?'],
        ['/city-guide/help-center-single', 'Massa fermentum, eget nec elementum?'],
        ['/city-guide/help-center-single', 'In quis pulvinar amet morbi praesent?'],
        ['/city-guide/help-center-single', 'Eros, dolor in consequat netus?'],
        ['/city-guide/help-center-single', 'Quis gravida felis dui non gravida?'],
      ]
    },
    {
      href: '#',
      icon: 'fi-dots-horisontal',
      color: 'info',
      title: 'More',
      links: [
        ['/city-guide/help-center-single', 'Lacus eget amet blandit egestas?'],
        ['/city-guide/help-center-single', 'Augue at donec molestie vulputate cum?'],
        ['/city-guide/help-center-single', 'Viverra adipiscing nisl, lacus at et?'],
        ['/city-guide/help-center-single', 'Sagittis dictum hendrerit faucibus malesuada?'],
        ['/city-guide/help-center-single', 'Tempus est non sapien tempus?'],
        ['/city-guide/help-center-single', 'Nunc est hendrerit volutpat nunc donec?'],
      ]
    }
  ]

  return (
    <CityGuidePageLayout
      pageTitle='Help Center'
      activeNav='Pages'
    >

      {/* Hero (Search form) */}
      <section className='bg-secondary py-5'>
        <Container className='mb-md-2 mb-lg-4 py-5'>
          <Breadcrumb className='pt-3 mb-4'>
            <Breadcrumb.Item linkAs={Link} href='/city-guide'>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Help center</Breadcrumb.Item>
          </Breadcrumb>
          <Col md={10} lg={8} className='px-0'>
            <h1 className='mb-4 pb-2'>How can we help?</h1>
            <FormGroup className='rounded-pill'>
              <FormControl size='lg' placeholder='What are you looking for?' />
              <Button size='lg' variant='primary rounded-pill px-sm-4 px-3'>
                <i className='fi-search me-sm-2'></i>
                <span className='d-sm-inline d-none'>Search</span>
              </Button>
            </FormGroup>
          </Col>
        </Container>
      </section>


      {/* Topics */}
      <section className='position-relative bg-white rounded-xxl-4 mb-5 py-2 pb-lg-4 zindex-5' style={{marginTop: '-30px'}}>
        <Container className='pt-2 pt-md-5'>
          <Row xs={1} md={2} lg={3} className='gy-lg-4 gy-md-3 gy-0 gx-4'>
            {topics.map((topic, indx) => (
              <Col key={indx}>
                <IconBox
                  type='card'
                  media={topic.icon}
                  mediaShape='circle'
                  mediaColor={topic.color}
                  title={topic.title}
                  titleSize='4'
                  text={<span className='d-block pt-2'>
                    {topic.links.map((link, indx) => (
                      <Link key={indx} href={link[0]} className='nav-link fs-base fw-normal mb-2 p-0'>{link[1]}</Link>
                    ))}
                    <Link href={topic.href} className='d-inline-block fs-base mt-1'>View all</Link>
                  </span>}
                  className='bg-transparent border-0'
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

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

export default HelpCenterPage
