import React from "react"
import { Container } from 'semantic-ui-react'
import ResourceLinks from "../common/ResourceLinks"
import Agenda from "../common/Agenda"

export default class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    function rawMarkup(post){
        return { __html: post };
    }

    let contacts = [
      {
        "id": 1,
        "avatar": "http://myfirstshiba.com/wp-content/uploads/2016/01/AdobeStock_139296191_reduced_white_background-copy.jpg",
        "name": "Eli",
        "role": "RM Latam",
        "email": "eli@sw.org"
      },
      {
        "id": 2,
        "avatar": "http://myfirstshiba.com/wp-content/uploads/2016/01/AdobeStock_139296191_reduced_white_background-copy.jpg",
        "name": "Shiba",
        "role": "SW Expert",
        "email": "shiba@sw.org"
      }
    ]

    let eventLinks = [
      {
        "id": 1,
        "name": "Eventbrite",
        "url": "eventbrite.com/mi-evento"
      },
      {
        "name": "SWOOP Admin",
        "url": "eventbrite.com/mi-evento",
        "id": 2
      },
      {
        "id": 3,
        "name": "Sitio del evento",
        "url": "eventbrite.com/mi-evento"
      },
      {
        "id": 4,
        "name": "Drive del evento",
        "url": "eventbrite.com/mi-evento"
      },
      {
        "id": 5,
        "name": "Facebook de la comunidad",
        "url": "eventbrite.com/mi-evento"
      }
    ]

    return (
      <div id="post-container">
        <Container text>
          <span dangerouslySetInnerHTML={rawMarkup(this.props.post)} />
        </Container>
        <div id="dashboard-side">
          <ResourceLinks links={eventLinks} />
          <Agenda contacts={contacts} />
        </div>
      </div>
    )
  }
}
