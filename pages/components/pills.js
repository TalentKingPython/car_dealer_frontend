// Pills component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Link from 'next/link'
import Tab from 'react-bootstrap/Tab'
import Fade from 'react-bootstrap/Fade'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Code from '../../components/Code'

const PillsPage = () => {

  const anchorLinks = [
    {
      label: 'Basic example',
      anchor: 'pills-basic'
    },
    {
      label: 'Next.js Link example',
      anchor: 'pills-link'
    },
    {
      label: 'Fill and justify',
      anchor: 'pills-fill'
    },
    {
      label: 'Pills with dropdowns',
      anchor: 'pills-dropdown'
    },
    {
      label: 'Vertical pills',
      anchor: 'pills-vertical'
    },
    {
      label: 'Light pills',
      anchor: 'pills-light'
    },
    {
      label: 'Tabs-like behavior',
      anchor: 'pills-tabs'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Pills'
      pageDescription='A button-like navigation component.'
      activeNav='/components/pills'
      docsLink='https://react-bootstrap.github.io/components/navs/#pills'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Basic example */}
      <ComponentPageSection id='pills-basic' title='Basic example'>
        <Tab.Pane eventKey='preview'>
          <Nav variant='pills' defaultActiveKey='link-1'>
            <Nav.Item>
              <Nav.Link eventKey='link-1'>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-2'>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-3'>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='disabled' disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Nav from 'react-bootstrap/Nav'

{/* Nav pills */}
<Nav variant='pills' defaultActiveKey='link-1'>
  <Nav.Item>
    <Nav.Link eventKey='link-1'>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='link-2'>Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='link-3'>Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='disabled' disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Next.js Link example */}
      <ComponentPageSection id='pills-link' title='Next.js Link example'>
        <Tab.Pane eventKey='preview'>
          <Nav variant='pills' defaultActiveKey='link-1'>
            <Nav.Item>
              <Nav.Link as={Link} href='link-1'>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} href='link-2'>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} href='link-3'>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='disabled' disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'

{/*  Add as={Link} prop to <Nav.Link> so the links work as expected without page reload. */}
<Nav variant='pills' defaultActiveKey='link-1'>
  <Nav.Item>
    <Nav.Link as={Link} href='link-1'>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} href='link-2'>Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} href='link-3'>Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='disabled' disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Fill and justify */}
      <ComponentPageSection id='pills-fill' title='Fill and justify'>
        <Tab.Pane eventKey='preview'>
          <Nav fill variant='pills' defaultActiveKey='link-1' className='mb-4'>
            <Nav.Item>
              <Nav.Link eventKey='link-1'>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-2'>Much longer nav link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-3'>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='disabled' disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav justify variant='pills' defaultActiveKey='link-1'>
            <Nav.Item>
              <Nav.Link eventKey='link-1'>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-2'>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-3'>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='disabled' disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Nav from 'react-bootstrap/Nav'

{/* Nav pills: Fill */}
<Nav fill variant='pills' defaultActiveKey='link-1'>
  <Nav.Item>
    <Nav.Link eventKey='link-1'>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='link-2'>Much longer nav link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='link-3'>Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='disabled' disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>

{/* Nav pills: Justify */}
<Nav justify variant='pills' defaultActiveKey='link-1'>
  <Nav.Item>
    <Nav.Link eventKey='link-1'>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='link-2'>Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='link-3'>Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='disabled' disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Pills with dropdowns */}
      <ComponentPageSection id='pills-dropdown' title='Pills with dropdowns'>
        <Tab.Pane eventKey='preview'>
          <Nav variant='pills' activeKey='link-1'>
            <Nav.Item>
              <Nav.Link eventKey='link-1'>
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as={Dropdown}>
              <Dropdown.Toggle as={Nav.Link}>Dropdown</Dropdown.Toggle>
              <Dropdown.Menu className='my-1'>
                <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
                <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-3'>
                Link
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='disabled' disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

{/* Pills with dropdown example. You can also use <NavDropdown> shortcut instead. */}
<Nav variant='pills' activeKey='link-1'>
  <Nav.Item>
    <Nav.Link eventKey='link-1'>
      Active
    </Nav.Link>
  </Nav.Item>
  <Nav.Item as={Dropdown}>
    <Dropdown.Toggle as={Nav.Link}>Dropdown</Dropdown.Toggle>
    <Dropdown.Menu className='my-1'>
      <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
      <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
      <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='link-3'>
      Link
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='disabled' disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Vertical pills */}
      <ComponentPageSection id='pills-vertical' title='Vertical pills'>
        <Tab.Pane eventKey='preview'>
          <Nav variant='pills' defaultActiveKey='link-1' className='flex-column' style={{maxWidth: '20rem'}}>
            <Nav.Item>
              <Nav.Link eventKey='link-1'>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-2'>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-3'>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='disabled' disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Nav from 'react-bootstrap/Nav'

{/* Vertical pills */}
<Nav variant='pills' defaultActiveKey='link-1' className='flex-column'>
  <Nav.Item>
    <Nav.Link eventKey='link-1'>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='link-2'>Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='link-3'>Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='disabled' disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Light pills */}
      <ComponentPageSection id='pills-light' title='Light pills'>
        <Tab.Pane eventKey='preview' className='m-n3 p-3 bg-dark'>
          <Nav variant='pills nav-pills-light' defaultActiveKey='link-1'>
            <Nav.Item>
              <Nav.Link eventKey='link-1'>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-2'>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-3'>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='disabled' disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Nav from 'react-bootstrap/Nav'

{/* Nav pills light skin */}
<Nav variant='pills nav-pills-light' defaultActiveKey='link-1'>
  <Nav.Item>
    <Nav.Link eventKey='link-1'>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='link-2'>Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='link-3'>Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='disabled' disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Tabs-like behavior */}
      <ComponentPageSection id='pills-tabs' title='Tabs-like behavior'>
        <Tab.Pane eventKey='preview'>
          <Tab.Container defaultActiveKey='home' transition={Fade}>
            <Nav variant='pills' className='mb-3'>
              <Nav.Item>
                <Nav.Link eventKey='home'>
                  <i className='fi-home me-2'></i>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='profile'>
                  <i className='fi-user me-2'></i>
                  Profile
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='messages'>
                  <i className='fi-chat-left me-2'></i>
                  Messages
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey='home'>
                <p className='mb-0'>Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud consectetur culpa veniam sint.</p>
              </Tab.Pane>
              <Tab.Pane eventKey='profile'>
                <p className='mb-0'>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco.</p>
              </Tab.Pane>
              <Tab.Pane eventKey='messages'>
                <p className='mb-0'>Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.</p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Fade from 'react-bootstrap/Fade'
          
<Tab.Container defaultActiveKey='home' transition={Fade}>

  {/* Nav pills */}
  <Nav variant='pills' className='mb-3'>
    <Nav.Item>
      <Nav.Link eventKey='home'>
        <i className='fi-home me-2'></i>
        Home
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey='profile'>
        <i className='fi-user me-2'></i>
        Profile
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey='messages'>
        <i className='fi-chat-left me-2'></i>
        Messages
      </Nav.Link>
    </Nav.Item>
  </Nav>

  {/* Tab content */}
  <Tab.Content>
    <Tab.Pane eventKey='home'>
      <p className='mb-0'>Consequat occaecat ullamco amet non eiusmod nostrud dolore...</p>
    </Tab.Pane>
    <Tab.Pane eventKey='profile'>
      <p className='mb-0'>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa...</p>
    </Tab.Pane>
    <Tab.Pane eventKey='messages'>
      <p className='mb-0'>Est quis nulla laborum officia ad nisi ex nostrud aliquip...</p>
    </Tab.Pane>
  </Tab.Content>
</Tab.Container>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default PillsPage
