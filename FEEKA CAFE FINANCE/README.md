# Feeka Cafe - Daily Finance System

Complete financial tracking solution for Feeka Cafe with daily expense and sales management.

## 📁 System Contents

### Data Files
- **Food_Menu.csv** - Complete menu with 38 items across 5 categories with pricing
- **Daily_Finance_Tracker.csv** - Daily sales and expense records (sample data included)
- **Expense_Breakdown.csv** - Detailed expense categories by day

### Documentation
- **Finance_Summary_Report.md** - Complete system overview and KPIs
- **generate_excel.py** - Python script to create formatted Excel workbooks

## 🚀 Quick Start

### 1. Manual Excel Creation
Simply import the CSV files into Excel:
- Open Excel → File → Open → Select any CSV file
- Each CSV will create a separate sheet
- Create additional sheets for formulas and charts

### 2. Automated Excel Generation
If you have Python installed:

```bash
# Install required packages
pip install pandas openpyxl

# Run the generator script
python generate_excel.py

# Opens: Feeka_Cafe_Finance_YYYYMMDD.xlsx
```

## 📊 Daily Tracking Process

### Step 1: Food & Dessert Expenses
Record daily purchases:
- Ingredients and supplies
- Packaging materials
- Labor costs

### Step 2: Track Sales by Category
- Coffee sales
- Dessert sales
- Food sales
- Beverage sales

### Step 3: Calculate Daily Profit
- Formula: Total Sales - Total Expenses
- Monitor profit margins

## 📈 Menu Overview

### Coffee (9 items)
- Espresso through Iced Coffee
- Price range: $2.50 - $4.00
- Highest profit margin category

### Desserts (10 items)
- Cheesecake, Tiramisu, Macarons, etc.
- Price range: $2.50 - $5.50
- Premium category, high margins

### Pastries (4 items)
- Croissants, Muffins
- Price range: $3.25 - $4.00

### Food (10 items)
- Salads, Sandwiches, Pizza, Pasta
- Price range: $6.00 - $10.50
- Higher volume, lower margin

### Beverages (3 items)
- Tea, Water, Juice
- Price range: $1.50 - $3.50

## 💰 Financial Metrics

### Current Performance (Sample Data)
- **Average Daily Sales:** $361.35
- **Average Daily Expenses:** $101.32
- **Average Daily Profit:** $260.03
- **Profit Margin:** 71.8%

### Target KPIs
- Daily Sales Target: $350+
- Overall Profit Margin: 45-50%
- Food Cost Ratio: 25-30% of sales
- Labor Cost Ratio: 15-20% of sales

## 🔧 Customization Guide

### Update Menu Prices
Edit `Food_Menu.csv`:
```
Item,Category,Price (USD),Cost Price (USD)
Espresso,Coffee,2.50,0.75
```

### Add New Daily Records
Append to `Daily_Finance_Tracker.csv`:
```
2024-05-11,Monday,expense,dessert_exp,beverage_exp,total_exp,food_sales,dessert_sales,beverage_sales,total_sales,profit,notes
```

### Track New Expense Categories
Add columns to `Expense_Breakdown.csv` as needed.

## 📋 Excel Sheet Descriptions

When generated, the Excel file includes:

1. **Daily Tracker** - Main tracking sheet with sales and expenses
2. **Food Menu** - Complete menu reference
3. **Expense Details** - Breakdown by expense category
4. **Summary** - Key metrics and calculations

## ✅ Best Practices

1. **Daily Entry**: Update records same day for accuracy
2. **Weekly Review**: Analyze trends every Sunday
3. **Monthly Summary**: Generate full month reports
4. **Inventory**: Track usage to minimize waste
5. **Pricing**: Review quarterly based on costs
6. **Backup**: Save Excel files weekly

## 📞 Support

For modifications or additional tracking:
- Add custom columns to any CSV
- Create pivot tables in Excel for analysis
- Export data for accounting software
- Print weekly summary reports

## 📅 Version
System created: May 1, 2024
Last updated: May 1, 2024
