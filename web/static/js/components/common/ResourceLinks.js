import React from "react"
import { Button } from "semantic-ui-react"

export default class ResourceLinks extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    function renderLinks(links) {
      return links.map((link) => {
        return <Button content={link.name} color={link.color} key={link.id} />
      })
    }
    return (
      <Button.Group vertical>
        {renderLinks(this.props.links)}
      </Button.Group>
    )
  }
}
