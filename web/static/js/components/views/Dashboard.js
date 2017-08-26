import React from "react"
import Checklist from "../dashboard/Checklist"
import DateTracker from "../dashboard/DateTracker"
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

    return (
      <div>
        <Progress percent={data.progress} progress indicating />
        <DateTracker daysRemaining={data.daysRemaining} />
        <Checklist data={data.menu} />
      </div>
    )
  }
}
