// Social buttons component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Code from '../../components/Code'
import SocialButton from '../../components/SocialButton'

const SocialButtonsPage = () => {

  const anchorLinks = [
    {
      label: 'Variant: basic',
      anchor: 'sb-basic'
    },
    {
      label: 'Variant: solid',
      anchor: 'sb-solid'
    },
    {
      label: 'Variant: translucent',
      anchor: 'sb-translucent'
    },
    {
      label: 'Variant: border',
      anchor: 'sb-border'
    },
    {
      label: 'Round shape',
      anchor: 'sb-round'
    },
    {
      label: 'Sizing',
      anchor: 'sb-sizing'
    },
    {
      label: 'Light version',
      anchor: 'sb-light'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Social buttons'
      pageDescription='Display links to your social network accounts with these icon buttons.'
      activeNav='/components/social-buttons'
      anchorLinks={anchorLinks}
    >

      {/* Variant: basic */}
      <ComponentPageSection id='sb-basic' title='Variant: basic'>
        <Tab.Pane eventKey='preview'>
          <SocialButton href='#' brand='airbnb' className='mb-2' />
          <SocialButton href='#' brand='behance' className='mb-2' />
          <SocialButton href='#' brand='discord' className='mb-2' />
          <SocialButton href='#' brand='dribbble' className='mb-2' />
          <SocialButton href='#' brand='dropbox' className='mb-2' />
          <SocialButton href='#' brand='facebook-square' className='mb-2' />
          <SocialButton href='#' brand='facebook' className='mb-2' />
          <SocialButton href='#' brand='foursquare' className='mb-2' />
          <SocialButton href='#' brand='github' className='mb-2' />
          <SocialButton href='#' brand='google-drive' className='mb-2' />
          <SocialButton href='#' brand='google-play' className='mb-2' />
          <SocialButton href='#' brand='google' className='mb-2' />
          <SocialButton href='#' brand='hangouts' className='mb-2' />
          <SocialButton href='#' brand='instagram' className='mb-2' />
          <SocialButton href='#' brand='linkedin' className='mb-2' />
          <SocialButton href='#' brand='medium' className='mb-2' />
          <SocialButton href='#' brand='messenger' className='mb-2' />
          <SocialButton href='#' brand='odnoklassniki' className='mb-2' />
          <SocialButton href='#' brand='paypal' className='mb-2' />
          <SocialButton href='#' brand='pinterest' className='mb-2' />
          <SocialButton href='#' brand='rss' className='mb-2' />
          <SocialButton href='#' brand='skype' className='mb-2' />
          <SocialButton href='#' brand='slack' className='mb-2' />
          <SocialButton href='#' brand='snapchat' className='mb-2' />
          <SocialButton href='#' brand='soundcloud' className='mb-2' />
          <SocialButton href='#' brand='telegram-circle' className='mb-2' />
          <SocialButton href='#' brand='telegram' className='mb-2' />
          <SocialButton href='#' brand='tiktok' className='mb-2' />
          <SocialButton href='#' brand='tumblr' className='mb-2' />
          <SocialButton href='#' brand='twitch' className='mb-2' />
          <SocialButton href='#' brand='twitter' className='mb-2' />
          <SocialButton href='#' brand='viber' className='mb-2' />
          <SocialButton href='#' brand='vimeo' className='mb-2' />
          <SocialButton href='#' brand='vk' className='mb-2' />
          <SocialButton href='#' brand='wechat' className='mb-2' />
          <SocialButton href='#' brand='whatsapp' className='mb-2' />
          <SocialButton href='#' brand='xing' className='mb-2' />
          <SocialButton href='#' brand='youtube' className='mb-2' />
          <SocialButton href='#' brand='mail' className='mb-2' />
          <SocialButton href='#' brand='phone' className='mb-2' />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import SocialButton from '../components/SocialButton'

<SocialButton href='#' brand='airbnb' />
<SocialButton href='#' brand='behance' />
<SocialButton href='#' brand='discord' />
<SocialButton href='#' brand='dribbble' />
<SocialButton href='#' brand='dropbox' />
<SocialButton href='#' brand='facebook-square' />
<SocialButton href='#' brand='facebook' />
<SocialButton href='#' brand='foursquare' />
<SocialButton href='#' brand='github' />
<SocialButton href='#' brand='google-drive' />
<SocialButton href='#' brand='google-play' />
<SocialButton href='#' brand='google' />
<SocialButton href='#' brand='hangouts' />
<SocialButton href='#' brand='instagram' />
<SocialButton href='#' brand='linkedin' />
<SocialButton href='#' brand='medium' />
<SocialButton href='#' brand='messenger' />
<SocialButton href='#' brand='odnoklassniki' />
<SocialButton href='#' brand='paypal' />
<SocialButton href='#' brand='pinterest' />
<SocialButton href='#' brand='rss' />
<SocialButton href='#' brand='skype' />
<SocialButton href='#' brand='slack' />
<SocialButton href='#' brand='snapchat' />
<SocialButton href='#' brand='soundcloud' />
<SocialButton href='#' brand='telegram-circle' />
<SocialButton href='#' brand='telegram' />
<SocialButton href='#' brand='tiktok' />
<SocialButton href='#' brand='tumblr' />
<SocialButton href='#' brand='twitch' />
<SocialButton href='#' brand='twitter' />
<SocialButton href='#' brand='viber' />
<SocialButton href='#' brand='vimeo' />
<SocialButton href='#' brand='vk' />
<SocialButton href='#' brand='wechat' />
<SocialButton href='#' brand='whatsapp' />
<SocialButton href='#' brand='xing' />
<SocialButton href='#' brand='youtube' />
<SocialButton href='#' brand='mail' />
<SocialButton href='#' brand='phone' />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Variant: solid */}
      <ComponentPageSection id='sb-solid' title='Variant: solid'>
        <Tab.Pane eventKey='preview'>
          <SocialButton href='#' variant='solid' brand='airbnb' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='behance' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='discord' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='dribbble' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='dropbox' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='facebook-square' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='facebook' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='foursquare' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='github' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='google-drive' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='google-play' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='google' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='hangouts' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='instagram' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='linkedin' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='medium' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='messenger' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='odnoklassniki' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='paypal' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='pinterest' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='rss' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='skype' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='slack' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='snapchat' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='soundcloud' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='telegram-circle' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='telegram' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='tiktok' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='tumblr' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='twitch' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='twitter' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='viber' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='vimeo' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='vk' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='wechat' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='whatsapp' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='xing' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='youtube' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='mail' className='me-2 mb-2' />
          <SocialButton href='#' variant='solid' brand='phone' className='mb-2' />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import SocialButton from '../components/SocialButton'

<SocialButton href='#' variant='solid' brand='airbnb' />
<SocialButton href='#' variant='solid' brand='behance' />
<SocialButton href='#' variant='solid' brand='discord' />
<SocialButton href='#' variant='solid' brand='dribbble' />
<SocialButton href='#' variant='solid' brand='dropbox' />
<SocialButton href='#' variant='solid' brand='facebook-square' />
<SocialButton href='#' variant='solid' brand='facebook' />
<SocialButton href='#' variant='solid' brand='foursquare' />
<SocialButton href='#' variant='solid' brand='github' />
<SocialButton href='#' variant='solid' brand='google-drive' />
<SocialButton href='#' variant='solid' brand='google-play' />
<SocialButton href='#' variant='solid' brand='google' />
<SocialButton href='#' variant='solid' brand='hangouts' />
<SocialButton href='#' variant='solid' brand='instagram' />
<SocialButton href='#' variant='solid' brand='linkedin' />
<SocialButton href='#' variant='solid' brand='medium' />
<SocialButton href='#' variant='solid' brand='messenger' />
<SocialButton href='#' variant='solid' brand='odnoklassniki' />
<SocialButton href='#' variant='solid' brand='paypal' />
<SocialButton href='#' variant='solid' brand='pinterest' />
<SocialButton href='#' variant='solid' brand='rss' />
<SocialButton href='#' variant='solid' brand='skype' />
<SocialButton href='#' variant='solid' brand='slack' />
<SocialButton href='#' variant='solid' brand='snapchat' />
<SocialButton href='#' variant='solid' brand='soundcloud' />
<SocialButton href='#' variant='solid' brand='telegram-circle' />
<SocialButton href='#' variant='solid' brand='telegram' />
<SocialButton href='#' variant='solid' brand='tiktok' />
<SocialButton href='#' variant='solid' brand='tumblr' />
<SocialButton href='#' variant='solid' brand='twitch' />
<SocialButton href='#' variant='solid' brand='twitter' />
<SocialButton href='#' variant='solid' brand='viber' />
<SocialButton href='#' variant='solid' brand='vimeo' />
<SocialButton href='#' variant='solid' brand='vk' />
<SocialButton href='#' variant='solid' brand='wechat' />
<SocialButton href='#' variant='solid' brand='whatsapp' />
<SocialButton href='#' variant='solid' brand='xing' />
<SocialButton href='#' variant='solid' brand='youtube' />
<SocialButton href='#' variant='solid' brand='mail' />
<SocialButton href='#' variant='solid' brand='phone' />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Variant: translucent */}
      <ComponentPageSection id='sb-translucent' title='Variant: translucent'>
        <Tab.Pane eventKey='preview'>
          <SocialButton href='#' variant='translucent' brand='airbnb' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='behance' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='discord' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='dribbble' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='dropbox' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='facebook-square' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='facebook' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='foursquare' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='github' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='google-drive' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='google-play' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='google' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='hangouts' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='instagram' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='linkedin' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='medium' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='messenger' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='odnoklassniki' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='paypal' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='pinterest' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='rss' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='skype' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='slack' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='snapchat' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='soundcloud' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='telegram-circle' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='telegram' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='tiktok' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='tumblr' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='twitch' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='twitter' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='viber' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='vimeo' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='vk' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='wechat' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='whatsapp' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='xing' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='youtube' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='mail' className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='phone' className='mb-2' />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import SocialButton from '../components/SocialButton'

<SocialButton href='#' variant='translucent' brand='airbnb' />
<SocialButton href='#' variant='translucent' brand='behance' />
<SocialButton href='#' variant='translucent' brand='discord' />
<SocialButton href='#' variant='translucent' brand='dribbble' />
<SocialButton href='#' variant='translucent' brand='dropbox' />
<SocialButton href='#' variant='translucent' brand='facebook-square' />
<SocialButton href='#' variant='translucent' brand='facebook' />
<SocialButton href='#' variant='translucent' brand='foursquare' />
<SocialButton href='#' variant='translucent' brand='github' />
<SocialButton href='#' variant='translucent' brand='google-drive' />
<SocialButton href='#' variant='translucent' brand='google-play' />
<SocialButton href='#' variant='translucent' brand='google' />
<SocialButton href='#' variant='translucent' brand='hangouts' />
<SocialButton href='#' variant='translucent' brand='instagram' />
<SocialButton href='#' variant='translucent' brand='linkedin' />
<SocialButton href='#' variant='translucent' brand='medium' />
<SocialButton href='#' variant='translucent' brand='messenger' />
<SocialButton href='#' variant='translucent' brand='odnoklassniki' />
<SocialButton href='#' variant='translucent' brand='paypal' />
<SocialButton href='#' variant='translucent' brand='pinterest' />
<SocialButton href='#' variant='translucent' brand='rss' />
<SocialButton href='#' variant='translucent' brand='skype' />
<SocialButton href='#' variant='translucent' brand='slack' />
<SocialButton href='#' variant='translucent' brand='snapchat' />
<SocialButton href='#' variant='translucent' brand='soundcloud' />
<SocialButton href='#' variant='translucent' brand='telegram-circle' />
<SocialButton href='#' variant='translucent' brand='telegram' />
<SocialButton href='#' variant='translucent' brand='tiktok' />
<SocialButton href='#' variant='translucent' brand='tumblr' />
<SocialButton href='#' variant='translucent' brand='twitch' />
<SocialButton href='#' variant='translucent' brand='twitter' />
<SocialButton href='#' variant='translucent' brand='viber' />
<SocialButton href='#' variant='translucent' brand='vimeo' />
<SocialButton href='#' variant='translucent' brand='vk' />
<SocialButton href='#' variant='translucent' brand='wechat' />
<SocialButton href='#' variant='translucent' brand='whatsapp' />
<SocialButton href='#' variant='translucent' brand='xing' />
<SocialButton href='#' variant='translucent' brand='youtube' />
<SocialButton href='#' variant='translucent' brand='mail' />
<SocialButton href='#' variant='translucent' brand='phone' />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Variant: border */}
      <ComponentPageSection id='sb-border' title='Variant: border'>
        <Tab.Pane eventKey='preview'>
          <SocialButton href='#' variant='border' brand='airbnb' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='behance' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='discord' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='dribbble' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='dropbox' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='facebook-square' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='facebook' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='foursquare' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='github' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='google-drive' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='google-play' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='google' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='hangouts' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='instagram' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='linkedin' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='medium' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='messenger' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='odnoklassniki' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='paypal' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='pinterest' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='rss' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='skype' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='slack' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='snapchat' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='soundcloud' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='telegram-circle' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='telegram' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='tiktok' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='tumblr' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='twitch' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='twitter' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='viber' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='vimeo' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='vk' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='wechat' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='whatsapp' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='xing' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='youtube' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='mail' className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='phone' className='mb-2' />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import SocialButton from '../components/SocialButton'

<SocialButton href='#' variant='border' brand='airbnb' />
<SocialButton href='#' variant='border' brand='behance' />
<SocialButton href='#' variant='border' brand='discord' />
<SocialButton href='#' variant='border' brand='dribbble' />
<SocialButton href='#' variant='border' brand='dropbox' />
<SocialButton href='#' variant='border' brand='facebook-square' />
<SocialButton href='#' variant='border' brand='facebook' />
<SocialButton href='#' variant='border' brand='foursquare' />
<SocialButton href='#' variant='border' brand='github' />
<SocialButton href='#' variant='border' brand='google-drive' />
<SocialButton href='#' variant='border' brand='google-play' />
<SocialButton href='#' variant='border' brand='google' />
<SocialButton href='#' variant='border' brand='hangouts' />
<SocialButton href='#' variant='border' brand='instagram' />
<SocialButton href='#' variant='border' brand='linkedin' />
<SocialButton href='#' variant='border' brand='medium' />
<SocialButton href='#' variant='border' brand='messenger' />
<SocialButton href='#' variant='border' brand='odnoklassniki' />
<SocialButton href='#' variant='border' brand='paypal' />
<SocialButton href='#' variant='border' brand='pinterest' />
<SocialButton href='#' variant='border' brand='rss' />
<SocialButton href='#' variant='border' brand='skype' />
<SocialButton href='#' variant='border' brand='slack' />
<SocialButton href='#' variant='border' brand='snapchat' />
<SocialButton href='#' variant='border' brand='soundcloud' />
<SocialButton href='#' variant='border' brand='telegram-circle' />
<SocialButton href='#' variant='border' brand='telegram' />
<SocialButton href='#' variant='border' brand='tiktok' />
<SocialButton href='#' variant='border' brand='tumblr' />
<SocialButton href='#' variant='border' brand='twitch' />
<SocialButton href='#' variant='border' brand='twitter' />
<SocialButton href='#' variant='border' brand='viber' />
<SocialButton href='#' variant='border' brand='vimeo' />
<SocialButton href='#' variant='border' brand='vk' />
<SocialButton href='#' variant='border' brand='wechat' />
<SocialButton href='#' variant='border' brand='whatsapp' />
<SocialButton href='#' variant='border' brand='xing' />
<SocialButton href='#' variant='border' brand='youtube' />
<SocialButton href='#' variant='border' brand='mail' />
<SocialButton href='#' variant='border' brand='phone' />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Round shape */}
      <ComponentPageSection id='sb-round' title='Round shape'>
        <Tab.Pane eventKey='preview'>
          <SocialButton href='#' variant='solid' brand='instagram' roundedCircle className='me-2 mb-2' />
          <SocialButton href='#' variant='translucent' brand='instagram' roundedCircle className='me-2 mb-2' />
          <SocialButton href='#' variant='border' brand='instagram' roundedCircle className='mb-2' />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import SocialButton from '../components/SocialButton'

{/* Round solid social button */}
<SocialButton href='#' variant='solid' brand='instagram' roundedCircle />

{/* Round solid social button */}
<SocialButton href='#' variant='translucent' brand='instagram' roundedCircle />

{/* Round solid social button */}
<SocialButton href='#' variant='border' brand='instagram' roundedCircle />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Sizing */}
      <ComponentPageSection id='sb-sizing' title='Sizing'>
        <Tab.Pane eventKey='preview'>
          <SocialButton href='#' brand='dribbble' size='sm' className='mb-2' />
          <SocialButton href='#' brand='dribbble' className='mb-2' />
          <SocialButton href='#' brand='dribbble' size='lg' className='mb-2' />
          <SocialButton href='#' brand='dribbble' size='xl' className='mb-2' />
          <div className='pt-2'>
            <SocialButton href='#' brand='twitter' variant='solid' size='sm' className='me-2 mb-2' />
            <SocialButton href='#' brand='twitter' variant='solid' className='me-2 mb-2' />
            <SocialButton href='#' brand='twitter' variant='solid' size='lg' className='me-2 mb-2' />
            <SocialButton href='#' brand='twitter' variant='solid' size='xl' className='mb-2' />
          </div>
          <div className='pt-2'>
            <SocialButton href='#' brand='skype' variant='translucent' size='sm' className='me-2 mb-2' />
            <SocialButton href='#' brand='skype' variant='translucent' className='me-2 mb-2' />
            <SocialButton href='#' brand='skype' variant='translucent' size='lg' className='me-2 mb-2' />
            <SocialButton href='#' brand='skype' variant='translucent' size='xl' className='mb-2' />
          </div>
          <div className='pt-2'>
            <SocialButton href='#' brand='google' variant='border' size='sm' className='me-2 mb-2' />
            <SocialButton href='#' brand='google' variant='border' className='me-2 mb-2' />
            <SocialButton href='#' brand='google' variant='border' size='lg' className='me-2 mb-2' />
            <SocialButton href='#' brand='google' variant='border' size='xl' className='mb-2' />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import SocialButton from '../components/SocialButton'

{/* Small basic social button */}
<SocialButton href='#' brand='dribbble' size='sm' />

{/* Normal basic social button */}
<SocialButton href='#' brand='dribbble' />

{/* Large basic social button */}
<SocialButton href='#' brand='dribbble' size='lg' />

{/* Extra large basic social button */}
<SocialButton href='#' brand='dribbble' size='xl' />

{/* Small solid social button */}
<SocialButton href='#' brand='twitter' variant='solid' size='sm' />

{/* Normal solid social button */}
<SocialButton href='#' brand='twitter' variant='solid' />

{/* Large solid social button */}
<SocialButton href='#' brand='twitter' variant='solid' size='lg' />

{/* Extra large solid social button */}
<SocialButton href='#' brand='twitter' variant='solid' size='xl' />

{/* Small translucent social button */}
<SocialButton href='#' brand='skype' variant='translucent' size='sm' />

{/* Normal translucent social button */}
<SocialButton href='#' brand='skype' variant='translucent' />

{/* Large translucent social button */}
<SocialButton href='#' brand='skype' variant='translucent' size='lg' />

{/* Extra large translucent social button */}
<SocialButton href='#' brand='skype' variant='translucent' size='xl' />

{/* Small border social button */}
<SocialButton href='#' brand='google' variant='border' size='sm' />

{/* Normal border social button */}
<SocialButton href='#' brand='google' variant='border' />

{/* Large border social button */}
<SocialButton href='#' brand='google' variant='border' size='lg' />

{/* Extra large border social button */}
<SocialButton href='#' brand='google' variant='border' size='xl' />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Light version */}
      <ComponentPageSection id='sb-light' title='Light version'>
        <Tab.Pane eventKey='preview' className='m-n3 pt-4 p-3 bg-dark'>
          <div className='d-inline-block py-2 me-3'>
            <SocialButton href='#' brand='facebook' light className='mb-2' />
            <SocialButton href='#' brand='twitter' light className='mb-2' />
            <SocialButton href='#' brand='instagram' light className='mb-2' />
          </div>
          <div className='d-inline-block py-2 me-3'>
            <SocialButton href='#' brand='facebook' variant='solid' light className='me-2 mb-2' />
            <SocialButton href='#' brand='twitter' variant='solid' light className='me-2 mb-2' />
            <SocialButton href='#' brand='instagram' variant='solid' light className='me-2 mb-2' />
          </div>
          <div className='d-inline-block py-2'>
            <SocialButton href='#' brand='facebook' variant='border' light className='me-2 mb-2' />
            <SocialButton href='#' brand='twitter' variant='border' light className='me-2 mb-2' />
            <SocialButton href='#' brand='instagram' variant='border' light className='me-2 mb-2' />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import SocialButton from '../components/SocialButton'

{/* Light basic social button */}
<SocialButton href='#' brand='facebook' light />

{/* Light solid social button */}
<SocialButton href='#' brand='facebook' variant='solid' light />

{/* Light translucent social button */}
<SocialButton href='#' brand='facebook' variant='translucent' light />

{/* Light border social button */}
<SocialButton href='#' brand='facebook' variant='border' light />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default SocialButtonsPage
