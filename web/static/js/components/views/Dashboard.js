import React from "react"
import Checklist from "../dashboard/Checklist"
import DateTracker from "../dashboard/DateTracker"
import ResourceLinks from "../common/ResourceLinks"
import Agenda from "../common/Agenda"
import { Progress } from 'semantic-ui-react'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: 5
    }
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  onCheckboxChange() {
    console.log("HASHFASJFA")
    this.setState({
      progress: this.state.progress >= 100 ? 0 : this.state.progress + 1
    })
    console.log(this.state)
  }

  render() {

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

    let progress = 5

    return (
      <div>
        <Progress percent={this.state.progress} progress indicating />
        <DateTracker daysRemaining={this.props.data.daysRemaining} />
        <div id="dashboard-content">
          <Checklist data={this.props.data.menu}
                     onCheckboxChange={this.onCheckboxChange}
                     progress={this.state.progress}/>
          <div id="dashboard-side">
            <ResourceLinks links={eventLinks} />
            <Agenda contacts={contacts} />
          </div>
        </div>
      </div>
    )
  }
}
