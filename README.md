# Binance Backend Service

A backend service to interact with the Binance API such as including retrieving market data

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project provides a NestJS-based backend service for interacting with Binance's trading API. It can fetch the 
historical market data and display it in the chart

## Features

- Fetch live market data from Binance.
- Built using NestJS for easy scalability and maintainability.
- Configurable API endpoint for fetching historical market data.

## Installation

### Prerequisites

- **Node.js** (LTS version) - [Download here](https://nodejs.org/)
- **NestJS CLI** (optional but recommended) - [Install NestJS CLI](https://docs.nestjs.com/)
- **Live Preview** (optional but recommended) - [Install Live Preview](https://marketplace.visualstudio.com/items)
  itemName=ms-vscode.live-server)

## Configuration

Before running the application, you need to configure several environment variables to set up the necessary services, including the database and external APIs. Follow the steps below to get your environment ready.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/marekbielsky/binance.git
```
```
cd binance
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set Up Environment Variables

The project relies on several environment variables to configure different services (e.g., MongoDB, API keys, etc.). Create a .env file in the root directory of the project by following these steps:

Copy the example .env file (if provided) or manually create a .env file in the root of the project.
Add the necessary values for your environment variables.
Here’s a sample .env file to help you get started:

```
API_PORT=3000
```

### 4. Run the application

After setting up your environment, you can start the application. Run the following command:

```bash
npm run start
```

Alternatively, you can run the dev environment as well (strongly recommended). Run the following command:
```bash
npm run start:dev
```

### 5. Run the HTML page with generated chart

To run the HTML file successfully, you need to install external plugin mentioned in [Installation](#installation)
prerequisites (if using VS Code) or 
just run 
it by 
built-in 
tool provided by Webstorm. 

This will launch the application on the specified port (by default, it will be port 3000 unless specified otherwise in the .env file).

## API Documentation

This project uses **Swagger** to automatically generate API documentation. The documentation provides a detailed description of available endpoints, request parameters, response format, and more.

Once the application is running, you can access the API documentation via the Swagger UI at: http://localhost:3000/api/

## Testing

This project uses **Jest** as the testing framework, which is integrated with **NestJS**. The tests ensure the reliability of the application by verifying that the individual parts of the application work as expected.

### Types of Tests
This project is structured to have different types of tests for various parts of the application:

1. **Unit Tests**:
   Unit tests verify the behavior of individual components or services in isolation. These tests ensure that each part of the application works correctly and independently.

### Run test

To run the tests, you need to execute the following command:
```bash
npm run test
```

## Contributing

We welcome contributions to this project! By contributing, you help make this project better for everyone. There are several ways you can contribute, including reporting bugs, suggesting features, or improving the documentation.

## License

This project is licensed under the [MIT License](LICENSE).

### MIT License Summary

The MIT License is a permissive free software license that allows anyone to use, modify, and distribute the software with minimal restrictions. The only conditions are:

- **Copyright Notice**: Include the copyright notice in all copies or substantial portions of the software.
- **No Warranty**: The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement.

For the full text of the license, see the [LICENSE](LICENSE) file in this repository.
