import React from 'react'
import { Header } from './Common/Header'
import { Menu } from 'semantic-ui-react'

export const Navbar = () => {
  return (
    <>
      <Header />

      <Menu className='menustyle'>
        <Menu.Item>
          <p><strong>DEV@Deakin</strong></p>
        </Menu.Item>
        <Menu.Item>
          <form className='search-form'>
            <label htmlFor='search'></label>
            <input type="search" name="searchbar" id="search" placeholder='Search' />
          </form>
        </Menu.Item>
        <Menu.Item name='Post'>
        </Menu.Item>
        <Menu.Item name='Login'>
        </Menu.Item>
      </Menu>
    </>
  )
}
