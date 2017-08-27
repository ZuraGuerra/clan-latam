import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends React.Component {
  render() {
    let state = { activeItem: 'Clan LATAM' }
    let handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    const { activeItem } = state

    return (
      <Menu inverted>
        <Menu.Item name='Clan LATAM'
                   active={activeItem === 'Clan LATAM'}
                   onClick={this.handleItemClick}
                   href="/dashboard">
          Clan LATAM
        </Menu.Item>
      </Menu>
    )
  }
}
