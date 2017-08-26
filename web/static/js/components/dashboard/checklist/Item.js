import React from "react"
import { Checkbox } from "semantic-ui-react"

export default class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="checklist-item">
        <p>{this.props.name}</p>
        <Checkbox defaultChecked={this.props.isChecked} />
      </div>
    )
  }
}
