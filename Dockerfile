FROM lipanski/docker-static-website:latest

# Copy your static files
COPY index.html .
COPY script.js .
COPY style.csd .
