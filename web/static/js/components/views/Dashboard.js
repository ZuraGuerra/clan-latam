import React from "react"
import Checklist from "../dashboard/Checklist"
import DateTracker from "../dashboard/DateTracker"
import ResourceLinks from "../common/ResourceLinks"
import Agenda from "../common/Agenda"
import { Progress } from 'semantic-ui-react'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

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
      <div>
        <Progress percent={this.props.data.progress} progress indicating />
        <DateTracker daysRemaining={this.props.data.daysRemaining} />
        <div id="dashboard-content">
          <Checklist data={this.props.data.menu} />
          <div id="dashboard-side">
            <ResourceLinks links={eventLinks} />
            <Agenda contacts={contacts} />
          </div>
        </div>
      </div>
    )
  }
}
