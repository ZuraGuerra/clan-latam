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
        "avatar": "https://scontent.fmex7-2.fna.fbcdn.net/v/t1.0-9/19029449_10155587909394728_2348935550756153236_n.jpg?oh=9cccac59e2f87fa7bc8ed615b0be8dad&oe=5A5CA333",
        "name": "Eli Becerril",
        "role": "Regional Manager LATAM",
        "email": "eli@sw.org"
      }
    ]

    let eventLinks = [
      {
        "id": 1,
        "name": "Eventbrite",
        "url": "https://www.eventbrite.com/myevent?eid=32834796761"
      },
      {
        "name": "SWOOP Admin",
        "url": "http://swoop.techstars.com",
        "id": 2
      },
      {
        "id": 3,
        "name": "Sitio del evento",
        "url": "http://swregistro.com"
      },
      {
        "id": 4,
        "name": "Drive del evento",
        "url": "https://drive.google.com/drive/folders/0Byf5L_QEAXQCNHhtWG4zM1dkcG8?usp=sharing"
      },
      {
        "id": 5,
        "name": "Facebook de la comunidad",
        "url": "https://www.facebook.com/StartupWeekendCDMX/"
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
