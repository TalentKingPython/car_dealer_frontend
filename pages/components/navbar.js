// Navbar component documentation page with code examples

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Fade from 'react-bootstrap/Fade'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Code from '../../components/Code'
import StarRating from '../../components/StarRating'


const NavbarPage = () => {

  const anchorLinks = [
    {
      label: 'Light version',
      anchor: 'navbar-light'
    },
    {
      label: 'Dark version',
      anchor: 'navbar-dark'
    },
    {
      label: 'Alternative color schemes',
      anchor: 'navbar-alt-colors'
    },
    {
      label: 'User account dropdown',
      anchor: 'navbar-user'
    },
    {
      label: 'Search field',
      anchor: 'navbar-search'
    },
    {
      label: 'Offcanvas menu',
      anchor: 'navbar-offcanvas'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Navbar'
      pageDescription='Responsive navigation header that includes support for branding, navigation, and more.'
      activeNav='/components/navbar'
      docsLink='https://react-bootstrap.github.io/components/navbar/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Light version */}
      <section id='navbar-light' className='pb-5 mb-md-2'>
        <Tab.Container defaultActiveKey='preview' transition={Fade}>
          <h2 className='h5 mb-3'>Light version</h2>
          <Card className='border-0'>
            <Card.Header className='ps-0'>
              <Nav variant='tabs'>
                <Nav.Item>
                  <Nav.Link as='button' eventKey='preview'>
                    <i className='fi-eye-on me-2'></i>
                    Preview
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as='button' eventKey='code'>
                    <i className='fi-code me-2'></i>
                    Code
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body className='px-0 pb-0'>
              <Tab.Content>
                <Tab.Pane eventKey='preview'>
                  <Navbar bg='light' expand='lg' className='shadow-sm rounded'>
                    <Container className='px-3'>
                      <Navbar.Brand as={Link} href='#' className='me-2 me-xl-4'>
                        <Image src='/images/logo/logo-dark.svg' width={116} height={32} alt='Finder' />
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls='light-navbar-nav' className='ms-auto' />
                      <Button as={Link} href='#' variant='primary' size='sm' className='order-lg-3 ms-2'>
                        <i className='fi-plus me-2'></i>
                        Add<span className='d-none d-sm-inline'> listing</span>
                      </Button>
                      <Navbar.Collapse id='light-navbar-nav' className='order-lg-2'>
                        <Nav>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#home' active>Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#link'>Link</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as={Dropdown}>
                            <Dropdown.Toggle as={Nav.Link}>Dropdown</Dropdown.Toggle>
                            <Dropdown.Menu renderOnMount>
                              <Dropdown.Item as={Link} href='#'>Action link</Dropdown.Item>
                              <Dropdown>
                                <Dropdown.Toggle as={Dropdown.Item}>Dropdown</Dropdown.Toggle>
                                <Dropdown.Menu renderOnMount>
                                  <Dropdown.Item as={Link} href='#'>Action link</Dropdown.Item>
                                  <Dropdown.Item as={Link} href='#'>Another action</Dropdown.Item>
                                  <Dropdown.Item as={Link} href='#'>Something else here</Dropdown.Item>
                                  <Dropdown.Item as={Link} href='#'>Yet another link</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <Dropdown.Item as={Link} href='#'>Another action</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item as={Link} href='#'>Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#disabled' disabled>Disabled</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                </Tab.Pane>
                <Tab.Pane eventKey='code'>
                  <Code language='jsx'>{`import Link from 'next/link'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

{/* Light navbar: Dark links against light background */}
<Navbar bg='light' expand='lg'>
  <Container>
    
    {/* Logo (Brand) */}
    <Navbar.Brand as={Link} href='#' className='me-2 me-xl-4'>
      <Image src='/images/logo/logo-dark.svg' width={116} height={32} alt='Finder' />
    </Navbar.Brand>

    {/* Mobile menu toggle */}
    <Navbar.Toggle aria-controls='light-navbar-nav' className='ms-auto' />

    {/* Action button */}
    <Button as={Link} href='#' variant='primary' size='sm' className='order-lg-3 ms-2'>
      <i className='fi-plus me-2'></i>
      Add<span className='d-none d-sm-inline'> listing</span>
    </Button>

    {/* Responsive Navbar nav (Menu) */}
    <Navbar.Collapse id='light-navbar-nav' className='order-lg-2'>
      <Nav>
        <Nav.Item>
          <Nav.Link as={Link} href='#home' active>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} href='#link'>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as={Dropdown}>
          <Dropdown.Toggle as={Nav.Link}>Dropdown</Dropdown.Toggle>
          <Dropdown.Menu renderOnMount>
            <Dropdown.Item as={Link} href='#'>Action link</Dropdown.Item>
            <Dropdown>
              <Dropdown.Toggle as={Dropdown.Item}>Dropdown</Dropdown.Toggle>
              <Dropdown.Menu renderOnMount>
                <Dropdown.Item as={Link} href='#'>Action link</Dropdown.Item>
                <Dropdown.Item as={Link} href='#'>Another action</Dropdown.Item>
                <Dropdown.Item as={Link} href='#'>Something else here</Dropdown.Item>
                <Dropdown.Item as={Link} href='#'>Yet another link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown.Item as={Link} href='#'>Another action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} href='#'>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} href='#disabled' disabled>Disabled</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>`}</Code>
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </section>


      {/* Dark version */}
      <section id='navbar-dark' className='pb-5 mb-md-2'>
        <Tab.Container defaultActiveKey='preview' transition={Fade}>
          <h2 className='h5 mb-3'>Dark version</h2>
          <Card className='border-0'>
            <Card.Header className='ps-0'>
              <Nav variant='tabs'>
                <Nav.Item>
                  <Nav.Link as='button' eventKey='preview'>
                    <i className='fi-eye-on me-2'></i>
                    Preview
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as='button' eventKey='code'>
                    <i className='fi-code me-2'></i>
                    Code
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body className='px-0 pb-0'>
              <Tab.Content>
                <Tab.Pane eventKey='preview'>
                  <Navbar bg='dark' variant='dark' expand='lg' className='rounded'>
                    <Container className='px-3'>
                      <Navbar.Brand as={Link} href='#' className='me-2 me-xl-4'>
                        <Image src='/images/logo/logo-light.svg' width={116} height={32} alt='Finder' />
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls='dark-navbar-nav' className='ms-auto' />
                      <Button as={Link} href='#' variant='primary' size='sm' className='order-lg-3 ms-2'>
                        <i className='fi-plus me-2'></i>
                        Add<span className='d-none d-sm-inline'> listing</span>
                      </Button>
                      <Navbar.Collapse id='dark-navbar-nav' className='order-lg-2'>
                        <Nav>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#home' active>Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#link'>Link</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as={Dropdown}>
                            <Dropdown.Toggle as={Nav.Link}>Dropdown</Dropdown.Toggle>
                            <Dropdown.Menu renderOnMount variant='dark'>
                              <Dropdown.Item as={Link} href='#'>Action link</Dropdown.Item>
                              <Dropdown>
                                <Dropdown.Toggle as={Dropdown.Item}>Dropdown</Dropdown.Toggle>
                                <Dropdown.Menu renderOnMount variant='dark'>
                                  <Dropdown.Item as={Link} href='#'>Action link</Dropdown.Item>
                                  <Dropdown.Item as={Link} href='#'>Another action</Dropdown.Item>
                                  <Dropdown.Item as={Link} href='#'>Something else here</Dropdown.Item>
                                  <Dropdown.Item as={Link} href='#'>Yet another link</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <Dropdown.Item as={Link} href='#'>Another action</Dropdown.Item>
                              <Dropdown.Divider as='div' />
                              <Dropdown.Item as={Link} href='#'>Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#disabled' disabled>Disabled</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                </Tab.Pane>
                <Tab.Pane eventKey='code'>
                  <Code language='jsx'>{`import Link from 'next/link'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

{/* Dark navbar: Light links against dark background */}
<Navbar bg='dark' variant='dark' expand='lg'>
  <Container>

    {/* Logo (Brand) */}
    <Navbar.Brand as={Link} href='#' className='me-2 me-xl-4'>
      <Image src='/images/logo/logo-light.svg' width={116} height={32} alt='Finder' />
    </Navbar.Brand>

    {/* Mobile menu toggle */}
    <Navbar.Toggle aria-controls='dark-navbar-nav' className='ms-auto' />

    {/* Action button */}
    <Button as={Link} href='#' variant='primary' size='sm' className='order-lg-3 ms-2'>
      <i className='fi-plus me-2'></i>
      Add<span className='d-none d-sm-inline'> listing</span>
    </Button>

    {/* Responsive Navbar nav (Menu) */}
    <Navbar.Collapse id='dark-navbar-nav' className='order-lg-2'>
      <Nav>
        <Nav.Item>
          <Nav.Link as={Link} href='#home' active>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} href='#link'>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as={Dropdown}>
          <Dropdown.Toggle as={Nav.Link}>Dropdown</Dropdown.Toggle>
          <Dropdown.Menu renderOnMount variant='dark'>
            <Dropdown.Item as={Link} href='#'>Action link</Dropdown.Item>
            <Dropdown>
              <Dropdown.Toggle as={Dropdown.Item}>Dropdown</Dropdown.Toggle>
              <Dropdown.Menu renderOnMount variant='dark'>
                <Dropdown.Item as={Link} href='#'>Action link</Dropdown.Item>
                <Dropdown.Item as={Link} href='#'>Another action</Dropdown.Item>
                <Dropdown.Item as={Link} href='#'>Something else here</Dropdown.Item>
                <Dropdown.Item as={Link} href='#'>Yet another link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown.Item as={Link} href='#'>Another action</Dropdown.Item>
            <Dropdown.Divider as='div' />
            <Dropdown.Item as={Link} href='#'>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} href='#disabled>Disabled</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>`}</Code>
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </section>


      {/* Alternative color schemes */}
      <section id='navbar-alt-colors' className='pb-5 mb-md-2'>
        <Tab.Container defaultActiveKey='preview' transition={Fade}>
          <h2 className='h5 mb-3'>Alternative color schemes</h2>
          <Card className='border-0'>
            <Card.Header className='ps-0'>
              <Nav variant='tabs'>
                <Nav.Item>
                  <Nav.Link as='button' eventKey='preview'>
                    <i className='fi-eye-on me-2'></i>
                    Preview
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as='button' eventKey='code'>
                    <i className='fi-code me-2'></i>
                    Code
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body className='px-0 pb-0'>
              <Tab.Content>
                <Tab.Pane eventKey='preview'>
                  <Navbar bg='accent' variant='dark' expand='lg' className='rounded mb-3'>
                    <Container className='px-3'>
                      <Navbar.Brand as={Link} href='#' className='me-2 me-xl-4'>
                        <Image src='/images/logo/logo-light.svg' width={116} height={32} alt='Finder' />
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls='primary-navbar-nav' className='ms-auto' />
                      <Button as={Link} href='#' variant='primary' size='sm' className='order-lg-3 ms-2'>
                        <i className='fi-plus me-2'></i>
                        Add<span className='d-none d-sm-inline'> listing</span>
                      </Button>
                      <Navbar.Collapse id='primary-navbar-nav' className='order-lg-2'>
                        <Nav>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#home' active>Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#features'>Features</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#pricing'>Pricing</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#about'>About</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                  <Navbar bg='secondary' expand='lg' className='rounded'>
                    <Container className='px-3'>
                      <Navbar.Brand as={Link} href='#' className='me-2 me-xl-4'>
                        <Image src='/images/logo/logo-dark.svg' width={116} height={32} alt='Finder' />
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls='primary-navbar-nav' className='ms-auto' />
                      <Button as={Link} href='#' variant='primary' size='sm' className='order-lg-3 ms-2'>
                        <i className='fi-plus me-2'></i>
                        Add<span className='d-none d-sm-inline'> listing</span>
                      </Button>
                      <Navbar.Collapse id='primary-navbar-nav' className='order-lg-2'>
                        <Nav>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#home' active>Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#features'>Features</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#pricing'>Pricing</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#about'>About</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                </Tab.Pane>
                <Tab.Pane eventKey='code'>
                  <Code language='jsx'>{`import Navbar from 'react-bootstrap/Navbar'

{/* Accent navbar */}
<Navbar bg='accent' variant='dark' expand='lg'>
  ...
</Navbar>

{/* Secondary navbar */}
<Navbar bg='secondary' variant='light' expand='lg'>
  ...
</Navbar>`}</Code>
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </section>


      {/* User account dropdown */}
      <section id='navbar-user' className='pb-5 mb-md-2'>
        <Tab.Container defaultActiveKey='preview' transition={Fade}>
          <h2 className='h5 mb-3'>User account dropdown</h2>
          <Card className='border-0'>
            <Card.Header className='ps-0'>
              <Nav variant='tabs'>
                <Nav.Item>
                  <Nav.Link as='button' eventKey='preview'>
                    <i className='fi-eye-on me-2'></i>
                    Preview
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as='button' eventKey='code'>
                    <i className='fi-code me-2'></i>
                    Code
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body className='px-0 pb-0'>
              <Tab.Content>
                <Tab.Pane eventKey='preview'>
                  <Navbar bg='light' expand='lg' className='shadow-sm rounded'>
                    <Container className='px-3'>
                      <Navbar.Brand as={Link} href='#' className='me-2 me-xl-4'>
                        <Image src='/images/logo/logo-dark.svg' width={116} height={32} alt='Finder' />
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls='user-navbar-nav' className='ms-auto' />
                      <Dropdown className='order-lg-3 ms-2'>
                        <Dropdown.Toggle as={Nav.Link} className='dropdown-toggle-flush py-1 px-0'>
                          <Image src='/images/avatars/02.jpg' width={40} height={40} className='rounded-circle' alt='User' />
                        </Dropdown.Toggle>
                        <Dropdown.Menu renderOnMount align='end'>
                          <div className='d-flex align-items-start border-bottom px-3 py-1 mb-2' style={{width: '16rem'}}>
                            <Image src='/images/avatars/01.jpg' width={48} height={48} className='rounded-circle' alt='User' />
                            <div className='ps-2'>
                              <h6 className='fs-base mb-0'>Robert Fox</h6>
                              <StarRating size='sm' rating={5} />
                              <div className='fs-xs py-2'>
                                (302) 555-0107<br/>robert_fox@gmail.com
                              </div>
                            </div>
                          </div>
                          <Dropdown.Item as={Link} href='#'>
                            <i className='fi-user opacity-60 me-2'></i>
                            Personal Info
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} href='#'>
                            <i className='fi-lock opacity-60 me-2'></i>
                            Password &amp; Security
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} href='#'>
                            <i className='fi-list opacity-60 me-2'></i>
                            My Listings
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} href='#'>
                            <i className='fi-heart opacity-60 me-2'></i>
                            Wishlist
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} href='#'>
                            <i className='fi-star opacity-60 me-2'></i>
                            Reviews
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} href='#'>
                            <i className='fi-bell opacity-60 me-2'></i>
                            Notifications
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item as={Link} href='#'>Help</Dropdown.Item>
                          <Dropdown.Item as={Link} href='#'>Sign Out</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Navbar.Collapse id='user-navbar-nav' className='order-lg-2'>
                        <Nav>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#home' active>Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#features'>Features</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#pricing'>Pricing</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#about'>About</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                </Tab.Pane>
                <Tab.Pane eventKey='code'>
                  <Code language='jsx'>{`import Link from 'next/link'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

{/* Navbar with user account dropdown when the user is logged in */}
<Navbar bg='light' expand='lg'>
  <Container>
    <Navbar.Brand as={Link} href='#' className='me-2 me-xl-4'>
      <Image src='/images/logo/logo-dark.svg' width={116} height={32} alt='Finder' />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='user-navbar-nav' className='ms-auto' />

    {/* User account dropdown */}
    <Dropdown className='order-lg-3 ms-2'>
      <Dropdown.Toggle as={Nav.Link} className='dropdown-toggle-flush py-1 px-0'>
        <Image src='/images/avatars/02.jpg' width={40} height={40} className='rounded-circle' alt='User' />
      </Dropdown.Toggle>
      <Dropdown.Menu renderOnMount align='end'>
        <div className='d-flex align-items-start border-bottom px-3 py-1 mb-2' style={{width: '16rem'}}>
          <Image src='/images/avatars/01.jpg' width={48} height={48} className='rounded-circle' alt='User' />
          <div className='ps-2'>
            <h6 className='fs-base mb-0'>Robert Fox</h6>
            <StarRating size='sm' rating={5} />
            <div className='fs-xs py-2'>
              (302) 555-0107<br/>robert_fox@gmail.com
            </div>
          </div>
        </div>
        <Dropdown.Item as={Link} href='#'>
          <i className='fi-user opacity-60 me-2'></i>
          Personal Info
        </Dropdown.Item>
        <Dropdown.Item as={Link} href='#'>
          <i className='fi-lock opacity-60 me-2'></i>
          Password &amp; Security
        </Dropdown.Item>
        <Dropdown.Item as={Link} href='#'>
          <i className='fi-list opacity-60 me-2'></i>
          My Listings
        </Dropdown.Item>
        <Dropdown.Item as={Link} href='#'>
          <i className='fi-heart opacity-60 me-2'></i>
          Wishlist
        </Dropdown.Item>
        <Dropdown.Item as={Link} href='#'>
          <i className='fi-star opacity-60 me-2'></i>
          Reviews
        </Dropdown.Item>
        <Dropdown.Item as={Link} href='#'>
          <i className='fi-bell opacity-60 me-2'></i>
          Notifications
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item as={Link} href='#'>Help</Dropdown.Item>
        <Dropdown.Item as={Link} href='#'>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    {/* Navbar nav */}
    <Navbar.Collapse id='user-navbar-nav' className='order-lg-2'>
      <Nav>
        <Nav.Item>
          <Nav.Link as={Link} href='#home' active>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} href='#features'>Features</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} href='#pricing'>Pricing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} href='#about'>About</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>`}</Code>
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </section>


      {/* Search field */}
      <section id='navbar-search' className='pb-5 mb-md-2'>
        <Tab.Container defaultActiveKey='preview' transition={Fade}>
          <h2 className='h5 mb-3'>Search field</h2>
          <Card className='border-0'>
            <Card.Header className='ps-0'>
              <Nav variant='tabs'>
                <Nav.Item>
                  <Nav.Link as='button' eventKey='preview'>
                    <i className='fi-eye-on me-2'></i>
                    Preview
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as='button' eventKey='code'>
                    <i className='fi-code me-2'></i>
                    Code
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body className='px-0 pb-0'>
              <Tab.Content>
                <Tab.Pane eventKey='preview'>
                  <Navbar bg='light' expand='lg' className='shadow-sm rounded'>
                    <Container className='px-3'>
                      <Navbar.Brand as={Link} href='#' className='flex-shrink-0 me-2 me-xl-4'>
                        <Image src='/images/logo/logo-dark.svg' width={116} height={32} alt='Finder' />
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls='user-navbar-nav' className='ms-auto' />
                      <InputGroup size='sm' className='d-none d-lg-flex ps-2 ps-xxl-5 order-lg-3'>
                        <i className='fi-search position-absolute text-muted top-50 translate-middle-y ms-2'></i>
                        <FormControl type='search' className='border-top-0 border-start-0 border-end-0 rounded-0' placeholder='Search site...' />
                      </InputGroup>
                      <Navbar.Collapse id='user-navbar-nav' className='order-lg-2'>
                        <div className='d-lg-none bg-secondary border mx-n3 p-3 mt-3'>
                          <InputGroup>
                            <i className='fi-search position-absolute text-muted top-50 translate-middle-y ps-1 ms-2'></i>
                            <FormControl type='search' className='rounded-2' placeholder='Search site...' />
                          </InputGroup>
                        </div>
                        <Nav>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#home' active>Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#features'>Features</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#pricing'>Pricing</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link as={Link} href='#about'>About</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                </Tab.Pane>
                <Tab.Pane eventKey='code'>
                  <Code language='jsx'>{`import Link from 'next/link'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

{/* Navbar with search field */}
<Navbar bg='light' expand='lg'>
  <Container>
    <Navbar.Brand as={Link} href='#' className='flex-shrink-0 me-2 me-xl-4'>
      <Image src='/images/logo/logo-dark.svg' width={116} height={32} alt='Finder' />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='user-navbar-nav' className='ms-auto' />

    {/* Search visible on desktop */}
    <InputGroup size='sm' className='d-none d-lg-flex ps-2 ps-xxl-5 order-lg-3'>
      <i className='fi-search position-absolute text-muted top-50 translate-middle-y ms-2'></i>
      <FormControl type='search' className='border-top-0 border-start-0 border-end-0 rounded-0' placeholder='Search site...' />
    </InputGroup>

    <Navbar.Collapse id='user-navbar-nav' className='order-lg-2'>

      {/* Search visible on mobile */}
      <div className='d-lg-none bg-secondary border mx-n3 p-3 mt-3'>
        <InputGroup>
          <i className='fi-search position-absolute text-muted top-50 translate-middle-y ps-1 ms-2'></i>
          <FormControl type='search' className='rounded-2' placeholder='Search site...' />
        </InputGroup>
      </div>

      {/* Navbar nav */}
      <Nav>
        <Nav.Item>
          <Nav.Link as={Link} href='#home' active>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} href='#features'>Features</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} href='#pricing'>Pricing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} href='#about'>About</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>`}</Code>
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </section>


      {/* Offcanvas menu */}
      <section id='navbar-offcanvas' className='pb-5 mb-md-2'>
        <Tab.Container defaultActiveKey='preview' transition={Fade}>
          <h2 className='h5 mb-3'>Offcanvas menu</h2>
          <Card className='border-0'>
            <Card.Header className='ps-0'>
              <Nav variant='tabs'>
                <Nav.Item>
                  <Nav.Link as='button' eventKey='preview'>
                    <i className='fi-eye-on me-2'></i>
                    Preview
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as='button' eventKey='code'>
                    <i className='fi-code me-2'></i>
                    Code
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body className='px-0 pb-0'>
              <Tab.Content>
                <Tab.Pane eventKey='preview'>
                  <Navbar bg='light' expand='true' className='shadow-sm rounded'>
                    <Container className='px-3'>
                      <Navbar.Brand as={Link} href='#' className='flex-shrink-0 me-2 me-xl-4'>
                        <Image src='/images/logo/logo-dark.svg' width={116} height={32} alt='Finder' />
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls='offcanvas-navbar' className='ms-auto' />
                      <Navbar.Offcanvas
                        id='offcanvas-navbar'
                        aria-labelledby='offcanvas-navbar-label'
                        placement='end'
                      >
                        <Offcanvas.Header closeButton className='border-bottom'>
                          <Offcanvas.Title as='h6' id='offcanvasNavbarLabel'>
                            Offcanvas menu
                          </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          <Nav as='ul' className='flex-column m-0'>
                            <Nav.Item as='li' className='px-1 mb-0'>
                              <Nav.Link as={Link} href='#home' active>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as='li' className='px-1 mb-0'>
                              <Nav.Link as={Link} href='#features'>Features</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as='li' className='px-1 mb-0'>
                              <Nav.Link as={Link} href='#pricing'>Pricing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as='li' className='px-1 mb-0'>
                              <Nav.Link as={Link} href='#about'>About</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Offcanvas.Body>
                        <Offcanvas.Header className='border-top'>
                          <Button as={Link} href='#signup' className='w-100'>
                            <i className='fi-user me-2'></i>
                            Sign up
                          </Button>
                        </Offcanvas.Header>
                      </Navbar.Offcanvas>
                    </Container>
                  </Navbar>
                </Tab.Pane>
                <Tab.Pane eventKey='code'>
                  <Code language='jsx'>{`import Link from 'next/link'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import InputGroup from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'

{/* Navbar with offcanvas menu */}
<Navbar bg='light' expand='true'>
  <Container>
    <Navbar.Brand as={Link} href='#' className='flex-shrink-0 me-2 me-xl-4'>
      <Image src='/images/logo/logo-dark.svg' width={116} height={32} alt='Finder' />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='offcanvas-navbar' className='ms-auto' />

    {/* Offcanvas menu */}
    <Navbar.Offcanvas
      id='offcanvas-navbar'
      aria-labelledby='offcanvas-navbar-label'
      placement='end'
    >
      <Offcanvas.Header closeButton className='border-bottom'>
        <Offcanvas.Title as='h6' id='offcanvasNavbarLabel'>
          Offcanvas menu
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav as='ul' className='flex-column m-0'>
          <Nav.Item as='li' className='px-1 mb-0'>
            <Nav.Link as={Link} href='#home' active>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li' className='px-1 mb-0'>
            <Nav.Link as={Link} href='#features'>Features</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li' className='px-1 mb-0'>
            <Nav.Link as={Link} href='#pricing'>Pricing</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li' className='px-1 mb-0'>
            <Nav.Link as={Link} href='#about'>About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
      <Offcanvas.Header className='border-top'>
        <Button as={Link} href='#signup' className='w-100'>
          <i className='fi-user me-2'></i>
          Sign up
        </Button>
      </Offcanvas.Header>
    </Navbar.Offcanvas>
  </Container>
</Navbar>`}</Code>
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </section>
    </ComponentPageLayout>
  )
}

export default NavbarPage
