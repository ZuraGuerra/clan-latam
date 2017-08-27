import React from "react"
import Item from "./checklist/Item"
import { Tab } from 'semantic-ui-react'

export default class Checklist extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    function formMenu(steps) {
      return steps.map((step) => {
        return {
          "menuItem": step.stepName,
          "render": () => <Tab.Pane>{formChecklist(step.items)}</Tab.Pane>
        }
      })
    }

    function formChecklist(items) {
      return items.map((item) => {
        return <Item name={item.name} isChecked={item.isChecked} key={item.id}/>
      })
    }

    let state = {}
    let handleChange = (e, data) => this.setState(data)

    return (
      <div>
        <Tab panes={formMenu(this.props.data)} onTabChange={this.handleChange} />
      </div>
    )
  }
}
