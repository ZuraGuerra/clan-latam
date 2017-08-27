import React from "react"
import Item from "./checklist/Item"
import { Tab } from 'semantic-ui-react'

export default class Checklist extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    function formMenu(steps, onCheckboxChange) {
      return steps.map((step) => {
        return {
          "menuItem": step.stepName,
          "render": () => <Tab.Pane>{formChecklist(step.items, onCheckboxChange)}</Tab.Pane>
        }
      })
    }

    function formChecklist(items, onCheckboxChange) {
      return items.map((item) => {
        return <Item name={item.name}
                     isChecked={item.isChecked}
                     key={item.id}
                     postUrl={item.postUrl}
                     directLink={item.directLink || null}
                     onCheckboxChange={onCheckboxChange} />
      })
    }

    let state = {}
    let handleChange = (e, data) => this.setState(data)

    return (
      <div id="dashboard-checklist">
        <Tab panes={formMenu(this.props.data, this.props.onCheckboxChange)} onTabChange={this.handleChange} />
      </div>
    )
  }
}
