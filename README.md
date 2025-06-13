# Sales Dashboard Server

A Node.js TypeScript server application for managing sales dashboard data.

## Features

- User authentication and authorization
- User preferences management
- Database integration with PostgreSQL
- API rate limiting
- Security middleware (CORS, Helmet)
- Request compression
- Logging system
- Health check endpoint
- Graceful shutdown handling

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Application
NODE_ENV=development
PORT=8001
CORS_ORIGIN=http://localhost:3000

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=sales_dashboard
DB_USER=postgres
DB_PASSWORD=your_password
DB_SSL=false
DB_POOL_MAX=5
DB_POOL_MIN=0
DB_POOL_ACQUIRE=30000
DB_POOL_IDLE=10000
DB_CONNECT_TIMEOUT=10000
DB_RETRY_MAX=3

# Authentication
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000  # 15 minutes
RATE_LIMIT_MAX_REQUESTS=100
```

## Development

Start the development server:

```bash
npm run dev
```

## Production

Build and start the production server:

```bash
npm run build
npm start
```

## API Endpoints

### Authentication

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/logout` - Logout user

### Health Check

- `GET /health` - Check server health

## Database Models

### User

- id (Primary Key)
- name
- email (Unique)
- password (Hashed)
- createdAt
- updatedAt

### UserPreferences

- id (Primary Key)
- userId (Foreign Key)
- theme ('light' | 'dark' | 'system')
- dashboardLayoutConfig (JSON)
- createdAt
- updatedAt

## Security Features

- Password hashing with bcrypt
- JWT authentication
- Rate limiting
- CORS protection
- Helmet security headers
- Request size limits
- SQL injection protection

## Error Handling

The application includes comprehensive error handling:

- Validation errors
- Authentication errors
- Database errors
- Rate limiting errors
- 404 Not Found
- 500 Internal Server Error

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
