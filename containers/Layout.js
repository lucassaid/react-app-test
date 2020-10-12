import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Drawer from '../components/Drawer'
import { 
  fetchCustomization,
  selectCustomization,
} from '../lib/slices/customizationSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Layout({children}) {
  const dispatch = useDispatch()

  // fetch customization
  const dispatchFetchCustomization = () => {
    dispatch(fetchCustomization())
  }
  
  useEffect(() => {
    dispatchFetchCustomization()
  }, [dispatch])

  const [drawerVisible, setDrawerVisible] = useState(false)
  
  const customization = useSelector(selectCustomization)
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