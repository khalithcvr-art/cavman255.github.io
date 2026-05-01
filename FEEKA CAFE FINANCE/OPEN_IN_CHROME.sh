#!/bin/bash

# Feeka Cafe Finance Dashboard - Chrome Launcher
# This script opens the dashboard in Google Chrome

echo "🚀 Opening Feeka Cafe Finance Dashboard in Chrome..."

DASHBOARD_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/feeka_cafe_daily_finance.html"

# Open in Chrome
if command -v google-chrome &> /dev/null; then
    google-chrome "$DASHBOARD_PATH" &
elif command -v /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome &> /dev/null; then
    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome "$DASHBOARD_PATH" &
elif command -v chromium &> /dev/null; then
    chromium "$DASHBOARD_PATH" &
elif command -v chromium-browser &> /dev/null; then
    chromium-browser "$DASHBOARD_PATH" &
else
    echo "❌ Google Chrome not found!"
    echo "Please open manually:"
    echo "$DASHBOARD_PATH"
    exit 1
fi

echo "✅ Dashboard launched in Chrome!"
echo "📍 File: $DASHBOARD_PATH"
echo ""
echo "💡 Tips:"
echo "   • Bookmark this page for quick access"
echo "   • Your data saves automatically"
echo "   • Refresh the page if needed"
