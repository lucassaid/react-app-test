import { useState } from 'react'
import Header from './Header'
import Drawer from './Drawer'

const prueba = ['Home', 'Politics', 'Opinion', 'Sports', 'Nation']

export default function Layout({children}) {

  const [drawerVisible, setDrawerVisible] = useState(false)

  const drawerSections = (
    <>
      {prueba.map(section => (
        <div
          key={section}
          style={{padding: '10px 20px'}}
        >
          {section}
        </div>
      ))}
    </>
  )

  return (
    <>
      <Header
        sections={prueba}
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