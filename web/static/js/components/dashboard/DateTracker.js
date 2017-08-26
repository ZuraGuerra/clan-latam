import React from "react"
import { Progress } from 'semantic-ui-react'

export default class DateTracker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let organizationTime = 90 // days

    function calculateProgress(daysRemaining) {
      return 100 - ((organizationTime / 100) * daysRemaining)
    }

    return (
      <Progress percent={calculateProgress(this.props.daysRemaining)}
                color="blue"
                size="tiny">
        Faltan {this.props.daysRemaining} días
      </Progress>
    )
  }
}
