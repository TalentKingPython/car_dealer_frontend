import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Dropdown from 'react-bootstrap/Dropdown'


const CityGuideSingleHeader = ({ title, activeNav }) => (

  <div className='container pt-5 mt-5'>
    <Breadcrumb className='mb-3 pt-md-3'>
      <Breadcrumb.Item linkAs={Link} href='/city-guide'>Home</Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} href='/city-guide/catalog'>Find accommodation</Breadcrumb.Item>
      <Breadcrumb.Item active>{title}</Breadcrumb.Item>
    </Breadcrumb>

    {/* Title + Wishlist + Sharing */}
    <div className='d-sm-flex align-items-center justify-content-between mb-4 pb-sm-2'>
      <h1 className='h2 me-3 mb-sm-0'>{title}</h1>
      <div className='text-nowrap'>
        <OverlayTrigger
          placement='top'
          overlay={<Tooltip>Add to Favorites</Tooltip>}
        >
          <Button size='xs' variant='icon btn-light-primary shadow-sm rounded-circle'>
            <i className='fi-heart'></i>
          </Button>
        </OverlayTrigger>
        <Dropdown className='d-inline-block'>
          <OverlayTrigger
            placement='top'
            overlay={<Tooltip>Share</Tooltip>}
          >
            <Dropdown.Toggle variant='icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2'>
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

    {/* Nav */}
    <Nav variant='pills border-bottom pb-3 mb-4' defaultActiveKey={activeNav}>
      <Nav.Item>
        <Nav.Link as={Link} href='/city-guide/single'>
          <i className='fi-image me-2'></i>
          Gallery
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} href='/city-guide/single-info'>
          <i className='fi-info-circle me-2'></i>
          Info
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} href='/city-guide/single-reviews'>
          <i className='fi-edit me-2'></i>
          Reviews
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
)

export default CityGuideSingleHeader
