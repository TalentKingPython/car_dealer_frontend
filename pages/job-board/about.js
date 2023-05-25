import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import ImageLoader from '../../components/ImageLoader'
import Blockquote from '../../components/Blockquote'
import ImageSwap from '../../components/ImageSwap'
import BlogCard from '../../components/BlogCard'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

const AboutPage = () => {
  return (
    <JobBoardPageLayout
      pageTitle='About'
      activeNav='Pages'
    >

      {/* Hero */}
      <section className='bg-dark py-5'>
        <Container className='pt-5 pb-lg-5'>

          {/* Breadcrumbs */}
          <Breadcrumb className='breadcrumb-light mb-4 pb-lg-3'>
            <Breadcrumb.Item linkAs={Link} href='/job-board'>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>About</Breadcrumb.Item>
          </Breadcrumb>

          {/* Page title */}
          <div className='mb-lg-5 mx-auto text-center' style={{maxWidth: '856px'}}>
            <h1 className='display-5 text-light mb-4 pb-lg-2'>
              We help people find the <span className='text-primary'>dream job</span>
            </h1>
            <p className='lead text-light opacity-70'>Our mission is to provide the very best job search service and help job seekers and employers find each other as quickly as possible.</p>
          </div>
        </Container>
      </section>


      {/* Features */}
      <section className='position-relative bg-white rounded-xxl-4 mb-5 py-md-3 zindex-5' style={{marginTop: '-30px'}}>
        <Container className='pt-5 pb-2 mb-4 mb-md-5'>
          <Row xs={2} md={4} className='g-4 text-center'>
            <Col className='border-end'>
              <i className='fi-like mb-3 fs-1 text-muted'></i>
              <div className='h1 mb-1 lh-1'>1,2 mln</div>Job applications
            </Col>
            <Col className='border-end-md'>
              <i className='fi-file mb-3 fs-1 text-muted'></i>
              <div className='h1 mb-1 lh-1'>8K</div>Resumes posted
            </Col>
            <Col className='border-end'>
              <i className='fi-briefcase mb-3 fs-1 text-muted'></i>
              <div className='h1 mb-1 lh-1'>5K</div>Jobs posted
            </Col>
            <Col>
              <i className='fi-users mb-3 fs-1 text-muted'></i>
              <div className='h1 mb-1 lh-1'>10K</div>Active members
            </Col>
          </Row>
        </Container>
      </section>


      {/* Help Center CTA */}
      <Container as='section' className='mb-5 pb-2 pb-md-4 pb-lg-5'>
        <Row className='gy-4 align-items-md-center'>
          <Col md={6}>
            <ImageLoader src='/images/job-board/illustrations/steps.svg' width={634} height={486} alt='Illustration' />
          </Col>
          <Col md={6} lg={{span: 5, offset: 1}}>
            <h2 className='mb-4'>Finding a new job is now even easier</h2>
            <p className='mb-4 pb-3 fs-lg'>Et quis dictum malesuada phasellus feugiat laoreet lacus. Imperdiet sed a dignissim mauris amet bibendum. Non odio molestie feugiat sed ullamcorper nunc. Donec integer mi pellentesque platea. Scelerisque cras tristique auctor pharetra neque, elementum tellus sit. Lorem semper et massa varius sit eget. Sed adipiscing pellentesque.</p>
            <Button as={Link} href='/job-board/help-center' variant='primary' size='lg' className='rounded-pill w-sm-auto w-100'>
              Help Center
              <i className='fi-chevron-right ms-2'></i>
            </Button>
          </Col>
        </Row>
      </Container>


      {/* How it works */}
      <Container as='section' className='mb-5 pb-2 pb-lg-5'>
        <h2 className='h3 mb-4 pb-sm-2'>How it works</h2>
        <Row lg={4} sm={2} xs={1} className='gy-sm-5 gy-3'>
          <Col>
            <Card border='0' className='shadow position-relative h-100'>
              <Card.Body>
                <div className='h2 mb-2 text-primary'>01</div>
                <Card.Title as='h5' className='mb-2'>Create an account</Card.Title>
                <Card.Text className='fs-sm'>In volutpat lacus orci volutpat nulla tristique eu. Ullamcorper in est lectus cras arcu sed felis.</Card.Text>
              </Card.Body>
              {/* Arrow shape */}
              <svg className='position-absolute top-0 end-0 mt-n2 d-sm-block d-none' xmlns='http://www.w3.org/2000/svg' width='78' height='30' fill='none' style={{transform: 'translateY(-100%) translateX(70%)'}}>
                <path d='M77.955 14.396c.128-2.86 0-4.67-.576-4.745s-1.279 1.607-2.11 4.378l-1.279 4.897-.563 2.683c-.612-1.434-1.352-2.81-2.212-4.113-2.718-4.072-6.226-7.569-10.321-10.288C54.205 2.687 46.332.186 38.233.008c-8.823-.165-17.491 2.305-24.874 7.087C6.581 11.549 2.118 17.395.66 22.191.033 24.057-.15 26.04.123 27.987c.243 1.367.627 2.037.755 2.012.396 0-.396-3.025 1.522-7.264s6.394-9.339 12.789-13.123c6.905-4.018 14.838-5.974 22.841-5.631 3.811.182 7.574.924 11.164 2.202 7.323 2.623 13.717 7.296 18.403 13.452 1.061 1.417 1.816 2.531 2.404 3.417l-1.637-.278-5.295-1.012c-3.031-.569-4.988-.848-5.179-.392s1.419 1.544 4.335 2.759a47.66 47.66 0 0 0 5.269 1.772c1.023.278 2.097.544 3.21.772.588.127 1.1.228 1.765.342.541.152 1.109.184 1.663.094a3.86 3.86 0 0 0 1.547-.613 2.76 2.76 0 0 0 .934-1.265c.088-.252.156-.51.205-.772l.09-.595.23-1.544.384-2.949c.217-1.873.371-3.569.435-5.062' fill='#fd5631'></path>
              </svg>
            </Card>
          </Col>
          <Col>
            <Card border='0' className='shadow position-relative h-100'>
              <Card.Body>
                <div className='h2 mb-2 text-primary'>02</div>
                <Card.Title as='h5' className='mb-2'>Create a job / resume</Card.Title>
                <Card.Text className='fs-sm'>Convallis suspendisse libero integer duis luctus laoreet pellentesque. Aenean eget.</Card.Text>
              </Card.Body>
              {/* Arrow shape */}
              <svg className='position-absolute top-0 end-0 mt-n2 d-lg-block d-none' xmlns='http://www.w3.org/2000/svg' width='78' height='30' fill='none' style={{transform: 'translateY(-100%) translateX(70%)'}}>
                <path d='M77.955 14.396c.128-2.86 0-4.67-.576-4.745s-1.279 1.607-2.11 4.378l-1.279 4.897-.563 2.683c-.612-1.434-1.352-2.81-2.212-4.113-2.718-4.072-6.226-7.569-10.321-10.288C54.205 2.687 46.332.186 38.233.008c-8.823-.165-17.491 2.305-24.874 7.087C6.581 11.549 2.118 17.395.66 22.191.033 24.057-.15 26.04.123 27.987c.243 1.367.627 2.037.755 2.012.396 0-.396-3.025 1.522-7.264s6.394-9.339 12.789-13.123c6.905-4.018 14.838-5.974 22.841-5.631 3.811.182 7.574.924 11.164 2.202 7.323 2.623 13.717 7.296 18.403 13.452 1.061 1.417 1.816 2.531 2.404 3.417l-1.637-.278-5.295-1.012c-3.031-.569-4.988-.848-5.179-.392s1.419 1.544 4.335 2.759a47.66 47.66 0 0 0 5.269 1.772c1.023.278 2.097.544 3.21.772.588.127 1.1.228 1.765.342.541.152 1.109.184 1.663.094a3.86 3.86 0 0 0 1.547-.613 2.76 2.76 0 0 0 .934-1.265c.088-.252.156-.51.205-.772l.09-.595.23-1.544.384-2.949c.217-1.873.371-3.569.435-5.062' fill='#fd5631'></path>
              </svg>
            </Card>
          </Col>
          <Col>
            <Card border='0' className='shadow position-relative h-100'>
              <Card.Body>
                <div className='h2 mb-2 text-primary'>03</div>
                <Card.Title as='h5' className='mb-2'>Select a pricing plan</Card.Title>
                <Card.Text className='fs-sm'>Cursus duis ridiculus purus eget velit mattis id vel. Semper aliquet auctor cras dui odio ege.</Card.Text>
              </Card.Body>
              {/* Arrow shape */}
              <svg className='position-absolute top-0 end-0 mt-n2 d-sm-block d-none' xmlns='http://www.w3.org/2000/svg' width='78' height='30' fill='none' style={{transform: 'translateY(-100%) translateX(70%)'}}>
                <path d='M77.955 14.396c.128-2.86 0-4.67-.576-4.745s-1.279 1.607-2.11 4.378l-1.279 4.897-.563 2.683c-.612-1.434-1.352-2.81-2.212-4.113-2.718-4.072-6.226-7.569-10.321-10.288C54.205 2.687 46.332.186 38.233.008c-8.823-.165-17.491 2.305-24.874 7.087C6.581 11.549 2.118 17.395.66 22.191.033 24.057-.15 26.04.123 27.987c.243 1.367.627 2.037.755 2.012.396 0-.396-3.025 1.522-7.264s6.394-9.339 12.789-13.123c6.905-4.018 14.838-5.974 22.841-5.631 3.811.182 7.574.924 11.164 2.202 7.323 2.623 13.717 7.296 18.403 13.452 1.061 1.417 1.816 2.531 2.404 3.417l-1.637-.278-5.295-1.012c-3.031-.569-4.988-.848-5.179-.392s1.419 1.544 4.335 2.759a47.66 47.66 0 0 0 5.269 1.772c1.023.278 2.097.544 3.21.772.588.127 1.1.228 1.765.342.541.152 1.109.184 1.663.094a3.86 3.86 0 0 0 1.547-.613 2.76 2.76 0 0 0 .934-1.265c.088-.252.156-.51.205-.772l.09-.595.23-1.544.384-2.949c.217-1.873.371-3.569.435-5.062' fill='#fd5631'></path>
              </svg>
            </Card>
          </Col>
          <Col>
            <Card border='0' className='shadow position-relative h-100'>
              <Card.Body>
                <div className='h2 mb-2 text-primary'>04</div>
                <Card.Title as='h5' className='mb-2'>Post your job / resume</Card.Title>
                <Card.Text className='fs-sm'>Sit auctor aliquam leo duis. Praesent ut penatibus faucibus nibh arcu tempor adipiscing.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      {/* Reviews */}
      <Container as='section' className='pt-lg-2 pb-5 mb-md-4 mb-lg-5'>
        <Row>
          <Col md={4} className='mb-3 mb-md-0'>
            <ImageLoader src='/images/job-board/illustrations/reviews.svg' width={416} height={300} alt='Illustration' />
          </Col>
          <Col lg={1} className='d-none d-lg-block'>
            <hr className='hr-vertical mx-auto'></hr>
          </Col>

          {/* Testimonial carousel */}
          <Col md={8} lg={7}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              navigation={{
                prevEl: '#prev1',
                nextEl: '#next2'
              }}
              loop
              grabCursor
              className='mx-n3'
            >
              <SwiperSlide className='h-auto p-3'>
                <Card className='border-0 shadow-sm h-100'>
                  <Card.Body
                    as={Blockquote}
                    author={{
                      thumbSrc: '/images/job-board/company/zalo-lg.png',
                      thumbSize: 56,
                      name: 'Zalo Tech Company',
                      position: 'Floyd Miles, Head of HR Department'
                    }}
                  >
                    Eu massa, pharetra massa integer. Sed molestie sollicitudin morbi ultrices. Odio is euismodtelle faucibus. Venenatis nunc, tristique turpis cras sodales. In dui, viverra et ac. Id justo, varius nunc, faucibus erat proin elit. Amet diam, aliquet nec quis vel. Donec ut quisque in lorem sapien luctus pellentesque.
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide className='h-auto p-3'>
                <Card className='border-0 shadow-sm h-100'>
                  <Card.Body
                    as={Blockquote}
                    author={{
                      thumbSrc: '/images/job-board/company/kibana-lg.png',
                      thumbSize: 56,
                      name: 'Elastic Kibana',
                      position: 'Guy Hawkins, Senior HR'
                    }}
                  >
                    Diam dictumst scelerisque vel, nunc etiam tincidunt senectus ullamcorper. Scel pulvinarnettes luctus pellentesque ultrices congue blandit. Nec, blandit nisi odio donec sagittis dui ornare sodales ultricies. Rhoncus mattis lacus consequat dolor lectus dui cursus orci. Volutpat tortor quam odio sed arcu. 
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Swiper>
            <div className='d-flex justify-content-md-start justify-content-center mt-2 ms-n3'>
              <Button id='prev1' variant='prev' className='position-relative ms-3' />
              <Button id='next2' variant='next' className='position-relative ms-3' />
            </div>

          </Col>
        </Row>
      </Container>


      {/* FAQ */}
      <Container as='section'>
        <ImageLoader src='/images/job-board/about/faq.jpg' width={1296} height={540} alt='Cover' className='rounded-3' />
        <Row className='justify-content-center' style={{transform: 'translateY(-100px)'}}>
          <Col sm={11} md={10} className='pt-md-0 pt-5 px-sm-0 px-4'>
            <Card border='0' className='shadow-sm p-md-5 p-sm-4 p-0'>
              <Card.Body className='p-4'>
                <h2 className='h3 mb-4 pb-lg-2 text-center'>Frequently asked questions</h2>

                {/* Accordion FAQ */}
                <Accordion defaultActiveKey='0'>

                  {/* Active accordion item */}
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>Getting started: the basics</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Accordion item */}
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>Will our data be private and safe?</Accordion.Header>
                    <Accordion.Body>
                      Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Accordion item */}
                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>Should I apply for a job even if I don&apos;t have the specified experience?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Accordion item */}
                  <Accordion.Item eventKey='3'>
                    <Accordion.Header>What exactly is a personal brand and why do I need one?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nulla unde saepe, similique non rem est adipisci accusamus minima mollitia repellat, illum eius quidem molestias nam illo expedita iste.
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Accordion item */}
                  <Accordion.Item eventKey='4'>
                    <Accordion.Header>What are the most important things to include in my resume?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque ab dicta sint, quam fugiat culpa aliquid, labore est vero explicabo, non voluptas at perspiciatis omnis impedit libero possimus! Alias!
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Accordion item */}
                  <Accordion.Item eventKey='5'>
                    <Accordion.Header>How long should I make my cover letter and/or resume?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iste voluptas ducimus! Sequi, expedita est. Accusamus, quaerat nulla! Ex exercitationem iure voluptatum mollitia amet, corporis sit ab temporibus et consectetur.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      {/* Brands */}
      <Container as='section' className='pb-5 mb-md-3 mt-sm-n4 mt-n5'>
        <h2 className='h3 text-center text-lg-start mb-sm-4'>We are proud to work with</h2>

        {/* Swiper slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            el: '#pagination',
            clickable: true
          }}
          grabCursor
          breakpoints={{
            0: {
              slidesPerView: 2
            },
            480: {
              slidesPerView: 3
            },
            680: {
              slidesPerView: 4,
              spaceBetween: 12
            },
            860: {
              slidesPerView: 5,
              spaceBetween: 16
            },
            1100: {
              slidesPerView: 6,
              spaceBetween: 24
            }
          }}
        >
          <SwiperSlide className='d-flex align-items-center justify-content-center h-auto'>
            <ImageSwap
              href='#'
              swapFrom={{
                imgSrc: '/images/job-board/company/microsoft-g.svg',
                imgSize: [196, 80],
                imgAlt: 'Image from'
              }}
              swapTo={{
                imgSrc: '/images/job-board/company/microsoft.svg',
                imgSize: [196, 80],
                imgAlt: 'Image to'
              }}
            />
          </SwiperSlide>
          <SwiperSlide className='d-flex align-items-center justify-content-center h-auto'>
            <ImageSwap
              href='#'
              swapFrom={{
                imgSrc: '/images/job-board/company/indeed-g.svg',
                imgSize: [196, 80],
                imgAlt: 'Image from'
              }}
              swapTo={{
                imgSrc: '/images/job-board/company/indeed.svg',
                imgSize: [196, 80],
                imgAlt: 'Image to'
              }}
            />
          </SwiperSlide>
          <SwiperSlide className='d-flex align-items-center justify-content-center h-auto'>
            <ImageSwap
              href='#'
              swapFrom={{
                imgSrc: '/images/job-board/company/cocacola-g.svg',
                imgSize: [196, 80],
                imgAlt: 'Image from'
              }}
              swapTo={{
                imgSrc: '/images/job-board/company/cocacola.svg',
                imgSize: [196, 80],
                imgAlt: 'Image to'
              }}
            />
          </SwiperSlide>
          <SwiperSlide className='d-flex align-items-center justify-content-center h-auto'>
            <ImageSwap
              href='#'
              swapFrom={{
                imgSrc: '/images/job-board/company/slack-g.svg',
                imgSize: [196, 80],
                imgAlt: 'Image from'
              }}
              swapTo={{
                imgSrc: '/images/job-board/company/slack.svg',
                imgSize: [196, 80],
                imgAlt: 'Image to'
              }}
            />
          </SwiperSlide>
          <SwiperSlide className='d-flex align-items-center justify-content-center h-auto'>
            <ImageSwap
              href='#'
              swapFrom={{
                imgSrc: '/images/job-board/company/walmart-g.svg',
                imgSize: [196, 80],
                imgAlt: 'Image from'
              }}
              swapTo={{
                imgSrc: '/images/job-board/company/walmart.svg',
                imgSize: [196, 80],
                imgAlt: 'Image to'
              }}
            />
          </SwiperSlide>
          <SwiperSlide className='d-flex align-items-center justify-content-center h-auto'>
            <ImageSwap
              href='#'
              swapFrom={{
                imgSrc: '/images/job-board/company/google-g.svg',
                imgSize: [196, 80],
                imgAlt: 'Image from'
              }}
              swapTo={{
                imgSrc: '/images/job-board/company/google.svg',
                imgSize: [196, 80],
                imgAlt: 'Image to'
              }}
            />
          </SwiperSlide>
        </Swiper>

        {/* External pagination (bullets) buttons */}
        <div id='pagination' className='swiper-pagination position-relative bottom-0 pt-3 pb-2'></div>
      </Container>


      {/* Blog */}
      <Container as='section' className='pb-4 pb-md-5 mb-2 mb-md-3'>
        <div className='d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2'>
          <h2 className='h3 mb-sm-0'>Online journal by top HRs</h2>
          <Button as={Link} href='/job-board/blog' variant='link fw-normal p-0'>
            Go to blog
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>
        <Row className='gy-4'>

          {/* Blog featured item */}
          <Col md={5}>
            <BlogCard
              type='card'
              href='/job-board/blog-single'
              img={{
                src: '/images/job-board/blog/03.jpg',
                size: [1052, 424],
                alt: 'Image'
              }}
              category={{
                href: '#',
                title: 'Guides'
              }}
              title='How to Hire World-Class Engineers'
              text='Nunc, hac augue ante in facilisi id. Consectetur egestas orci, arcu ac tellus. Morbi orci, nunc dictum...'
              author={{
                href: '#',
                img: '/images/avatars/16.png',
                name: 'Bessie Cooper'
              }}
              date='May 23'
              comments='4 comments'
              badges={[['faded-info rounded-pill', 'New']]}
            />
          </Col>

          {/* Blog item */}
          <Col md={7}>
            <Row sm={2} className='gy-4'>
              <Col>
                <BlogCard
                  type='card'
                  href='/job-board/blog-single'
                  img={{
                    src: '/images/job-board/blog/04.jpg',
                    size: [722, 524],
                    alt: 'Image'
                  }}
                  category={{
                    href: '#',
                    title: 'Guides'
                  }}
                  title='How to Choose Your First Job In Tech'
                  author={{
                    href: '#',
                    img: '/images/avatars/18.png',
                    name: 'Annette Black'
                  }}
                  date='May 21'
                  comments='No comments'
                />
              </Col>
              <Col>
                <BlogCard
                  type='card'
                  href='/job-board/blog-single'
                  img={{
                    src: '/images/job-board/blog/05.jpg',
                    size: [722, 524],
                    alt: 'Image'
                  }}
                  category={{
                    href: '#',
                    title: 'Tips & Advice'
                  }}
                  title='15 Tips for a Better Resume'
                  author={{
                    href: '#',
                    img: '/images/avatars/19.png',
                    name: 'Ralph Edwards'
                  }}
                  date='May 19'
                  comments='1 comment'
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>


      {/* CTA */}
      <Container as='section' className='pt-lg-4 pt-3 pb-5 mb-md-4 mb-lg-5 text-center'>
        <h2 className='pb-4'>The fastest way to find what you need</h2>
        <Button as={Link} href='/job-board' size='lg' variant='primary rounded-pill' className='w-sm-auto w-100'>
          Get started
          <i className='fi-chevron-right fs-sm ms-2'></i>
        </Button>
      </Container>
    </JobBoardPageLayout>
  )
}

export default AboutPage
