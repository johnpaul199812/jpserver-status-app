# Server Status App

This Node.js application provides server status information.

## Usage

1. Install Node.js (if not already installed): [Node.js Downloads](https://nodejs.org/en/download/)

2. Clone the repository:

    ```bash
    git clone https://github.com/johnpaul199812/server-status-app.git
    cd server-status-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the server:

    ```bash
    node server.js
    ```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the server status.

## Server Status Endpoint

The server status endpoint is located at the root URL (`/`). It returns a JSON object with information about the server.

Example:

```json
{
  "serverName": "your-server-name",
  "serverUptime": 12345,
  "totalMemory": 8589934592,
  "freeMemory": 2147483648,
  "serverLoad": [0.5, 0.7, 1.0]
}
