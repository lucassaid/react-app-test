import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Drawer from '../components/Drawer'
import { 
  fetchCustomization,
  selectCustomization,
  loadingStateSelector,
} from '../lib/slices/customizationSlice'
import { useDispatch, useSelector } from 'react-redux'

const prueba = ['Home', 'Politics', 'Opinion', 'Sports', 'Nation']

export default function Layout({children}) {
  const dispatch = useDispatch()

  const dispatchFetchCustomization = async () => {
    await dispatch(fetchCustomization())
  }
  
  useEffect(() => {
    dispatchFetchCustomization()
  }, [dispatch])

  const customization = useSelector(selectCustomization)
  const [drawerVisible, setDrawerVisible] = useState(false)

  const sections = customization.sections || []
  
  const drawerSections = (
    <>
      {sections.map(section => (
        <div key={section} style={{padding: '10px 20px'}}>
          {section}
        </div>
      ))}
    </>
  )

  return (
    <>
      <Header
        customization={customization}
        onMenuClicked={() => setDrawerVisible(true)}
      />
      <Drawer
        title="Sections"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
      >
        {drawerSections}
      </Drawer>
      <main style={{paddingTop: 135}}>
        {children}
      </main>
    </>
  )
}