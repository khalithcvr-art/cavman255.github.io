#!/bin/bash

# Feeka Cafe Finance Dashboard - Mac Launcher
# Double-click this file to open the dashboard in Chrome

DIR="$(cd "$(dirname "$0")" && pwd)"
FILE="$DIR/feeka_cafe_daily_finance.html"

# Open with default browser
open "$FILE"

# Alternative: Open specifically with Chrome
# open -a "Google Chrome" "$FILE"

echo "✅ Dashboard opened!"
