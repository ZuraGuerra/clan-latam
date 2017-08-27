import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends React.Component {
  render() {
    let state = { activeItem: 'Clan LATAM' }
    let handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    const { activeItem } = state

    return (
      <Menu color="teal">
        <Menu.Item name='Clan LATAM'
                   active={activeItem === 'Clan LATAM'}
                   onClick={this.handleItemClick}
                   href="/dashboard"
                   style={{background: "white"}}>
          <img style={{width: "4rem"}} src='https://files.slack.com/files-tmb/T0J02FWM8-F6TMTA7K2-f74eb31307/img-20170827-wa0022_1024.jpg' />
        </Menu.Item>
        <Menu.Item name="DASHBOARD"
                   active={activeItem === 'DASHBOARD'}
                   onClick={this.handleItemClick}
                   href="/dashboard">
          DASHBOARD
        </Menu.Item>
        <Menu.Item name="GUÍA DEL ORGANIZADOR"
                   active={activeItem === 'GUÍA DEL ORGANIZADOR'}
                   onClick={this.handleItemClick}
                   href="/contenido/3M1">
          GUÍA DEL ORGANIZADOR
        </Menu.Item>
      </Menu>
    )
  }
}
