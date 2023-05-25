import DocsPageLayout from '../../components/partials/DocsPageLayout'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Fade from 'react-bootstrap/Fade'
import Code from '../../components/Code'
import Subscription from '../../components/Subscription'


const MailchimpPage = () => (

  <DocsPageLayout pageTitle='Mailchimp subscription form' activeNav='/docs/mailchimp'>
    <div className='pb-5'>
      <p>Mailchimp is a marketing automation platform and an email marketing service.</p>
      <p>In other words this Mailchimp widget will help you to collect user emails right from you website to run email marketing campaign via Mailchimp web application. Below is the live example of the widget that collects emails for Createx Studio. Switch to Code tab to see code example and instructions.</p>
      <Tab.Container defaultActiveKey='preview' transition={Fade}>
        <Card className='border-0 shadow-sm'>
          <Card.Header>
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
          <Card.Body>
            <Tab.Content>
              <Tab.Pane eventKey='preview'>
                <h3 className='h6 mb-2 pb-1'>Subscribe</h3>
                <Subscription
                  action='https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=29ca296126'
                  antispam='b_c7103e2c981361a6639545bd5_29ca29612'
                  placeholder='Your email'
                  btnLabel='Subscribe*'
                  helperText='*Subscribe to our newsletter to receive early discount offers, updates and new products info.'
                  size='sm'
                  style={{maxWidth: '24rem'}}
                />
              </Tab.Pane>
              <Tab.Pane eventKey='code'>
                <Code language='jsx'>{`import Subscription from '../components/Subscription'

{/* Widget: Subscription (MailChimp Ajax)
Instructions how to get MailChimp action link:
1. Log in to your MailChimp Dashboard / Audience / Manage Audience / Signup forms / Embedded forms
2. In the provided code find form action link and copy it
3. Paste it to the <Subscription /> component action prop
4. Also in the form code provided by MailChimp find antispam input and copy it name attribute contents
5. Paste what you have copied from name attribute to the antispam prop of <Subscription /> component */}

<Subscription
  action='mailchimp-embedded-form-atcion-link'
  antispam='mailchimp-embedded-form-antispam-name-attribute'
  placeholder='Your email'
  btnLabel='Subscribe*'
  helperText='*Subscribe to our newsletter to receive early discount offers, updates and new products info.'
  size='sm'
/>`}</Code>
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Card>
      </Tab.Container>
    </div>
  </DocsPageLayout>
)

export default MailchimpPage
