// Quotation, Tetsimonial, Review and Comment components documentation page with code examples

import { useReducer } from 'react'
import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'
import Code from '../../components/Code'
import Blockquote from '../../components/Blockquote'
import SocialButton from '../../components/SocialButton'
import StarRating from '../../components/StarRating'
import Review from '../../components/Review'
import Comment from '../../components/Comment'

const TestimonialsPage = () => {

  const anchorLinks = [
    {
      label: 'Blockquote based',
      anchor: 'testimonial-blockquote'
    },
    {
      label: 'Inside card: Basic',
      anchor: 'testimonial-card-basic'
    },
    {
      label: 'Inside card: Compound',
      anchor: 'testimonial-card-compound'
    },
    {
      label: 'Review',
      anchor: 'testimonial-review'
    },
    {
      label: 'Comment',
      anchor: 'testimonial-comment'
    },
    {
      label: 'Light version',
      anchor: 'testimonial-light'
    }
  ]


  // Review with actionable Like / Dislike buttons example

  const initialState = {
    likes: 3,
    dislikes: 0,
    active: null
  }

  const reducer = (state, action) => {
    const { likes, dislikes, active } = state

    switch (action.type) {
      case 'likeHandle':
        return {
          ...state,
          likes: state.likes + 1,
          dislikes: active === 'dislike' ? dislikes - 1 : dislikes,
          active: 'like'
        }
      case 'dislikeHandle':
        return {
          ...state,
          dislikes: state.dislikes + 1,
          likes: active === 'like' ? likes - 1 : likes,
          active: 'dislike'
        }
      default:
        return state
    }
  }

  const ReviewExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { likes, dislikes, active } = state

    return (
      <Review
        author={{
          thumbSrc: '/images/avatars/03.jpg',
          thumbSize: 48,
          thumbShape: 'rounded-circle',
          name: 'Annette Black'
        }}
        rating={4.2}
        date='Jan 17, 2021'
        likeActive={active === 'like' ? true : false}
        dislikeActive={active === 'dislike' ? true : false}
        likeCount={likes}
        dislikeCount={dislikes}
        likeClick={() => active !== 'like' ? dispatch({ type: 'likeHandle' }) : null}
        dislikeClick={() => active !== 'dislike' ? dispatch({ type: 'dislikeHandle' }) : null}
        className='py-2'
        style={{maxWidth: '48rem'}}
      >
        Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.
      </Review>
    )
  }


  return (
    <ComponentPageLayout
      pageTitle='Testimonials / reviews'
      pageDescription='Component is designed to showcase testimonials from satisfied clients or reviews of the products on your website.'
      activeNav='/components/testimonials'
      anchorLinks={anchorLinks}
    >

      {/* Blockquote based */}
      <ComponentPageSection id='testimonial-blockquote' title='Blockquote based'>
        <Tab.Pane eventKey='preview'>
          <Blockquote
            author={{
              thumbSrc: '/images/avatars/04.jpg',
              thumbSize: 48,
              thumbShape: 'rounded-circle',
              name: 'Ralph Edwards',
              position: 'Co-founder, CEO'
            }}
            style={{maxWidth: '48rem'}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Blockquote>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Blockquote from '../components/Blockquote'
          
{/* Blockquote */}
<Blockquote
  author={{
    thumbSrc: '/images/avatars/04.jpg',
    thumbSize: 48,
    name: 'Ralph Edwards',
    position: 'Co-founder, CEO'
  }}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</Blockquote>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Inside card: Basic */}
      <ComponentPageSection id='testimonial-card-basic' title='Inside card: Basic'>
        <Tab.Pane eventKey='preview'>
          <div className='pt-3' style={{maxWidth: '48rem'}}>
            <Card className='border-0 shadow-sm'>
              <Card.Body
                as={Blockquote}
                author={{
                  thumbSrc: '/images/job-board/company/zalo-lg.png',
                  thumbSize: 56,
                  name: 'Zalo Tech Company',
                  position: 'Floyd Miles, Head of HR Department'
                }}  
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Card.Body>
            </Card>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Card from 'react-bootstrap/Card'
import Blockquote from '../components/Blockquote'
          
{/* Blockquote inside card */}
<Card className='border-0 shadow-sm'>
  <Card.Body
    as={Blockquote}
    author={{
      thumbSrc: '/images/job-board/company/zalo-lg.png',
      thumbSize: 56,
      name: 'Zalo Tech Company',
      position: 'Floyd Miles, Head of HR Department'
    }}  
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Inside card: Compound */}
      <ComponentPageSection id='testimonial-card-compound' title='Inside card: Compound'>
        <Tab.Pane eventKey='preview'>
          <div className='pt-3' style={{maxWidth: '33rem'}}>
            <Card className='border-0 shadow-sm'>
              <Card.Body as='blockquote' className='blockquote'>
                <h4 style={{maxWidth: '20rem'}}>&quot;I will select the best accommodation for you&quot;</h4>
                <p>Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante adipiscing. Vel metus odio at faucibus ac. Neque id placerat et id ut. Scelerisque eu mi ullamcorper sit urna. Est volutpat dignissim elementum nec.</p>
                <footer className='d-flex justify-content-between'>
                  <div className='pe3'>
                    <h6 className='mb-0'>Floyd Miles</h6>
                    <div className='text-muted fw-normal fs-sm mb-3'>Imperial Property Group Agent</div>
                    <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='mb-2 me-2' />
                    <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='mb-2 me-2' />
                    <SocialButton href='#' variant='solid' brand='linkedin' roundedCircle className='mb-2' />
                  </div>
                  <div>
                    <StarRating rating='5' />
                    <div className='text-muted fs-sm mt-1'>45 reviews</div>
                  </div>
                </footer>
              </Card.Body>
            </Card>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Card from 'react-bootstrap/Card'
import SocialButton from '../components/SocialButton'
import StarRating from '../components/StarRating'
          
{/* Blockquote inside card + Custom footer */}
<Card className='border-0 shadow-sm'>
  <Card.Body as='blockquote' className='blockquote'>
    <h4 style={{maxWidth: '20rem'}}>&quot;I will select the best accommodation for you&quot;</h4>
    <p>Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante adipiscing. Vel metus odio at faucibus ac. Neque id placerat et id ut. Scelerisque eu mi ullamcorper sit urna. Est volutpat dignissim elementum nec.</p>
    <footer className='d-flex justify-content-between'>
      <div className='pe3'>
        <h6 className='mb-0'>Floyd Miles</h6>
        <div className='text-muted fw-normal fs-sm mb-3'>Imperial Property Group Agent</div>
        <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='mb-2 me-2' />
        <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='mb-2 me-2' />
        <SocialButton href='#' variant='solid' brand='linkedin' roundedCircle className='mb-2' />
      </div>
      <div>
        <StarRating rating='5' />
        <div className='text-muted fs-sm mt-1'>45 reviews</div>
      </div>
    </footer>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Review */}
      <ComponentPageSection id='testimonial-review' title='Review'>
        <Tab.Pane eventKey='preview'>
          <ReviewExample />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useReducer } from 'react'
import Review from '../components/Review'
          
{/* Review with actionable Like / Dislike buttons example */}

const initialState = {
  likes: 3,
  dislikes: 0,
  active: null
}

const reducer = (state, action) => {
  const { likes, dislikes, active } = state

  switch (action.type) {
    case 'likeHandle':
      return {
        ...state,
        likes: state.likes + 1,
        dislikes: active === 'dislike' ? dislikes - 1 : dislikes,
        active: 'like'
      }
    case 'dislikeHandle':
      return {
        ...state,
        dislikes: state.dislikes + 1,
        likes: active === 'like' ? likes - 1 : likes,
        active: 'dislike'
      }
    default:
      return state
  }
}

const ReviewExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { likes, dislikes, active } = state

  return (
    <Review
      author={{
        thumbSrc: '/images/avatars/03.jpg',
        thumbSize: 48,
        thumbShape: 'rounded-circle',
        name: 'Annette Black'
      }}
      rating={4.2}
      date='Jan 17, 2021'
      likeActive={active === 'like' ? true : false}
      dislikeActive={active === 'dislike' ? true : false}
      likeCount={likes}
      dislikeCount={dislikes}
      likeClick={() => active !== 'like' ? dispatch({ type: 'likeHandle' }) : null}
      dislikeClick={() => active !== 'dislike' ? dispatch({ type: 'dislikeHandle' }) : null}
    >
      Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.
    </Review>
  )
}

render(<ReviewExample />)`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Comment */}
      <ComponentPageSection id='testimonial-comment' title='Comment'>
        <Tab.Pane eventKey='preview'>
          <Comment
            author={{
              thumbSrc: '/images/avatars/06.jpg',
              thumbSize: 48,
              thumbShape: 'rounded-circle',
              name: 'Barbara Palson'
            }}
            text='Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.'
            date='3 days ago'
            replyLabel='Reply'
            replyClick={() => alert('Hook any action to Reply button!')}
            className='pt-2'
            style={{maxWidth: '48rem'}}
          >
            <Comment
              author={{
                thumbSrc: '/images/avatars/05.jpg',
                thumbSize: 48,
                thumbShape: 'rounded-circle',
                name: 'Daniel Adams'
              }}
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
              date='2 days ago'
            />
          </Comment>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Comment from '../components/Comment'
          
{/* Parent Comment */}
<Comment
  author={{
    thumbSrc: '/images/avatars/06.jpg',
    thumbSize: 48,
    thumbShape: 'rounded-circle',
    name: 'Barbara Palson'
  }}
  text='Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.'
  date='3 days ago'
  replyLabel='Reply'
  replyClick={() => alert('Hook any action to Reply button!')}
>

  {/* Child Comment (comment reply) */}
  <Comment
    author={{
      thumbSrc: '/images/avatars/05.jpg',
      thumbSize: 48,
      thumbShape: 'rounded-circle',
      name: 'Daniel Adams'
    }}
    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    date='2 days ago'
  />
</Comment>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Light version */}
      <ComponentPageSection id='testimonial-light' title='Light version'>
        <Tab.Pane eventKey='preview' className='m-n3 p-3 bg-dark'>
          <div className='pt-3' style={{maxWidth: '48rem'}}>
            <Card className='card-light mb-5'>
              <Card.Body
                as={Blockquote}
                light
                author={{
                  thumbSrc: '/images/job-board/company/kibana-lg.png',
                  thumbSize: 56,
                  name: 'Elastic Kibana',
                  position: 'Floyd Miles, Head of HR Department'
                }}  
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Card.Body>
            </Card>
            <Review
              light
              author={{
                thumbSrc: '/images/avatars/03.jpg',
                thumbSize: 48,
                thumbShape: 'rounded-circle',
                name: 'Annette Black'
              }}
              rating={4.2}
              date='Jan 17, 2021'
              likeCount={3}
              dislikeCount={0}
              className='mb-4'
            >
              Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.
            </Review>
            <Comment
              light
              author={{
                thumbSrc: '/images/avatars/06.jpg',
                thumbSize: 48,
                thumbShape: 'rounded-circle',
                name: 'Barbara Palson'
              }}
              text='Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.'
              date='3 days ago'
              replyLabel='Reply'
              replyClick={() => alert('Hook any action to Reply button!')}
              className='mb-4'
            />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Card from 'react-bootstrap/Card'
import Blockquote from '../components/Blockquote'
import Review from '../components/Review'
import Comment from '../components/Comment'

          
{/* Light testimonial inside card */}
<Card className='card-light'>
  <Card.Body
    as={Blockquote}
    light
    author={{
      thumbSrc: '/images/job-board/company/kibana-lg.png',
      thumbSize: 56,
      name: 'Elastic Kibana',
      position: 'Floyd Miles, Head of HR Department'
    }}  
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Card.Body>
</Card>

{/* Light review */}
<Review
  light
  author={{
    thumbSrc: '/images/avatars/03.jpg',
    thumbSize: 48,
    thumbShape: 'rounded-circle',
    name: 'Annette Black'
  }}
  rating={4.2}
  date='Jan 17, 2021'
  likeCount={3}
  dislikeCount={0}
>
  Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.
</Review>

{/* Light comment */}
<Comment
  light
  author={{
    thumbSrc: '/images/avatars/06.jpg',
    thumbSize: 48,
    thumbShape: 'rounded-circle',
    name: 'Barbara Palson'
  }}
  text='Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.'
  date='3 days ago'
  replyLabel='Reply'
  replyClick={() => alert('Hook any action to Reply button!')}
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default TestimonialsPage
