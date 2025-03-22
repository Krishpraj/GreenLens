FROM python:3.12-slim

WORKDIR /app

# Copy requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create uploads directory
RUN mkdir -p uploads

# Set environment variables
ENV NODE_ENV=development \
    PORT=5000 \
    MONGODB_URI=mongodb+srv://notlink06:gs0s1lEIJHlGwXDD@cluster0.p534m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 \
    JWT_SECRET=hello \
    CLIENT_URL=http://localhost:3000 \
    MONGODB_DB_NAME=greenlens \
    GEMINI_API_KEY=AIzaSyClAUPffkOlQ-gkLNmjX2lN9V_VCOx58tc \
    UPLOAD_PATH=./uploads \
    UPLOAD_URL=http://localhost:5000/uploads \
    SECRET_KEY=your_secret_key_here

# Expose port
EXPOSE 5000

# Run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000"]