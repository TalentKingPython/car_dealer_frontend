import { useState } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'
import ImageLoader from '../../components/ImageLoader'
import StarRating from '../../components/StarRating'
import SocialButton from '../../components/SocialButton'
import PropertyCard from '../../components/PropertyCard'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SinglePropertyAltPage = () => {

  // Gallery component (Swiper slider with custom thumbnails and slides count)  
  const SwiperGallery = () => {

    const [currentSlide, setCurrentSlide] = useState()
    const [totalSlides, setTotalSlides] = useState()
  
    const thumbnails = [
      '/images/real-estate/single/th09.jpg',
      '/images/real-estate/single/th10.jpg',
      '/images/real-estate/single/th11.jpg',
      '/images/real-estate/single/th12.jpg'
    ]
  
    const SlidesCount = () => (
      <div className='swiper-slides-count text-light'>
        <i className='fi-image fs-lg me-2'></i>
        <div className='fs-5 fw-bold ps-1'>
          <span>{currentSlide}</span>
          <span>/</span>
          <span>{totalSlides}</span>
        </div>
      </div>
    )
  
    return (
      <>
        <Swiper
          modules={[Navigation, Pagination]}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex + 1)
          }}
          onInit={(swiper) => {
            setCurrentSlide(swiper.realIndex + 1)
            setTotalSlides(swiper.slides.length - 2)
          }}
          pagination={{
            el: '.swiper-thumbnails',
            clickable: true,
            renderBullet: (index, className) => {
              console.log(index)
              if (index === 4) {
                return `<li class='swiper-thumbnail ${className}'>
                  <div class='d-flex flex-column align-items-center justify-content-center h-100'>
                    <i class='fi-play-circle fs-4 mb-1'></i>
                    <span>Play video</span>
                  </div>
                </li>`
              } else {
                return `<li class='swiper-thumbnail ${className}'>
                  <img src='${thumbnails[index]}' alt='Thumbnail'>
                </li>`
              }
            }
          }}
          navigation
          spaceBetween={12}
          loop
          grabCursor
          className='swiper-nav-onhover rounded-3'
        >
          <SwiperSlide className='d-flex'>
            <ImageLoader className='rounded-3' src='/images/real-estate/single/09.jpg' width={967} height={545} alt='Image' />
          </SwiperSlide>
          <SwiperSlide className='d-flex'>
            <ImageLoader className='rounded-3' src='/images/real-estate/single/10.jpg' width={967} height={545} alt='Image' />
          </SwiperSlide>
          <SwiperSlide className='d-flex'>
            <ImageLoader className='rounded-3' src='/images/real-estate/single/11.jpg' width={967} height={545} alt='Image' />
          </SwiperSlide>
          <SwiperSlide className='d-flex'>
            <ImageLoader className='rounded-3' src='/images/real-estate/single/12.jpg' width={967} height={545} alt='Image' />
          </SwiperSlide>
          <SwiperSlide>
            <div className='ratio ratio-16x9'>
              <iframe src='https://www.youtube.com/embed/dofyR9p8e7w' className='rounded-3' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </SwiperSlide>
          <SlidesCount />
        </Swiper>
        <ul className='swiper-thumbnails'></ul>
      </>
    )
  }

  // Amenities collapse state
  const [amenitiesOpen, setAmenitiesOpen] = useState(false)

  // Amenities array
  const amenities = [
    [
      { icon: 'fi-wifi', title: 'Free WiFi' },
      { icon: 'fi-thermometer', title: 'Heating' },
      { icon: 'fi-dish', title: 'Dishwasher' },
      { icon: 'fi-parking', title: 'Parking place' },
      { icon: 'fi-snowflake', title: 'Air conditioning' },
      { icon: 'fi-iron', title: 'Iron' },
      { icon: 'fi-tv', title: 'TV' },
      { icon: 'fi-laundry', title: 'Laundry' },
      { icon: 'fi-cctv', title: 'Security cameras' },
      { icon: 'fi-no-smoke', title: 'No smocking' }
    ],
    [
      { icon: 'fi-double-bed', title: 'Double bed' },
      { icon: 'fi-bed', title: 'Single bed' }
    ],
    [
      { icon: 'fi-swimming-pool', title: 'Swimming pool' },
      { icon: 'fi-cafe', title: 'Restaurant' },
      { icon: 'fi-spa', title: 'Spa lounge' },
      { icon: 'fi-cocktail', title: 'Bar' }
    ]
  ]

  // Recently viewed properties array
  const properties = [
    {
      href: '/real-estate/single-v2',
      images: [['/images/real-estate/catalog/39.jpg', 467, 305, 'Image']],
      title: 'Modern House | 90 sq.m',
      category: 'For sale',
      location: '67-04 Myrtle Ave Glendale, NY 11385',
      price: '$84,000',
      badges: [],
      footer: [4, 2, 2]
    },
    {
      href: '/real-estate/single-v2',
      images: [['/images/real-estate/catalog/40.jpg', 467, 305, 'Image']],
      title: 'Country House | 120 sq.m',
      category: 'For rent',
      location: '3811 Ditmars Blvd Astoria, NY 11105',
      price: '$1,650',
      badges: [],
      footer: [3, 2, 2]
    },
    {
      href: '/real-estate/single-v2',
      images: [['/images/real-estate/catalog/41.jpg', 467, 305, 'Image']],
      title: 'Luxury Rental Villa | 180 sq.m',
      category: 'For rent',
      location: '1510 Castle Hill Ave Bronx, NY 10462',
      price: '$1,330',
      badges: [],
      footer: [3, 1, 1]
    },
    {
      href: '/real-estate/single-v2',
      images: [['/images/real-estate/catalog/42.jpg', 467, 305, 'Image']],
      title: 'Duplex with Garage | 200 sq.m',
      category: 'For sale',
      location: '140-60 Beech Ave Flushing, NY 11355',
      price: '$165,000',
      badges: [],
      footer: [4, 2, 1]
    },
    {
      href: '/real-estate/single-v2',
      images: [['/images/real-estate/catalog/43.jpg', 467, 305, 'Image']],
      title: 'Merry House | 98 sq.m',
      category: 'For sale',
      location: '123-12 Jamaica Ave Queens, NY 11418',
      price: '$351,900',
      badges: [],
      footer: [3, 1, 2]
    }
  ]


  return (
    <RealEstatePageLayout
      pageTitle='Single Property v.2'
      activeNav='Catalog'
    >

      {/* Post content */}
      <Container as='section' className='mt-5 mb-lg-5 mb-4 pt-5 pb-lg-5'>

        {/* Breadcrumb */}
        <Breadcrumb className='mb-3 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/real-estate'>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href='/real-estate/catalog?category=rent'>Property for rent</Breadcrumb.Item>
          <Breadcrumb.Item active>Pine Apartments</Breadcrumb.Item>
        </Breadcrumb>

        <Row>
          <Col lg={7} className='pt-lg-2 mb-5 mb-lg-0'>
            <div className='d-flex flex-column'>

              {/* Gallery */}
              <div className='order-lg-1 order-2'>
                <SwiperGallery />
              </div>

              {/* Page title + Amenities */}
              <div className='order-lg-2 order-1 pt-lg-2'>
                <h1 className='h2 mb-2'>Pine Apartments</h1>
                <p className='mb-2 pb-1 fs-lg'>28 Jackson Ave Long Island City, NY 67234</p>
                <ul className='d-flex mb-4 pb-lg-2 list-unstyled'>
                  <li className='me-3 pe-3 border-end'>
                    <b className='me-1'>4</b>
                    <i className='fi-bed mt-n1 lead align-middle text-muted'></i>
                  </li>
                  <li className='me-3 pe-3 border-end'>
                    <b className='me-1'>2</b>
                    <i className='fi-bath mt-n1 lead align-middle text-muted'></i>
                  </li>
                  <li className='me-3 pe-3 border-end'>
                    <b className='me-1'>2</b>
                    <i className='fi-car mt-n1 lead align-middle text-muted'></i>
                  </li>
                  <li>
                    <b>56 </b>
                    sq.m
                  </li>
                </ul>
              </div>
            </div>

            {/* Overview */}
            <h2 className='h5'>Overview</h2>
            <p className='mb-4 pb-2'>Etiam ut morbi egestas nunc quis. Nulla tincidunt senectus suspendisse neque, sed sem ut donec sed. Nullam hac netus quis nec tortor mi auctor risus praesent. In pharetra consequat diam nibh consectetur aliquet nulla. Non convallis nascetur viverra viverra diam vel bibendum sed. Elementum odio sed etiam consequat scelerisque in. Diam sit donec nunc enim. Tellus, commodo eget pharetra pharetra quis pellentesque. Enim aliquam sit in porttitor sed gravida a. Aliquam ac tellus sit erat. Non, et ac enim felis. Proin habitasse sit ut mauris, aliquam ornare pretium, nulla aliquam. Scelerisque velit netus quis mauris, dictumst suspendisse tortor.</p>

            {/* Agent card */}
            <h2 className='h5'>Rental agent</h2>
            <Card className='card-horizontal'>
              <div className='card-img-top bg-size-cover bg-position-center-x' style={{backgroundImage: 'url(/images/real-estate/agents/01.jpg)'}}></div>
              <Card.Body as='blockquote' className='blockquote'>
                <p>Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante adipiscing. Vel metus odio at faucibus ac. Neque id placerat et id ut. Enim aliquam sit in porttitor sed gravida a.</p>
                <footer className='d-flex justify-content-between'>
                  <div className='pe3'>
                    <h6 className='mb-0'>Kristin Watson</h6>
                    <div className='text-muted fw-normal fs-sm mb-3'>Imperial Property Group Agent</div>
                    <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='mb-2 me-2' />
                    <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='mb-2 me-2' />
                    <SocialButton href='#' variant='solid' brand='linkedin' roundedCircle className='mb-2' />
                  </div>
                  <div>
                    <StarRating rating='4.8' />
                    <div className='text-muted fs-sm mt-1'>24 reviews</div>
                  </div>
                </footer>
              </Card.Body>
            </Card>
          </Col>


          {/* Sidebar with details */}
          <Col as='aside' lg={5}>
            <div className='ps-lg-5'>
              <div className='d-flex align-items-center justify-content-between mb-3'>
                <div>
                  <Badge bg='success' className='me-2 mb-2'>Verified</Badge>
                  <Badge bg='info' className='me-2 mb-2'>New</Badge>
                </div>

                {/* Wishlist + Sharing */}
                <div className='text-nowrap'>
                  <OverlayTrigger
                    placement='top'
                    overlay={<Tooltip>Add to Wishlist</Tooltip>}
                  >
                    <Button size='xs' variant='icon btn-light-primary shadow-sm rounded-circle ms-2 mb-2'>
                      <i className='fi-heart'></i>
                    </Button>
                  </OverlayTrigger>
                  <Dropdown className='d-inline-block'>
                    <OverlayTrigger
                      placement='top'
                      overlay={<Tooltip>Share</Tooltip>}
                    >
                      <Dropdown.Toggle variant='icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2'>
                        <i className='fi-share'></i>
                      </Dropdown.Toggle>
                    </OverlayTrigger>
                    <Dropdown.Menu align='end' className='my-1'>
                      <Dropdown.Item as='button'>
                        <i className='fi-facebook fs-base opacity-75 me-2'></i>
                        Facebook
                      </Dropdown.Item>
                      <Dropdown.Item as='button'>
                        <i className='fi-twitter fs-base opacity-75 me-2'></i>
                        Twitter
                      </Dropdown.Item>
                      <Dropdown.Item as='button'>
                        <i className='fi-instagram fs-base opacity-75 me-2'></i>
                        Instagram
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              {/* Price */}
              <h3 className='h5 mb-2'>Monthly rent:</h3>
              <h2 className='h3 mb-4 pb-2'>
                $2,000
                <span className='d-inline-block ms-1 fs-base fw-normal text-body'>/month</span>
              </h2>

              {/* Property details card */}
              <Card className='border-0 bg-secondary mb-4'>
                <Card.Body>
                  <h5 className='mb-0 pb-3'>Property Details</h5>
                  <ul className='list-unstyled mt-n2 mb-0'>
                    <li className='mt-2 mb-0'><b>Type: </b>apartment</li>
                    <li className='mt-2 mb-0'><b>Apartment area: </b>56 sq.m</li>
                    <li className='mt-2 mb-0'><b>Built: </b>2015</li>
                    <li className='mt-2 mb-0'><b>Bedrooms: </b>4</li>
                    <li className='mt-2 mb-0'><b>Bathrooms: </b>2</li>
                    <li className='mt-2 mb-0'><b>Parking places: </b>2</li>
                    <li className='mt-2 mb-0'><b>Pets allowed: </b>cats only</li>
                  </ul>
                </Card.Body>
              </Card>

              <Button size='lg' className='w-100 mb-3'>Book a viewing</Button>

              <Link href='#' className='d-inline-block mb-4 pb-2 text-decoration-none'>
                <i className='fi-help me-2 mt-n1 align-middle'></i>
                Frequently asked questions
              </Link>

              {/* Amenities card */}
              <Card className='border-0 bg-secondary mb-4'>
                <Card.Body>
                  <h5>Amenities</h5>
                  <Row as='ul' xs={1} md={2} className='list-unstyled gy-2 mb-0 text-nowrap'>
                    {amenities[0].map(({icon, title}, indx) => (
                      <Col key={indx} as='li'>
                        <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                        {title}
                      </Col>
                    ))}
                  </Row>
                  <Collapse in={amenitiesOpen}>
                    <div id='moreAmenities'>
                      <Row as='ul' md={2} xs={1} className='list-unstyled pt-2 gy-2 mb-0 text-nowrap'>
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
                    className={`collapse-label d-inline-block mt-3${amenitiesOpen ? '' : ' collapsed'}`}
                  >
                    {amenitiesOpen ? 'Show less' : 'Show more'}
                  </a>
                </Card.Body>
              </Card>

              {/* Not included amenities card */}
              <Card className='border-0 bg-secondary mb-4'>
                <Card.Body>
                  <h5>Not included in rent</h5>
                  <Row as='ul' xs={1} md={2} className='list-unstyled gy-2 mb-0 text-nowrap'>
                    {amenities[2].map(({icon, title}, indx) => (
                      <Col key={indx} as='li'>
                        <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                        {title}
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>

              {/* Post meta */}
              <ul className='d-flex mb-4 list-unstyled fs-sm'>
                <li className='me-3 pe-3 border-end'>Published: <b>Dec 9, 2021</b></li>
                <li className='me-3 pe-3 border-end'>Ad number: <b>681013232</b></li>
                <li className='me-3 pe-3'>Views: <b>48</b></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>


      {/* Recently viewed properties (carousel) */}
      <Container as='section' className='mb-5 pb-2 pb-lg-4'>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h2 className='h3 mb-0'>Recently viewed</h2>
          <Button as={Link} href='/real-estate/catalog?category=rent' variant='link fw-normal p-0'>
            View all
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>   

        {/* Swiper slider */}
        <div className='position-relative'>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '#prevProperties',
              nextEl: '#nextProperties'
            }}
            pagination={{
              el: '#paginationProperties',
              clickable: true
            }}
            loop
            spaceBetween={8}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 }
            }}
            className='pt-3 pb-4 mx-n2'
          >
            {properties.map((property, indx) => (
              <SwiperSlide key={indx} className='h-auto'>
                <PropertyCard
                  href={property.href}
                  images={property.images}
                  title={property.title}
                  category={property.category}
                  location={property.location}
                  price={property.price}
                  badges={property.badges}
                  wishlistButton={{
                    tooltip: 'Add to Wishlist',
                    props: {
                      onClick: () => console.log('Property added to your Wishlist!')
                    }
                  }}
                  footer={[
                    ['fi-bed', property.footer[0]],
                    ['fi-bath', property.footer[1]],
                    ['fi-car', property.footer[2]]
                  ]}
                  className='h-100 mx-2'
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button id='prevProperties' variant='prev' className='d-none d-xxl-block mt-n5 ms-n5' />
          <Button id='nextProperties' variant='next' className='d-none d-xxl-block mt-n5 me-n5' />
        </div>

        {/* External pagination (bullets) buttons */}
        <div id='paginationProperties' className='swiper-pagination position-relative bottom-0 py-2 mt-1'></div>
      </Container>
    </RealEstatePageLayout>
  )
}

export default SinglePropertyAltPage
