import { useState } from 'react'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../../components/ImageLoader'
import FormGroup from '../../components/FormGroup'
import DropdownSelect from '../../components/DropdownSelect'
import IconBox from '../../components/IconBox'
import VenueCard from '../../components/VenueCard'
import BlogCard from '../../components/BlogCard'
import MarketButton from '../../components/MarketButton'
import VenueCardOverlay from '../../components/VenueCardOverlay'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import DatePicker from 'react-datepicker'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'react-datepicker/dist/react-datepicker.css'

const BgParallax = dynamic(() => import('../../components/BgParallax'), { ssr: false })

const HomeAltPage = () => {

  // Categories array
  const categories = [
    [
      {
        href: '/city-guide/catalog',
        media: 'fi-bed',
        color: 'accent',
        title: 'Accommodation'
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-cafe',
        color: 'warning',
        title: 'Food & Drink'
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-shopping-bag',
        color: 'primary',
        title: 'Shopping'
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-museum',
        color: 'success',
        title: 'Art & History'
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-entertainment',
        color: 'danger',
        title: 'Entertainment'
      },
    ],
    [
      {
        href: '/city-guide/catalog',
        media: 'fi-meds',
        title: 'Medicine'
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-makeup',
        title: 'Beauty'
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-car',
        title: 'Car Rental'
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-dumbell',
        title: 'Fitness & Sport'
      },
      {
        href: '/city-guide/catalog',
        media: 'fi-disco-ball',
        title: 'Night Club'
      }
    ]
  ]  

  // Places to stay array
  const places = [
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/01.jpg',
      title: 'Berlin Business Hotel',
      rating: [5.0, 48],
      price: '$$',
      location: '1.4 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/02.jpg',
      title: 'Big Tree Cottage',
      rating: [4.8, 24],
      price: '$$$',
      location: '0.5 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/03.jpg',
      title: 'Grand Resort & Spa',
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

  // Places to eat (restaurants) array
  const restaurants1 = [
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/brands/01.svg',
      imgSize: [100, 100],
      imgAlt: 'Brand logo',
      title: 'Pina Pizza Restaurant',
      rating: [5.0, 48],
      price: '$$',
      location: '1.4 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/brands/02.svg',
      imgSize: [100, 100],
      imgAlt: 'Brand logo',
      title: 'KFC',
      rating: [4.0, 19],
      price: '$',
      location: '1.8 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/brands/03.svg',
      imgSize: [100, 100],
      imgAlt: 'Brand logo',
      title: 'Yum Restaurant',
      rating: [4.6, 63],
      price: '$',
      location: '2.4 km from center'
    }
  ]
  const restaurants2 = [
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/brands/04.svg',
      imgSize: [100, 100],
      imgAlt: 'Brand logo',
      title: 'Tosaka Sushi Bar',
      rating: [5.0, 27],
      price: '$$$',
      location: '2.5 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/brands/05.svg',
      imgSize: [100, 100],
      imgAlt: 'Brand logo',
      title: 'Dunkin\' Donuts',
      rating: [4.8, 43],
      price: '$',
      location: '1.7 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/brands/06.svg',
      imgSize: [100, 100],
      imgAlt: 'Brand logo',
      title: 'Spicy Bar-Restaurant',
      rating: [5.0, 32],
      price: '$$$',
      location: '0.6 km from center'
    }
  ]

  // Datepicker state
  const [startDate, setStartDate] = useState(null)

  // Latest blog posts array
  const posts = [
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/01.jpg',
      category: ['#', 'Travelling'],
      title: 'Air Travel in the Time of COVID-19',
      author: ['#', '/images/avatars/16.png', 'Bessie Cooper'],
      date: 'May 24',
      comments: 'No comments'
    },
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/02.jpg',
      category: ['#', 'Entertainment'],
      title: '10 World-Class Museums You Can Visit Online',
      author: ['#', '/images/avatars/18.png', 'Annette Black'],
      date: 'Apr 28',
      comments: '4 comments'
    },
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/03.jpg',
      category: ['#', 'Travelling'],
      title: '7 Tips for Solo Travelers in Africa',
      author: ['#', '/images/avatars/17.png', 'Ralph Edwards'],
      date: 'Apr 15',
      comments: '2 comments'
    }
  ]


  return (
    <CityGuidePageLayout
      pageTitle='Home v.2'
      activeNav='Home'
      navbarExtraClass='bg-light'
    >

      {/* Hero */}
      <BgParallax
        imgSrc='/images/city-guide/home/hero-bg.jpg'
        type='scroll' // scale, opacity, scroll-opacity, scale-opacity
        speed={0.5} // from -1.0 to 2.0
        overlay='gradient' // or overlay={50} from 0 to 100
        className='position-relative bg-dark zindex-1 py-xxl-5'
      >
        <Container className='content-overlay py-md-5 mt-n2 mb-lg-3'>
          <div className='mt-5 mb-md-5 py-5'>
            <Col xl={6} lg={8} md={10} className='mx-auto mb-sm-5 mb-4 px-0 text-center'>
              <h1 className='display-5 text-light d-flex flex-wrap align-items-center justify-content-center mt-sm-5 mt-4 my-3'>
                <span className='me-2'>Start exploring</span>
                <Dropdown as='span' className='d-inline-block'>
                  <Dropdown.Toggle className='bg-transparent text-primary border-0 shadow-none text-decoration-none py-1 px-0' style={{fontSize: 'inherit'}}>
                    Berlin
                    <Dropdown.Menu align='end'>
                      <Dropdown.Item className='fs-base fw-bold'>Hamburg</Dropdown.Item>
                      <Dropdown.Item className='fs-base fw-bold'>Munich</Dropdown.Item>
                      <Dropdown.Item className='fs-base fw-bold'>Frankfurt am Main</Dropdown.Item>
                      <Dropdown.Item className='fs-base fw-bold'>Stuttgart</Dropdown.Item>
                      <Dropdown.Item className='fs-base fw-bold'>Cologne</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Toggle>
                </Dropdown>
              </h1>
              <p className='fs-lg text-white'>Find great places to stay, eat, shop, or visit from our partners and local experts. Plan your trip with Finder now</p>
            </Col>
            <Col xl={8} lg={9} md={10} className='mx-auto px-0'>

              {/* Search form */}
              <FormGroup className='d-block d-md-flex rounded-md-pill mb-2 mb-sm-4'>
                <InputGroup size='lg' className='border-end-md'>
                  <InputGroup.Text className='text-muted ps-3'>
                    <i className='fi-search'></i>
                  </InputGroup.Text>
                  <FormControl aria-label='Search field' placeholder='What are you looking for?' />
                </InputGroup>
                <hr className='d-md-none my-2' />
                <div className='d-sm-flex'>
                  <DropdownSelect
                    defaultValue='All categories'
                    icon='fi-list'
                    options={[
                      ['fi-bed', 'Accomodation'],
                      ['fi-cafe', 'Food & Drink'],
                      ['fi-shopping-bag', 'Shopping'],
                      ['fi-museum', 'Art & Hisory'],
                      ['fi-entertainment', 'Entertainment'],
                      ['fi-meds', 'Medicine'],
                      ['fi-makeup', 'Beauty'],
                      ['fi-car', 'Car Rental']
                    ]}
                    variant='link btn-lg ps-2 ps-sm-3'
                    className='w-100 mb-sm-0 mb-3'
                  />
                  <Button size='lg' className='rounded-pill w-100 w-md-auto ms-sm-3'>Search</Button>
                </div>
              </FormGroup>
            </Col>
          </div>
        </Container>
        <div className='position-absolute d-none d-xxl-block bottom-0 start-0 w-100 bg-white zindex-1' style={{borderTopLeftRadius: '30px', borderTopRightRadius: '30px', height: '30px', marginBottom: '-65px'}}></div>
      </BgParallax>


      {/* Categories */}
      <Container as='section' className='py-5 pt-xxl-4 mt-md-2 mb-md-4'>
        <Row lg={6} sm={3} xs={2} className='g-3 g-xl-4'>
          {categories[0].map((category, indx) => (
            <Col key={indx}>
              <IconBox
                href={category.href}
                type='card-shadow'
                media={category.media}
                mediaColor={category.color}
                mediaShape='circle'
                title={category.title}
                align='center'
              />
            </Col>
          ))}
          <Col>
            <Dropdown className='h-100'>
              <Dropdown.Toggle as='div' className='dropdown-toggle-flush h-100 bg-transparent border-0 shadow-none p-0'>
                <IconBox
                  type='card-shadow'
                  media='fi-dots-horisontal'
                  mediaColor='info'
                  mediaShape='circle'
                  title='More'
                  align='center'
                />
              </Dropdown.Toggle>
              <Dropdown.Menu align={{sm: 'end'}} className='my-2'>
                {categories[1].map((category, indx) => (
                  <Dropdown.Item key={indx} as={Link} href={category.href} className='fw-bold'>
                    <i className={`${category.media} fs-base opacity-60 me-2`}></i>
                    {category.title}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>


      {/* Places to stay (carousel) */}
      <Container as='section' className='mb-sm-5 mb-4 pb-lg-4'>
        <div className='d-sm-flex align-items-center justify-content-between mb-4 pb-2'>
          <h2 className='h3 mb-sm-0'>Where to stay in Berlin</h2>
          <Button as={Link} href='/city-guide/catalog' variant='link fw-normal ms-sm-3 p-0'>
            View all
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
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
          >
            {places.map((place, indx) => (
              <SwiperSlide key={indx}>
                <VenueCard
                  href={place.href}
                  img={{
                    src: place.imgSrc,
                    width: 475,
                    height: 217,
                    alt: 'Image'
                  }}
                  title={place.title}
                  rating={{
                    value: place.rating[0],
                    count: place.rating[1]
                  }}
                  price={place.price}
                  location={place.location}
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


      {/* Banner + Places to eat */}
      <Container as='section' className='mb-5 pb-lg-4'>
        <Row>

          {/* Banner */}
          <Col lg={4} className='text-center text-lg-start mb-lg-0 mb-5'>
            <a href='#' className='d-block text-decoration-none bg-faded-accent rounded-3 h-100'>
              <div className='p-4'>
                <h2 className='mb-0 p-2 text-primary text-nowrap'>
                  <i className='fi-phone mt-n1 me-2 pe-1 fs-3 align-middle'></i>
                  Taxi
                  <span className='text-dark'>&nbsp;488</span>
                </h2>
                <p className='mb-0 p-2 fs-lg text-body'>The best way to&nbsp;get wherever you’re&nbsp;going!</p>
              </div>
              <ImageLoader
                src='/images/city-guide/illustrations/taxi.svg'
                width={416}
                height={240}
                alt='Illustraion'
              />
            </a>
          </Col>

          {/* Where to eat */}
          <Col lg={8} className='mb-n4 mb-sm-0'>
            <div className='d-flex align-items-center justify-content-between mb-4 pb-2'>
              <h2 className='h3 mb-0'>Where to eat</h2>
              <Button as={Link} href='/city-guide/catalog' variant='link fw-normal p-0'>
                View all
                <i className='fi-arrow-long-right ms-2'></i>
              </Button>
            </div>
            <Row>
              <Col sm={6}>
                {restaurants1.map((restaurant, indx) => (
                  <div key={indx} className='d-flex align-items-start position-relative mb-4'>
                    <ImageLoader
                      src={restaurant.imgSrc}
                      width={restaurant.imgSize[0]}
                      height={restaurant.imgSize[1]}
                      alt={restaurant.imgAlt}
                      className='flex-shrink-0 rounded-3'
                    />
                    <div className="ps-3">
                      <h3 className='mb-2 fs-lg'>
                        <Link href='/city-guide/single' className='nav-link stretched-link'>{restaurant.title}</Link>
                      </h3>
                      <ul className='list-unstyled mb-0 fs-xs'>
                        <li>
                          <i className='fi-star-filled mt-n1 me-1 fs-base text-warning align-middle'></i>
                          <b>{restaurant.rating[0]}</b>
                          <span className='text-muted'>&nbsp;({restaurant.rating[1]})</span>
                        </li>
                        <li>
                          <i className='fi-credit-card mt-n1 me-1 fs-base text-muted align-middle'></i>
                          {restaurant.price}
                        </li>
                        <li>
                          <i className='fi-map-pin mt-n1 me-1 fs-base text-muted align-middle'></i>
                          {restaurant.location}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}                
              </Col>
              <Col sm={6}>
                {restaurants2.map((restaurant, indx) => (
                  <div key={indx} className='d-flex align-items-start position-relative mb-4'>
                    <ImageLoader
                      src={restaurant.imgSrc}
                      width={restaurant.imgSize[0]}
                      height={restaurant.imgSize[1]}
                      alt={restaurant.imgAlt}
                      className='flex-shrink-0 rounded-3'
                    />
                    <div className="ps-3">
                      <h3 className='mb-2 fs-lg'>
                        <Link href='/city-guide/single' className='nav-link stretched-link'>{restaurant.title}</Link>
                      </h3>
                      <ul className='list-unstyled mb-0 fs-xs'>
                        <li>
                          <i className='fi-star-filled mt-n1 me-1 fs-base text-warning align-middle'></i>
                          <b>{restaurant.rating[0]}</b>
                          <span className='text-muted'>&nbsp;({restaurant.rating[1]})</span>
                        </li>
                        <li>
                          <i className='fi-credit-card mt-n1 me-1 fs-base text-muted align-middle'></i>
                          {restaurant.price}
                        </li>
                        <li>
                          <i className='fi-map-pin mt-n1 me-1 fs-base text-muted align-middle'></i>
                          {restaurant.location}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}                
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>


      {/* Upcoming events (slider) */}
      <Container as='section' className='mb-5 pb-3'>
        <div className='d-md-flex align-items-center justify-content-between position-relative zindex-5 mb-2 pb-md-2'>
          <h2 className='h3 w-100 mb-4 mb-md-3 me-md-3'>Upcoming events in Berlin</h2>

          {/* Sorting by date */}
          <InputGroup className='flex-shrink-0 d-inline-flex align-middle me-3 mb-3' style={{maxWidth: '180px'}}>
            <FormControl
              as={DatePicker}
              selected={startDate}
              minDate={new Date()}
              onChange={(date) => setStartDate(date)}
              placeholderText='Choose date'
              size='sm'
              className='rounded-pill ps-5'
            />
            <i className='fi-calendar position-absolute top-50 start-0 translate-middle-y ms-3 ps-1'></i>
          </InputGroup>
          <Button size='sm' variant='secondary rounded-pill fw-normal ms-n1 me-3 mb-3'>
            Tomorrow
          </Button>
          <Button size='sm' variant='secondary rounded-pill fw-normal ms-n1 me-3 mb-3'>
            This weekend
          </Button>
          <Button as={Link} href='/city-guide/catalog' variant='link ms-md-3 ms-auto mb-3 p-0 fw-normal'>
            View all
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>

        {/* Swiper slider */}
        <div className='position-relative'>
          <Swiper
            modules={[Navigation, Pagination]}
            centeredSlides
            loop
            navigation={{
              prevEl: '#prevEvent',
              nextEl: '#nextEvent'
            }}
            pagination={{
              el: '#bullets',
              clickable: true
            }}
            spaceBetween={16}
            breakpoints={{
              600: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 1
              },
              991: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1100: {
                slidesPerView: 2,
                spaceBetween: 30
              }
            }}
            className='swiper-centered'
          >
            <SwiperSlide>
              <VenueCardOverlay
                img={{
                  src: '/images/city-guide/home/upcoming-1.jpg',
                  alt: 'Background image'
                }}
                title='Simon Rock Concert'
                date='Nov 15'
                time='21:00'
                button={{
                  href: '#',
                  title: 'Tickets from $50',
                  variant: 'primary rounded-pill',
                  props: {
                    onClick: () => console.log('You\'ve just bought tickets to Simon Rock Concert.')
                  },
                  wishlistProps: {
                    onClick: () => console.log('You\'ve added Simon Rock Concert event to your wishlist!')
                  }
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <VenueCardOverlay
                img={{
                  src: '/images/city-guide/home/upcoming-2.jpg',
                  alt: 'Background image'
                }}
                title='Holi Festival'
                date='Dec 12'
                time='10:00'
                button={{
                  href: '#',
                  title: 'Tickets from $35',
                  variant: 'primary rounded-pill',
                  props: {
                    onClick: () => console.log('You\'ve just bought tickets to Holi Festival.')
                  },
                  wishlistProps: {
                    onClick: () => console.log('You\'ve added Holi Festival event to your wishlist!')
                  }
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <VenueCardOverlay
                img={{
                  src: '/images/city-guide/home/upcoming-3.jpg',
                  alt: 'Background image'
                }}
                title='Football Match'
                date='Nov 11'
                time='18:00'
                button={{
                  href: '#',
                  title: 'Tickets from $40',
                  variant: 'primary rounded-pill',
                  props: {
                    onClick: () => console.log('You\'ve just bought tickets to Football Match.')
                  },
                  wishlistProps: {
                    onClick: () => console.log('You\'ve added Football Match event to your wishlist!')
                  }
                }}
              />
            </SwiperSlide>
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button id='prevEvent' variant='prev' className='d-none d-xxl-block ms-n5' />
          <Button id='nextEvent' variant='next' className='d-none d-xxl-block me-n5' />
        </div>

        {/* External pagination (bullets) buttons */}
        <div id='bullets' className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>
      </Container>


      {/* What's new slider */}
      <Container as='section' className='container mt-n3 mt-md-0 mb-5 pb-lg-4'>
        <h2 className='h3 mb-4 pb-2'>What’s new in Berlin</h2>
        
        {/* Swiper slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '#prevVenue',
            nextEl: '#nextVenue'
          }}
          spaceBetween={24}
          speed={400}
          loop
        >
          
          {/* Item */}
          <SwiperSlide>
            <Row>
              <Col md={7} className='d-flex position-relative zindex-5 mb-md-0 mb-3'>
                <ImageLoader
                  src='/images/city-guide/home/new-1.jpg'
                  width={1492}
                  height={816}
                  alt='Image'
                  className='rounded-3'
                />
              </Col>
              <Col md={5} className='bg-light'>
                <h3 className='h4 from-top'>Amusement Park</h3>
                <ul className='list-unstyled fs-sm delay-2 from-end'>
                  <li className='mb-1'>
                    <i className='fi-map-pin text-muted me-2 fs-base'></i>
                    Ollenhauer Str. 29, 10118
                  </li>
                  <li className='mb-1'>
                    <i className='fi-clock text-muted me-2 fs-base'></i>
                    9:00 – 23:00
                  </li>
                  <li className='mb-1'>
                    <i className='fi-wallet text-muted me-2 fs-base'></i>
                    $$
                  </li>
                </ul>
                <p className='pb-2 delay-3 from-end d-none d-lg-block'>Blandit lorem dictum in velit. Et nisi at faucibus mauris pretium enim. Risus sapien nisi aliquam egestas leo dignissim ut quis ac. Amet, cras orci justo, tortor nisl aliquet. Enim tincidunt tellus nunc, nulla arcu posuere quis. Velit turpis orci venenatis risus felis, volutpat convallis varius. Enim non euismod adipiscing a enim.</p>
                <Button as={Link} href='/city-guide/single' variant='primary rounded-pill delay-4 scale-up'>
                  View more
                  <i className='fi-chevron-right fs-sm ms-2'></i>
                </Button>
              </Col>
            </Row>
          </SwiperSlide>
          
          {/* Item */}
          <SwiperSlide>
            <Row>
              <Col md={7} className='d-flex position-relative zindex-5 mb-md-0 mb-3'>
                <ImageLoader
                  src='/images/city-guide/home/new-2.jpg'
                  width={1492}
                  height={816}
                  alt='Image'
                  className='rounded-3'
                />
              </Col>
              <Col md={5} className='bg-light'>
                <h3 className='h4 from-top'>Mall of Berlin</h3>
                <ul className='list-unstyled fs-sm delay-2 from-end'>
                  <li className='mb-1'>
                    <i className='fi-map-pin text-muted me-2 fs-base'></i>
                    Lansstraße 105, D-11179
                  </li>
                  <li className='mb-1'>
                    <i className='fi-clock text-muted me-2 fs-base'></i>
                    10:00 – 20:00
                  </li>
                  <li className='mb-1'>
                    <i className='fi-wallet text-muted me-2 fs-base'></i>
                    $$
                  </li>
                </ul>
                <p className='pb-2 delay-3 from-end d-none d-lg-block'>Sem nibh urna id arcu. Quis tortor vestibulum morbi volutpat. Et duis et sed tellus. Egestas ultrices viverra in pretium nec. Dui ornare fusce vel fringilla scelerisque posuere pharetra ut. Dui donec sapien, dictum nunc varius.</p>
                <Button as={Link} href='/city-guide/single' variant='primary rounded-pill delay-4 scale-up'>
                  View more
                  <i className='fi-chevron-right fs-sm ms-2'></i>
                </Button>
              </Col>
            </Row>
          </SwiperSlide>
        </Swiper>
        
        {/* External Prev/Next buttons */}
        <div className='d-flex pt-2 mt-4'>
          <Button id='prevVenue' variant='prev' className='position-relative mx-2' />
          <Button id='nextVenue' variant='next' className='position-relative mx-2' />
        </div>
      </Container>


      {/* Mobile app CTA */}
      <Container as='section'>
        <div className='bg-faded-accent rounded-3'>
          <Row className='align-items-center'>
            <Col lg={5} md={6} className='ps-lg-5'>
              <div className='ps-xl-5 pe-md-0 pt-4 pb-md-4 px-3 text-center text-md-start'>
                <h2 className='mb-md-3 pt-2 pt-md-0 mb-2 pb-md-0 pb-1'>Get Our App</h2>
                <p className='mb-4 pb-xl-3 fs-md'>Download the app and go to travel the world!</p>
                <div className='d-flex flex-column flex-sm-row justify-content-center justify-content-md-start'>
                  <MarketButton href='#' market='apple' target='_blank' className='me-sm-3 mb-3' />
                  <MarketButton href='#' market='google' target='_blank' className='mb-3' />
                </div>
              </div>
            </Col>
            <Col lg={7} md={6}>
              <div className='d-none d-md-flex' style={{maxWidth: '698px'}}>
                <ImageLoader
                  src='/images/city-guide/illustrations/app.png'
                  width={1396}
                  height={634}
                  alt='Illustration'
                />
              </div>
              <div className='d-flex d-md-none mx-auto' style={{maxWidth: '446px'}}>
                <ImageLoader
                  src='/images/city-guide/illustrations/app-m.png'
                  width={892}
                  height={760}
                  alt='Illustration'
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>


      {/* Blog: Latest posts */}
      <Container as='section' className='my-5 py-lg-4'>
        <div className='d-sm-flex align-items-center justify-content-between mb-4 pb-2'>
          <h2 className='h3 mb-sm-0'>You may be also interested in</h2>
          <Button as={Link} href='/city-guide/blog' variant='link fw-normal ms-sm-3 p-0'>
            Go to blog
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>

        {/* Swiper slider */}
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '#bulletsBlog',
            clickable: true
          }}
          autoHeight
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            850: { slidesPerView: 3 }
          }}
        >
          {posts.map((post, indx) => (
            <SwiperSlide key={indx}>
              <BlogCard
                href={post.href}
                img={{
                  src: post.img,
                  size: [475, 228],
                  alt: 'Post image'
                }}
                category={{
                  href: post.category[0],
                  title: post.category[1]
                }}
                title={post.title}
                author={{
                  href: post.author[0],
                  img: post.author[1],
                  name: post.author[2]
                }}
                date={post.date}
                comments={post.comments}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External pagination (bullets) */}
        <div id='bulletsBlog' className='swiper-pagination position-relative bottom-0 mt-4 pb-3'></div>
      </Container>
    </CityGuidePageLayout>
  )
}

export default HomeAltPage
