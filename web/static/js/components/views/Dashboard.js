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

    let data = {
      "progress": 60,
      "daysRemaining": 5,
      "menu": [
        {
          "stepId":  1,
          "stepName": "3 MONTHS",
          "items": [
            {
              "name": "Check venue",
              "isChecked": true,
              "id": 1
            },
            {
              "name": "Get excited",
              "isChecked": false,
              "id": 2
            }
          ]
        },
        {
          "stepId": 2,
          "stepName": "2 MONTHS",
          "items": [
            {
              "name": "Get excited",
              "isChecked": false,
              "id": 3
            }
          ]
        }
      ]
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
      <div>
        <Progress percent={data.progress} progress indicating />
        <DateTracker daysRemaining={data.daysRemaining} />
        <div id="dashboard-content">
          <Checklist data={data.menu} />
          <div id="dashboard-side">
            <ResourceLinks links={eventLinks} />
            <Agenda contacts={contacts} />
          </div>
        </div>
      </div>
    )
  }
}
