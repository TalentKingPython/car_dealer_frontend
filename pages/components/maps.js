// Interactive map component documentation page with code examples

import dynamic from 'next/dynamic'
import Link from 'next/link'
import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Alert from 'react-bootstrap/Alert'
import Tab from 'react-bootstrap/Tab'
import Code from '../../components/Code'
import ImageLoader from '../../components/ImageLoader'
import StarRating from '../../components/StarRating'

const MapContainer = dynamic(() => 
  import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(() => 
  import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
const Popup = dynamic(() => 
  import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
)
const CustomMarker = dynamic(() => 
  import('../../components/partials/CustomMarker'),
  { ssr: false }
)
import 'leaflet/dist/leaflet.css'


const MapPage = () => {

  const anchorLinks = [
    {
      label: 'Basic example (no markers passed)',
      anchor: 'map-basic'
    },
    {
      label: 'Default custom marker with popup',
      anchor: 'map-options-1'
    },
    {
      label: 'Multiple dot markers with popups',
      anchor: 'map-options-2'
    },
    {
      label: 'Multiple custom markers stored in a variable',
      anchor: 'map-options-3'
    }
  ]


  // Map markers array
  const markers = [
    {
      position: [52.52, 13.407],
      iconUrl: '/images/map/marker-accomodation.png',
      iconSize: [48, 48],
      popup: {
        href: '#',
        img: '/images/city-guide/catalog/02.jpg',
        title: 'Grand Resort & Spa',
        rating: 4.6,
        reviews: 43,
        address: 'Ollenhauer Str. 29, 10118, Berlin',
        price: '$$$'
      }
    },
    {
      position: [52.51, 13.36],
      iconUrl: '/images/map/marker-fitness.png',
      iconSize: [48, 48],
      popup: {
        href: '#',
        img: '/images/city-guide/catalog/16.jpg',
        title: 'Power Fitness Club',
        rating: 4.2,
        reviews: 317,
        address: 'Genslerstraße 84, 10118, Berlin',
        price: '$$'
      }
    },
    {
      position: [52.528, 13.37],
      iconUrl: '/images/map/marker-cafe.png',
      iconSize: [48, 48],
      popup: {
        href: '#',
        img: '/images/city-guide/catalog/17.jpg',
        title: 'ClubFood Restaurant & Bar',
        rating: 4.7,
        reviews: 239,
        address: 'Antwerpener str. 47, 13253, Berlin',
        price: '$$'
      }
    },
    {
      position: [52.525, 13.45],
      iconUrl: '/images/map/marker-nightlife.png',
      iconSize: [48, 48],
      popup: {
        href: '#',
        img: '/images/city-guide/catalog/18.jpg',
        title: 'Egoist Night Club & Bar',
        rating: 4.8,
        reviews: 117,
        address: 'Kochhannstraße str. 32, 11060, Berlin',
        price: '$$'
      }
    },
    {
      position: [52.503, 13.409],
      iconUrl: '/images/map/marker-meds.png',
      iconSize: [48, 48],
      popup: {
        href: '#',
        img: '/images/city-guide/catalog/19.jpg',
        title: 'Fair Meds Pharmacy',
        rating: 4.9,
        reviews: 561,
        address: 'Lansstraße 81, D-11179, Berlin',
        price: '$'
      }
    },
    {
      position: [52.54, 13.403],
      iconUrl: '/images/map/marker-shopping.png',
      iconSize: [48, 48],
      popup: {
        href: '#',
        img: '/images/city-guide/catalog/20.jpg',
        title: 'Fetishist Shopping Mall',
        rating: 4.3,
        reviews: 1274,
        address: 'Mellingburgredder 3, 13250, Berlin',
        price: '$$'
      }
    }
  ]


  return (
    <ComponentPageLayout
      pageTitle='Interactive maps'
      pageDescription='Mobile-friendly interactive maps powered by Leaflet.js.'
      activeNav='/components/maps'
      anchorLinks={anchorLinks}
    >

      {/* Info alert */}
      <Alert variant='info' className='mb-5'>
        <div className='d-flex'>
          <i className='fi-alert-circle lead me-2 me-sm-3'></i>
          <div className='text-break'>
            <p className='mb-2'>Interactive map component is powered by <Alert.Link href='https://react-leaflet.js.org/' target='_blank' rel='noreferrer'>Leaflet React</Alert.Link> plugin.</p>
            <p className='mb-2'>Tiles layer (actual map image) is provided by <Alert.Link href='https://cloud.maptiler.com/maps/' target='_blank' rel='noreferrer'>Maptiler</Alert.Link> plugin.</p>
            <p className='mb-1'>Leaflet makes direct calls to the DOM when it is loaded, therefore React Leaflet is not compatible with server-side rendering. That&apos;s why all React Leaflet components should be imported to the page using Next dynamic import with disabled server-side rendering.</p>
          </div>
        </div>
      </Alert>


      {/* Basic example (no markers passed) */}
      <ComponentPageSection id='map-basic' title='Basic example (no markers passed)'>
        <Tab.Pane eventKey='preview'>
          <MapContainer
            center={[0, 0]}
            zoom={1}
            scrollWheelZoom={false}
            style={{height: '400px'}}
          >
            <TileLayer
              url='https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx'
              tileSize={512}
              zoomOffset={-1}
              minZoom={1}
              attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
            />
          </MapContainer>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import dynamic from 'next/dynamic'
const MapContainer = dynamic(() => 
  import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(() => 
  import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
import 'leaflet/dist/leaflet.css'  

{/* Basic map example (no markers passed) */}
<MapContainer
  center={[0, 0]}
  zoom={1}
  scrollWheelZoom={false} // Enable/disable scroll wheel zooming
  style={{height: '400px'}}
>
  <TileLayer
    url='https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=YOUR_API_KEY'
    // To rgister API key with Maptiler check https://docs.maptiler.com/cloud/api/
    tileSize={512}
    zoomOffset={-1}
    minZoom={1}
    attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
  />
</MapContainer>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Default custom marker with popup */}
      <ComponentPageSection id='map-options-1' title='Default custom marker with popup'>
        <Tab.Pane eventKey='preview'>
          <MapContainer
            center={[51.5074, -0.1278]}
            zoom={10}
            scrollWheelZoom={false}
            style={{height: '400px'}}
          >
            <TileLayer
              url='https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx'
              tileSize={512}
              zoomOffset={-1}
              minZoom={1}
              attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
            />
            <CustomMarker position={[51.5074, -0.1278]}>
              <Popup>
                <div className='p-3'>
                  <h6>Hi, I&apos;m in London</h6>
                  <p className='fs-sm pt-1 mt-n3 mb-0'>Lorem ipsum dolor sit amet elit.</p>
                </div>
              </Popup>
            </CustomMarker>
          </MapContainer>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import dynamic from 'next/dynamic'
const MapContainer = dynamic(() => 
  import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(() => 
  import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
const CustomMarker = dynamic(() => 
  import('../../components/partials/CustomMarker'),
  { ssr: false }
)
const Popup = dynamic(() => 
  import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
)
import 'leaflet/dist/leaflet.css'

{/* Map featuring custom marker with popup */}
<MapContainer
  center={[51.5074, -0.1278]}
  zoom={10}
  scrollWheelZoom={false} // Enable/disable scroll wheel zooming
  style={{height: '400px'}}
>
  <TileLayer
    url='https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=YOUR_API_KEY'
    // To rgister API key with Maptiler check https://docs.maptiler.com/cloud/api/
    tileSize={512}
    zoomOffset={-1}
    minZoom={1}
    attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
  />
  <CustomMarker position={[51.5074, -0.1278]}>
    <Popup>
      <div className='p-3'>
        <h6>Hi, I&apos;m in London</h6>
        <p className='fs-sm pt-1 mt-n3 mb-0'>Lorem ipsum dolor sit amet elit.</p>
      </div>
    </Popup>
  </CustomMarker>
</MapContainer>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Multiple dot markers with popups */}
      <ComponentPageSection id='map-options-2' title='Multiple dot markers with popups'>
        <Tab.Pane eventKey='preview'>
          <MapContainer
            center={[40.7128, -74.0060]}
            zoom={11}
            scrollWheelZoom={false}
            style={{height: '400px'}}
          >
            <TileLayer
              url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx'
              tileSize={512}
              zoomOffset={-1}
              minZoom={1}
              attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
            />
            <CustomMarker position={[40.702, -74.0068]} icon='dot'>
              <Popup>
                <div className='p-3'>
                  <h6>Hi, I&apos;m in New York</h6>
                  <p className='fs-sm pt-1 mt-n3 mb-0'>Lorem ipsum dolor sit amet elit.</p>
                </div>
              </Popup>
            </CustomMarker>
            <CustomMarker position={[40.716, -74.078]} icon='dot'>
              <Popup>
                <div className='p-3'>
                  <h6>Hi, I&apos;m in Jersey Cty</h6>
                  <p className='fs-sm pt-1 mt-n3 mb-0'>Lorem ipsum dolor sit amet elit.</p>
                </div>
              </Popup>
            </CustomMarker>
            <CustomMarker position={[40.650, -74.209]} icon='dot'>
              <Popup>
                <div className='p-3'>
                  <h6>Hi, I&apos;m in Elizabeth</h6>
                  <p className='fs-sm pt-1 mt-n3 mb-0'>Lorem ipsum dolor sit amet elit.</p>
                </div>
              </Popup>
            </CustomMarker>
          </MapContainer>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import dynamic from 'next/dynamic'
const MapContainer = dynamic(() => 
  import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(() => 
  import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
const CustomMarker = dynamic(() => 
  import('../../components/partials/CustomMarker'),
  { ssr: false }
)
const Popup = dynamic(() => 
  import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
)
import 'leaflet/dist/leaflet.css'

{/* Map featuring multiple dot markers with popups */}
<MapContainer
  center={[40.7128, -74.0060]}
  zoom={11}
  scrollWheelZoom={false} // Enable/disable scroll wheel zooming
  style={{height: '400px'}}
>
  <TileLayer
    url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=YOUR_API_KEY'
    // To rgister API key with Maptiler check https://docs.maptiler.com/cloud/api/
    tileSize={512}
    zoomOffset={-1}
    minZoom={1}
    attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
  />
  <CustomMarker position={[40.702, -74.0068]} icon='dot'>
    <Popup>
      <div className='p-3'>
        <h6>Hi, I&apos;m in New York</h6>
        <p className='fs-sm pt-1 mt-n3 mb-0'>Lorem ipsum dolor sit amet elit.</p>
      </div>
    </Popup>
  </CustomMarker>
  <CustomMarker position={[40.716, -74.078]} icon='dot'>
    <Popup>
      <div className='p-3'>
        <h6>Hi, I&apos;m in Jersey Cty</h6>
        <p className='fs-sm pt-1 mt-n3 mb-0'>Lorem ipsum dolor sit amet elit.</p>
      </div>
    </Popup>
  </CustomMarker>
  <CustomMarker position={[40.650, -74.209]} icon='dot'>
    <Popup>
      <div className='p-3'>
        <h6>Hi, I&apos;m in Elizabeth</h6>
        <p className='fs-sm pt-1 mt-n3 mb-0'>Lorem ipsum dolor sit amet elit.</p>
      </div>
    </Popup>
  </CustomMarker>
</MapContainer>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Multiple custom markers stored in a variable */}
      <ComponentPageSection id='map-options-3' title='Multiple custom markers stored in a variable'>
        <Tab.Pane eventKey='preview'>
          <MapContainer
            center={[52.53, 13.405]}
            zoom={12}
            scrollWheelZoom={false}
            style={{height: '600px'}}
          >
            <TileLayer
              url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx'
              tileSize={512}
              zoomOffset={-1}
              minZoom={1}
              attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
            />
            {markers.map((marker, indx) => {
              return <CustomMarker
                key={indx}
                position={marker.position}
                icon='custom'
                iconOptions={{
                  url: marker.iconUrl,
                  size: [marker.iconSize[0], marker.iconSize[1]],
                }}
              >
                <Popup>
                  <Link href={marker.popup.href} className='d-block'>
                    <ImageLoader src={marker.popup.img} width={280} height={128} alt='Image' />
                  </Link>
                  <div className='card-body'>
                    <h5 className='card-title fs-base'>
                      <Link href={marker.popup.href} className='nav-link'>{marker.popup.title}</Link>
                    </h5>
                    <div className='d-flex align-items-center mb-2'>
                      <StarRating rating={marker.popup.rating} className='mt-n1 me-2' />
                      <span className='fs-xs'>
                        <strong>{marker.popup.rating}</strong>
                        <span className='text-muted ms-1'>({marker.popup.reviews})</span>
                      </span>
                    </div>
                    <div className='mb-2'>
                      <i className='fi-map-pin text-muted fs-sm mt-n1 me-1'></i>
                      {marker.popup.address}
                    </div>
                    <i className='fi-credit-card text-muted fs-sm mt-n1 me-1'></i>
                    {marker.popup.price}
                  </div>
                </Popup>
              </CustomMarker>
            })}
          </MapContainer>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import dynamic from 'next/dynamic'
const MapContainer = dynamic(() => 
  import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(() => 
  import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
const CustomMarker = dynamic(() => 
  import('../../components/partials/CustomMarker'),
  { ssr: false }
)
const Popup = dynamic(() => 
  import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
)
import 'leaflet/dist/leaflet.css'

{/* Markers array */}
const markers = [
  {
    position: [52.52, 13.407],
    iconUrl: '/images/map/marker-accomodation.png',
    iconSize: [48, 48],
    popup: {
      href: '#',
      img: '/images/city-guide/catalog/02.jpg',
      title: 'Grand Resort & Spa',
      rating: 4.6,
      reviews: 43,
      address: 'Ollenhauer Str. 29, 10118, Berlin',
      price: '$$$'
    }
  },
  {
    position: [52.51, 13.36],
    iconUrl: '/images/map/marker-fitness.png',
    iconSize: [48, 48],
    popup: {
      href: '#',
      img: '/images/city-guide/catalog/16.jpg',
      title: 'Power Fitness Club',
      rating: 4.2,
      reviews: 317,
      address: 'Genslerstraße 84, 10118, Berlin',
      price: '$$'
    }
  },
  {
    position: [52.528, 13.37],
    iconUrl: '/images/map/marker-cafe.png',
    iconSize: [48, 48],
    popup: {
      href: '#',
      img: '/images/city-guide/catalog/17.jpg',
      title: 'ClubFood Restaurant & Bar',
      rating: 4.7,
      reviews: 239,
      address: 'Antwerpener str. 47, 13253, Berlin',
      price: '$$'
    }
  },
  {
    position: [52.525, 13.45],
    iconUrl: '/images/map/marker-nightlife.png',
    iconSize: [48, 48],
    popup: {
      href: '#',
      img: '/images/city-guide/catalog/18.jpg',
      title: 'Egoist Night Club & Bar',
      rating: 4.8,
      reviews: 117,
      address: 'Kochhannstraße str. 32, 11060, Berlin',
      price: '$$'
    }
  },
  {
    position: [52.503, 13.409],
    iconUrl: '/images/map/marker-meds.png',
    iconSize: [48, 48],
    popup: {
      href: '#',
      img: '/images/city-guide/catalog/19.jpg',
      title: 'Fair Meds Pharmacy',
      rating: 4.9,
      reviews: 561,
      address: 'Lansstraße 81, D-11179, Berlin',
      price: '$'
    }
  },
  {
    position: [52.54, 13.403],
    iconUrl: '/images/map/marker-shopping.png',
    iconSize: [48, 48],
    popup: {
      href: '#',
      img: '/images/city-guide/catalog/20.jpg',
      title: 'Fetishist Shopping Mall',
      rating: 4.3,
      reviews: 1274,
      address: 'Mellingburgredder 3, 13250, Berlin',
      price: '$$'
    }
  }
]

{/* Map featuring multiple custom markers with popups passed via markers array */}
<MapContainer
  center={[52.53, 13.405]}
  zoom={12}
  scrollWheelZoom={false}
  style={{height: '600px'}}
>
  <TileLayer
    url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx'
    tileSize={512}
    zoomOffset={-1}
    minZoom={1}
    attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
  />
  {markers.map((marker, indx) => {
    return <CustomMarker
      key={indx}
      position={marker.position}
      icon='custom'
      iconOptions={{
        url: marker.iconUrl,
        size: [marker.iconSize[0], marker.iconSize[1]],
      }}
    >
      <Popup>
        <Link href={marker.popup.href} className='d-block'>
          <ImageLoader src={marker.popup.img} width={280} height={128} alt='Image' />
        </Link>
        <div className='card-body'>
          <h5 className='card-title fs-base'>
            <Link href={marker.popup.href} className='nav-link'>{marker.popup.title}</Link>
          </h5>
          <div className='d-flex align-items-center mb-2'>
            <StarRating rating={marker.popup.rating} className='mt-n1 me-2' />
            <span className='fs-xs'>
              <strong>{marker.popup.rating}</strong>
              <span className='text-muted ms-1'>({marker.popup.reviews})</span>
            </span>
          </div>
          <div className='mb-2'>
            <i className='fi-map-pin text-muted fs-sm mt-n1 me-1'></i>
            {marker.popup.address}
          </div>
          <i className='fi-credit-card text-muted fs-sm mt-n1 me-1'></i>
          {marker.popup.price}
        </div>
      </Popup>
    </CustomMarker>
  })}
</MapContainer>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default MapPage
