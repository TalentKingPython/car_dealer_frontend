// File uploader component documentation page with code examples

import { useState } from 'react'
import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Code from '../../components/Code'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'

const FileUploaderPage = () => {

  const anchorLinks = [
    {
      label: 'Single file upload: Image only + Cropped + Resized (Profile picture)',
      anchor: 'file-uploader-profile'
    },
    {
      label: 'Multiple file upload: Grid of files + File type, size and quantity validation (Gallery)',
      anchor: 'file-uploader-gallery'
    }
  ]

  // Register Filepond plugins
  registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
  )

  // Profile picture upload state
  const [profile1, setProfile1] = useState([])
  const [profile2, setProfile2] = useState([])

  // Gallery files upload state
  const [gallery1, setGallery1] = useState([])
  const [gallery2, setGallery2] = useState([])


  return (
    <ComponentPageLayout
      pageTitle='File uploader'
      pageDescription='Component for uploading any file type with built-in validation and image optimization.'
      activeNav='/components/file-uploader'
      anchorLinks={anchorLinks}
    >

      {/* Info alert */}
      <Alert variant='info' className='mb-5'>
        <div className='d-flex'>
          <i className='fi-alert-circle lead me-2 me-sm-3'></i>
          <div className='text-break'>
            <p className='mb-2'>File uploader component is powered by <strong>FilePond React plugin</strong>. Check plugin <Alert.Link href='https://pqina.nl/filepond/docs/installation/react/' target='_blank' rel='noreferrer'>documentation here</Alert.Link></p>
            <p className='mb-1'>The complete list of all available Filepond plugins <Alert.Link href='https://pqina.nl/filepond/docs/api/plugins/' target='_blank' rel='noreferrer'>can be found here</Alert.Link>.</p>
          </div>
        </div>
      </Alert>


      {/* Single file upload: Image only + Cropped + Resized (Profile picture) */}
      <ComponentPageSection id='file-uploader-profile' title='Single file upload: Image only + Cropped + Resized (Profile picture)'>
        <Tab.Pane eventKey='preview'>
          <Row>
            <Col sm={6}>
              <div className='p-4'>
                <div className='mx-auto' style={{maxWidth: '15rem'}}>
                  <FilePond
                    files={profile1}
                    onupdatefiles={setProfile1}
                    // server='/api' {/* Configure your server here. See plugin docs */}
                    name='profile'
                    labelIdle='<i class="d-inline-block fi-camera-plus fs-2 text-muted mb-2"></i><br><span class="fw-bold">Change picture</span>'
                    acceptedFileTypes={['image/png', 'image/jpeg']}
                    stylePanelLayout='compact'
                    imagePreviewHeight={160}
                    imageCropAspectRatio='1:1'
                    imageResizeTargetWidth={200}
                    imageResizeTargetHeight={200}
                    className='file-uploader bg-secondary'
                  />
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className='bg-dark p-4'>
                <div className='mx-auto' style={{maxWidth: '15rem'}}>
                  <FilePond
                    files={profile2}
                    onupdatefiles={setProfile2}
                    // server='/api' {/* Configure your server here. See plugin docs */}
                    name='profile'
                    labelIdle='<i class="d-inline-block fi-camera-plus fs-2 text-light mb-2"></i><br><span class="fw-bold text-light opacity-70">Change picture</span>'
                    acceptedFileTypes={['image/png', 'image/jpeg']}
                    stylePanelLayout='compact'
                    imagePreviewHeight={160}
                    imageCropAspectRatio='1:1'
                    imageResizeTargetWidth={200}
                    imageResizeTargetHeight={200}
                    className='file-uploader border-light bg-faded-light'
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'

{/* Register Filepond plugins */}
registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform
)

{/* Init state */}
const [profile, setProfile] = useState([])

{/* Render FilePond component with props */}
<FilePond
  files={profile}
  onupdatefiles={setProfile}
  // server='/api' {/* Configure your server here. See plugin docs */}
  name='profile'
  labelIdle='<i class="d-inline-block fi-camera-plus fs-2 text-muted mb-2"></i><br><span class="fw-bold">Change picture</span>'
  acceptedFileTypes={['image/png', 'image/jpeg']}
  stylePanelLayout='compact'
  imagePreviewHeight={160}
  imageCropAspectRatio='1:1'
  imageResizeTargetWidth={200}
  imageResizeTargetHeight={200}
  className='file-uploader bg-secondary'
/>

{/* Light version to display on dark backgrounds */}
<FilePond
  files={profile}
  onupdatefiles={setProfile}
  // server='/api' {/* Configure your server here. See plugin docs */}
  name='profile'
  labelIdle='<i class="d-inline-block fi-camera-plus fs-2 text-light mb-2"></i><br><span class="fw-bold text-light opacity-70">Change picture</span>'
  acceptedFileTypes={['image/png', 'image/jpeg']}
  stylePanelLayout='compact'
  imagePreviewHeight={160}
  imageCropAspectRatio='1:1'
  imageResizeTargetWidth={200}
  imageResizeTargetHeight={200}
  className='file-uploader border-light bg-faded-light'
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Multiple file upload: Grid of files + File type, size and quantity validation (Gallery) */}
      <ComponentPageSection id='file-uploader-gallery' title='Multiple file upload: Grid of files + File type, size and quantity validation (Gallery)'>
        <Tab.Pane eventKey='preview'>
          <div className='p-3 p-sm-4'>
            <div className='mx-auto' style={{maxWidth: '50rem'}}>
              <FilePond
                files={gallery1}
                onupdatefiles={setGallery1}
                // server='/api' {/* Configure your server here. See plugin docs */}
                name='gallery'
                labelIdle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><div>or drag them in</div>'
                acceptedFileTypes={['image/png', 'image/jpeg', 'video/mp4', 'video/mov']}
                allowMultiple={true}
                maxFiles={4}
                maxFileSize='2MB'
                className='file-uploader file-uploader-grid'
              />
            </div>
          </div>
          <div className='bg-dark p-3 p-sm-4'>
            <div className='mx-auto' style={{maxWidth: '50rem'}}>
              <FilePond
                files={gallery2}
                onupdatefiles={setGallery2}
                // server='/api' {/* Configure your server here. See plugin docs */}
                name='gallery'
                labelIdle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><div class="text-white opacity-70">or drag them in</div>'
                acceptedFileTypes={['image/png', 'image/jpeg', 'video/mp4', 'video/mov']}
                allowMultiple={true}
                maxFiles={4}
                maxFileSize='2MB'
                className='file-uploader file-uploader-grid border-light bg-faded-light'
              />
            </div>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'

{/* Register Filepond plugins */}
registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform
)

{/* Init state */}
const [gallery, setGallery] = useState([])

{/* Render FilePond component with props */}
<FilePond
  files={gallery}
  onupdatefiles={setGallery}
  // server='/api' {/* Configure your server here. See plugin docs */}
  name='gallery'
  labelIdle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><div>or drag them in</div>'
  acceptedFileTypes={['image/png', 'image/jpeg', 'video/mp4', 'video/mov']}
  allowMultiple={true}
  maxFiles={4}
  maxFileSize='2MB'
  className='file-uploader file-uploader-grid'
/>

{/* Light version to display on dark backgrounds */}
<FilePond
  files={gallery}
  onupdatefiles={setGallery}
  // server='/api' {/* Configure your server here. See plugin docs */}
  name='gallery'
  labelIdle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><div class="text-white opacity-70">or drag them in</div>'
  acceptedFileTypes={['image/png', 'image/jpeg', 'video/mp4', 'video/mov']}
  allowMultiple={true}
  maxFiles={4}
  maxFileSize='2MB'
  className='file-uploader file-uploader-grid border-light bg-faded-light'
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default FileUploaderPage
