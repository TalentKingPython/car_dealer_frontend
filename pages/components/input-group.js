// Input group component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Code from '../../components/Code'

const InputGroupPage = () => {

  const anchorLinks = [
    {
      label: 'Addon position',
      anchor: 'ig-addon-position'
    },
    {
      label: 'Different addon types',
      anchor: 'ig-addon-types'
    },
    {
      label: 'Multiple inputs',
      anchor: 'ig-multiple'
    },
    {
      label: 'Button addons',
      anchor: 'ig-addon-button'
    },
    {
      label: 'Sizing',
      anchor: 'ig-sizing'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Input group'
      pageDescription='Extend form controls by adding text, buttons, etc. on either side.'
      activeNav='/components/input-group'
      docsLink='https://react-bootstrap.github.io/forms/input-group/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Addon position */}
      <ComponentPageSection id='ig-addon-position' title='Addon position'>
        <Tab.Pane eventKey='preview'>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='left-addon'>
              <i className='fi-lock'></i>
            </InputGroup.Text>
            <FormControl
              type='password'
              placeholder='Password'
              aria-label='Password'
              aria-describedby='left-addon'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby='right-addon'
            />
            <InputGroup.Text id='right-addon'>@example.com</InputGroup.Text>
          </InputGroup>
          <InputGroup>
            <InputGroup.Text className='fs-lg py-1'>$</InputGroup.Text>
            <FormControl
              type='number'
              placeholder='Amount'
              aria-label='Amount'
            />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

{/* Addon on the left */}
<InputGroup>
  <InputGroup.Text id='left-addon'>
    <i className='fi-lock'></i>
  </InputGroup.Text>
  <FormControl
    type='password'
    placeholder='Password'
    aria-label='Password'
    aria-describedby='left-addon'
  />
</InputGroup>

{/* Addon on the right */}
<InputGroup>
  <FormControl
    placeholder="Recipient's username"
    aria-label="Recipient's username"
    aria-describedby='right-addon'
  />
  <InputGroup.Text id='right-addon'>@example.com</InputGroup.Text>
</InputGroup>

{/* Addons on both sides */}
<InputGroup>
  <InputGroup.Text className='fs-lg py-1'>$</InputGroup.Text>
  <FormControl
    type='number'
    placeholder='Amount'
    aria-label='Amount'
  />
  <InputGroup.Text>.00</InputGroup.Text>
</InputGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Different addon types */}
      <ComponentPageSection id='ig-addon-types' title='Different addon types'>
        <Tab.Pane eventKey='preview'>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='icon-addon'>
              <i className='fi-chat-left'></i>
            </InputGroup.Text>
            <FormControl
              as='textarea'
              rows={6}
              placeholder='Type your message here...'
              aria-label='Message'
              aria-describedby='icon-addon'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='text-addon' className='fw-bold text-dark'>Options</InputGroup.Text>
            <Form.Select
              defaultValue='default'
              aria-label='Select example'
              aria-describedby='text-addon'
            >
              <option value='default' disabled>Choose one...</option>
              <option value='One'>One</option>
              <option value='Two'>Two</option>
              <option value='Three'>Three</option>
              <option value='Four'>Four</option>
              <option value='Five'>Five</option>
            </Form.Select>
          </InputGroup>
          <InputGroup className='mb-3'>
            <InputGroup.Checkbox aria-label='Checkbox for following text input' />
            <FormControl
              placeholder='Checkbox here'
              aria-label='Text input with checkbox'
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Radio aria-label='Radio button for following text input' />
            <FormControl
              placeholder='Radio button here'
              aria-label='Text input with Radio button'
            />
          </InputGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

{/* Icon addon */}
<InputGroup>
  <InputGroup.Text id='icon-addon'>
    <i className='fi-chat-left'></i>
  </InputGroup.Text>
  <FormControl
    as='textarea'
    rows={6}
    placeholder='Type your message here...'
    aria-label='Message'
    aria-describedby='icon-addon'
  />
</InputGroup>

{/* Textual addon */}
<InputGroup>
  <InputGroup.Text id='text-addon' className='fw-bold text-dark'>Options</InputGroup.Text>
  <Form.Select
    defaultValue='default'
    aria-label='Select example'
    aria-describedby='text-addon'
  >
    <option value='default' disabled>Choose one...</option>
    <option value='One'>One</option>
    <option value='Two'>Two</option>
    <option value='Three'>Three</option>
    <option value='Four'>Four</option>
    <option value='Five'>Five</option>
  </Form.Select>
</InputGroup>

{/* Checkbox addon */}
<InputGroup>
  <InputGroup.Checkbox aria-label='Checkbox for following text input' />
  <FormControl
    placeholder='Checkbox here'
    aria-label='Text input with checkbox'
  />
</InputGroup>

{/* Radio button addon */}
<InputGroup>
  <InputGroup.Radio aria-label='Radio button for following text input' />
  <FormControl
    placeholder='Radio button here'
    aria-label='Text input with Radio button'
  />
</InputGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Multiple inputs */}
      <ComponentPageSection id='ig-multiple' title='Multiple inputs'>
        <Tab.Pane eventKey='preview'>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='addon1' className='fw-bold text-dark'>Full name</InputGroup.Text>
            <FormControl
              placeholder='First name'
              aria-label='First name'
              aria-describedby='addon1'
            />
            <FormControl
              placeholder='Last name'
              aria-label='Last name'
              aria-describedby='addon1'
            />
          </InputGroup>
          <InputGroup>
            <FormControl
              type='time'
              defaultValue='07:45'
              aria-describedby='addon2'
            />
            <FormControl
              type='time'
              defaultValue='09:00'
              aria-describedby='addon2'
            />
            <InputGroup.Text id='addon2'>
              <i className='fi-clock'></i>
            </InputGroup.Text>
          </InputGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

{/* Multiple inputs (addon on the left) */}
<InputGroup>
  <InputGroup.Text id='addon1' className='fw-bold text-dark'>Full name</InputGroup.Text>
  <FormControl
    placeholder='First name'
    aria-label='First name'
    aria-describedby='addon1'
  />
  <FormControl
    placeholder='Last name'
    aria-label='Last name'
    aria-describedby='addon1'
  />
</InputGroup>

{/* Multiple inputs (addon on the right) */}
<InputGroup>
  <FormControl
    type='time'
    defaultValue='07:45'
    aria-describedby='addon2'
  />
  <FormControl
    type='time'
    defaultValue='09:00'
    aria-describedby='addon2'
  />
  <InputGroup.Text id='addon2'>
    <i className='fi-clock'></i>
  </InputGroup.Text>
</InputGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Button addons */}
      <ComponentPageSection id='ig-addon-button' title='Button addons'>
        <Tab.Pane eventKey='preview'>
          <InputGroup className='mb-3'>
            <Button id='left-button-addon'>Button</Button>
            <FormControl
              placeholder='Button on the left'
              aria-label='Example text input with button addon'
              aria-describedby='left-button-addon'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Button on the right'
              aria-label='Example text input with button addon'
              aria-describedby='right-button-addon'
            />
            <Button id='right-button-addon'>Button</Button>
          </InputGroup>
          <InputGroup className='mb-3'>
            <Dropdown id='left-dropdown-addon'>
              <Dropdown.Toggle>Dropdown</Dropdown.Toggle>
              <Dropdown.Menu className='my-1'>
                <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <FormControl
              placeholder='Dropdown on the left'
              aria-label='Example text input with dropdown addon'
              aria-describedby='left-dropdown-addon'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Dropdown on the right'
              aria-label='Example text input with dropdown addon'
              aria-describedby='right-dropdown-addon'
            />
            <Dropdown align='end' id='right-dropdown-addon'>
              <Dropdown.Toggle>Dropdown</Dropdown.Toggle>
              <Dropdown.Menu className='my-1'>
                <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>
          <InputGroup>
            <FormControl
              placeholder='Icon links on the right'
              aria-label='Example text input with icon link addons'
            />
            <InputGroup.Text className='p-0'>
              <a href='#' className='d-block text-body px-3 py-2'>
                <i className='fi-edit mt-n1'></i>
              </a>
            </InputGroup.Text>
            <InputGroup.Text className='p-0'>
              <a href='#' className='d-block text-success px-3 py-2'>
                <i className='fi-check mt-n1'></i>
              </a>
            </InputGroup.Text>
            <InputGroup.Text className='p-0'>
              <a href='#' className='d-block text-danger px-3 py-2'>
                <i className='fi-trash mt-n1'></i>
              </a>
            </InputGroup.Text>
          </InputGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

{/* Button addon on the left */}
<InputGroup>
  <Button id='left-button-addon'>Button</Button>
  <FormControl
    placeholder='Button on the left'
    aria-label='Example text input with button addon'
    aria-describedby='left-button-addon'
  />
</InputGroup>

{/* Button addon on the right */}
<InputGroup>
  <FormControl
    placeholder='Button on the right'
    aria-label='Example text input with button addon'
    aria-describedby='right-button-addon'
  />
  <Button id='right-button-addon'>Button</Button>
</InputGroup>

{/* Dropdown addon on the left */}
<InputGroup>
  <Dropdown id='left-dropdown-addon'>
    <Dropdown.Toggle>Dropdown</Dropdown.Toggle>
    <Dropdown.Menu className='my-1'>
      <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
      <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <FormControl
    placeholder='Dropdown on the left'
    aria-label='Example text input with dropdown addon'
    aria-describedby='left-dropdown-addon'
  />
</InputGroup>

{/* Dropdown addon on the right */}
<InputGroup>
  <FormControl
    placeholder='Dropdown on the right'
    aria-label='Example text input with dropdown addon'
    aria-describedby='right-dropdown-addon'
  />
  <Dropdown align='end' id='right-dropdown-addon'>
    <Dropdown.Toggle>Dropdown</Dropdown.Toggle>
    <Dropdown.Menu className='my-1'>
      <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
      <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</InputGroup>

{/* Multiple icon link addons */}
<InputGroup>
  <FormControl
    placeholder='Icon links on the right'
    aria-label='Example text input with icon link addons'
  />
  <InputGroup.Text className='p-0'>
    <a href='#' className='d-block text-body px-3 py-2'>
      <i className='fi-edit mt-n1'></i>
    </a>
  </InputGroup.Text>
  <InputGroup.Text className='p-0'>
    <a href='#' className='d-block text-success px-3 py-2'>
      <i className='fi-check mt-n1'></i>
    </a>
  </InputGroup.Text>
  <InputGroup.Text className='p-0'>
    <a href='#' className='d-block text-danger px-3 py-2'>
      <i className='fi-trash mt-n1'></i>
    </a>
  </InputGroup.Text>
</InputGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Sizing */}
      <ComponentPageSection id='ig-sizing' title='Sizing'>
        <Tab.Pane eventKey='preview'>
          <div className='d-md-flex'>
            <div className='w-100 me-md-3 mb-md-0 mb-3'>
              <InputGroup size='lg' className='mb-3'>
                <InputGroup.Text id='large-icon-addon'>
                  <i className='fi-lock'></i>
                </InputGroup.Text>
                <FormControl
                  type='password'
                  placeholder='Password'
                  aria-label='Example large password input with icon addon'
                  aria-describedby='large-icon-addon'
                />
              </InputGroup>
              <InputGroup className='mb-3'>
                <InputGroup.Text id='normal-icon-addon'>
                  <i className='fi-lock'></i>
                </InputGroup.Text>
                <FormControl
                  type='password'
                  placeholder='Password'
                  aria-label='Example normal password input with icon addon'
                  aria-describedby='normal-icon-addon'
                />
              </InputGroup>
              <InputGroup size='sm'>
                <InputGroup.Text id='small-icon-addon'>
                  <i className='fi-lock'></i>
                </InputGroup.Text>
                <FormControl
                  type='password'
                  placeholder='Password'
                  aria-label='Example small password input with icon addon'
                  aria-describedby='small-icon-addon'
                />
              </InputGroup>
            </div>
            <div className='w-100'>
              <InputGroup size='lg' className='mb-3'>
                <Form.Select
                  defaultValue='default'
                  aria-label='Example large select with button addon'
                  aria-describedby='large-button-addon'
                >
                  <option value='default' disabled>Choose option</option>
                  <option value='1'>Option item 1</option>
                  <option value='2'>Option item 2</option>
                  <option value='3'>Option item 3</option>
                </Form.Select>
                <Button id='large-button-addon'>Submit</Button>
              </InputGroup>
              <InputGroup className='mb-3'>
                <Form.Select
                  defaultValue='default'
                  aria-label='Example normal select with button addon'
                  aria-describedby='normal-button-addon'
                >
                  <option value='default' disabled>Choose option</option>
                  <option value='1'>Option item 1</option>
                  <option value='2'>Option item 2</option>
                  <option value='3'>Option item 3</option>
                </Form.Select>
                <Button id='normal-button-addon'>Submit</Button>
              </InputGroup>
              <InputGroup size='sm'>
                <Form.Select
                  defaultValue='default'
                  aria-label='Example small select with button addon'
                  aria-describedby='small-button-addon'
                >
                  <option value='default' disabled>Choose option</option>
                  <option value='1'>Option item 1</option>
                  <option value='2'>Option item 2</option>
                  <option value='3'>Option item 3</option>
                </Form.Select>
                <Button id='small-button-addon'>Submit</Button>
              </InputGroup>
            </div>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import InputGroup from 'react-bootstrap/InputGroup'

{/* Large input group */}
<InputGroup size='lg'>...</InputGroup>

{/* Normal input group */}
<InputGroup>...</InputGroup>

{/* Small input group */}
<InputGroup size='sm'>...</InputGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default InputGroupPage
