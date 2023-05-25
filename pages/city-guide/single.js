import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import CityGuideSingleHeader from '../../components/partials/CityGuideSingleHeader'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../../components/ImageLoader'
import VenueCard from '../../components/VenueCard'
import GalleryItem from '../../components/GalleryItem'
import SocialButton from '../../components/SocialButton'
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgFullScreen from 'lightgallery/plugins/fullscreen'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-fullscreen.css'
import 'lightgallery/css/lg-video.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SingleGalleryPage = () => {

  // Recently viewes carousel items array
  const items = [
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/09.jpg',
      title: 'Repose Hotel',
      rating: [5.0, 48],
      price: '$$',
      location: '1.4 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/05.jpg',
      title: 'Leisure Inn',
      rating: [4.8, 24],
      price: '$$$',
      location: '0.5 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/11.jpg',
      title: 'Soothe & Stay',
      rating: [4.9, 43],
      price: '$$$',
      location: '1.8 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/04.jpg',
      title: 'Merry Berry Motel',
      rating: [4.5, 12],
      price: '$$',
      location: '0.4 km from center'
    }
  ]  

  return (
    <CityGuidePageLayout
      pageTitle='Single Place - Gallery'
      activeNav='Catalog'
    >
      
      {/* Page header */}
      <CityGuideSingleHeader
        title='Berlin Business Hotel'
        activeNav='/city-guide/single'
      />

      {/* Gallery */}
      <Container as='section' className='overflow-auto mb-5'>
        <LightGallery
          selector='.gallery-item'
          licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
          plugins={[lgThumbnail, lgZoom, lgFullScreen]}
          zoomFromOrigin={false}
          exThumbImage='data-external-thumb-image'
        >
          <Row className='g-2 g-md-3 pb-3' style={{minWidth: '30rem'}}>
            <Col xs={8}>
              <GalleryItem
                href='/images/city-guide/single/01.jpg'
                thumb={['/images/city-guide/single/01.jpg', 920, 650]}
                data-external-thumb-image='/images/city-guide/single/01.jpg'
                imgAlt='Kids bedroom'
                className='rounded rounded-md-3'
              />
            </Col>
            <Col xs={4}>
              <GalleryItem
                href='/images/city-guide/single/02.jpg'
                thumb={['/images/city-guide/single/02.jpg', 450, 316]}
                data-external-thumb-image='/images/city-guide/single/02.jpg'
                imgAlt='Kids bedroom'
                className='rounded rounded-md-3 mb-2 mb-md-3'
              />
              <GalleryItem
                href='/images/city-guide/single/03.jpg'
                thumb={['/images/city-guide/single/03.jpg', 450, 316]}
                data-external-thumb-image='/images/city-guide/single/03.jpg'
                imgAlt='Working desk'
                className='rounded rounded-md-3'
              />
            </Col>
            <Col xs={12}>
              <Row className='g-2 g-md-3'>
                <Col>
                  <GalleryItem
                    href='/images/city-guide/single/04.jpg'
                    thumb={['/images/city-guide/single/th04.jpg', 262, 160]}
                    data-external-thumb-image='/images/city-guide/single/th04.jpg'
                    imgAlt='Working desk'
                    className='rounded-1 rounded-md-2'
                  />
                </Col>
                <Col>
                  <GalleryItem
                    href='/images/city-guide/single/05.jpg'
                    thumb={['/images/city-guide/single/th05.jpg', 262, 160]}
                    data-external-thumb-image='/images/city-guide/single/th05.jpg'
                    imgAlt='King size bed'
                    className='rounded-1 rounded-md-2'
                  />
                </Col>
                <Col>
                  <GalleryItem
                    href='/images/city-guide/single/06.jpg'
                    thumb={['/images/city-guide/single/th06.jpg', 262, 160]}
                    data-external-thumb-image='/images/city-guide/single/th06.jpg'
                    imgAlt='Towels'
                    className='rounded-1 rounded-md-2'
                  />
                </Col>
                <Col>
                  <GalleryItem
                    href='/images/city-guide/single/07.jpg'
                    thumb={['/images/city-guide/single/th07.jpg', 262, 160]}
                    data-external-thumb-image='/images/city-guide/single/th07.jpg'
                    imgAlt='Bathroom'
                    className='rounded-1 rounded-md-2'
                  />
                </Col>
                <Col>
                  <GalleryItem
                    href='/images/city-guide/single/08.jpg'
                    thumb={['/images/city-guide/single/th08.jpg', 262, 160]}
                    data-external-thumb-image='/images/city-guide/single/th08.jpg'
                    imgAlt='Bathroom'
                    caption={<>+5 <span className='d-none d-md-inline'>photos</span></>}
                    className='more-item rounded-1 rounded-md-2'
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </LightGallery>
      </Container>


      {/* Details */}
      <Container className='pb-5 mb-md-4 mt-n3'>
        <Row>
          <Col md={7} className='mb-md-0 mb-3'>
            <Card className='py-2 px-sm-4 px-3 shadow-sm'>
              <Card.Body className='mx-n2'>

                {/* Place info */}
                <div className='d-flex align-items-start mb-3 pb-2 border-bottom'>
                  <ImageLoader
                    src='/images/city-guide/brands/hotel.svg'
                    width={60}
                    height={60}
                    alt='Thumbnail'
                  />
                  <div className='ps-2 ms-1'>
                    <h3 className='h5 mb-2'> Berlin Business Hotel</h3>
                    <ul className='list-unstyled d-flex flex-wrap fs-sm'>
                      <li className='me-2 mb-1 pe-1'>
                        <i className='fi-star-filled mt-n1 me-1 text-warning align-middle opacity-70'></i>
                        <b>4.9 </b>(38)
                      </li>
                      <li className='me-2 mb-1 pe-1'>
                        <i className='fi-wallet mt-n1 me-1 align-middle opacity-70'></i>
                        $$
                      </li>
                      <li className='me-2 mb-1 pe-1'>
                        <i className='fi-map-pin mt-n1 me-1 align-middle opacity-70'></i>
                        1.4 km from center
                        </li>
                    </ul>
                  </div>
                </div>

                {/* Place contacts */}
                <div className='mb-3 pb-3 border-bottom'>
                  <h4 className='h5 mb-2'>Contacts:</h4>
                  <Row as={Nav} xs={1} sm={2} className='gy-1'>
                    <Col as={Nav.Item}>
                      <Nav.Link href='#' className='p-0 pt-1 fw-normal d-flex align-items-start'>
                        <i className='fi-map-pin mt-1 me-2 align-middle opacity-70'></i>
                        Ollenhauer Str. 29, 10118, Berlin
                      </Nav.Link>
                    </Col>
                    <Col as={Nav.Item}>
                      <Nav.Link href='tel:3025550107' className='d-inline-flex fw-normal align-items-start pt-1 p-0 me-2'>
                        <i className='fi-phone mt-1 me-2 align-middle opacity-70'></i>
                        (302) 555-0107,
                      </Nav.Link>
                      <Nav.Link href='3025550208' className='d-inline-block fw-normal align-items-start pt-1 p-0'>
                        (302) 555-0208
                      </Nav.Link>
                    </Col>
                    <Col as={Nav.Item}>
                      <Nav.Link href='#' className='pt-1 p-0 fw-normal d-flex align-items-start'>
                        <i className='fi-globe mt-1 me-2 align-middle opacity-60'></i>
                        bb-hotel.com
                      </Nav.Link>
                    </Col>
                    <Col as={Nav.Item}>
                      <Nav.Link href='mailto:bb-hotel@example.com' className='pt-1 p-0 fw-normal d-flex align-items-start'>
                        <i className='fi-mail mt-1 me-2 align-middle opacity-70'></i>
                        bb-hotel@example.com
                      </Nav.Link>
                    </Col>
                  </Row>
                </div>

                {/* Place price + Booking */}
                <div className='mb-4 pb-3 border-bottom'>
                  <Row xs={1} sm={2} className='align-items-center'>
                    <Col className='mb-sm-0 mb-3'>
                      <h4 className='h5 mb-0'>
                        <span className='fs-4'>$50-100&nbsp;</span>
                        <span className='fs-base fw-normal text-body'>/night</span>
                      </h4>
                    </Col>
                    <Col>
                      <Button variant='primary btn-lg rounded-pill w-sm-auto w-100'>
                        Book now
                        <i className='fi-chevron-right fs-sm ms-2'></i>
                      </Button>
                    </Col>
                  </Row>
                </div>

                {/* Follow */}
                <div className='d-flex align-items-center'>
                  <h4 className='h5 mb-0 me-3'>Follow:</h4>
                  <div className='text-nowrap'>
                    <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='me-2' />
                    <SocialButton href='#' variant='solid' brand='instagram' roundedCircle className='me-2' />
                    <SocialButton href='#' variant='solid' brand='twitter' roundedCircle />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Map */}
          <Col md={5}>
            <LightGallery
              selector='#map'
              licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
              zoomFromOrigin={false}
              elementClassNames='position-relative d-flex flex-column h-100'
            >
              <div className='position-relative bg-size-cover bg-position-center bg-repeat-0 h-100 rounded-3 overflow-hidden' style={{minHeight: '250px'}}>
                <ImageLoader src='/images/city-guide/single/map.jpg' layout='fill' objectFit='cover' />
                <div className='position-relative d-flex h-100 flex-column align-items-center justify-content-center'>
                  <div className='d-flex mb-4 rounded-circle bg-white shadow'>
                    <ImageLoader
                      src='/images/city-guide/brands/hotel.svg'
                      width={40}
                      height={40}
                      alt='Place logo'
                    />
                  </div>
                  <Button
                    id='map'
                    href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.924340088787!2d13.428504251724927!3d52.58906113876177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85284201593ab%3A0x28af69e02ce0e2fc!2sBusinesshotel%20Berlin!5e0!3m2!1sru!2sua!4v1618908622013!5m2!1sru!2sua'
                    variant='primary rounded-pill stretched-link'
                    data-iframe={true}
                  >
                    <i className='fi-route me-2'></i>
                    Get directions
                  </Button>
                </div>
              </div>
            </LightGallery>
          </Col>
        </Row>
      </Container>


      {/* Recently viewed (carousel) */}
      <Container as='section' className='pb-5 mb-lg-4'>
        <div className='d-flex align-items-center justify-content-between mb-4 pb-2'>
          <h2 className='h3 mb-0'>Recently viewed</h2>
          <Link href='/city-guide/catalog' className='btn btn-link fw-normal ms-sm-3 p-0'>
            View all<i className='fi-arrow-long-right ms-2'></i>
          </Link>
        </div>

        {/* Swiper slider */}
        <div className='position-relative'>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '#prev',
              nextEl: '#next'
            }}
            pagination={{
              el: '#pagination',
              clickable: true
            }}
            loop
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              850: { slidesPerView: 3 }
            }}
            className='mb-xxl-3'
          >
            {items.map((item, indx) => (
              <SwiperSlide key={indx}>
                <VenueCard
                  href={item.href}
                  img={{
                    src: item.imgSrc,
                    width: 475,
                    height: 217,
                    alt: 'Image'
                  }}
                  title={item.title}
                  rating={{
                    value: item.rating[0],
                    count: item.rating[1]
                  }}
                  price={item.price}
                  location={item.location}
                  wishlistButton={{
                    tooltip: 'Add to Wishlist',
                    props: {
                      onClick: () => console.log('Venue added to your Wishlist!')
                    }
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button id='prev' variant='prev' className='d-none d-xxl-block mt-n5 ms-n5' />
          <Button id='next' variant='next' className='d-none d-xxl-block mt-n5 me-n5' />
        </div>

        {/* External pagination (bullets) buttons */}
        <div id='pagination' className='swiper-pagination position-relative bottom-0 d-xxl-none pt-2 mt-4 pb-4 pb-sm-3'></div>
      </Container>
    </CityGuidePageLayout>
  )
}

export default SingleGalleryPage
