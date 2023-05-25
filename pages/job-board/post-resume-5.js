import { useState } from 'react'
import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import JobBoardPostResumeLayout from '../../components/partials/JobBoardPostResumeLayout'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import SocialButton from '../../components/SocialButton'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'

const PostResumeStepFivePage = () => {

  {/* Register Filepond plugins */}
  registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
  )

  {/* Init state */}
  const [profile, setProfile] = useState([])

  return (
    <JobBoardPageLayout
      pageTitle='Post Resume - Review'
      activeNav='Account'
      userLoggedIn
    >
      <JobBoardPostResumeLayout
        activeStep='Review'
        prevStep='/job-board/post-resume-4'
        lastStep
      >

        {/* Title + Action buttons */}
        <div className='d-md-flex align-items-center mb-4 pb-md-2'>
          <h2 className='h4 mb-md-0 mb-4'>
            <i className='fi-eye-on text-primary mt-n1 me-2'></i>
            Review your resume and save
          </h2>
          <div className='ms-md-auto'>

            {/* Visible on screens < 992px */}
            <Dropdown className='d-lg-none'>
              <Dropdown.Toggle size='sm' variant='outline-secondary'>
                <i className='fi-align-justify me-2'></i>
                Actions
              </Dropdown.Toggle>
              <Dropdown.Menu className='my-1'>
                <Dropdown.Item eventKey='1'>
                  <i className='fi-trash me-2'></i>
                  Delete
                </Dropdown.Item>
                <Dropdown.Item eventKey='2'>
                  <i className='fi-archive me-2'></i>
                  Archive
                </Dropdown.Item>
                <Dropdown.Item eventKey='3'>
                  <i className='fi-download-file me-2'></i>
                  Download as PDF
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Visible on screens > 992px */}
            <div className='list-unstyled d-none d-lg-flex flex-wrap fs-sm mb-0'>
              <li className='border-end mb-0'>
                <a href='#' className='nav-link text-nowrap'>
                  <i className='fi-trash me-2'></i>
                  Delete
                </a>
              </li>
              <li className='border-end mb-0'>
                <a href='#' className='nav-link text-nowrap'>
                  <i className='fi-archive me-2'></i>
                  Archive
                </a>
              </li>
              <li className='mb-0'>
                <a href='#' className='nav-link text-nowrap'>
                  <i className='fi-download-file me-2'></i>
                  Download as PDF
                </a>
              </li>
            </div>
          </div>
        </div>

        {/* Resume preview */}
        <Card className='card shadow-sm p-md-2 mx-n4 mx-md-0'>
          <Card.Body className='p-4'>
            <div className='d-sm-flex justify-content-between align-items-start'>
              <div className='flex-shrink-0 order-sm-2 mb-4' style={{width: '10rem', height: '10rem'}}>
                <FilePond
                  files={profile}
                  onupdatefiles={setProfile}
                  name='profile'
                  labelIdle='<i class="fi-camera-plus d-inline-block fs-2 text-muted mb-2"></i><br><span class="fw-bold">Change picture</span>'
                  acceptedFileTypes={['image/png', 'image/jpeg']}
                  stylePanelLayout='compact'
                  imagePreviewHeight={160}
                  imageCropAspectRatio='1:1'
                  imageResizeTargetWidth={200}
                  imageResizeTargetHeight={200}
                  className='file-uploader bg-secondary'
                />
              </div>
              <div className='order-sm-1'>
                <h3 className='h4 mb-sm-4'>Annette Black</h3>
                <h4 className='h5'>Basic info</h4>
                <ul className='list-unstyled text-nav'>
                  <li><span className='text-muted'>Position:</span> UX Designer</li>
                  <li><span className='text-muted'>Job type:</span> Part-time</li>
                  <li><span className='text-muted'>Location:</span> New York, USA</li>
                  <li><span className='text-muted'>Salary:</span> $2000 – $3000</li>
                  <li><span className='text-muted'>Categories:</span> Design, Internet Technology</li>
                </ul>
                <Link href='/job-board/post-resume-1' className='d-inline-block fw-bold text-decoration-none py-1'>
                  <i className='fi-edit mt-n1 me-2'></i>
                  Edit
                </Link>
              </div>
            </div>

            <hr className='my-4'/>

            <div>
              <h4 className='h5'>Personal info</h4>
              <ul className='list-unstyled text-nav'>
                <li><span className='text-muted'>Full name:</span> Annete Black</li>
                <li><span className='text-muted'>Date of birth:</span> May 18, 1989</li>
                <li><span className='text-muted'>Address:</span> 2464 Royal Ln. Mesa, New Jersey 45463</li>
                <li><span className='text-muted'>Phone:</span> (302) 555-0107</li>
                <li><span className='text-muted'>Email:</span> annette_black@email.com</li>
                <li>
                  <span className='text-muted'>Socials:</span>
                  <div className='d-inline-flex mt-1'>
                    <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='ms-2'/>
                    <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='ms-2'/>
                    <SocialButton href='#' variant='solid' brand='linkedin' roundedCircle className='ms-2'/>
                  </div>
                </li>
              </ul>
              <Link href='/job-board/post-resume-1' className='d-inline-block fw-bold text-decoration-none py-1'>
                <i className='fi-edit mt-n1 me-2'></i>
                Edit
              </Link>
            </div>

            <hr className='my-4'/>

            <div>
              <h4 className='h5'>Work experience</h4>
              <div className='mt-3'>
                <h5 className='h6 mb-2'>Product Designer</h5>
                <ul className='list-unstyled fs-sm mb-2'>
                  <li>XAMPP Company (IT, Consulting)</li>
                  <li>2015 – 2020</li>
                </ul>
                <p>Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue ut senectus quisque diam quis. At augue accumsan, bibendum. A eget et, eget quisque egestas netus vel.</p>
                <div className='d-flex'>
                  <Link href='/job-board/post-resume-3' className='d-inline-block fw-bold text-decoration-none py-1 pe-3 border-end'>
                    <i className='fi-edit mt-n1 me-2'></i>
                    Edit
                  </Link>
                  <a href='#' className='d-inline-block fw-bold text-decoration-none py-1 ps-2'>
                    <i className='fi-delete mt-n1 me-2'></i>
                    Delete
                  </a>
                </div>
              </div>
              <div className='mt-3 pt-2'>
                <h5 className='h6 mb-2'>Product Designer</h5>
                <ul className='list-unstyled fs-sm mb-3'>
                  <li>XAMPP Company (IT, Consulting)</li>
                  <li>2015 – 2020</li>
                </ul>
                <div className='d-flex'>
                  <Link href='/job-board/post-resume-3' className='d-inline-block fw-bold text-decoration-none py-1 pe-3 border-end'>
                    <i className='fi-edit mt-n1 me-2'></i>
                    Edit
                  </Link>
                  <a href='#' className='d-inline-block fw-bold text-decoration-none py-1 ps-2'>
                    <i className='fi-delete mt-n1 me-2'></i>
                    Delete
                  </a>
                </div>
              </div>
            </div>

            <hr className='my-4'/>

            <h4 className='h5'>Education</h4>
            <div>
              <div className='mt-3'>
                <h5 className='h6 mb-2'>Bachelor&apos;s degree</h5>
                <ul className='list-unstyled fs-sm'>
                  <li>Syracuse University</li>
                  <li>900 South Crouse Ave. Syracuse, NY 13244</li>
                  <li>2008 – 2012</li>
                </ul>
                <div className='d-flex'>
                  <Link href='/job-board/post-resume-2' className='d-inline-block fw-bold text-decoration-none py-1 pe-3 border-end'>
                    <i className='fi-edit mt-n1 me-2'></i>
                    Edit
                  </Link>
                  <a href='#' className='d-inline-block fw-bold text-decoration-none py-1 ps-2'>
                    <i className='fi-delete mt-n1 me-2'></i>
                    Delete
                  </a>
                </div>
              </div>
            </div>

            <hr className='my-4'/>

            <h4 className='h5'>Skills</h4>
            <div className='mt-3'>
              <Link href='/job-board/post-resume-2' className='d-inline-block fw-bold text-decoration-none py-1'>
                <i className='fi-plus mt-n1 me-2'></i>
                Add skills
              </Link>
            </div>
          </Card.Body>
        </Card>
      </JobBoardPostResumeLayout>
    </JobBoardPageLayout>
  )
}

export default PostResumeStepFivePage
