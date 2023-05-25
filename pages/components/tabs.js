// Tabs component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Fade from 'react-bootstrap/Fade'
import Nav from 'react-bootstrap/Nav'
import Code from '../../components/Code'

const TabsPage = () => {

  const anchorLinks = [
    {
      label: 'Live demo',
      anchor: 'tabs-demo'
    },
    {
      label: 'Alignment and fill',
      anchor: 'tabs-alignment'
    },
    {
      label: 'Vertical tabs',
      anchor: 'tabs-vertical'
    },
    {
      label: 'Light tabs',
      anchor: 'tabs-light'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Tabs'
      pageDescription='Horizontally or vertically stacked list of items. When clicked each item switch content in the tab pane.'
      activeNav='/components/tabs'
      docsLink='https://react-bootstrap.github.io/components/tabs/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Live demo */}
      <ComponentPageSection id='tabs-demo' title='Live demo'>
        <Tab.Pane eventKey='preview'>
          <Tab.Container defaultActiveKey='home' transition={Fade}>
            <Nav variant='tabs'>
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
                <p>Raw denim you probably haven&apos;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. Excepteur sint occaecat cupidatat non proident.</p>
              </Tab.Pane>
              <Tab.Pane eventKey='profile'>
                <p>Food truck fixie locavore, accusamus mcsweeney&apos;s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente.</p>
              </Tab.Pane>
              <Tab.Pane eventKey='messages'>
                <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney&apos;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven&apos;t heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Tab from 'react-bootstrap/Tab'
import Fade from 'react-bootstrap/Fade'
import Nav from 'react-bootstrap/Nav'

<Tab.Container defaultActiveKey='home' transition={Fade}>

  {/* Nav tabs */}
  <Nav variant='tabs'>
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

  {/* Tabs content (panes) */}
  <Tab.Content>
    <Tab.Pane eventKey='home'>
      <p>Raw denim you probably haven&apos;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. Excepteur sint occaecat cupidatat non proident.</p>
    </Tab.Pane>
    <Tab.Pane eventKey='profile'>
      <p>Food truck fixie locavore, accusamus mcsweeney&apos;s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente.</p>
    </Tab.Pane>
    <Tab.Pane eventKey='messages'>
      <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney&apos;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven&apos;t heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
    </Tab.Pane>
  </Tab.Content>
</Tab.Container>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Alignment and fill */}
      <ComponentPageSection id='tabs-alignment' title='Alignment and fill'>
        <Tab.Pane eventKey='preview'>
          <Nav variant='tabs' defaultActiveKey='home' className='justify-content-center mb-5'>
            <Nav.Item>
              <Nav.Link eventKey='home'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='profile'>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='settings'>Settings</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav variant='tabs' defaultActiveKey='home' className='justify-content-end mb-5'>
            <Nav.Item>
              <Nav.Link eventKey='home'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='profile'>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='settings'>Settings</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav fill variant='tabs' defaultActiveKey='home'>
            <Nav.Item className='me-2'>
              <Nav.Link eventKey='home'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className='me-2'>
              <Nav.Link eventKey='profile'>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='settings'>Settings</Nav.Link>
            </Nav.Item>
          </Nav>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Nav from 'react-bootstrap/Nav'

{/* Center aligned */}
<Nav variant='tabs' defaultActiveKey='home' className='justify-content-center'>
  <Nav.Item>
    <Nav.Link eventKey='home'>Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='profile'>Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='settings'>Settings</Nav.Link>
  </Nav.Item>
</Nav>

{/* Right aligned */}
<Nav variant='tabs' defaultActiveKey='home' className='justify-content-end'>
  <Nav.Item>
    <Nav.Link eventKey='home'>Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='profile'>Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='settings'>Settings</Nav.Link>
  </Nav.Item>
</Nav>

{/* Fill tabs */}
<Nav fill variant='tabs' defaultActiveKey='home'>
  <Nav.Item className='me-2'>
    <Nav.Link eventKey='home'>Home</Nav.Link>
  </Nav.Item>
  <Nav.Item className='me-2'>
    <Nav.Link eventKey='profile'>Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='settings'>Settings</Nav.Link>
  </Nav.Item>
</Nav>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Vertical tabs */}
      <ComponentPageSection id='tabs-vertical' title='Vertical tabs'>
        <Tab.Pane eventKey='preview'>
          <Nav variant='tabs' defaultActiveKey='home' className='flex-column' style={{maxWidth: '16rem'}}>
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
            <Nav.Item>
              <Nav.Link eventKey='settings'>
                <i className='fi-settings me-2'></i>
                settings
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Nav from 'react-bootstrap/Nav'

{/* Vertical tabs */}
<Nav variant='tabs' defaultActiveKey='home' className='flex-column'>
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
  <Nav.Item>
    <Nav.Link eventKey='settings'>
      <i className='fi-settings me-2'></i>
      settings
    </Nav.Link>
  </Nav.Item>
</Nav>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Light tabs */}
      <ComponentPageSection id='tabs-light' title='Light tabs'>
        <Tab.Pane eventKey='preview' className='m-n3 p-3 bg-dark'>
          <Nav variant='tabs' defaultActiveKey='home' className='nav-tabs-light my-2'>
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
            <Nav.Item>
              <Nav.Link eventKey='settings'>
                <i className='fi-settings me-2'></i>
                settings
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Nav from 'react-bootstrap/Nav'

{/* Light tabs */}
<Nav variant='tabs' defaultActiveKey='home' className='nav-tabs-light'>
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
  <Nav.Item>
    <Nav.Link eventKey='settings'>
      <i className='fi-settings me-2'></i>
      settings
    </Nav.Link>
  </Nav.Item>
</Nav>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

    </ComponentPageLayout>
  )
}

export default TabsPage
