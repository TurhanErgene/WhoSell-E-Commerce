import { useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'

import './Component.css'

const style = {
  color: 'white',
  cursor: 'pointer',
}

const HamburgerMenu = () => {
  const [state, setState] = useState(false)

  const toggleDrawer = (open: boolean) => (event: any) => {
    event.preventDefault()
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setState(open)
  }

  return (
    <div className="hamburgerMenu">
      <MenuIcon onClick={toggleDrawer(true)} fontSize="large" sx={style} />
      <Drawer
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
        className="hamburgerMenu__Drawer"
      >
        <ul className="padSearchDrawer">empty</ul>
      </Drawer>
    </div>
  )
}

export default HamburgerMenu