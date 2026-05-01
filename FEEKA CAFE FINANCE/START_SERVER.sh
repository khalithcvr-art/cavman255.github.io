#!/bin/bash

# Feeka Cafe Finance - Local Web Server Launcher
# This starts a simple web server so you can view the dashboard in your browser

echo "🚀 Starting Feeka Cafe Finance Dashboard Server..."
echo ""

# Navigate to project folder
cd "/home/user/cavman255.github.io/FEEKA CAFE FINANCE" || exit

# Check if Python is available
if command -v python3 &> /dev/null; then
    PORT=8000
    echo "✅ Starting server on: http://localhost:$PORT"
    echo ""
    echo "📊 Dashboard: http://localhost:$PORT/Feeka_Cafe_Finance_Dashboard.html"
    echo ""
    echo "💡 Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    PORT=8000
    echo "✅ Starting server on: http://localhost:$PORT"
    echo ""
    echo "📊 Dashboard: http://localhost:$PORT/Feeka_Cafe_Finance_Dashboard.html"
    echo ""
    echo "💡 Press Ctrl+C to stop the server"
    echo ""
    python -m SimpleHTTPServer $PORT
else
    echo "❌ Python not found!"
    echo "Please install Python 3 or run:"
    echo "cd '/home/user/cavman255.github.io/FEEKA CAFE FINANCE'"
    echo "python3 -m http.server 8000"
    exit 1
fi
