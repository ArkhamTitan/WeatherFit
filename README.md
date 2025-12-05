# WeatherFit
Weather-Based Outfit Recommendations  

[Live Demo](https://csci331vm.cs.montana.edu/~h73f828@student.montana.edu/OutfitFinal/public/) (On MSU CSCI VM)

## Overview
WeatherFit is a full-stack web app that helps users decide which clothes to wear based on the current weather conditions. Just enter a city name, and get outfit recommendations tailored to the temperature and weather conditions.

## Contributors
**Luka Derry** - Frontend Development  
**Ryan Day** - Backend Development

## Key Features
* Real-time weather data from OpenWeatherMap API
* Temperature-based outfit recommendations (cold/medium/hot)
* Dynamic background theming based on weather conditions
* Clean, modern user interface

## Stack
### Frontend
* HTML, CSS, JavaScript

### Backend
* Node.js, Express.js, CORS

### APIs
* OpenWeatherMap API - Current weather and 5-day forecast data

### Deployment
* **Frontend**: Montana State University CS Server (csci331vm)
* **Backend**: Render.com (cloud hosting)

## How it Works
Temperature ranges determine the clothing categories.
* **Cold (<50°F)**: Heavy jacket, thermal pants, winter boots
* **Medium (50-75°F)**: Hoodie, jeans, sneakers
* **Hot (>75°F)**: T-shirt, shorts, sandals
* Rainy conditions always recommend waterproof boots

## Future Enhancements
* 5 day forecast view
* Add weather alerts
* Add outfit image gallery
* User preference saving

--- 

CSCI 331 - Montana State University - Fall 2025