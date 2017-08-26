import React from "react"
import Checklist from "../dashboard/Checklist"

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    let data = [
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

    return (
      <Checklist data={data} />
    )
  }
}
