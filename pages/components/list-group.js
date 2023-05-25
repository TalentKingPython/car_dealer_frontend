// List group component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Code from '../../components/Code'

const ListGroupPage = () => {

  const anchorLinks = [
    {
      label: 'Basic example',
      anchor: 'lg-basic'
    },
    {
      label: 'Links or buttons',
      anchor: 'lg-links'
    },
    {
      label: 'Flush',
      anchor: 'lg-flush'
    },
    {
      label: 'With icons & badges',
      anchor: 'lg-icons'
    },
    {
      label: 'Numbered list group',
      anchor: 'lg-numbered'
    },
    {
      label: 'Horizontal list group',
      anchor: 'lg-horizontal'
    },
    {
      label: 'Actionable horizontal list group',
      anchor: 'lg-horizontal-action'
    },
    {
      label: 'Contextual classes',
      anchor: 'lg-contextual'
    },
    {
      label: 'Custom content',
      anchor: 'lg-custom-content'
    },
    {
      label: 'Tabs-like behavior',
      anchor: 'lg-tabs'
    }
  ]


  // Show alert function
  const showAlert = () => {
    alert('You clicked the ListGroupItem with attached event!')
  }

  return (
    <ComponentPageLayout
      pageTitle='List group'
      pageDescription='Flexible component for displaying a series of content.'
      activeNav='/components/list-group'
      docsLink='https://react-bootstrap.github.io/components/list-group/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Basic example */}
      <ComponentPageSection id='lg-basic' title='Basic example'>
        <Tab.Pane eventKey='preview'>
          <ListGroup as='ul' style={{maxWidth: '27rem'}}>
            <ListGroup.Item as='li' active>Active item here</ListGroup.Item>
            <ListGroup.Item as='li'>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item as='li' disabled>Disabled item here</ListGroup.Item>
            <ListGroup.Item as='li'>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item as='li'>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ListGroup from 'react-bootstrap/ListGroup'

{/* Basic list group */}
<ListGroup as='ul'>
  <ListGroup.Item as='li' active>Active item here</ListGroup.Item>
  <ListGroup.Item as='li'>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item as='li' disabled>Disabled item here</ListGroup.Item>
  <ListGroup.Item as='li'>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item as='li'>Vestibulum at eros</ListGroup.Item>
</ListGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Links or buttons */}
      <ComponentPageSection id='lg-links' title='Links or buttons'>
        <Tab.Pane eventKey='preview'>
          <ListGroup defaultActiveKey='#link1' style={{maxWidth: '27rem'}}>
            <ListGroup.Item action href='#link1'>Active item here</ListGroup.Item>
            <ListGroup.Item action href='#link2'>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item action href='#link3' disabled>Disabled item here</ListGroup.Item>
            <ListGroup.Item action href='#link4'>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item action onClick={showAlert}>Button with attached event</ListGroup.Item>
          </ListGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ListGroup from 'react-bootstrap/ListGroup'

{/* Actionalbe list group */}
<ListGroup defaultActiveKey='#link1'>
  <ListGroup.Item action href='#link1'>Active item here</ListGroup.Item>
  <ListGroup.Item action href='#link2'>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item action href='#link3' disabled>Disabled item here</ListGroup.Item>
  <ListGroup.Item action href='#link4'>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item action onClick={showAlert}>Button with attached event</ListGroup.Item>
</ListGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Flush */}
      <ComponentPageSection id='lg-flush' title='Flush'>
        <Tab.Pane eventKey='preview'>
          <ListGroup as='ul' variant='flush' style={{maxWidth: '27rem'}}>
            <ListGroup.Item as='li'>Cras justo odio</ListGroup.Item>
            <ListGroup.Item as='li'>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item as='li'>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item as='li'>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item as='li'>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ListGroup from 'react-bootstrap/ListGroup'

{/* Flush list group to use edge-to-edge in a parent container */}
<ListGroup as='ul' variant='flush'>
  <ListGroup.Item as='li'>Cras justo odio</ListGroup.Item>
  <ListGroup.Item as='li'>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item as='li'>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item as='li'>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item as='li'>Vestibulum at eros</ListGroup.Item>
</ListGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* With icons & badges */}
      <ComponentPageSection id='lg-icons' title='With icons &amp; badges'>
        <Tab.Pane eventKey='preview'>
          <ListGroup as='ul' style={{maxWidth: '27rem'}}>
            <ListGroup.Item as='li' className='d-flex align-items-center'>
              <i className='fi-chat-left text-muted me-2'></i>
              Messages
              <Badge bg='success' className='ms-auto'>14</Badge>
            </ListGroup.Item>
            <ListGroup.Item as='li' className='d-flex align-items-center'>
              <i className='fi-shopping-bag fs-lg mt-n1 text-muted me-2'></i>
              Orders
              <Badge bg='warning' className='ms-auto'>2</Badge>
            </ListGroup.Item>
            <ListGroup.Item as='li' className='d-flex align-items-center'>
              <i className='fi-heart text-muted me-2'></i>
              Favorites
              <Badge bg='danger' className='ms-auto'>6</Badge>
            </ListGroup.Item>
          </ListGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

{/* List group with icons and badges */}
<ListGroup as='ul'>
  <ListGroup.Item as='li' className='d-flex align-items-center'>
    <i className='fi-chat-left text-muted me-2'></i>
    Messages
    <Badge bg='success' className='ms-auto'>14</Badge>
  </ListGroup.Item>
  <ListGroup.Item as='li' className='d-flex align-items-center'>
    <i className='fi-shopping-bag fs-lg mt-n1 text-muted me-2'></i>
    Orders
    <Badge bg='warning' className='ms-auto'>2</Badge>
  </ListGroup.Item>
  <ListGroup.Item as='li' className='d-flex align-items-center'>
    <i className='fi-heart text-muted me-2'></i>
    Favorites
    <Badge bg='danger' className='ms-auto'>6</Badge>
  </ListGroup.Item>
</ListGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Numbered list group */}
      <ComponentPageSection id='lg-numbered' title='Numbered list group'>
        <Tab.Pane eventKey='preview'>
          <ListGroup as='ol' numbered style={{maxWidth: '27rem'}}>
            <ListGroup.Item as='li'>Cras justo odio</ListGroup.Item>
            <ListGroup.Item as='li'>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item as='li'>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item as='li'>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ListGroup from 'react-bootstrap/ListGroup'

{/* Numbered list group */}
<ListGroup as='ol' numbered>
  <ListGroup.Item as='li'>Cras justo odio</ListGroup.Item>
  <ListGroup.Item as='li'>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item as='li'>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item as='li'>Vestibulum at eros</ListGroup.Item>
</ListGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Horizontal list group */}
      <ComponentPageSection id='lg-horizontal' title='Horizontal list group'>
        <Tab.Pane eventKey='preview'>
          <ListGroup horizontal='sm' className='mb-3'>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal='sm'>
            <ListGroup.Item className='flex-fill text-center'>Cras justo odio</ListGroup.Item>
            <ListGroup.Item className='flex-fill text-center'>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item className='flex-fill text-center'>Morbi leo risus</ListGroup.Item>
          </ListGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ListGroup from 'react-bootstrap/ListGroup'

{/* Basic horizontal list group (starting sm breackpoint). Choose between responsive breackpoints: sm, md, lg, xl, xxl */}
<ListGroup horizontal='sm'>
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
</ListGroup>

{/* Justified horizontal list group (starting sm screen) */}
<ListGroup horizontal='sm'>
  <ListGroup.Item className='flex-fill text-center'>Cras justo odio</ListGroup.Item>
  <ListGroup.Item className='flex-fill text-center'>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item className='flex-fill text-center'>Morbi leo risus</ListGroup.Item>
</ListGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Actionable horizontal list group */}
      <ComponentPageSection id='lg-horizontal-action' title='Actionable horizontal list group'>
        <Tab.Pane eventKey='preview'>
          <ListGroup horizontal='sm' defaultActiveKey='#link1'>
            <ListGroup.Item action href='#link1' className='text-center'>Active item here</ListGroup.Item>
            <ListGroup.Item action href='#link2' className='text-center'>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item action href='#link3' className='text-center'>Morbi leo risus</ListGroup.Item>
          </ListGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ListGroup from 'react-bootstrap/ListGroup'

{/* Actionable horizontal list group (starting sm screen) */}
<ListGroup horizontal='sm' defaultActiveKey='#link1'>
  <ListGroup.Item action href='#link1' className='text-center'>Active item here</ListGroup.Item>
  <ListGroup.Item action href='#link2' className='text-center'>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item action href='#link3' className='text-center'>Morbi leo risus</ListGroup.Item>
</ListGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Contextual classes */}
      <ComponentPageSection id='lg-contextual' title='Contextual classes'>
        <Tab.Pane eventKey='preview'>
          <Row className='g-4'>
            <Col sm={6}>
              <ListGroup>
                <ListGroup.Item variant='primary'>A simple primary list group item</ListGroup.Item>
                <ListGroup.Item variant='secondary'>A simple secondary list group item</ListGroup.Item>
                <ListGroup.Item variant='accent'>A simple accent list group item</ListGroup.Item>
                <ListGroup.Item variant='success'>A simple success list group item</ListGroup.Item>
                <ListGroup.Item variant='danger'>A simple danger list group item</ListGroup.Item>
                <ListGroup.Item variant='warning'>A simple warning list group item</ListGroup.Item>
                <ListGroup.Item variant='info'>A simple info list group item</ListGroup.Item>
                <ListGroup.Item variant='light'>A simple light list group item</ListGroup.Item>
                <ListGroup.Item variant='dark'>A simple dark list group item</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={6}>
              <ListGroup>
                <ListGroup.Item action variant='primary'>A link primary list group item</ListGroup.Item>
                <ListGroup.Item action variant='secondary'>A link secondary list group item</ListGroup.Item>
                <ListGroup.Item action variant='accent'>A link accent list group item</ListGroup.Item>
                <ListGroup.Item action variant='success'>A link success list group item</ListGroup.Item>
                <ListGroup.Item action variant='danger'>A link danger list group item</ListGroup.Item>
                <ListGroup.Item action variant='warning'>A link warning list group item</ListGroup.Item>
                <ListGroup.Item action variant='info'>A link info list group item</ListGroup.Item>
                <ListGroup.Item action variant='light'>A link light list group item</ListGroup.Item>
                <ListGroup.Item action variant='dark'>A link dark list group item</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ListGroup from 'react-bootstrap/ListGroup'

{/* Contextual classes on basic list group */}
<ListGroup>
  <ListGroup.Item variant='primary'>A simple primary list group item</ListGroup.Item>
  <ListGroup.Item variant='secondary'>A simple secondary list group item</ListGroup.Item>
  <ListGroup.Item variant='accent'>A simple accent list group item</ListGroup.Item>
  <ListGroup.Item variant='success'>A simple success list group item</ListGroup.Item>
  <ListGroup.Item variant='danger'>A simple danger list group item</ListGroup.Item>
  <ListGroup.Item variant='warning'>A simple warning list group item</ListGroup.Item>
  <ListGroup.Item variant='info'>A simple info list group item</ListGroup.Item>
  <ListGroup.Item variant='light'>A simple light list group item</ListGroup.Item>
  <ListGroup.Item variant='dark'>A simple dark list group item</ListGroup.Item>
</ListGroup>

{/* Contextual classes on actionable list group */}
<ListGroup>
  <ListGroup.Item action variant='primary'>A link primary list group item</ListGroup.Item>
  <ListGroup.Item action variant='secondary'>A link secondary list group item</ListGroup.Item>
  <ListGroup.Item action variant='accent'>A link accent list group item</ListGroup.Item>
  <ListGroup.Item action variant='success'>A link success list group item</ListGroup.Item>
  <ListGroup.Item action variant='danger'>A link danger list group item</ListGroup.Item>
  <ListGroup.Item action variant='warning'>A link warning list group item</ListGroup.Item>
  <ListGroup.Item action variant='info'>A link info list group item</ListGroup.Item>
  <ListGroup.Item action variant='light'>A link light list group item</ListGroup.Item>
  <ListGroup.Item action variant='dark'>A link dark list group item</ListGroup.Item>
</ListGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Custom content */}
      <ComponentPageSection id='lg-custom-content' title='Custom content'>
        <Tab.Pane eventKey='preview'>
          <ListGroup style={{maxWidth: '27rem'}}>
            <ListGroup.Item active className='py-3'>
              <div className='d-flex flex-wrap w-100 justify-content-between'>
                <h6 className='text-white'>List group item heading</h6>
                <small className='text-white opacity-50 mb-2'>3 days ago</small>
              </div>
              <p className='fs-sm font-weight-normal text-white opacity-75'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
              <small className='text-white opacity-50'>Donec id elit non mi porta.</small>
            </ListGroup.Item>
            <ListGroup.Item className='py-3'>
              <div className='d-flex flex-wrap w-100 justify-content-between'>
                <h6>List group item heading</h6>
                <small className='text-muted mb-2'>3 days ago</small>
              </div>
              <p className='fs-sm font-weight-normals'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
              <small className='text-muted'>Donec id elit non mi porta.</small>
            </ListGroup.Item>
            <ListGroup.Item className='py-3'>
              <div className='d-flex flex-wrap w-100 justify-content-between'>
                <h6>List group item heading</h6>
                <small className='text-muted mb-2'>3 days ago</small>
              </div>
              <p className='fs-sm font-weight-normals'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
              <small className='text-muted'>Donec id elit non mi porta.</small>
            </ListGroup.Item>
          </ListGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ListGroup from 'react-bootstrap/ListGroup'

{/* List group with custom content */}
<ListGroup>
  <ListGroup.Item active className='py-3'>
    <div className='d-flex flex-wrap w-100 justify-content-between'>
      <h6 className='text-white'>List group item heading</h6>
      <small className='text-white opacity-50 mb-2'>3 days ago</small>
    </div>
    <p className='fs-sm font-weight-normal text-white opacity-75'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
    <small className='text-white opacity-50'>Donec id elit non mi porta.</small>
  </ListGroup.Item>
  <ListGroup.Item className='py-3'>
    <div className='d-flex flex-wrap w-100 justify-content-between'>
      <h6>List group item heading</h6>
      <small className='text-muted mb-2'>3 days ago</small>
    </div>
    <p className='fs-sm font-weight-normals'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
    <small className='text-muted'>Donec id elit non mi porta.</small>
  </ListGroup.Item>
  <ListGroup.Item className='py-3'>
    <div className='d-flex flex-wrap w-100 justify-content-between'>
      <h6>List group item heading</h6>
      <small className='text-muted mb-2'>3 days ago</small>
    </div>
    <p className='fs-sm font-weight-normals'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
    <small className='text-muted'>Donec id elit non mi porta.</small>
  </ListGroup.Item>
</ListGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Tabs-like behavior */}
      <ComponentPageSection id='lg-tabs' title='Tabs-like behavior'>
        <Tab.Pane eventKey='preview'>
          <Tab.Container defaultActiveKey='#home'>
            <Row className='g-4'>
              <Col md={4}>
                <ListGroup>
                  <ListGroup.Item action href='#home'>Home</ListGroup.Item>
                  <ListGroup.Item action href='#profile'>Profile</ListGroup.Item>
                  <ListGroup.Item action href='#messages'>Messages</ListGroup.Item>
                  <ListGroup.Item action href='#settings'>Settings</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={8}>
                <Tab.Content>
                  <Tab.Pane eventKey='#home'>Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud.</Tab.Pane>
                  <Tab.Pane eventKey='#profile'>Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam.</Tab.Pane>
                  <Tab.Pane eventKey='#messages'>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla laborum elit adipisicing pariatur cillum.</Tab.Pane>
                  <Tab.Pane eventKey='#settings'>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure.</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'

{/* Tabs-like behavior for List group items */}
<Tab.Container defaultActiveKey='#home'>
  <Row className='g-4'>
    <Col md={4}>
      <ListGroup>
        <ListGroup.Item action href='#home'>Home</ListGroup.Item>
        <ListGroup.Item action href='#profile'>Profile</ListGroup.Item>
        <ListGroup.Item action href='#messages'>Messages</ListGroup.Item>
        <ListGroup.Item action href='#settings'>Settings</ListGroup.Item>
      </ListGroup>
    </Col>
    <Col md={8}>
      <Tab.Content>
        <Tab.Pane eventKey='#home'>Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud.</Tab.Pane>
        <Tab.Pane eventKey='#profile'>Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam.</Tab.Pane>
        <Tab.Pane eventKey='#messages'>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla laborum elit adipisicing pariatur cillum.</Tab.Pane>
        <Tab.Pane eventKey='#settings'>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure.</Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default ListGroupPage
