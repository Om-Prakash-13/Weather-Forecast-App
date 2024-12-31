# Weather App

A simple and responsive Weather Application built with **React.js**, **Vite**, and **Material UI**. This app fetches weather data from an external API and displays it in a user-friendly interface, showing current weather information based on the city entered by the user.

## Features

🌍 **Current Weather Information**: Get temperature, humidity, wind speed, visibility, and weather conditions.

🔍 **Search Functionality**: Enter any city name to retrieve weather data for that location.

📍 **Current Location**: Get weather data based on your current geographical location (using browser geolocation).

💡 **Material UI**: A clean and modern design built with Material UI components.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Vite**: A fast and modern build tool for frontend development.
- **Material UI**: A React UI framework that implements Google's Material Design.
- **WeatherAPI**: A free weather API to fetch weather data.
- **HTML/CSS**: For the basic structure and styling of the app.

## Setup

To run this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/) (>= 14.x)
- [npm](https://www.npmjs.com/) (>= 6.x)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
2. Navigate to the project directory:
   ```bash
   cd weather-app
3. Install dependencies:
   ```bash
   npm install
4. Create a .env file in the root directory and add your WeatherAPI credentials:
   ```bash
   VITE_API_URL=https://api.weatherapi.com/v1/current.json?
   VITE_API_KEY=your-api-key-here
5. Run the app:
   ```bash
   npm run dev
