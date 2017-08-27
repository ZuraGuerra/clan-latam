import React from "react"
import { Checkbox } from "semantic-ui-react"

export default class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="checklist-item">
        <a href={this.props.postUrl}>{this.props.name}</a>
        <Checkbox defaultChecked={this.props.isChecked}
                  onChange={this.props.onCheckboxChange}/>
      </div>
    )
  }
}
