# Criminal Capture Game - Backend

This project serves as the backend for the Criminal Capture Game, providing API endpoints to handle city and vehicle data, simulate the fugitive's location, and determine if any cop successfully captured the fugitive.

## Project Structure## Available Endpoints

### Get Cities

- **Endpoint:** `/api/cops/cities`
- **Method:** GET
- **Description:** Retrieves the list of neighboring cities.
- **Response:** JSON array containing city data.

### Get Vehicles

- **Endpoint:** `/api/cops/vehicles`
- **Method:** GET
- **Description:** Retrieves the available electric vehicles and their properties.
- **Response:** JSON array containing vehicle data.

### Simulate Fugitive's Location

- **Endpoint:** `/api/cops/fugitive`
- **Method:** GET
- **Description:** Simulates the fugitive's current location by randomly selecting a city from the list of neighboring cities.
- **Response:** JSON object containing the fugitive's location.

### Capture the Fugitive

- **Endpoint:** `/api/capture`
- **Method:** POST
- **Description:** Determines if any cop successfully captured the fugitive based on their selected cities and vehicles.
- **Request Body:** JSON object with two properties: `selectedCities` and `selectedVehicles`, containing the selected cities and vehicles for each cop.
- **Response:** JSON object indicating whether the fugitive was successfully captured and, if so, the identifier of the capturing cop.

## Installation and Setup

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

The server will start running on port 3001 by default.