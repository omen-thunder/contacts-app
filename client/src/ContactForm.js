import React from 'react';
import Box from '@mui/material/Box';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReadOnly: this.props.isReadOnly,
    };
  }

  handleEdit() {
    this.setState({isReadOnly: false});
  }

  render() {
    let form;
    if (this.state.isReadOnly === false) {
      form = 
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <div>
            <label>First Name
              <input className='form-input' type='text' name='first name' defaultValue={this.props.firstName} />
            </label>
          </div>
          <div>
            <label>Last Name
              <input className='form-input' type='text' name='last name' defaultValue={this.props.lastName} />
            </label>
          </div>
          <div>
            <label>Phone Number
              <input className='form-input' type='text' name='phone number' defaultValue={this.props.phoneNumber} />
            </label>
          </div>
          <div>
            <label>Email Address
              <input className='form-input' type='text' name='email' defaultValue={this.props.emailAddress} />
            </label>
          </div>
          <div>
            <label>Address
              <input className='form-input' type='text' name='address' defaultValue={this.props.address} />
            </label>
          </div>
          <button type='submit'>Save</button>
        </form>
    } else {
      form = 
        <form>
          <div>
            <label>First Name
              <input readOnly className='form-input' type='text' name='first name' defaultValue={this.props.firstName} />
            </label>
          </div>
          <div>
            <label>Last Name
              <input readOnly className='form-input' type='text' name='last name' defaultValue={this.props.lastName} />
            </label>
          </div>
          <div>
            <label>Phone Number
              <input readOnly className='form-input' type='text' name='phone number' defaultValue={this.props.phoneNumber} />
            </label>
          </div>
          <div>
            <label>Email Address
              <input readOnly className='form-input' type='text' name='email' defaultValue={this.props.emailAddress} />
            </label>
          </div>
          <div>
            <label>Address
              <input readOnly className='form-input' type='text' name='address' defaultValue={this.props.address} />
            </label>
          </div>
        </form>
      
    }

    return (
      <Box
        className='App'
        component='form'
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
        }}
      >
        {form}
      </Box>
    )
  }
}
