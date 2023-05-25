import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../../components/ImageLoader'
import FormGroup from '../../components/FormGroup'
import DropdownSelect from '../../components/DropdownSelect'
import VehicleCard from '../../components/VehicleCard'
import ElementParallax from '../../components/ElementParallax'
import MarketButton from '../../components/MarketButton'
import BlogCard from '../../components/BlogCard'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const HomePage = () => {

  // Categories (body types) array
  const categories = [
    ['/car-finder/catalog?view=list', '/images/car-finder/icons/sedan.svg', 'Sedan'],
    ['/car-finder/catalog?view=grid', '/images/car-finder/icons/suv.svg', 'SUV'],
    ['/car-finder/catalog?view=list', '/images/car-finder/icons/wagon.svg', 'Wagon'],
    ['/car-finder/catalog?view=grid', '/images/car-finder/icons/crossover.svg', 'Crossover'],
    ['/car-finder/catalog?view=list', '/images/car-finder/icons/coupe.svg', 'Coupe'],
    ['/car-finder/catalog?view=grid', '/images/car-finder/icons/pickup.svg', 'Pickup'],
    ['/car-finder/catalog?view=list', '/images/car-finder/icons/sport.svg', 'Sport Coupe'],
    ['/car-finder/catalog?view=grid', '/images/car-finder/icons/compact.svg', 'Compact'],
    ['/car-finder/catalog?view=list', '/images/car-finder/icons/convertible.svg', 'Convertible'],
    ['/car-finder/catalog?view=grid', '/images/car-finder/icons/mpv.svg', 'Family MPV']
  ]

  // Brands (makes) array
  const brands = [
    ['#', '/images/car-finder/brands/opel.svg', 'Opel'],
    ['#', '/images/car-finder/brands/audi.svg', 'Audi'],
    ['#', '/images/car-finder/brands/mercedes.svg', 'Mercedes-Benz'],
    ['#', '/images/car-finder/brands/toyota.svg', 'Toyota'],
    ['#', '/images/car-finder/brands/mazda.svg', 'Mazda'],
    ['#', '/images/car-finder/brands/nissan.svg', 'Nissan'],
    ['#', '/images/car-finder/brands/hyundai.svg', 'Hyundai'],
    ['#', '/images/car-finder/brands/lexus.svg', 'Lexus'],
    ['#', '/images/car-finder/brands/honda.svg', 'Honda'],
    ['#', '/images/car-finder/brands/renault.svg', 'Renault'],
    ['#', '/images/car-finder/brands/infiniti.svg', 'Infiniti'],
    ['#', '/images/car-finder/brands/mitsubishi.svg', 'Mitsubishi']
  ]

  // Latest cars array
  const cars = [
    {
      href: '/car-finder/single',
      img: '/images/car-finder/catalog/04.jpg',
      title: 'Nissan 370Z Nismo',
      year: '2019',
      price: '$37,900',
      location: 'New York',
      badges: [['info', 'Used']],
      footer: ['34K mi', 'Automatic', 'Gasoline']
    },
    {
      href: '/car-finder/single',
      img: '/images/car-finder/catalog/08.jpg',
      title: 'Ford Explorer XLT',
      year: '2017',
      price: '$26,950',
      location: 'Kansas',
      badges: [['info', 'Used'], ['success', 'Certified']],
      footer: ['34K mi', 'Manual', 'Diesel']
    },
    {
      href: '/car-finder/single',
      img: '/images/car-finder/catalog/03.jpg',
      title: 'Mazda MX-5 Miata Convertible',
      year: '2019',
      price: '$29,700',
      location: 'Los Angeles',
      badges: [['info', 'Used']],
      footer: ['18K mi', 'Manual', 'Gasoline']
    },
    {
      href: '/car-finder/single',
      img: '/images/car-finder/catalog/02.jpg',
      title: 'Mercedes Benz C300 Sport',
      year: '2018',
      price: '$53,600',
      location: 'San Francisco',
      badges: [['info', 'Used']],
      footer: ['35K mi', 'Automatic', 'Hybrid']
    }
  ]

  // Latest blog posts array
  const posts = [
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/04.jpg',
      category: ['#', 'Events'],
      title: 'Top 10 Classic Car Events',
      author: ['#', '/images/avatars/08.jpg', 'Jacob Jones'],
      date: 'May 8',
      comments: 'No comments'
    },
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/05.jpg',
      category: ['#', 'Inspiration'],
      title: '5 Predictions From the Past About the Future',
      author: ['#', '/images/avatars/09.jpg', 'Guy Hawkins'],
      date: 'Apr 25',
      comments: '6 comments'
    },
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/06.jpg',
      category: ['#', 'Test Drives'],
      title: 'This Year is All About New Harley Davidson',
      author: ['#', '/images/avatars/12.jpg', 'Ralph Edwards'],
      date: 'Mar 12',
      comments: '2 comments'
    }
  ]  


  return (
    <CarFinderPageLayout
      pageTitle='Home'
      activeNav='Home'
    >
      
      {/* Hero + Search form */}
      <section
        className='bg-top-center bg-repeat-0 pt-5'
        style={{backgroundImage: 'url(/images/car-finder/home/hero-bg.png)', backgroundSize: '1920px 630px'}}
      >
        <Container className='pt-5'>
          <Row className='pt-lg-4 pt-xl-5'>
            <Col md={5} lg={4} className='pt-3 pt-md-4 pt-lg-5'>
              <h1 className='display-4 pb-2 mb-4 me-md-n5' style={{color: '#64748B'}}>Easy way to find the right car</h1>
              <p className='fs-lg opacity-70' style={{color: '##64748B'}}>Finder is a leading digital marketplace for the automotive industry that connects car shoppers with sellers.</p>
            </Col>
            <Col md={7} lg={8} className='pt-md-5'>
              <div className='d-flex mt-4 ms-auto' style={{maxWidth: '800px'}}>
                <ImageLoader
                  src='/images/car-finder/home/hero-img.png'
                  width={1600}
                  height={912}
                  alt='Car'
                  light='true'
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className='mt-4 mt-sm-3 mt-lg-n3 pb-5 mb-md-4'>

          {/* Tabs */}
          <Nav variant='tabs' className='nav-tabs-light mb-4' defaultActiveKey='new'>
            <Nav.Item>
              <Nav.Link eventKey='new' style={{color: '#64748B'}}>New</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='used' style={{color: '#64748B'}}>Used</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Search form */}
          <FormGroup light className='d-block'>
            <Row className='g-0 ms-lg-n2'>
              <Col lg={2}>
                <InputGroup className='border-end-lg border-light' style={{color: '#64748B'}}>
                  <InputGroup.Text id='search-icon' className='text-muted ps-2 ps-sm-3'>
                    <i className='fi-search'></i>
                  </InputGroup.Text>
                  <FormControl
                    placeholder='Search for keywords'
                    aria-label='Search'
                    aria-describedby='search-icon'
                  />
                </InputGroup>
              </Col>
              <hr className='hr-light d-lg-none my-2' />
              <Col sm={6} md={3} lg={2}>
                <DropdownSelect
                  defaultValue='Make'
                  icon='fi-list'
                  options={[
                    [null, 'Acura'], // First element is an icon class, null means no icon
                    [null, 'BMW'],
                    [null, 'Citroen'],
                    [null, 'Lexus'],
                    [null, 'Mercedes-Benz'],
                    [null, 'Nissan'],
                    [null, 'Toyota']
                  ]}
                  darkMenu
                  className='border-end-sm border-light'
                />
              </Col>
              <hr className='hr-light d-sm-none my-2' />
              <Col sm={6} md={3} lg={2}>
                <DropdownSelect
                  defaultValue='Model'
                  icon='fi-list'
                  options={[
                    [null, 'Altima'], // First element is an icon class, null means no icon
                    [null, 'Juke'],
                    [null, 'Leaf'],
                    [null, 'Maxima'],
                    [null, 'Micra'],
                    [null, 'Murano'],
                    [null, 'Note'],
                    [null, 'Patrol']
                  ]}
                  darkMenu
                  className='border-end-md border-light'
                />
              </Col>
              <hr className='hr-light d-md-none my-2' />
              <Col sm={6} md={3} lg={2}>
                <DropdownSelect
                  defaultValue='Body type'
                  icon='fi-car'
                  options={[
                    [null, 'Compact'], // First element is an icon class, null means no icon
                    [null, 'Crossover'],
                    [null, 'Coupe'],
                    [null, 'Family MPV'],
                    [null, 'Pickup'],
                    [null, 'Sedan'],
                    [null, 'SUV'],
                    [null, 'Wagon']
                  ]}
                  darkMenu
                  className='border-end-sm border-light'
                />
              </Col>
              <hr className='hr-light d-sm-none my-2' />
              <Col sm={6} md={3} lg={2}>
                <DropdownSelect
                  defaultValue='Location'
                  icon='fi-map-pin'
                  options={[
                    [null, 'Dallas'], // First element is an icon class, null means no icon
                    [null, 'Chicago'],
                    [null, 'Houston'],
                    [null, 'Las Vegas'],
                    [null, 'Los Angeles'],
                    [null, 'New York'],
                    [null, 'San Francisco']
                  ]}
                  darkMenu
                />
              </Col>
              <hr className='hr-light d-lg-none my-2' />
              <Col lg={2}>
                <Button className='w-100' style={{backgroundColor: '#000099', border: '#000F9F'}}>Search</Button>
              </Col>
            </Row>
          </FormGroup>
        </Container>
      </section>


      {/* Categories (Body type selection) */}
      <Container as='section' className='pb-5 mb-md-4'>
        <div className='d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4 pb-sm-2'>
          <h2 className='h3 mb-2 mb-sm-0' style={{color: '#64748B'}}>Popular car body types</h2>
          <Button as={Link} href='/car-finder/catalog?view=grid' variant='link btn-light fw-normal px-0'>
            View all
            <i className='fi-arrow-long-right fs-sm mt-0 ps-1 ms-2'></i>
          </Button>
        </div>
        <Row xs={2} sm={3} md={4} lg={5} className='g-2 g-md-4'>
          {categories.map((category, indx) => (
            <Col key={indx}>
              <div className='card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center'>
                <div className='d-flex justify-content-center mb-3'>
                  <ImageLoader
                    src={category[1]}
                    width={160}
                    height={96}
                    alt={category[2]}
                    light='true'
                  />
                </div>
                <Link href={category[0]} className='nav-link-light stretched-link fw-bold'>{category[2]}</Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>


      {/* Top offers */}
      <Container as='section' className='pt-sm-1 pb-5 mb-md-4'>
        <div className='d-sm-flex align-items-center justify-content-between mb-4 pb-sm-2'>
          <h2 className='h3 mb-2 mb-sm-0' style={{color: '#64748B'}}>Top offers</h2>
          <Button as={Link} href='/car-finder/catalog?view=list' variant='link btn-light fw-normal px-0'>
            View all offers
            <i className='fi-arrow-long-right fs-sm mt-0 ps-1 ms-2'></i>
          </Button>
        </div>
        <Row>
          <Col lg={6}>
            <VehicleCard
              href='/car-finder/single'
              images={[
                ['/images/car-finder/catalog/17.jpg', 965, 400, 'Image'],
                ['/images/car-finder/catalog/17.jpg', 965, 400, 'Image']
              ]}
              title='Mercedes Benz Convertible Coupe'
              year='2015'
              price='$25,800'
              location='New York'
              checkbox={{
                label: 'Compare',
                props: {
                  onChange: (e) => e.target.checked ? console.log('Car ADDED to comparison list!') : console.log('Car REMOVED from comparison list!')
                }
              }}
              badges={[
                ['info', 'Used'],
                ['success', 'Certified']
              ]}
              wishlistButton={{
                tooltip: 'Add to Wishlist',
                props: {
                  onClick: () => console.log('Vehicle added to your Wishlist!')
                }
              }}
              footer={[
                ['fi-dashboard', '48K mi'],
                ['fi-gearbox', 'Automatic'],
                ['fi-petrol', 'Gasoline']
              ]}
              light
              className='h-lg-100 mb-4 mb-lg-0'
            />
          </Col>
          <Col lg={6}>
            <VehicleCard
              href='/car-finder/single'
              images={[
                ['/images/car-finder/catalog/09.jpg', 'Image'],
                ['/images/car-finder/catalog/09.jpg', 'Image']
              ]}
              title='Ford Truck Lifted'
              year='1995'
              price='$24,000'
              location='Chicago'
              checkbox={{
                label: 'Compare',
                props: {
                  onChange: (e) => e.target.checked ? console.log('Car ADDED to comparison list!') : console.log('Car REMOVED from comparison list!')
                }
              }}
              badges={[
                ['info', 'Used']
              ]}
              wishlistButton={{
                tooltip: 'Add to Wishlist',
                props: {
                  onClick: () => console.log('Vehicle added to your Wishlist!')
                }
              }}
              footer={[
                ['fi-dashboard', '278K mi'],
                ['fi-gearbox', 'Manual'],
                ['fi-petrol', 'Diesel']
              ]}
              horizontal
              light
              className='mb-4'
            />          
            <VehicleCard
              href='/car-finder/single'
              images={[
                ['/images/car-finder/catalog/13.jpg', 'Image'],
                ['/images/car-finder/catalog/13.jpg', 'Image']
              ]}
              title='BMW 640 XI Gran Turismo'
              year='2018'
              price='$43,500'
              location='San Francisco'
              checkbox={{
                label: 'Compare',
                props: {
                  onChange: (e) => e.target.checked ? console.log('Car ADDED to comparison list!') : console.log('Car REMOVED from comparison list!')
                }
              }}
              badges={[
                ['danger', 'New']
              ]}
              wishlistButton={{
                tooltip: 'Add to Wishlist',
                props: {
                  onClick: () => console.log('Vehicle added to your Wishlist!')
                }
              }}
              footer={[
                ['fi-dashboard', '10K mi'],
                ['fi-gearbox', 'Automatic'],
                ['fi-petrol', 'Gasoline']
              ]}
              horizontal
              light
            />          
          </Col>
        </Row>
      </Container>


      {/* Brands (makes) */}
      <Container as='section' className='py-2 py-sm-3'>
        <Row className='g-2 g-sm-4'>
          {brands.map((brand, indx) => (
            <Col key={indx} xs={3} sm={2} xl={1} className='mb-4 pb-2'>
              <Link href={brand[0]} className='d-flex justify-content-center opacity-40 opacity-transition'>
                <ImageLoader
                  src={brand[1]}
                  width={86}
                  height={48}
                  alt={brand[2]}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>


      {/* Features */}
      <Container as='section' className='pt-4 pt-md-5'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <h2 className='h3 mb-2 mb-sm-0' style={{color: '#64748B'}}>What sets Finder apart?</h2>
          <Button as={Link} href='#' variant='link btn-light fw-normal px-0'>
            How to sell cars on Finder
            <i className='fi-arrow-long-right fs-sm mt-0 ps-1 ms-2'></i>
          </Button>
        </div>
        <Row>
          <Col md={5} lg={{span: 4, offset: 1}} className='pt-4 mt-2 pt-md-5 mt-md-3'>
            <div className='d-flex pb-4 pb-md-5 mb-2'>
              <i className='fi-file lead text-primary mt-1 order-md-2'></i>
              <div className='text-md-end ps-3 ps-md-0 pe-md-3 order-md-1'>
                <h3 className='h6 mb-1' style={{color: '#64748B'}}>Over 1 Million Listings</h3>
                <p className='fs-sm opacity-70 mb-0' style={{color: '#64748B'}}>That&apos;s more than you&apos;ll find on any other major online automotive marketplace in the USA.</p>
              </div>
            </div>
            <div className='d-flex pb-4 pb-md-5 mb-2'>
              <i className='fi-search lead text-primary mt-1 order-md-2'></i>
              <div className='text-md-end ps-3 ps-md-0 pe-md-3 order-md-1'>
                <h3 className='h6 mb-1' style={{color: '#64748B'}}>Personalized Search</h3>
                <p className='fs-sm opacity-70 mb-0' style={{color: '#64748B'}}>Our powerful search makes it easy to personalize your results so you only see the cars and features you care about.</p>
              </div>
            </div>
            <div className='d-flex pb-4 pb-md-5 mb-2'>
              <i className='fi-settings lead text-primary mt-1 order-md-2'></i>
              <div className='text-md-end ps-3 ps-md-0 pe-md-3 order-md-1'>
                <h3 className='h6 mb-1' style={{color: '#64748B'}}>Non-Stop Innovation</h3>
                <p className='fs-sm opacity-70 mb-0' style={{color: '#64748B'}}>Our team is constantly developing new features that make the process of buying and selling a car simpler.</p>
              </div>
            </div>
          </Col>
          <Col md={2} className='d-none d-md-block'>
            <div id='wrapper' className='position-relative mx-auto' style={{maxWidth:' 5rem', minHeight: '26rem'}}>            
              <ElementParallax
                options={{
                  speed: -2,
                  center: true
                }}
                className='content-overlay mt-5 pt-5'
              >
                <ImageLoader light='true' src='/images/car-finder/home/car.svg' width={80} height={177} alt='Car image' />
              </ElementParallax>
              <div className='position-absolute top-0 start-50 translate-middle-x h-100 overflow-hidden mt-n5'>
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={2} height={656} x='0px' y='0px' viewBox='0 0 2 656'><path fill='#fff' fillOpacity='.16' d='M2,335.1V354H0l0-18.9H2z M2,368.6v18.9H0l0-18.9H2z M2,402.1v18.9H0l0-18.9H2z M2,435.7v18.9H0l0-18.9H2z M2,469.2v18.9H0l0-18.9H2z M2,502.8v18.9H0l0-18.9H2z M2,536.3v18.9H0l0-18.9H2z M2,569.9v18.9H0l0-18.9H2z M2,603.4l0,18.9H0l0-18.9H2z M2,637v9.5v9.5H0L0,637H2z'/><g fillOpacity='.16'><path fill='#fff' d='M2,18.9H0L0,0h2V18.9z'/><path fill='#fff' d='M2,52.5H0l0-18.9h2V52.5z'/><path fill='#fff' d='M2,86H0l0-18.9h2V86z'/><path fill='#fff' d='M2,119.6H0l0-18.9h2V119.6z'/><path fill='#fff' d='M2,153.1H0l0-18.9h2V153.1z'/><path fill='#fff' d='M2,186.7H0l0-18.9h2V186.7z'/><path fill='#fff' d='M2,220.2H0l0-18.9h2V220.2z'/><path fill='#fff' d='M2,253.8H0l0-18.9h2V253.8z'/><path fill='#fff' d='M2,287.3H0l0-18.9h2L2,287.3z'/><path fill='#fff' d='M2,320.8H0l0-18.9h2v9.5V320.8z'/></g></svg>
              </div>
            </div>
          </Col>
          <Col md={5} lg={4} className='pt-md-5 mt-md-3'>
            <div className='d-flex pb-4 pb-md-5 mb-2'>
              <i className='fi-info-circle lead text-primary mt-1'></i>
              <div className='ps-3'>
                <h3 className='h6 mb-1' style={{color: '#64748B'}}>Valuable Insights</h3>
                <p className='fs-sm opacity-70 mb-0' style={{color: '#64748B'}}>We provide free access to key info like dealer reviews, market value, price drops.</p>
              </div>
            </div>
            <div className='d-flex pb-4 pb-md-5 mb-2'>
              <i className='fi-users lead text-primary mt-1'></i>
              <div className='ps-3'>
                <h3 className='h6 mb-1' style={{color: '#64748B'}}>Consumer-First Mentality</h3>
                <p className='fs-sm opacity-70 mb-0' style={{color: '#64748B'}}>We focus on building the most transparent, trustworthy experience for our users, and we&apos;ve proven that works for dealers, too.</p>
              </div>
            </div>
            <div className='d-flex pb-4 pb-md-5 mb-2'>
              <i className='fi-calculator lead text-primary mt-1'></i>
              <div className='ps-3'>
                <h3 className='h6 mb-1' style={{color: '#64748B'}}>Online Car Appraisal</h3>
                <p className='fs-sm opacity-70 mb-0' style={{color: '#64748B'}}>Specify the parameters of your car to form its market value on the basis of similar cars on Finder.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>


      {/* Latest cars (carousel) */}
      <Container as='section' className='pt-sm-5 pt-4 pb-3'>
        <div className='d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4 pb-2'>
          <h2 className='h3 mb-3 mb-sm-0' style={{color: '#64748B'}}>Latest cars</h2>
          <div className='d-flex align-items-center'>
            <Nav variant='tabs' className='nav-tabs-light fs-sm me-4 pe-2 mb-0' defaultActiveKey='used'>
              <Nav.Item>
                <Nav.Link eventKey='new' style={{color: '#64748B'}}>New</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='used' style={{color: '#64748B'}}>Used</Nav.Link>
              </Nav.Item>
            </Nav>
            <Button as={Link} href='/car-finder/catalog?view=grid' variant='link btn-light fw-normal px-0'>
              View all
              <i className='fi-arrow-long-right fs-sm mt-0 ps-1 ms-2'></i>
            </Button>
          </div>
        </div>

        {/* Swiper slider */}
        <div className='position-relative'>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '#carsPrev',
              nextEl: '#carsNext'
            }}
            pagination={{
              el: '#carsBullets',
              clickable: true
            }}
            loop
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              900: { slidesPerView: 3 }
            }}
          >
            {cars.map((car, indx) => (
              <SwiperSlide key={indx} className='h-auto'>
                <VehicleCard
                  href={car.href}
                  images={[
                    [car.img, 473, 242, 'Image'],
                  ]}
                  title={car.title}
                  year={car.year}
                  price={car.price}
                  location={car.location}
                  checkbox={{
                    label: 'Compare',
                    props: {
                      onChange: (e) => e.target.checked ? console.log('Car ADDED to comparison list!') : console.log('Car REMOVED from comparison list!')
                    }
                  }}
                  badges={car.badges}
                  wishlistButton={{
                    tooltip: 'Add to Wishlist',
                    props: {
                      onClick: () => console.log('Vehicle added to your Wishlist!')
                    }
                  }}
                  footer={[
                    ['fi-dashboard', car.footer[0]],
                    ['fi-gearbox', car.footer[1]],
                    ['fi-petrol', car.footer[2]]
                  ]}
                  light
                  className='h-100'
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button id='carsPrev' variant='prev btn-light' className='d-none d-xxl-block mt-n5 ms-n5' />
          <Button id='carsNext' variant='next btn-light' className='d-none d-xxl-block mt-n5 me-n5' />
        </div>

        {/* External pagination (bullets) buttons */}
        <div id='carsBullets' className='swiper-pagination swiper-pagination-light position-relative bottom-0 pt-2 mt-4 pb-4 pb-sm-3'></div>
      </Container>


      {/* CTA carousel */}
      <Container as='section' className='pt-4 pb-5 py-sm-5'>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '#ctaPrev',
            nextEl: '#ctaNext'
          }}
          slidesPerView={1}
          loop
          autoHeight
          spaceBetween={20}
        >
          {/* Item */}
          <SwiperSlide>
            <div className='card card-body p-sm-5 card-light h-100'>
              <Row className='align-items-center py-3 py-sm-0'>
                <Col md={6} className='mb-4 pb-3 mb-md-0 pb-md-0 text-center text-md-start'>
                  <h2 className='text-light'>Car sale in 24 hours</h2>
                  <p className='fs-lg text-light opacity-70 pb-md-4'>Calculate your car&apos;s value, then choose how you want to sell.</p>
                  <Button as={Link} href='/car-finder/sell-car'>
                    Sell my car
                    <i className='fi-chevron-right fs-sm ms-2'></i>
                  </Button>
                </Col>
                <Col md={6}>
                  <Row className='gy-4 gx-3 gx-sm-4'>
                    <Col>
                      <div className='d-table bg-dark rounded-3 p-4 mx-auto mb-3'>
                        <div className="d-flex p-sm-2">
                          <ImageLoader
                            src='/images/car-finder/icons/buyers.svg'
                            width={56}
                            height={56}
                            alt='Icon'
                            light='true'
                          />
                        </div>
                      </div>
                      <div className='fw-bold text-center'>Vetted buyers</div>
                    </Col>
                    <Col>
                      <div className='d-table bg-dark rounded-3 p-4 mx-auto mb-3'>
                        <div className="d-flex p-sm-2">
                          <ImageLoader
                            src='/images/car-finder/icons/tools.svg'
                            width={56}
                            height={56}
                            alt='Icon'
                            light='true'
                          />
                        </div>
                      </div>
                      <div className='fw-bold text-center'>Smart tools</div>
                    </Col>
                    <Col>
                      <div className='d-table bg-dark rounded-3 p-4 mx-auto mb-3'>
                        <div className="d-flex p-sm-2">
                          <ImageLoader
                            src='/images/car-finder/icons/handshake.svg'
                            width={56}
                            height={56}
                            alt='Icon'
                            light='true'
                          />
                        </div>
                      </div>
                      <div className='fw-bold text-center'>The offer you deserve</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </SwiperSlide>

          {/* Item */}
          <SwiperSlide>
            <div className='card card-body p-sm-5 card-light h-100'>
              <Row className='align-items-center py-3 py-sm-0'>
                <Col md={4} xl={3} className='mb-4 pb-3 mb-md-0 pb-md-0 text-center text-md-start'>
                  <h2 className='text-light'>Auto Market</h2>
                  <p className='fs-lg text-light opacity-70 pb-md-4'>Choose the best for your car!</p>
                  <Button as={Link} href='/car-finder/catalog?view=grid'>
                    Go to shop
                    <i className='fi-chevron-right fs-sm ms-2'></i>
                  </Button>
                </Col>
                <Col md={8} xl={9}>
                  <Row xs={2} lg={4} className='gy-4 gx-3 gx-sm-4'>
                    <Col as={Link} href='#' className='text-light text-center text-decoration-none'>
                      <div className='d-flex mx-auto mb-2' style={{width: '168px'}}>
                        <ImageLoader
                          src='/images/car-finder/categories/01.png'
                          width={336}
                          height={296}
                          alt='Seat Covers'
                          light='true'
                        />
                      </div>
                      <div className='fw-bold text-center pt-1'>Seat Covers</div>
                    </Col>
                    <Col as={Link} href='#' className='text-light text-center text-decoration-none'>
                      <div className='d-flex mx-auto mb-2' style={{width: '168px'}}>
                        <ImageLoader
                          src='/images/car-finder/categories/02.png'
                          width={336}
                          height={296}
                          alt='Tires'
                          light='true'
                        />
                      </div>
                      <div className='fw-bold text-center pt-1'>Tires</div>
                    </Col>
                    <Col as={Link} href='#' className='text-light text-center text-decoration-none'>
                      <div className='d-flex mx-auto mb-2' style={{width: '168px'}}>
                        <ImageLoader
                          src='/images/car-finder/categories/03.png'
                          width={336}
                          height={296}
                          alt='Disks'
                          light='true'
                        />
                      </div>
                      <div className='fw-bold text-center pt-1'>Disks</div>
                    </Col>
                    <Col as={Link} href='#' className='text-light text-center text-decoration-none'>
                      <div className='d-flex mx-auto mb-2' style={{width: '168px'}}>
                        <ImageLoader
                          src='/images/car-finder/categories/04.png'
                          width={336}
                          height={296}
                          alt='Child Seats'
                          light='true'
                        />
                      </div>
                      <div className='fw-bold text-center pt-1'>Child Seats</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='d-flex pt-4 pb-2'>
          <Button id='ctaPrev' variant='prev btn-light position-relative me-3' />
          <Button id='ctaNext' variant='next btn-light position-relative' />
        </div>
      </Container>


      {/* Mobile app CTA */}
      <Container as='section' className='pb-3 pb-sm-4 pb-md-5'>
        <Row className='align-items-center pb-5'>
          <Col md={7} lg={6} xl={{span: 5, offset: 1}} className='text-center text-md-start mb-4 mb-md-0'>
            <h2 className='text-light mb-4'>Get the top-rated app!</h2>
            <p className='fs-lg text-light opacity-70 mb-md-5'>Download Finder App and join the community of car enthusiasts. Don&apos;t stop your car search when you leave your computer with our Android and iOS app!</p>
            <div className='d-flex flex-column flex-sm-row justify-content-center justify-content-md-start'>
              <MarketButton href='#' market='apple' target='_blank' className='me-sm-3 mb-3' />
              <MarketButton href='#' market='google' target='_blank' className='mb-3' />
            </div>
          </Col>
          <Col md={5} lg={6}>
            <div className='d-flex mx-auto' style={{maxWidth: '460px'}}>
              <ImageLoader
                src='/images/car-finder/home/mobile-app.png'
                width={920}
                height={898}
                alt='Mobile App'
                light='true'
              />
            </div>
          </Col>
        </Row>
      </Container>


      {/* Latest news (carousel on screens <900px) */}
      <Container as='section' className='pb-4 pb-sm-5 mb-2 mb-md-4'>
        <div className='d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4 pb-sm-2'>
          <h2 className='h3 text-light mb-2 mb-sm-0'>Latest news</h2>
          <Button as={Link} href='/car-finder/blog' variant='link btn-light fw-normal px-0'>
            Go to blog
            <i className='fi-arrow-long-right fs-sm mt-0 ps-1 ms-2'></i>
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
            900: { slidesPerView: 3 }
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
                light
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External pagination (bullets) */}
        <div id='bulletsBlog' className='swiper-pagination swiper-pagination-light position-relative bottom-0 mt-4 pb-3'></div>
      </Container>
    </CarFinderPageLayout>
  )
}

export default HomePage
