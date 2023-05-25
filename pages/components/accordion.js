// Accordion component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Image from 'next/image'
import Link from 'next/link'
import Tab from 'react-bootstrap/Tab'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import AccordionCard from '../../components/AccordionCard'
import Code from '../../components/Code'

const AccordionPage = () => {

  const anchorLinks = [
    {
      label: 'Basic example',
      anchor: 'accordion-basic'
    },
    {
      label: 'Light version',
      anchor: 'accordion-light'
    },
    {
      label: 'Based on cards',
      anchor: 'accordion-cards'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Accordion'
      pageDescription='Vertically collapsing accordions.'
      activeNav='/components/accordion'
      docsLink='https://react-bootstrap.github.io/components/accordion/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Basic example */}
      <ComponentPageSection id='accordion-basic' title='Basic example'>
        <Tab.Pane eventKey='preview'>
          <Accordion defaultActiveKey='0' style={{maxWidth: '35rem'}}>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dicta enim cupiditate natus dolorum distinctio, impedit tenetur nisi laboriosam ut animi delectus quod quos ipsum corporis magnam, nobis neque mollitia.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>Accordion Item #3</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Accordion from 'react-bootstrap/Accordion'

{/* Basic accordion example */}
<Accordion defaultActiveKey='0'>

  {/* Active accordion item */}
  <Accordion.Item eventKey='0'>
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.
    </Accordion.Body>
  </Accordion.Item>

  {/* Accordion item */}
  <Accordion.Item eventKey='1'>
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dicta enim cupiditate natus dolorum distinctio, impedit tenetur nisi laboriosam ut animi delectus quod quos ipsum corporis magnam, nobis neque mollitia.
    </Accordion.Body>
  </Accordion.Item>

  {/* Accordion item */}
  <Accordion.Item eventKey='2'>
    <Accordion.Header>Accordion Item #3</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?
    </Accordion.Body>
  </Accordion.Item>
</Accordion>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Light version */}
      <ComponentPageSection id='accordion-light' title='Light version'>
        <Tab.Pane eventKey='preview' className='m-n3 p-3 bg-dark'>
          <Accordion defaultActiveKey='0' className='accordion-light' style={{maxWidth: '35rem'}}>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body className='text-light opacity-70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body className='text-light opacity-70'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dicta enim cupiditate natus dolorum distinctio, impedit tenetur nisi laboriosam ut animi delectus quod quos ipsum corporis magnam, nobis neque mollitia.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>Accordion Item #3</Accordion.Header>
              <Accordion.Body className='text-light opacity-70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Accordion from 'react-bootstrap/Accordion'

{/* Light accordion example */}
<Accordion defaultActiveKey='0' className='accordion-light'>

  {/* Active accordion item */}
  <Accordion.Item eventKey='0'>
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body className='text-light opacity-70'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.
    </Accordion.Body>
  </Accordion.Item>

  {/* Accordion item */}
  <Accordion.Item eventKey='1'>
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body className='text-light opacity-70'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dicta enim cupiditate natus dolorum distinctio, impedit tenetur nisi laboriosam ut animi delectus quod quos ipsum corporis magnam, nobis neque mollitia.
    </Accordion.Body>
  </Accordion.Item>

  {/* Accordion item */}
  <Accordion.Item eventKey='2'>
    <Accordion.Header>Accordion Item #3</Accordion.Header>
    <Accordion.Body className='text-light opacity-70'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?
    </Accordion.Body>
  </Accordion.Item>
</Accordion>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Based on cards */}
      <ComponentPageSection id='accordion-cards' title='Based on cards'>
        <Tab.Pane eventKey='preview'>
          <Accordion defaultActiveKey='0' style={{maxWidth: '50rem'}}>
            <AccordionCard eventKey='0'>
              <Card.Body>
                <div className='d-flex justify-content-between mb-2'>
                  <div className='d-flex align-items-center'>
                    <Image src='/images/job-board/company/it-pro.png' width={24} height={24} alt='IT Pro TV' />
                    <span className='fs-sm text-dark opacity-80 ms-2 ps-1'>IT Pro TV</span>
                  </div>
                  <Badge pill bg='faded-danger' className='fs-sm'>Hot</Badge>
                </div>
                <h3 className='h6 card-title pt-1 mb-0'>Business Analyst</h3>
              </Card.Body>
              <Accordion.Collapse eventKey='0'>
                <Card.Body className='mt-n1 pt-0'>
                  <p className='fs-sm'>Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare pulvinar enim fames orci enim in libero. <Link href='#'>Read more...</Link></p>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='fs-sm'>
                      <span className='text-nowrap me-3'>
                        <i className='fi-map-pin text-muted me-1'></i>
                        New York
                      </span>
                      <span className='text-nowrap me-3'>
                        <i className='fi-cash fs-base text-muted me-1'></i>
                        $7,500
                      </span>
                    </div>
                    <OverlayTrigger placement='top' overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                      <Button variant='light' size='xs' className='btn-icon shadow-sm rounded-circle text-primary'>
                        <i className='fi-heart'></i>
                      </Button>
                    </OverlayTrigger>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </AccordionCard>
            <AccordionCard eventKey='1'>
              <Card.Body>
                <div className='d-flex justify-content-between mb-2'>
                  <div className='d-flex align-items-center'>
                    <Image src='/images/job-board/company/xbox.png' width={24} height={24} alt='Xbox Company' />
                    <span className='fs-sm text-dark opacity-80 ms-2 ps-1'>Xbox Company</span>
                  </div>
                  <Badge pill bg='faded-accent' className='fs-sm'>Featured</Badge>
                </div>
                <h3 className='h6 card-title pt-1 mb-0'>Full-Stack Developer</h3>
              </Card.Body>
              <Accordion.Collapse eventKey='1'>
                <Card.Body className='mt-n1 pt-0'>
                  <p className='fs-sm'>Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare pulvinar enim fames orci enim in libero. <Link href='#'>Read more...</Link></p>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='fs-sm'>
                      <span className='text-nowrap me-3'>
                        <i className='fi-map-pin text-muted me-1'></i>
                        Washington
                      </span>
                      <span className='text-nowrap me-3'>
                        <i className='fi-cash fs-base text-muted me-1'></i>
                        $10,000
                      </span>
                    </div>
                    <OverlayTrigger placement='top' overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                      <Button variant='light' size='xs' className='btn-icon shadow-sm rounded-circle text-primary'>
                        <i className='fi-heart'></i>
                      </Button>
                    </OverlayTrigger>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </AccordionCard>
            <AccordionCard eventKey='2'>
              <Card.Body>
                <div className='d-flex justify-content-between mb-2'>
                  <div className='d-flex align-items-center'>
                    <Image src='/images/job-board/company/xampp.png' width={24} height={24} alt='XAMPP Company' />
                    <span className='fs-sm text-dark opacity-80 ms-2 ps-1'>XAMPP Company</span>
                  </div>
                  <Badge pill bg='faded-danger' className='fs-sm'>Hot</Badge>
                </div>
                <h3 className='h6 card-title pt-1 mb-0'>Account Manager</h3>
              </Card.Body>
              <Accordion.Collapse eventKey='2'>
                <Card.Body className='mt-n1 pt-0'>
                  <p className='fs-sm'>Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare pulvinar enim fames orci enim in libero. <Link href='#'>Read more...</Link></p>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='fs-sm'>
                      <span className='text-nowrap me-3'>
                        <i className='fi-map-pin text-muted me-1'></i>
                        Los Angeles
                      </span>
                      <span className='text-nowrap me-3'>
                        <i className='fi-cash fs-base text-muted me-1'></i>
                        $8,200
                      </span>
                    </div>
                    <OverlayTrigger placement='top' overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                      <Button variant='light' size='xs' className='btn-icon shadow-sm rounded-circle text-primary'>
                        <i className='fi-heart'></i>
                      </Button>
                    </OverlayTrigger>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </AccordionCard>
          </Accordion>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import AccordionCard from '../components/AccordionCard'

{/* Card based accordion */}
<Accordion defaultActiveKey='0'>

  {/* Active card */}
  <AccordionCard eventKey='0'>
    <Card.Body>
      <div className='d-flex justify-content-between mb-2'>
        <div className='d-flex align-items-center'>
          <Image src='/images/job-board/company/it-pro.png' width={24} height={24} alt='IT Pro TV' />
          <span className='fs-sm text-dark opacity-80 ms-2 ps-1'>IT Pro TV</span>
        </div>
        <Badge pill bg='faded-danger' className='fs-sm'>Hot</Badge>
      </div>
      <h3 className='h6 card-title pt-1 mb-0'>Business Analyst</h3>
    </Card.Body>
    <Accordion.Collapse eventKey='0'>
      <Card.Body className='mt-n1 pt-0'>
        <p className='fs-sm'>Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare pulvinar enim fames orci enim in libero. <Link href='#'>Read more...</Link></p>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='fs-sm'>
            <span className='text-nowrap me-3'>
              <i className='fi-map-pin text-muted me-1'></i>
              New York
            </span>
            <span className='text-nowrap me-3'>
              <i className='fi-cash fs-base text-muted me-1'></i>
              $7,500
            </span>
          </div>
          <OverlayTrigger placement='top' overlay={<Tooltip>Add to Wishlist</Tooltip>}>
            <Button variant='light' size='xs' className='btn-icon shadow-sm rounded-circle text-primary'>
              <i className='fi-heart'></i>
            </Button>
          </OverlayTrigger>
        </div>
      </Card.Body>
    </Accordion.Collapse>
  </AccordionCard>

  {/* Card */}
  <AccordionCard eventKey='1'>
    <Card.Body>
      <div className='d-flex justify-content-between mb-2'>
        <div className='d-flex align-items-center'>
          <Image src='/images/job-board/company/xbox.png' width={24} height={24} alt='Xbox Company' />
          <span className='fs-sm text-dark opacity-80 ms-2 ps-1'>Xbox Company</span>
        </div>
        <Badge pill bg='faded-accent' className='fs-sm'>Featured</Badge>
      </div>
      <h3 className='h6 card-title pt-1 mb-0'>Full-Stack Developer</h3>
    </Card.Body>
    <Accordion.Collapse eventKey='1'>
      <Card.Body className='mt-n1 pt-0'>
        <p className='fs-sm'>Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare pulvinar enim fames orci enim in libero. <Link href='#'>Read more...</Link></p>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='fs-sm'>
            <span className='text-nowrap me-3'>
              <i className='fi-map-pin text-muted me-1'></i>
              Washington
            </span>
            <span className='text-nowrap me-3'>
              <i className='fi-cash fs-base text-muted me-1'></i>
              $10,000
            </span>
          </div>
          <OverlayTrigger placement='top' overlay={<Tooltip>Add to Wishlist</Tooltip>}>
            <Button variant='light' size='xs' className='btn-icon shadow-sm rounded-circle text-primary'>
              <i className='fi-heart'></i>
            </Button>
          </OverlayTrigger>
        </div>
      </Card.Body>
    </Accordion.Collapse>
  </AccordionCard>

  {/* Card */}
  <AccordionCard eventKey='2'>
    <Card.Body>
      <div className='d-flex justify-content-between mb-2'>
        <div className='d-flex align-items-center'>
          <Image src='/images/job-board/company/xampp.png' width={24} height={24} alt='XAMPP Company' />
          <span className='fs-sm text-dark opacity-80 ms-2 ps-1'>XAMPP Company</span>
        </div>
        <Badge pill bg='faded-danger' className='fs-sm'>Hot</Badge>
      </div>
      <h3 className='h6 card-title pt-1 mb-0'>Account Manager</h3>
    </Card.Body>
    <Accordion.Collapse eventKey='2'>
      <Card.Body className='mt-n1 pt-0'>
        <p className='fs-sm'>Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare pulvinar enim fames orci enim in libero. <Link href='#'>Read more...</Link></p>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='fs-sm'>
            <span className='text-nowrap me-3'>
              <i className='fi-map-pin text-muted me-1'></i>
              Los Angeles
            </span>
            <span className='text-nowrap me-3'>
              <i className='fi-cash fs-base text-muted me-1'></i>
              $8,200
            </span>
          </div>
          <OverlayTrigger placement='top' overlay={<Tooltip>Add to Wishlist</Tooltip>}>
            <Button variant='light' size='xs' className='btn-icon shadow-sm rounded-circle text-primary'>
              <i className='fi-heart'></i>
            </Button>
          </OverlayTrigger>
        </div>
      </Card.Body>
    </Accordion.Collapse>
  </AccordionCard>
</Accordion>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default AccordionPage
