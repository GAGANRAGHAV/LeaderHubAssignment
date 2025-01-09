# Video


https://drive.google.com/file/d/1lTXdPkUhN5NSt-_w6u1Gn8TqBegypQRQ/view?usp=sharing


# AI Chat Interface with Google Generative AI


This is an AI-powered chat interface that uses Google Generative AI to generate responses based on user input prompts. The project includes a frontend built with React and a backend implemented with Node.js/Express to securely handle API requests. The system stores user prompts and AI responses in a MongoDB database.

---

## Features

- User-friendly chat interface for sending prompts and viewing AI responses.
- Real-time AI content generation using Google Generative AI.
- Backend proxy to securely handle the API key and interact with the Google Generative AI API.
- MongoDB integration to store prompts and AI responses.
- Dockerized backend for easy deployment and scalability.

---

## Tech Stack

### Frontend
- React.js
- Axios for HTTP requests
- Tailwind CSS for styling
- Google Generative AI SDK
- Lucide React for icons

### Backend
- Node.js with Express.js
- MongoDB (via Mongoose) for database operations
- dotenv for environment variable management

### Deployment
- Docker for containerization
- Optional: AWS for deployment (EC2/Docker or Elastic Beanstalk)

---

## Project Structure

### Frontend



```shell
FRONTEND              // Main Express server logic
 ├── components/
 │   └── ChatInterface.js     // Main Chat Interface Componentresponses
 │   └── App.js                 // Main entry point
 │   └── Previous.js         // Previously Saved promt and responses 


```shell
### Backend
server/
 ├── .env                   // Environment variables (e.g., API keys)
 ├── Dockerfile             // Dockerfile for backend container
 ├── docker-compose.yml     // For spinning up containers
 ├── server.js              // Main Express server 




```
## Enviroment Variable

MONGO_URI=your_mongodb_connection_string


## Installation

git clone https://github.com/your-username/ai-chat-interface.git
cd ai-chat-interface


## Frontend

cd frontend
npm install

## Backend

cd backend
npm install
