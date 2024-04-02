# Hotel Management API Implementation

This is a RESTful API for a hotel management system, built using Node.js and Express.js, with MongoDB as the database.

## Features

- Create, read, update, and delete room types
- Create, read, update, and delete rooms
- Fetch all rooms with optional filters

## Installation

1. Clone the repository:

```bash
# Clone the repository
git clone https://github.com/Ken-Obieze/learnable-node-api2.git

# Navigate to the project directory
cd learnable-node-api1
cd project-root
```
2. Set up environment variables:
* Create a .env file in the root directory.
* Define the following environment variables:
    +  PORT: Port number for the server (default is 3000).
    + MONGODB_URI: MongoDB connection URI.

3. Install dependencies
```bash
npm install
```

4. Start Server
```bash
npm start
```

## Testing Endpoints
### Using Postman
* Open Postman.
* Set the request method to the appropriate HTTP method (e.g., GET, POST, DELETE).
* Enter the URL for the desired endpoint.
* Add request parameters or a request body if necessary.
* Click on the "Send" button to make the request.
* Review the response in the Postman interface.

## Endpoints
### Authentication
* POST /api/v1/users/register: Register a new user.
### Rooms
* POST /api/v1/rooms: Create a new room.
* GET /api/v1/rooms: Get all rooms.
* GET /api/v1/rooms/:roomId: Get a room by ID.
* PATCH /api/v1/rooms/:roomId: Update a room.
* DELETE /api/v1/rooms/:roomId: Delete a room.
### Room Types
* POST /api/v1/roomTypes: Create a new room type.
* GET /api/v1/roomTypes: Get all room types.
