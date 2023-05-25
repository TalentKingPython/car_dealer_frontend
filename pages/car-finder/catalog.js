import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pagination from 'react-bootstrap/Pagination'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import VehicleCard from '../../components/VehicleCard'
import SimpleBar from 'simplebar-react'
import ReactSlider from 'react-slider'
import 'simplebar/dist/simplebar.min.css'

const CatalogPage = () => {
    
  // Add extra class to body
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('fixed-bottom-btn')
    return () => body.classList.remove('fixed-bottom-btn')
  })

  // Query param (Switch between Grid and List view)
  const router = useRouter(),
        viewParam = router.query.view === 'list' ? 'list' : 'grid'

  // Offcanvas show/hide
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Selection array
  const selection = ['Under 2019', 'Crossover', 'Sedan', 'SUV', 'Diesel', 'Gasoline', 'Hybrid']

  // Body type checkboxes array
  const bodyType = [
    {value: 'Sedan', checked: true},
    {value: 'SUV', checked: true},
    {value: 'Wagon', checked: false},
    {value: 'Crossover', checked: true},
    {value: 'Coupe', checked: false},
    {value: 'Pickup', checked: false},
    {value: 'Sport Coupe', checked: false},
    {value: 'Compact', checked: false},
    {value: 'Convertible', checked: false},
    {value: 'Family MPV', checked: false}
  ]

  // Drivetrain checkboxes array
  const drivetrain = [
    {value: 'AWD/4WD', checked: false},
    {value: 'Front Wheel Drive', checked: false},
    {value: 'Rear Wheel Drive', checked: false}
  ]

  // Fuel type checkboxes array
  const fuelType = [
    {value: 'Diesel', checked: true},
    {value: 'Electric', checked: false},
    {value: 'Gasoline', checked: true},
    {value: 'Hybrid', checked: true},
    {value: 'Hydrogen', checked: false},
    {value: 'Plug-in-Hybrid', checked: false}
  ]

  // Transmission checkboxes array
  const transmission = [
    {value: 'Automatic', checked: false},
    {value: 'Manual', checked: false}
  ]

  // Color checkboxes array
  const color = [
    {value: 'Amber', checked: false},
    {value: 'Azure', checked: false},
    {value: 'Beige', checked: false},
    {value: 'Black', checked: false},
    {value: 'Blue', checked: false},
    {value: 'Brown', checked: false},
    {value: 'Camouflage green', checked: false},
    {value: 'Charcoal', checked: false},
    {value: 'Gray', checked: false},
    {value: 'Green', checked: false},
    {value: 'Gold', checked: false},
    {value: 'Purple', checked: false},
    {value: 'Red', checked: false},
    {value: 'White', checked: false},
    {value: 'Yellow', checked: false}
  ]

  // Seller checkboxes array
  const seller = [
    {value: 'Dealers only', checked: false},
    {value: 'Private Sellers Only', checked: false}
  ]

  // Price range slider
  const PriceRange = () => {
    const [minPrice, setMinPrice] = useState(25000)
    const [maxPrice, setMaxPrice] = useState(65000)

    const handleInputChange = e => {
      if (e.target.name === 'minPrice') {
        setMinPrice(e.target.value)
      } else {
        setMaxPrice(e.target.value)
      }
    }

    const handleSliderChange = sliderVal => {
      let sliderMinVal = sliderVal[0]
      let sliderMaxVal = sliderVal[1]
      setMinPrice(sliderMinVal)
      setMaxPrice(sliderMaxVal)
    }

    return (
      <>
        <div className='range-slider-light'>
          <ReactSlider
            className='range-slider range-slider-light'
            thumbClassName='range-slider-handle'
            trackClassName='range-slider-track'
            min={4000}
            max={100000}
            value={[minPrice, maxPrice]}
            ariaLabel={['Lower handle', 'Upper handle']}
            ariaValuetext={state => `Handle value ${state.valueNow}`}
            step={1000}
            renderThumb={(props, state) => (<div {...props}>
              <div className='range-slider-tooltip'>$ {state.valueNow}</div>
            </div>)}
            pearling
            minDistance={5000}
            onChange={handleSliderChange}
          />
        </div>
        <div className='d-flex align-items-center'>
          <div className='w-100 pe-2'>
            <Form.Control
              type='number'
              step={1000}
              name='minPrice'
              value={minPrice}
              onChange={handleInputChange}
              className='form-control-light'
            />
          </div>
          <div className='text-muted'>—</div>
          <div className='w-100 ps-2'>
            <Form.Control
              type='number'
              step={1000}
              name='maxPrice'
              value={maxPrice}
              onChange={handleInputChange}
              className='form-control-light'
            />
          </div>
        </div>
      </>
    )
  }  

  // List of cars array
  const cars = [
    {
      href: '/car-finder/single',
      img: viewParam === 'list' ? ['/images/car-finder/catalog/09.jpg', '/images/car-finder/catalog/09.jpg'] : ['/images/car-finder/catalog/01.jpg', '/images/car-finder/catalog/01.jpg'],
      title: 'Ford Truck Lifted',
      year: '1995',
      price: '$24,000',
      location: 'Chicago',
      badges: [['info', 'Used']],
      footer: ['278K mi', 'Manual', 'Diesel']
    },
    {
      href: '/car-finder/single',
      img: viewParam === 'list' ? ['/images/car-finder/catalog/10.jpg', '/images/car-finder/catalog/10.jpg'] : ['/images/car-finder/catalog/02.jpg', '/images/car-finder/catalog/02.jpg'],
      title: 'Mercedes Benz C300 Sport',
      year: '2018',
      price: '$53,400',
      location: 'San Francisco',
      badges: [['info', 'Used'], ['success', 'Certified']],
      footer: ['35K mi', 'Automatic', 'Hybrid']
    },
    {
      href: '/car-finder/single',
      img: viewParam === 'list' ? ['/images/car-finder/catalog/11.jpg', '/images/car-finder/catalog/11.jpg'] : ['/images/car-finder/catalog/03.jpg', '/images/car-finder/catalog/03.jpg'],
      title: 'Mazda MX-5 Miata Convertible',
      year: '2019',
      price: '$29,700',
      location: 'Los Angeles',
      badges: [['info', 'Used']],
      footer: ['18K mi', 'Manual', 'Gasoline']
    },
    {
      href: '/car-finder/single',
      img: viewParam === 'list' ? ['/images/car-finder/catalog/12.jpg', '/images/car-finder/catalog/12.jpg'] : ['/images/car-finder/catalog/04.jpg', '/images/car-finder/catalog/04.jpg'],
      title: 'Nissan 370Z Nismo',
      year: '2019',
      price: '$37,900',
      location: 'New York',
      badges: [['info', 'Used']],
      footer: ['16K mi', 'Automatic', 'Gasoline']
    },
    {
      href: '/car-finder/single',
      img: viewParam === 'list' ? ['/images/car-finder/catalog/13.jpg', '/images/car-finder/catalog/13.jpg'] : ['/images/car-finder/catalog/05.jpg', '/images/car-finder/catalog/05.jpg'],
      title: 'BMW 640 XI Gran Turismo',
      year: '2018',
      price: '$44,300',
      location: 'New Jersey',
      badges: [['info', 'Used'], ['success', 'Certified']],
      footer: ['10K mi', 'Automatic', 'Gasoline']
    },
    {
      href: '/car-finder/single',
      img: viewParam === 'list' ? ['/images/car-finder/catalog/14.jpg', '/images/car-finder/catalog/14.jpg'] : ['/images/car-finder/catalog/06.jpg', '/images/car-finder/catalog/06.jpg'],
      title: 'Toyota GT86',
      year: '2015',
      price: '$16,000',
      location: 'Chicago',
      badges: [['info', 'Used']],
      footer: ['46K mi', 'Manual', 'Gasoline']
    },
    {
      href: '/car-finder/single',
      img: viewParam === 'list' ? ['/images/car-finder/catalog/15.jpg', '/images/car-finder/catalog/15.jpg'] : ['/images/car-finder/catalog/07.jpg', '/images/car-finder/catalog/07.jpg'],
      title: 'Volkswagen GTI S',
      year: '2019',
      price: '$29,000',
      location: 'San Francisco',
      badges: [['info', 'Used'], ['success', 'Certified']],
      footer: ['25K mi', 'Automatic', 'Hybrid']
    },
    {
      href: '/car-finder/single',
      img: viewParam === 'list' ? ['/images/car-finder/catalog/16.jpg', '/images/car-finder/catalog/16.jpg'] : ['/images/car-finder/catalog/08.jpg', '/images/car-finder/catalog/08.jpg'],
      title: 'Ford Explorer XLT',
      year: '2017',
      price: '$26,950',
      location: 'Kansas',
      badges: [['info', 'Used']],
      footer: ['34K mi', 'Manual', 'Diesel']
    }
  ]


  return (
    <CarFinderPageLayout
      pageTitle={`Catalog ${viewParam === 'list' ? 'List' : 'Grid'}`}
      activeNav='Catalog'
    >
      <Container className='mt-5 mb-md-4 py-5'>
        <Row className='py-md-1'>
        

          {/* Filters sidebar (Offcanvas on mobile < 992px) */}
          <Col
            as='aside'
            lg={3}
            className='pe-xl-4'
          >
            <Offcanvas
              show={show}
              onHide={handleClose}
              responsive='lg'
              className='bg-dark'
            >
              <Offcanvas.Header className='bg-transparent' closeButton closeVariant='white'>
                <Offcanvas.Title as='h5' className='text-light'>Filters</Offcanvas.Title>
              </Offcanvas.Header>

              {/* Nav tabs */}
              <Offcanvas.Header className='d-block bg-transparent border-bottom border-light pt-0 pt-lg-4 px-lg-0'>
                <Nav variant='tabs nav-tabs-light mb-0' defaultActiveKey='used'>
                  <Nav.Item>
                    <Nav.Link eventKey='new'>Search New</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='used'>Search Used</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Header>

              {/* Offcanvas body */}
              <Offcanvas.Body className='py-lg-4'>

                {/* Selection */}
                <div className='pb-3 mb-4 border-bottom border-light'>
                  <div className='d-flex align-items-center justify-content-between mb-3'>
                    <h3 className='h6 text-light mb-0'>Selection</h3>
                    <Button variant='link btn-light fw-normal fs-sm p-0'>Clear all</Button>
                  </div>
                  <Nav variant='pills nav-pills-light flex-row fs-sm mx-0'>
                    {selection.map((label, indx) => (
                      <Nav.Item key={indx} className='mb-2 me-2'>
                        <Nav.Link as='button' className='px-3'>
                          {label}
                          <i className='fi-x fs-xxs ms-2'></i>
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>

                {/* Location */}
                <div className='pb-4 mb-2'>
                  <h3 className='h6 text-light'>Location</h3>
                  <Form.Select defaultValue='default' className='form-select-light'>
                    <option value='default' disabled>Select location</option>
                    <option value='Chicago'>Chicago</option>
                    <option value='Dallas'>Dallas</option>
                    <option value='Los Angeles'>Los Angeles</option>
                    <option value='New York'>New York</option>
                    <option value='San Diego'>San Diego</option>
                  </Form.Select>
                </div>

                {/* Body Type */}
                <div className='pb-4 mb-2'>
                  <h3 className='h6 text-light'>Body Type</h3>
                  <SimpleBar autoHide={false} className='simplebar-no-autohide simplebar-light' style={{maxHeight: '11rem'}}>
                    {bodyType.map(({value, checked}, indx) => (
                      <Form.Check
                        key={indx}
                        id={`bodyType-${indx}`}
                        value={value}
                        defaultChecked={checked}
                        label={<><span className='fs-sm'>{value}</span></>}
                        className='form-check-light'   
                      />
                    ))}
                  </SimpleBar>
                </div>

                {/* Year */}
                <div className='pb-4 mb-2'>
                  <h3 className='h6 text-light pt-1'>Year</h3>
                  <div className='d-flex align-items-center'>
                    <Form.Select defaultValue='from' className='form-select-light w-100'>
                      <option value='from' disabled>From</option>
                      <option value='2022'>2022</option>
                      <option value='2021'>2021</option>
                      <option value='2020'>2020</option>
                      <option value='2019'>2019</option>
                      <option value='2018'>2018</option>
                      <option value='2017'>2017</option>
                      <option value='2016'>2016</option>
                      <option value='2015'>2015</option>
                    </Form.Select>
                    <div className='mx-2'>&mdash;</div>
                    <Form.Select defaultValue='2019' className='form-select-light w-100'>
                      <option value='to' disabled>To</option>
                      <option value='2022'>2022</option>
                      <option value='2021'>2021</option>
                      <option value='2020'>2020</option>
                      <option value='2019'>2019</option>
                      <option value='2018'>2018</option>
                      <option value='2017'>2017</option>
                      <option value='2016'>2016</option>
                      <option value='2015'>2015</option>
                    </Form.Select>
                  </div>
                </div>

                {/* Make & Model */}
                <div className='pb-4 mb-2'>
                  <h3 className='h6 text-light'>Make &amp; Model</h3>
                  <Form.Select defaultValue='any' className='form-select-light mb-2'>
                    <option value='any'>Any make</option>
                    <option value='Audi'>Audi</option>
                    <option value='Infiniti'>Infiniti</option>
                    <option value='Honda'>Honda</option>
                    <option value='Hyundai'>Hyundai</option>
                    <option value='Lexus'>Lexus</option>
                    <option value='Mazda'>Mazda</option>
                    <option value='Mitsubishi'>Mitsubishi</option>
                    <option value='Mercedes-Benz'>Mercedes-Benz</option>
                    <option value='Nissan'>Nissan</option>
                    <option value='Opel'>Opel</option>
                    <option value='Renault'>Renault</option>
                    <option value='Toyota'>Toyota</option>
                  </Form.Select>
                  <Form.Select defaultValue='any' className='form-select-light mb-1'>
                    <option value='any'>Any model</option>
                    <option value='Altima'>Altima</option>
                    <option value='Juke'>Juke</option>
                    <option value='Leaf'>Leaf</option>
                    <option value='Maxima'>Maxima</option>
                    <option value='Micra'>Micra</option>
                    <option value='Murano'>Murano</option>
                    <option value='Note'>Note</option>
                    <option value='Pathfinder'>Pathfinder</option>
                    <option value='Patrol'>Patrol</option>
                  </Form.Select>
                </div>

                {/* Price range */}
                <div className='pb-4 mb-2'>
                  <h3 className='h6 text-light'>Price</h3>
                  <PriceRange />
                  <Form.Check
                    type='switch'
                    id='negotiated-price'
                    label={<><span className='fs-sm'>Negotiated price</span></>}
                    className='form-switch-light mt-3'   
                  />
                </div>

                {/* Drivetrain */}
                <div className='pb-4 mb-2'>
                  <h3 className='h6 text-light'>Drivetrain</h3>
                  {drivetrain.map(({value, checked}, indx) => (
                    <Form.Check
                      key={indx}
                      id={`drivetrain-${indx}`}
                      value={value}
                      defaultChecked={checked}
                      label={<><span className='fs-sm'>{value}</span></>}
                      className='form-check-light'   
                    />
                  ))}
                </div>

                {/* Fuel Type */}
                <div className='pb-4 mb-2'>
                  <h3 className='h6 text-light'>Fuel Type</h3>
                  {fuelType.map(({value, checked}, indx) => (
                    <Form.Check
                      key={indx}
                      id={`fuelType-${indx}`}
                      value={value}
                      defaultChecked={checked}
                      label={<><span className='fs-sm'>{value}</span></>}
                      className='form-check-light'   
                    />
                  ))}
                </div>

                {/* Transmission */}
                <div className='pb-4 mb-2'>
                  <h3 className='h6 text-light'>Transmission</h3>
                  {transmission.map(({value, checked}, indx) => (
                    <Form.Check
                      key={indx}
                      id={`transmission-${indx}`}
                      value={value}
                      defaultChecked={checked}
                      label={<><span className='fs-sm'>{value}</span></>}
                      className='form-check-light'   
                    />
                  ))}
                </div>

                {/* Mileage */}
                <div className='pb-4 mb-2'>
                  <h3 className='h6 text-light pt-1'>Mileage</h3>
                  <div className='d-flex align-items-center'>
                    <Form.Control
                      type='number'
                      step={500}
                      placeholder='From'
                      className='form-control-light w-100'
                    />
                    <div className='mx-2'>&mdash;</div>
                    <Form.Control
                      type='number'
                      step={500}
                      placeholder='To'
                      className='form-control-light w-100'
                    />
                  </div>
                </div>

                {/* Color */}
                <div className='pb-4 mb-2'>
                  <h3 className='h6 text-light'>Color</h3>
                  <SimpleBar autoHide={false} className='simplebar-no-autohide simplebar-light' style={{maxHeight: '11rem'}}>
                    {color.map(({value, checked}, indx) => (
                      <Form.Check
                        key={indx}
                        id={`color-${indx}`}
                        value={value}
                        defaultChecked={checked}
                        label={<><span className='fs-sm'>{value}</span></>}
                        className='form-check-light'   
                      />
                    ))}
                  </SimpleBar>
                </div>

                {/* Sellers */}
                <div className='pb-2'>
                  <h3 className='h6 text-light'>Sellers</h3>
                  {seller.map(({value, checked}, indx) => (
                    <Form.Check
                      key={indx}
                      id={`seller-${indx}`}
                      value={value}
                      defaultChecked={checked}
                      label={<><span className='fs-sm'>{value}</span></>}
                      className='form-check-light'   
                    />
                  ))}
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>


          {/* Content (Catalog) */}
          <Col lg={9}>

            {/* Breadcrumb */}
            <Breadcrumb className='breadcrumb-light mb-3 pt-md-2 pt-lg-4'>
              <Breadcrumb.Item linkAs={Link} href='/car-finder'>Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Used cars</Breadcrumb.Item>
            </Breadcrumb>
            
            {/* Page title */}
            <div className='d-flex align-items-center justify-content-between pb-4 mb-2'>
              <h1 className='text-light me-3 mb-0'>Used cars</h1>
              <div className='text-light'>
                <i className='fi-car fs-lg me-2'></i>
                <span className='align-middle'>249 offers</span>
              </div>
            </div>

            {/* Sorting + View switcher */}
            <div className='d-sm-flex align-items-center justify-content-between pb-4 mb-2'>
              <Form.Group controlId='sortbyTop' className='d-flex align-items-center me-sm-4'>
                <Form.Label className='fs-sm fw-normal text-light text-nowrap mb-0 me-2 pe-1'>
                  <i className='fi-arrows-sort mt-n1 me-2'></i>
                  Sort by:
                </Form.Label>
                <Form.Select size='sm' className='form-select-light me-sm-4'>
                  <option value='newest'>Newest</option>
                  <option value='popular'>Popular</option>
                  <option value='priceLH'>Price: Low - High</option>
                  <option value='priceHL'>Price: High - Low</option>
                </Form.Select>
                <div className='d-none d-md-block border-end border-light' style={{height: '1.25rem'}} />
                <div className='d-none d-sm-block fw-bold text-light opacity-70 text-nowrap ps-md-4'>
                  <i className='fi-switch-horizontal me-2'></i>
                  <span className='align-middle'>Compare (0)</span>
                </div>
              </Form.Group>
              <Nav activeKey={`/car-finder/catalog?view=${viewParam}`} className='d-none d-sm-flex'>
                <Nav.Item>
                  <Nav.Link as={Link} href='/car-finder/catalog?view=list' className='nav-link-light px-2' aria-label='List view'>
                    <i className='fi-list'></i>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} href='/car-finder/catalog?view=grid' className='nav-link-light px-2' aria-label='grid view'>
                    <i className='fi-grid'></i>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            {/* Items (Cars) */}
            {viewParam === 'list' ? cars.map((car, indx) => (
              <VehicleCard
                key={indx}
                href={car.href}
                images={car.img.map((img, indx) => [img, 'Image'])}
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
                horizontal
                light
                className='mb-4'
              />          
            )) : <Row>
            {cars.map((car, indx) => (
              <Col key={indx} sm={6} className='mb-4'>
                <VehicleCard
                  href={car.href}
                  images={car.img.map((img, indx) => [img, 473, 242, 'Image'])}
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
              </Col>
            ))}
          </Row>}

            {/* Sorting + Pagination */}
            <div className='d-flex align-items-center justify-content-between py-2'>
              <Form.Group controlId='sortbyBottom' className='d-flex align-items-center me-sm-4'>
                <Form.Label className='fs-sm fw-normal text-light text-nowrap mb-0 me-2 pe-1'>
                  <i className='fi-arrows-sort mt-n1 me-2'></i>
                  Sort by:
                </Form.Label>
                <Form.Select size='sm' className='form-select-light me-sm-4'>
                  <option value='newest'>Newest</option>
                  <option value='popular'>Popular</option>
                  <option value='priceLH'>Price: Low - High</option>
                  <option value='priceHL'>Price: High - Low</option>
                </Form.Select>
                <div className='d-none d-md-block border-end border-light' style={{height: '1.25rem'}} />
                <div className='d-none d-sm-block fw-bold text-light opacity-70 text-nowrap ps-md-4'>
                  <i className='fi-switch-horizontal me-2'></i>
                  <span className='align-middle'>Compare (0)</span>
                </div>
              </Form.Group>
              <nav aria-label='Pagination'>
                <Pagination className='pagination-light mb-0'>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Item>{8}</Pagination.Item>
                  <Pagination.Item>
                    <i className='fi-chevron-right'></i>
                  </Pagination.Item>
                </Pagination>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Filters sidebar toggle button (visible < 991px) */}
      <Button size='sm' className='w-100 rounded-0 fixed-bottom d-lg-none' onClick={handleShow}>
        <i className='fi-filter me-2'></i>
        Filters
      </Button>
    </CarFinderPageLayout>
  )
}

export default CatalogPage
