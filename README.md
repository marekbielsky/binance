# Binance Backend Service

A NestJS-based backend service for interacting with Binance's trading API.

<img width="1468" alt="Screenshot 2024-12-23 at 23 50 38" src="https://github.com/user-attachments/assets/fc0b5634-b8a4-4b95-b68a-0a7f2ecf29ef" />

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

This project fetches historical market data from Binance and displays it in a chart.

## Features

- Fetch live market data.
- Built with NestJS.
- Configurable API endpoint.

## Installation

### Prerequisites

- **Node.js** (LTS) - [Download](https://nodejs.org/)
- **NestJS CLI** - [Install](https://docs.nestjs.com/)
- **Live Preview** - [Install](https://marketplace.visualstudio.com/items)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/marekbielsky/binance.git
   cd binance
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:

   ```plaintext
   BINANCE_API="https://eapi.binance.com/eapi/v1"
   API_PORT=3000
   ```

4. Run the application:

   ```bash
   npm run start
   # or for development
   npm run start:dev
   ```

5. Run the HTML page with a generated chart.

## API Documentation

Access Swagger UI at: [http://localhost:3000/api/](http://localhost:3000/api/)

## Testing

Run tests with:

```bash
npm run test
```

## Contributing

Contributions are welcome! Report bugs, suggest features, or improve documentation.

## License

Licensed under the [MIT License](LICENSE).
