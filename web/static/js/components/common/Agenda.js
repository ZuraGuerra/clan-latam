import React from "react"
import { Card, Icon } from "semantic-ui-react"

export default class Agenda extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    function renderContacts(contacts) {
      return contacts.map((contact) => {
        let contactInfo = <a>
                            <Icon name="mail" />
                            {contact.email}
                          </a>
        return <Card
                    image={contact.avatar}
                    header={contact.name}
                    meta={contact.role}
                    key={contact.id}
                    extra={contactInfo}
                />
      })
    }
    return (
      <Card.Group>
        {renderContacts(this.props.contacts)}
      </Card.Group>
    )
  }
}
