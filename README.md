
# Rentix
## CYNTHIA WAS HERE

## Table of Contents

- [Description](#description)
- [Features](#features)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Preview Images](#preview-images) 
- [Link To Walkthru Video](#link-to-walkthru-video)
- [Installation and Usage](#installation-and-usage)
- [Tests](#tests)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)

## Descriptiom

The Rentix API is a RESTful API web service that serves as the backend for an event rental company. It provides a platform for customers to browse and rent various items for their events, such as venues, equipment, and decorations, and even transportation.

## Features

Venue Management: Customers can search and view available venues for their events. The API provides endpoints to retrieve details about each venue, including its capacity, amenities, and pricing.

Equipment Rental: Customers can browse a catalog of available equipment and rent items for their events. The API offers endpoints to retrieve equipment details, check availability, and create rental bookings.

Catering Options: Customers can explore different menu options for their events. The API provides endpoints to view available cuisine, including vegan options, and pricing.

User Management: The API includes endpoints for user registration, authentication, and profile management. Customers can create accounts, log in, and update their personal information.



## User Story

```md
As an Admin or client of the Rentix Event Rental Company,
I want to be able to browse and rent items for my event,
So that I can easily find and book the necessary resources.
```

## Acceptance Criteria

```md
- As a customer, I should be able to view available venues with their details, such as capacity, amenities, and pricing.
- I should be able to search for venues based on specific criteria, such as location or size.
- Upon selecting a venue, I should be able to see its availability for a given date and time.
- Once I have chosen a venue, I should be able to make a booking and receive confirmation of my reservation.
- Additionally, I should be able to explore a catalog of catering options for the event.
- The API should provide details about each item, including descriptions, images, and pricing.
- I should be able to check the availability of specific items for my event date.
- Upon selecting the desired items, I should be able to add them to my rental cart and proceed to the checkout process.
- The API should handle user authentication and provide endpoints for user registration, login, and profile management.

```

## Preview Images
- ## Preview 1 
![Website Preview Image](./)
- ## Preview 2 
![Website Preview Image](./)


## Link To Walkthru Video
**Walkthrough Video:** [Link To Walkthru Video](https://) 


## Installation and Usage
- To clone the repo: https://github.com/cynthiamory/Rentix.git
- Install [Node](https://nodejs.org/en). version 16 and up. Command line: npm init 
- Install the required dependencies using npm install.
- Set up the MySQL database and update the configuration details in the .env file.
- Run the API using Command: 
```bash
node server.js
```
```bash
npm start
```

## Tests
- There are no tests yet for this application

## Technologies Used
Assignment was built with:

Node.js: The API is built using Node.js, a JavaScript runtime environment, making it fast and scalable.

Express.js: Express.js is utilized as the web framework for handling HTTP requests and routing.

MySQL: The API integrates with a MySQL database to store and retrieve data related to venues, equipment, decorations, and user information.

Authentication and Authorization: The API implements token-based authentication using JSON Web Tokens (JWT) to ensure secure user access to the system's resources.

## Credits
- Rentix Contributors: Cynthia, Rohit, Sagenthave, Amrit, Matthew
- Institution: The University Of Toronto
- Course: Bootcamp Full Stack Development
- Instructor: Ali Masqood
- Teachers Assistant: Shihan
- Tutor: TBD
- Learing Assistant Ask BCS Support: TBD
- Online Support: TBD
- License badges: Sheilds.io

## License

![License](https://img.shields.io/badge/License-MIT-9cf.svg)
