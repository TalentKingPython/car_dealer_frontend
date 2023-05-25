// Pricing component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Code from '../../components/Code'
import PricingPlan from '../../components/PricingPlan'

const PricingPage = () => {

  const anchorLinks = [
    {
      label: 'Basic example',
      anchor: 'pricing-basic'
    },
    {
      label: 'Light version',
      anchor: 'pricing-light'
    }
  ]

  const handleClick = (e) => {
    alert('You\'ve chosen ' + e.currentTarget.dataset.plan + ' pricing plan')
  }

  return (
    <ComponentPageLayout
      pageTitle='Pricing'
      pageDescription='Quickly build pricing plans for subscription based pricing model.'
      activeNav='/components/pricing'
      anchorLinks={anchorLinks}
    >

      {/* Basic example */}
      <ComponentPageSection id='pricing-basic' title='Basic example'>
        <Tab.Pane eventKey='preview'>
          <div className='d-sm-flex'>
            <PricingPlan
              image={{
                src: '/images/pricing/icon-1.svg',
                width: '72',
                height: '88',
                alt: 'Icon'
              }}
              title='Easy Start'
              price='$5'
              period='month'
              options={[
                {title: '3x more views', available: true},
                {title: 'Top ads for 3 days', available: true},
                {title: 'Moving up the list', available: false},
                {title: 'Featured badge in the results', available: false}
              ]}
              button={{
                href: '#',
                title: 'Choose plan',
                variant: 'outline-primary rounded-pill',
                props: {
                  onClick: handleClick,
                  'data-plan': 'Easy Start'
                }
              }}
              className='w-100 mb-4 me-sm-4'
              style={{maxWidth: '25rem'}}
            />
            <PricingPlan
              featured
              image={{
                src: '/images/pricing/icon-2.svg',
                width: '72',
                height: '88',
                alt: 'Icon'
              }}
              title='Fast Sale'
              price='$15'
              period='month'
              options={[
                {title: '10x more views', available: true},
                {title: 'Top ads for 5 days', available: true},
                {title: 'Moving up the list', available: true},
                {title: 'Featured badge in the results', available: false}
              ]}
              button={{
                href: '#',
                title: 'Choose plan',
                variant: 'primary rounded-pill',
                props: {
                  onClick: handleClick,
                  'data-plan': 'Fast Sale'
                }
              }}
              className='w-100 mb-4'
              style={{maxWidth: '25rem'}}
            />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import PricingPlan from '../components/PricingPlan'

{/* Button click handler */}
const handleClick = (e) => {
  alert('You\'ve chosen ' + e.currentTarget.dataset.plan + ' pricing plan')
}

{/* Default pricing plan */}
<PricingPlan
  image={{
    src: '/images/pricing/icon-1.svg',
    width: '72',
    height: '88',
    alt: 'Icon'
  }}
  title='Easy Start'
  price='$5'
  period='month'
  options={[
    {title: '3x more views', available: true},
    {title: 'Top ads for 3 days', available: true},
    {title: 'Moving up the list', available: false},
    {title: 'Featured badge in the results', available: false}
  ]}
  button={{
    href: '#',
    title: 'Choose plan',
    variant: 'outline-primary rounded-pill',
    props: {
      onClick: handleClick,
      'data-plan': 'Easy Start'
    }
  }}
/>

{/* Featured (popular) pricing plan */}
<PricingPlan
  featured
  image={{
    src: '/images/pricing/icon-2.svg',
    width: '72',
    height: '88',
    alt: 'Icon'
  }}
  title='Fast Sale'
  price='$15'
  period='month'
  options={[
    {title: '10x more views', available: true},
    {title: 'Top ads for 5 days', available: true},
    {title: 'Moving up the list', available: true},
    {title: 'Featured badge in the results', available: false}
  ]}
  button={{
    href: '#',
    title: 'Choose plan',
    variant: 'primary rounded-pill',
    props: {
      onClick: handleClick,
      'data-plan': 'Fast Sale'
    }
  }}
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Light version */}
      <ComponentPageSection id='pricing-light' title='Light version'>
        <Tab.Pane eventKey='preview' className='m-n3 p-3 bg-dark'>
          <div className='d-sm-flex'>
            <PricingPlan
              light
              image={{
                src: '/images/pricing/icon-1.svg',
                width: '72',
                height: '88',
                alt: 'Icon'
              }}
              title='Easy Start'
              price='$5'
              period='month'
              options={[
                {title: '3x more views', available: true},
                {title: 'Top ads for 3 days', available: true},
                {title: 'Moving up the list', available: false},
                {title: 'Featured badge in the results', available: false}
              ]}
              button={{
                href: '#',
                title: 'Choose plan',
                variant: 'outline-light rounded-pill',
                props: {
                  onClick: handleClick,
                  'data-plan': 'Easy Start'
                }
              }}
              className='w-100 mb-4 me-sm-4'
              style={{maxWidth: '25rem'}}
            />
            <PricingPlan
              light
              featured
              image={{
                src: '/images/pricing/icon-2.svg',
                width: '72',
                height: '88',
                alt: 'Icon'
              }}
              title='Fast Sale'
              price='$15'
              period='month'
              options={[
                {title: '10x more views', available: true},
                {title: 'Top ads for 5 days', available: true},
                {title: 'Moving up the list', available: true},
                {title: 'Featured badge in the results', available: false}
              ]}
              button={{
                href: '#',
                title: 'Choose plan',
                variant: 'primary rounded-pill',
                props: {
                  onClick: handleClick,
                  'data-plan': 'Fast Sale'
                }
              }}
              className='w-100 mb-4'
              style={{maxWidth: '25rem'}}
            />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import PricingPlan from '../components/PricingPlan'
          
{/* Button click handler */}
const handleClick = (e) => {
  alert('You\'ve chosen ' + e.currentTarget.dataset.plan + ' pricing plan')
}

{/* Light default pricing plan */}
<PricingPlan
  light
  image={{
    src: '/images/pricing/icon-1.svg',
    width: '72',
    height: '88',
    alt: 'Icon'
  }}
  title='Easy Start'
  price='$5'
  period='month'
  options={[
    {title: '3x more views', available: true},
    {title: 'Top ads for 3 days', available: true},
    {title: 'Moving up the list', available: false},
    {title: 'Featured badge in the results', available: false}
  ]}
  button={{
    href: '#',
    title: 'Choose plan',
    variant: 'outline-light rounded-pill',
    props: {
      onClick: handleClick,
      'data-plan': 'Easy Start'
    }
  }}
/>

{/* Light featured (popular) pricing plan */}
<PricingPlan
  light
  featured
  image={{
    src: '/images/pricing/icon-2.svg',
    width: '72',
    height: '88',
    alt: 'Icon'
  }}
  title='Fast Sale'
  price='$15'
  period='month'
  options={[
    {title: '10x more views', available: true},
    {title: 'Top ads for 5 days', available: true},
    {title: 'Moving up the list', available: true},
    {title: 'Featured badge in the results', available: false}
  ]}
  button={{
    href: '#',
    title: 'Choose plan',
    variant: 'primary rounded-pill',
    props: {
      onClick: handleClick,
      'data-plan': 'Fast Sale'
    }
  }}
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default PricingPage
