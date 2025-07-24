# CuratedBites

A full-stack web application with automated CI/CD pipeline.

## 🚀 Features

- **Frontend**: React application
- **Backend**: Node.js/Express API
- **Docker**: Containerized deployment
- **CI/CD**: Automated testing and deployment pipeline

## 🏗️ Architecture

```
CuratedBites/
├── frontend/          # React application
├── backend/           # Node.js/Express API
├── docker-compose.yml # Local development setup
└── .github/workflows/ # CI/CD pipelines
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone git@github.com:Nipunme7/Curated_Bites.git
   cd Curated_Bites
   ```

2. **Start with Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

### Manual Development

1. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
npm run test:watch  # Watch mode
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 🚀 CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

### Pipeline Stages

1. **Test** - Runs unit tests for both frontend and backend
2. **Lint** - Code quality checks
3. **Build & Push** - Creates Docker images and pushes to GitHub Container Registry
4. **Deploy** - Automatic deployment to staging/production

### Triggers

- **Push to `main`**: Full pipeline (test → lint → build → deploy to production)
- **Push to `develop`**: Full pipeline (test → lint → build → deploy to staging)
- **Pull Request**: Test and lint only

### Docker Images

Images are automatically built and pushed to:
- `ghcr.io/nipunme7/curated_bites/backend:latest`
- `ghcr.io/nipunme7/curated_bites/frontend:latest`

## 📦 Docker

### Local Development
```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Rebuild images
docker-compose up --build

# Stop services
docker-compose down
```

### Production Deployment
```bash
# Pull latest images
docker pull ghcr.io/nipunme7/curated_bites/backend:latest
docker pull ghcr.io/nipunme7/curated_bites/frontend:latest

# Run with docker-compose
docker-compose -f docker-compose.prod.yml up -d
```

## 🔧 Environment Variables

### Backend (.env)
```env
NODE_ENV=development
PORT=5000
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000
```

## 📝 Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run linting

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🤝 Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Add tests for new functionality
4. Ensure all tests pass
5. Create a pull request to `develop`

## 📄 License

ISC License 