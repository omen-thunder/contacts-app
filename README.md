# Contacts App

## Client-Side
The client is implemented using React.js.

### Functionality
The list of contacts can be viewed from the main screen.
If a contact is clicked, it's details will be displated as a form.
The delete button can be clicked to delete a contact.
The edit button in the top-right can be clicked to edit the contact.
The menu button in the top-left can be clicked to return to the main screen.

### WIP
Creating new contacts and saving edited contacts is currently broken.
Loading and saving the list of contacts to and from the server is incomplete.

### Starting the App
In the `client` directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Server-Side
The server is implemented using Express for Node.js.

### Functionality
The server accepts a GET request and POST request to send and reveive
the contacts list from the client in the JSON format.
The contacts list can be read from and written to a local file for
persistent storage.

### Starting the Server
In the `server` directory, you can run:

#### `npm start`
