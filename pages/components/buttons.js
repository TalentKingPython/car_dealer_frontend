// Buttons component documentation page with code examples

import { useState, useEffect } from 'react'
import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Code from '../../components/Code'
import MarketButton from '../../components/MarketButton'

const ButtonsPage = () => {

  const anchorLinks = [
    {
      label: 'Solid (default)',
      anchor: 'buttons-solid'
    },
    {
      label: 'Outline',
      anchor: 'buttons-outline'
    },
    {
      label: 'Translucent',
      anchor: 'buttons-translucent'
    },
    {
      label: 'Button tags',
      anchor: 'buttons-tags'
    },
    {
      label: 'Icons',
      anchor: 'buttons-icons'
    },
    {
      label: 'Market buttons',
      anchor: 'buttons-market'
    },
    {
      label: 'Shapes',
      anchor: 'buttons-shapes'
    },
    {
      label: 'Sizes',
      anchor: 'buttons-sizes'
    },
    {
      label: 'States',
      anchor: 'buttons-states'
    },
    {
      label: 'Control loading state',
      anchor: 'buttons-loading'
    }
  ]

  // Simulate button loading state
  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 2500))
  }
  
  const LoadingButton = () => {
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false)
        })
      }
    }, [isLoading])
  
    const handleClick = () => setLoading(true)
  
    return (
      <Button
        variant='primary'
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? <><Spinner animation='border' size='sm' className='me-2' />Loading...</> : 'Click to load'}
      </Button>
    )
  }


  return (
    <ComponentPageLayout
      pageTitle='Buttons'
      pageDescription='Custom button styles for actions in forms, dialogs, etc.'
      activeNav='/components/buttons'
      docsLink='https://react-bootstrap.github.io/components/buttons/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Solid (default) */}
      <ComponentPageSection id='buttons-solid' title='Solid (default)'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap align-items-center'>
            <Button variant='primary' className='me-3 mb-3'>Primary</Button>
            <Button variant='accent' className='me-3 mb-3'>Accent</Button>
            <Button variant='secondary' className='me-3 mb-3'>Secondary</Button>
            <Button variant='success' className='me-3 mb-3'>Success</Button>
            <Button variant='danger' className='me-3 mb-3'>Danger</Button>
            <Button variant='warning' className='me-3 mb-3'>Warning</Button>
            <Button variant='info' className='me-3 mb-3'>Info</Button>
            <div className='bg-dark p-2 me-3 mb-3'>
              <Button variant='light'>Light</Button>
            </div>
            <Button variant='accent bg-gradient' className='me-3 mb-3'>Gradient</Button>
            <Button variant='dark' className='mb-3'>Dark</Button>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Button from 'react-bootstrap/Button'

{/* Primary solid button */}
<Button variant='primary'>Primary</Button>

{/* Accent solid button */}
<Button variant='accent'>Accent</Button>

{/* Secondary solid button */}
<Button variant='secondary'>Secondary</Button>

{/* Success solid button */}
<Button variant='success'>Success</Button>

{/* Danger solid button */}
<Button variant='danger'>Danger</Button>

{/* Warning solid button */}
<Button variant='warning'>Warning</Button>

{/* Info solid button */}
<Button variant='info'>Info</Button>

{/* Light solid button */}
<Button variant='light'>Light</Button>

{/* Gradient solid button */}
<Button variant='accent bg-gradient'>Gradient</Button>

{/* Dark solid button */}
<Button variant='dark'>Dark</Button>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Outline */}
      <ComponentPageSection id='buttons-outline' title='Outline'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap align-items-center'>
            <Button variant='outline-primary' className='me-3 mb-3'>Primary</Button>
            <Button variant='outline-accent' className='me-3 mb-3'>Accent</Button>
            <Button variant='outline-secondary' className='me-3 mb-3'>Secondary</Button>
            <Button variant='outline-success' className='me-3 mb-3'>Success</Button>
            <Button variant='outline-danger' className='me-3 mb-3'>Danger</Button>
            <Button variant='outline-warning' className='me-3 mb-3'>Warning</Button>
            <Button variant='outline-info' className='me-3 mb-3'>Info</Button>
            <div className='bg-dark p-2 me-3 mb-3'>
              <Button variant='outline-light'>Light</Button>
            </div>
            <Button variant='outline-dark' className='mb-3'>Dark</Button>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Button from 'react-bootstrap/Button'

{/* Primary outline button */}
<Button variant='outline-primary'>Primary</Button>

{/* Accent outline button */}
<Button variant='outline-accent'>Accent</Button>

{/* Secondary outline button */}
<Button variant='outline-secondary'>Secondary</Button>

{/* Success outline button */}
<Button variant='outline-success'>Success</Button>

{/* Danger outline button */}
<Button variant='outline-danger'>Danger</Button>

{/* Warning outline button */}
<Button variant='outline-warning'>Warning</Button>

{/* Info outline button */}
<Button variant='outline-info'>Info</Button>

{/* Light outline button */}
<Button variant='outline-light'>Light</Button>

{/* Dark outline button */}
<Button variant='outline-dark'>Dark</Button>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Translucent */}
      <ComponentPageSection id='buttons-translucent' title='Translucent'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap align-items-center'>
            <Button variant='translucent-primary' className='me-3 mb-3'>Primary</Button>
            <Button variant='translucent-accent' className='me-3 mb-3'>Accent</Button>
            <Button variant='translucent-success' className='me-3 mb-3'>Success</Button>
            <Button variant='translucent-danger' className='me-3 mb-3'>Danger</Button>
            <Button variant='translucent-warning' className='me-3 mb-3'>Warning</Button>
            <Button variant='translucent-info' className='me-3 mb-3'>Info</Button>
            <div className='bg-dark p-2 me-3 mb-3'>
              <Button variant='translucent-light'>Light</Button>
            </div>
            <Button variant='translucent-dark' className='mb-3'>Dark</Button>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Button from 'react-bootstrap/Button'

{/* Primary translucent button */}
<Button variant='translucent-primary'>Primary</Button>

{/* Accent translucent button */}
<Button variant='translucent-accent'>Accent</Button>

{/* Secondary translucent button */}
<Button variant='translucent-secondary'>Secondary</Button>

{/* Success translucent button */}
<Button variant='translucent-success'>Success</Button>

{/* Danger translucent button */}
<Button variant='translucent-danger'>Danger</Button>

{/* Warning translucent button */}
<Button variant='translucent-warning'>Warning</Button>

{/* Info translucent button */}
<Button variant='translucent-info'>Info</Button>

{/* Light translucent button */}
<Button variant='translucent-light'>Light</Button>

{/* Dark translucent button */}
<Button variant='translucent-dark'>Dark</Button>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Button tags */}
      <ComponentPageSection id='buttons-tags' title='Button tags'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap align-items-center'>
            <Button as={Link} href='#' className='me-3 mb-3'>Link</Button>
            <Button className='me-3 mb-3'>Button</Button>
            <Button as='input' type='button' value='Input' className='me-3 mb-3' />
            <Button type='submit' className='me-3 mb-3'>Submit</Button>
            <Button type='reset' className='mb-3'>Reset</Button>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Button from 'react-bootstrap/Button'

{/* Link */}
<Button as={Link} href='#' className='me-3 mb-3'>Link</Button>

{/* Button */}
<Button>Button</Button>

{/* Input */}
<Button as='input' type='button' value='Input' />

{/* Submit */}
<Button type='submit'>Submit</Button>

{/* Reset */}
<Button type='reset'>Reset</Button>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Icons */}
      <ComponentPageSection id='buttons-icons' title='Icons'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap align-items-center'>
            <Button variant='primary' className='me-3 mb-3'>
              <i className='fi-user me-2'></i>
              Profile
            </Button>
            <Button variant='secondary btn-icon' className='me-3 mb-3'>
              <i className='fi-edit'></i>
            </Button>
            <Button variant='outline-danger btn-icon' className='me-3 mb-3'>
              <i className='fi-trash'></i>
            </Button>
            <Button variant='success btn-icon' className='me-3 mb-3'>
              <i className='fi-check'></i>
            </Button>
            <Button variant='light-primary btn-icon shadow-sm' className='me-3 mb-3'>
              <i className='fi-bell'></i>
            </Button>
            <Button variant='warning btn-icon rounded-circle' className='me-3 mb-3'>
              <i className='fi-star'></i>
            </Button>
            <Button variant='outline-info btn-icon rounded-circle' className='mb-3'>
              <i className='fi-bookmark'></i>
            </Button>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Button from 'react-bootstrap/Button'

{/* Primary button with text and icon */}
<Button variant='primary'>
  <i className='fi-user me-2'></i>
  Profile
</Button>

{/* Secondary solid icon button */}
<Button variant='secondary btn-icon'>
  <i className='fi-edit'></i>
</Button>

{/* Danger outline icon button */}
<Button variant='outline-danger btn-icon'>
  <i className='fi-trash'></i>
</Button>

{/* Success solid icon button */}
<Button variant='success btn-icon'>
  <i className='fi-check'></i>
</Button>

{/* Light to primary icon button */}
<Button variant='light-primary btn-icon shadow-sm'>
  <i className='fi-bell'></i>
</Button>

{/* Warning circle solid icon button */}
<Button variant='warning btn-icon rounded-circle'>
  <i className='fi-star'></i>
</Button>

{/* Info circle outline icon button */}
<Button variant='outline-info btn-icon rounded-circle'>
  <i className='fi-bookmark'></i>
</Button>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Market buttons */}
      <ComponentPageSection id='buttons-market' title='Market buttons'>
        <Tab.Pane eventKey='preview'>
          <MarketButton href='#' market='apple' className='me-3 my-2' />
          <MarketButton href='#' market='google' className='my-2' />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import MarketButton from '../components/MarketButton'

{/* App Store button. Note target='_blank' attribute to open link in new tab. */}
<MarketButton href='#' market='apple' target='_blank' />

{/* Google Play button */}
<MarketButton href='#' market='google' />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Shapes */}
      <ComponentPageSection id='buttons-shapes' title='Shapes'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap align-items-start pb-2'>
            <Button variant='primary' className='me-3 mb-3'>Rounded</Button>
            <Button variant='primary' className='rounded-pill me-3 mb-3'>Pill button</Button>
            <Button variant='primary' className='rounded-0 mb-3'>Square</Button>
          </div>
          <div className='d-flex flex-wrap align-items-start'>
            <Button variant='outline-primary' className='me-3 mb-3'>Rounded</Button>
            <Button variant='outline-primary' className='rounded-pill me-3 mb-3'>Pill button</Button>
            <Button variant='outline-primary' className='rounded-0 mb-3'>Square</Button>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Button from 'react-bootstrap/Button'

{/* Rounded solid button (default) */}
<Button variant='primary'>Rounded</Button>

{/* Pill solid button */}
<Button variant='primary' className='rounded-pill'>Pill button</Button>

{/* Square solid button */}
<Button variant='primary' className='rounded-0'>Square</Button>

{/* Rounded outline button */}
<Button variant='outline-primary'>Rounded</Button>

{/* Pill outline button */}
<Button variant='outline-primary' className='rounded-pill'>Pill button</Button>

{/* Square outline button */}
<Button variant='outline-primary' className='rounded-0'>Square</Button>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Sizes */}
      <ComponentPageSection id='buttons-sizes' title='Sizes'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap align-items-center pb-2'>
            <Button variant='primary' size='lg' className='me-3 mb-3'>Large button</Button>
            <Button variant='primary' className='me-3 mb-3'>Normal button</Button>
            <Button variant='primary' size='sm' className='me-3 mb-3'>Small button</Button>
            <Button variant='primary' size='xs' className='mb-3'>Extra small button</Button>
          </div>
          <div className='d-flex flex-wrap align-items-center pb-2'>
            <Button variant='outline-primary' size='lg' className='me-3 mb-3'>Large button</Button>
            <Button variant='outline-primary' className='me-3 mb-3'>Normal button</Button>
            <Button variant='outline-primary' size='sm' className='me-3 mb-3'>Small button</Button>
            <Button variant='outline-primary' size='xs' className='mb-3'>Extra small button</Button>
          </div>
          <div className='d-flex flex-wrap align-items-center pb-2'>
            <Button variant='primary btn-icon' className='me-3 mb-3'>
              <i className='fi-bell'></i>
            </Button>
            <Button variant='primary btn-icon' size='sm' className='me-3 mb-3'>
              <i className='fi-bell'></i>
            </Button>
            <Button variant='primary btn-icon' size='xs' className='me-3 mb-3'>
              <i className='fi-bell'></i>
            </Button>
            <Button variant='primary btn-icon' size='xxs' className='me-3 mb-3'>
              <i className='fi-bell'></i>
            </Button>
            <Button variant='outline-primary btn-icon' className='me-3 mb-3'>
              <i className='fi-anchor'></i>
            </Button>
            <Button variant='outline-primary btn-icon' size='sm' className='me-3 mb-3'>
              <i className='fi-anchor'></i>
            </Button>
            <Button variant='outline-primary btn-icon' size='xs' className='me-3 mb-3'>
              <i className='fi-anchor'></i>
            </Button>
            <Button variant='outline-primary btn-icon' size='xxs' className='mb-3'>
              <i className='fi-anchor'></i>
            </Button>
          </div>
          <Row>
            <Col sm={6}>
              <Button variant='primary' className='w-100 mb-3'>Block level button</Button>
            </Col>
            <Col sm={6}>
              <Button variant='outline-primary' className='w-100 mb-3'>Block level button</Button>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Button from 'react-bootstrap/Button'

{/* Large solid button */}
<Button variant='primary' size='lg'>Large button</Button>

{/* Normal solid button */}
<Button variant='primary'>Normal button</Button>

{/* Small solid button */}
<Button variant='primary' size='sm'>Small button</Button>

{/* Extra small solid button */}
<Button variant='primary' size='xs'>Extra small button</Button>

{/* Large outline button */}
<Button variant='outline-primary' size='lg'>Large button</Button>

{/* Normal outline button */}
<Button variant='outline-primary'>Normal button</Button>

{/* Small outline button */}
<Button variant='outline-primary' size='sm'>Small button</Button>

{/* Extra small outline button */}
<Button variant='outline-primary' size='xs'>Extra small button</Button>

{/* Normal solid icon button */}
<Button variant='primary btn-icon'>
  <i className='fi-bell'></i>
</Button>

{/* Small solid icon button */}
<Button variant='primary btn-icon' size='sm'>
  <i className='fi-bell'></i>
</Button>

{/* Extra small solid icon button */}
<Button variant='primary btn-icon' size='xs'>
  <i className='fi-bell'></i>
</Button>

{/* Extra extra small solid icon button */}
<Button variant='primary btn-icon' size='xxs'>
  <i className='fi-bell'></i>
</Button>

{/* Normal outline icon button */}
<Button variant='outline-primary btn-icon'>
  <i className='fi-anchor'></i>
</Button>

{/* Small outline icon button */}
<Button variant='outline-primary btn-icon' size='sm'>
  <i className='fi-anchor'></i>
</Button>

{/* Extra small outline icon button */}
<Button variant='outline-primary btn-icon' size='xs'>
  <i className='fi-anchor'></i>
</Button>

{/* Extra extra small outline icon button */}
<Button variant='outline-primary btn-icon' size='xxs'>
  <i className='fi-anchor'></i>
</Button>

{/* Block solid button */}
<Button variant='primary' className='w-100'>Block level button</Button>

{/* Block outline button */}
<Button variant='outline-primary' className='w-100'>Block level button</Button>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* States */}
      <ComponentPageSection id='buttons-states' title='States'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap align-items-center'>
            <Button variant='primary' active className='me-3 mb-3'>Active</Button>
            <Button variant='secondary' active className='me-3 mb-3'>Active</Button>
            <Button variant='primary' disabled className='me-3 mb-3'>Disabled</Button>
            <Button variant='secondary' disabled className='me-3 mb-3'>Disabled</Button>
            <Button variant='primary' disabled className='me-3 mb-3'>
              <Spinner animation='border' size='sm' className='me-2' />
              Loading...
            </Button>
            <Button variant='secondary' disabled className='mb-3'>
              <Spinner animation='grow' size='sm' className='me-2' />
              Loading...
            </Button>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

{/* Active state */}
<Button variant='primary' active>Active</Button>

{/* Disabled state */}
<Button variant='primary' disabled>Disabled</Button>

{/* Loading state - spinner border */}
<Button variant='primary' disabled>
  <Spinner animation='border' size='sm' className='me-2' />
  Loading...
</Button>

{/* Loading state - spinner grow */}
<Button variant='secondary' disabled>
  <Spinner animation='grow' size='sm' className='me-2' />
  Loading...
</Button>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Control loading state */}
      <ComponentPageSection id='buttons-loading' title='Control loading state'>
        <Tab.Pane eventKey='preview'>
          <LoadingButton />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const simulateNetworkRequest = () => {
  return new Promise((resolve) => setTimeout(resolve, 2500))
}

const LoadingButton = () => {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false)
      })
    }
  }, [isLoading])

  const handleClick = () => setLoading(true)

  return (
    <Button
      variant='primary'
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? <><Spinner animation='border' size='sm' className='me-2' />Loading...</> : 'Click to load'}
    </Button>
  )
}

render(<LoadingButton />)`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default ButtonsPage
