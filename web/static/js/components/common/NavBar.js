import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends React.Component {
  render() {
    let state = { activeItem: 'home' }
    let handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    const { activeItem } = state

    return (
      <Menu inverted>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
