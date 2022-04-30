import './App.css';
import React from 'react';
import ContactForm from './ContactForm';
import PrimarySearchAppBar from './PrimarySearchAppBar';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {v4 as uuid} from 'uuid';

function ContactsList({ people, selectedIndex, handleListItemClick }) {
  return (
    <List sx={{
      width: '100%',
      maxHeight: 600,
      overflow: 'auto',
      bgcolor: 'background.paper',
    }}>
        {people.map(person => (
          <ListItemButton
            onClick={() => handleListItemClick(person.id) }
          >
            <ListItemText primary={person.firstName + ' ' + person.lastName} />
          </ListItemButton>
        ))}
    </List>
  );
}

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: this.props.people,
      isInContact: false,
      selectedId: -1,
    };

    this.handleListItemClick = this.handleListItemClick.bind(this)
    this.handleMenuPress = this.handleMenuPress.bind(this)
    this.handleEditPress = this.handleEditPress.bind(this)
    this.handleDeletePress = this.handleDeletePress.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.formRef = React.createRef();
  }

  handleListItemClick(id) {
    this.setState({
      isInContact: true,
      selectedId: id,
    });
  }

  handleMenuPress() {
    this.setState({
      isInContact: false,
      selectedId: -1,
    });
  }

  handleEditPress() {
    this.formRef.current.handleEdit();
  }

  handleSubmit(e) {
    console.log('Subitted!');
    e.preventDefault();
    const delList = this.state.people.filter((item) => item.id !== this.state.selectedId);
    /*
    const newPerson = [{
      id: this.state.selectedId,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      address: address,
    }];

    const newList = delList.concat({ newPerson })
    */

    this.setState({
      people: delList,
      selectedId: -1,
    });
  }

  handleDeletePress() {
    const newList = this.state.people.filter((item) => item.id !== this.state.selectedId);
    this.setState({
      people: newList,
      isInContact: false,
      selectedId: -1,
    });
  }

  render() {
    let body;
    if (this.state.isInContact) {
      const person = this.state.people.find((item) => item.id === this.state.selectedId);
      body =
        <ContactForm
          ref={this.formRef}
          firstName={person.firstName}
          lastName={person.lastName}
          phoneNumber={person.phoneNumber}
          emailAddress={person.emailAddress}
          address={person.address}
          isReadOnly={true}
          handleSubmit={this.handleSubmit}
          handleDeletePress={this.handleDeletePress}
        />
    } else {
      body =
        <ContactsList
          people={this.state.people}
          selectedId={this.state.selectedId}
          handleListItemClick={this.handleListItemClick}
        />;
    }

    return (
      <div className='App'>
        <Box sx={{ flexGrow: 1 }}>
          <PrimarySearchAppBar 
            handleMenuPress={this.handleMenuPress}
            handleEditPress={this.handleEditPress}
            handleDeletePress={this.handleDeletePress}
          />
          {body}
        </Box>
      </div>
    );
  }
}

function App() {
  const people = [
    {id: 0, firstName: 'Alice', lastName: 'McAlice', phoneNumber: '0400 000 000', emailAddress: 'alice@fakemail.com', address: '0 Fake St, Faketown'},
    {id: 1, firstName: 'Bob', lastName: 'McBob', phoneNumber: '0411 111 111', emailAddress: 'bob@fakemail.com', address: '1 Fake St, Faketown'},
    {id: 2, firstName: 'Chuck', lastName: 'McChuck', phoneNumber: '0422 222 222', emailAddress: 'chuck@fakemail.com', address: '2 Fake St, Faketown'},
    {id: 3, firstName: 'Dave', lastName: 'McDave', phoneNumber: '0433 333 333', emailAddress: 'dave@fakemail.com', address: '3 Fake St, Faketown'},
    {id: 4, firstName: 'Erin', lastName: 'McErin', phoneNumber: '0444 444 444', emailAddress: 'erin@fakemail.com', address: '4 Fake St, Faketown'},
    {id: 5, firstName: 'Alice', lastName: 'McAlice', phoneNumber: '0400 000 000', emailAddress: 'alice@fakemail.com', address: '0 Fake St, Faketown'},
    {id: 6, firstName: 'Bob', lastName: 'McBob', phoneNumber: '0411 111 111', emailAddress: 'bob@fakemail.com', address: '1 Fake St, Faketown'},
    {id: 7, firstName: 'Chuck', lastName: 'McChuck', phoneNumber: '0422 222 222', emailAddress: 'chuck@fakemail.com', address: '2 Fake St, Faketown'},
    {id: 8, firstName: 'Dave', lastName: 'McDave', phoneNumber: '0433 333 333', emailAddress: 'dave@fakemail.com', address: '3 Fake St, Faketown'},
    {id: 9, firstName: 'Erin', lastName: 'McErin', phoneNumber: '0444 444 444', emailAddress: 'erin@fakemail.com', address: '4 Fake St, Faketown'},
    {id: 10, firstName: 'Alice', lastName: 'McAlice', phoneNumber: '0400 000 000', emailAddress: 'alice@fakemail.com', address: '0 Fake St, Faketown'},
    {id: 11, firstName: 'Bob', lastName: 'McBob', phoneNumber: '0411 111 111', emailAddress: 'bob@fakemail.com', address: '1 Fake St, Faketown'},
    {id: 12, firstName: 'Chuck', lastName: 'McChuck', phoneNumber: '0422 222 222', emailAddress: 'chuck@fakemail.com', address: '2 Fake St, Faketown'},
    {id: 13, firstName: 'Dave', lastName: 'McDave', phoneNumber: '0433 333 333', emailAddress: 'dave@fakemail.com', address: '3 Fake St, Faketown'},
    {id: 14, firstName: 'Erin', lastName: 'McErin', phoneNumber: '0444 444 444', emailAddress: 'erin@fakemail.com', address: '4 Fake St, Faketown'},
  ];

  return <Contacts people={people}/>
}

export default App;
