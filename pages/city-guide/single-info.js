import { useState } from 'react'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import CityGuideSingleHeader from '../../components/partials/CityGuideSingleHeader'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import ImageLoader from '../../components/ImageLoader'
import VenueCard from '../../components/VenueCard'
import SocialButton from '../../components/SocialButton'
import LightGallery from 'lightgallery/react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-video.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SingleInfoPage = () => {

  // About collapse state
  const [aboutOpen, setAboutOpen] = useState(false)

  // Amenities collapse state
  const [amenitiesOpen, setAmenitiesOpen] = useState(false)

  // Amenities array
  const amenities = [
    [
      { icon: 'fi-wifi', title: 'Free WiFi' },
      { icon: 'fi-swimming-pool', title: '2 swimming pools' },
      { icon: 'fi-pet', title: 'Pets-friendly' },
      { icon: 'fi-parking', title: 'Free parking' },
      { icon: 'fi-spa', title: 'Spa lounge' },
      { icon: 'fi-cafe', title: 'Restaurant' },
      { icon: 'fi-hotel-bell', title: 'Room service' },
      { icon: 'fi-cocktail', title: 'Bar' },
      { icon: 'fi-dumbell', title: 'Fitness Center' }
    ],
    [
      { icon: 'fi-dish', title: 'Dishwasher' },
      { icon: 'fi-thermometer', title: 'Heating' }
    ]
  ]

  // Room types array
  const roomTypes = [
    { icon: 'fi-no-smoke', title: 'Non-smoking rooms' },
    { icon: 'fi-single-bed', title: 'Single rooms' },
    { icon: 'fi-double-bed', title: 'Family suites' }
  ]

  // Awards array
  const awards = [
    { img: '/images/city-guide/single/awards/01.jpg', title: '2022 Traveler\'s Choice' },
    { img: '/images/city-guide/single/awards/02.jpg', title: 'TUI Top Quality 2021' },
    { img: '/images/city-guide/single/awards/03.jpg', title: 'TUI Holly 2019' }
  ]

  // Payment methods (cards) array
  const cards = [
    { imgSrc: '/images/city-guide/single/payment/visa.svg', imgAlt: 'Visa' },
    { imgSrc: '/images/city-guide/single/payment/mastercard.svg', imgAlt: 'MasterCard' },
    { imgSrc: '/images/city-guide/single/payment/maestro.svg', imgAlt: 'Maestro' },
    { imgSrc: '/images/city-guide/single/payment/american-express.svg', imgAlt: 'American Express' }
  ]

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
        activeNav='/city-guide/single-info'
      />
      <Container className='pb-5 mb-md-4'>
        <Row>

          {/* Details */}
          <Col md={7} className='mb-md-0 mb-4 pb-md-0 pb-2'>
            <h2 className='h4'>About</h2>
            <ul className='list-unstyled'>
              <li>
                <i className='fi-star-filled mt-n1 me-1 text-warning align-middle'></i><b>4.9 </b>
                <span className='text-muted'>(48 reviews)</span>
              </li>
              <li>
                <i className='fi-wallet mt-n1 me-1 align-middle opacity-70'></i>
                $$
              </li>
              <li>
                <i className='fi-map-pin mt-n1 me-1 align-middle opacity-70'></i>
                1.4 km from center
              </li>
            </ul>
            
            <div className='mb-4 pb-md-3'>
              <p className='mb-1'>Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.</p>
              <Collapse in={aboutOpen}>
                <div id='moreAbout'>
                  <p className='mb-1'>Asperiores eos molestias, aspernatur assumenda vel corporis ex, magni excepturi totam exercitationem quia inventore quod amet labore impedit quae distinctio? Officiis blanditiis consequatur alias, atque, sed est incidunt accusamus repudiandae tempora repellendus obcaecati delectus ducimus inventore tempore harum numquam autem eligendi culpa.</p>
                </div>
              </Collapse>
              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault()
                  setAboutOpen(!aboutOpen)
                }}
                aria-controls='moreAbout'
                aria-expanded={aboutOpen}
                className={`collapse-label${aboutOpen ? '' : ' collapsed'}`}
              >
                {aboutOpen ? 'Show less' : 'Show more'}
              </a>
            </div>

            {/* Amenities */}
            <div className='mb-4 pb-md-3'>
              <h3 className='h4'>Amenities</h3>
              <Row as='ul' lg={3} md={2} xs={1} className='list-unstyled gy-1 mb-1 text-nowrap'>
                {amenities[0].map(({icon, title}, indx) => (
                  <Col key={indx} as='li'>
                    <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                    {title}
                  </Col>
                ))}
              </Row>
              <Collapse in={amenitiesOpen}>
                <div id='moreAmenities'>
                  <Row as='ul' lg={3} md={2} xs={1} className='list-unstyled gy-1 mb-1 text-nowrap'>
                    {amenities[1].map(({icon, title}, indx) => (
                      <Col key={indx} as='li'>
                        <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                        {title}
                      </Col>
                    ))}
                  </Row>
                </div>
              </Collapse>
              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault()
                  setAmenitiesOpen(!amenitiesOpen)
                }}
                aria-controls='moreAmenities'
                aria-expanded={amenitiesOpen}
                className={`collapse-label${amenitiesOpen ? '' : ' collapsed'}`}
              >
                {amenitiesOpen ? 'Show less' : 'Show more'}
              </a>
            </div>

            {/* Room types */}
            <div className='mb-4 pb-md-3'>
              <h3 className='h4'>Room types</h3>
              <Row as='ul' lg={3} md={2} xs={1} className='list-unstyled gy-1 mb-1 text-nowrap'>
                {roomTypes.map(({icon, title}, indx) => (
                  <Col key={indx} as='li'>
                    <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                    {title}
                  </Col>
                ))}
              </Row>
            </div>

            {/* Awards */}
            <div className='mb-4'>
              <h3 className='h4'>Awards</h3>
              <ul className='list-unstyled'>
                {awards.map(({img, title}, indx) => (
                  <li key={indx} className='d-flex align-items-center mb-2'>
                    <div className='d-flex flex-shrink-0' style={{width: '40px'}}>
                      <ImageLoader src={img} width={80} height={80} alt='Award logo'/>
                    </div>
                    <div className='ps-2'>{title}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment methods */}
            <div className='d-lg-flex align-items-center border-top pt-4 pb-2 pb-lg-0'>
              <h4 className='fs-lg mb-lg-0'>Cards accepted at this hotel:</h4>
              <div className='d-flex ps-lg-3'>
                {cards.map(({imgSrc, imgAlt}, indx) => (
                  <div key={indx} className='d-flex border rounded-1 overflow-hidden shadow-sm me-2'>
                    <ImageLoader
                      src={imgSrc}
                      width={52}
                      height={30}
                      placeholder={false}
                      alt={imgAlt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Col>


          {/* Contacts + Map */}
          <Col md={5}>
            <Card className='mb-4 p-2 shadow-sm'>
              <Card.Body>

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
                <div className='mb-4 pb-4 border-bottom'>
                  <h4 className='h5 mb-2'>Contacts:</h4>
                  <Nav className='flex-column pt-1'>
                    <Nav.Item className='mb-2'>
                      <Nav.Link href='#' className='p-0 fw-normal d-flex align-items-start'>
                        <i className='fi-map-pin mt-1 me-2 align-middle opacity-70'></i>
                        Ollenhauer Str. 29, 10118, Berlin
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link href='tel:3025550107' className='d-inline-flex fw-normal align-items-start p-0 me-2'>
                        <i className='fi-phone mt-1 me-2 align-middle opacity-70'></i>
                        (302) 555-0107,
                      </Nav.Link>
                      <Nav.Link href='3025550208' className='d-inline-block fw-normal align-items-start p-0'>
                        (302) 555-0208
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link href='#' className='p-0 fw-normal d-flex align-items-start'>
                        <i className='fi-globe mt-1 me-2 align-middle opacity-60'></i>
                        bb-hotel.com
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='mailto:bb-hotel@example.com' className='p-0 fw-normal d-flex align-items-start'>
                        <i className='fi-mail mt-1 me-2 align-middle opacity-70'></i>
                        bb-hotel@example.com
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>

                {/* Place pricing + Booking */}
                <div className='mb-4 pb-4 border-bottom'>
                  <h4 className='h5 mb-3'>
                    <span className='fs-4'>$50-100&nbsp;</span>
                    <span className='fs-base fw-normal text-body'>/night</span>
                  </h4>
                  <Button variant='primary btn-lg rounded-pill w-sm-auto w-100'>
                    Book now
                    <i className='fi-chevron-right fs-sm ms-2'></i>
                  </Button>
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
            
            {/* Map */}
            <LightGallery
              selector='#map'
              licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
              zoomFromOrigin={false}
              elementClassNames='position-relative'
            >
              <ImageLoader
                src='/images/city-guide/single/map-sm.jpg'
                width={1052}
                height={520}
                alt='Map'
                className='rounded-3'
              />
              <div className='d-flex w-100 h-100 flex-column align-items-center justify-content-center position-absolute top-0 start-0'>
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

export default SingleInfoPage
