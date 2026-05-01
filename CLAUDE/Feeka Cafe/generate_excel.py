#!/usr/bin/env python3
"""
Feeka Cafe Finance System - Excel Generator
Converts CSV files to a formatted Excel workbook with charts and summaries
"""

import pandas as pd
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils.dataframe import dataframe_to_rows
from datetime import datetime
import os

def create_excel_workbook():
    """Create comprehensive Excel workbook for Feeka Cafe finances"""

    # Read CSV files
    menu_df = pd.read_csv('Food_Menu.csv')
    tracker_df = pd.read_csv('Daily_Finance_Tracker.csv')
    expenses_df = pd.read_csv('Expense_Breakdown.csv')

    # Create Excel writer
    excel_file = f'Feeka_Cafe_Finance_{datetime.now().strftime("%Y%m%d")}.xlsx'

    with pd.ExcelWriter(excel_file, engine='openpyxl') as writer:
        # Write sheets
        tracker_df.to_excel(writer, sheet_name='Daily Tracker', index=False)
        menu_df.to_excel(writer, sheet_name='Food Menu', index=False)
        expenses_df.to_excel(writer, sheet_name='Expense Details', index=False)

        # Create Summary sheet
        summary_data = {
            'Metric': [
                'Total Days Tracked',
                'Total Sales',
                'Total Expenses',
                'Total Profit',
                'Average Daily Sales',
                'Average Daily Expenses',
                'Average Daily Profit',
                'Overall Profit Margin (%)'
            ],
            'Value': [
                len(tracker_df),
                f"${tracker_df['Total Sales (USD)'].sum():.2f}",
                f"${tracker_df['Total Expenses (USD)'].sum():.2f}",
                f"${tracker_df['Daily Profit (USD)'].sum():.2f}",
                f"${tracker_df['Total Sales (USD)'].mean():.2f}",
                f"${tracker_df['Total Expenses (USD)'].mean():.2f}",
                f"${tracker_df['Daily Profit (USD)'].mean():.2f}",
                f"{(tracker_df['Daily Profit (USD)'].sum() / tracker_df['Total Sales (USD)'].sum() * 100):.2f}%"
            ]
        }
        summary_df = pd.DataFrame(summary_data)
        summary_df.to_excel(writer, sheet_name='Summary', index=False)

        # Format worksheets
        for sheet_name in writer.sheets:
            worksheet = writer.sheets[sheet_name]

            # Format header row
            header_fill = PatternFill(start_color='4472C4', end_color='4472C4', fill_type='solid')
            header_font = Font(bold=True, color='FFFFFF')

            for cell in worksheet[1]:
                cell.fill = header_fill
                cell.font = header_font
                cell.alignment = Alignment(horizontal='center', vertical='center')

            # Auto-adjust column widths
            for column in worksheet.columns:
                max_length = 0
                column_letter = column[0].column_letter
                for cell in column:
                    try:
                        if len(str(cell.value)) > max_length:
                            max_length = len(str(cell.value))
                    except:
                        pass
                worksheet.column_dimensions[column_letter].width = min(max_length + 2, 50)

            # Add borders to all cells with data
            thin_border = Border(
                left=Side(style='thin'),
                right=Side(style='thin'),
                top=Side(style='thin'),
                bottom=Side(style='thin')
            )

            for row in worksheet.iter_rows(min_row=1, max_row=worksheet.max_row,
                                          min_col=1, max_col=worksheet.max_column):
                for cell in row:
                    cell.border = thin_border
                    if cell.row > 1:
                        cell.alignment = Alignment(horizontal='center', vertical='center')

    print(f"✓ Excel workbook created: {excel_file}")
    return excel_file

if __name__ == '__main__':
    try:
        create_excel_workbook()
        print("\n✓ Finance system Excel files generated successfully!")
        print("✓ Ready for daily tracking and financial analysis")
    except Exception as e:
        print(f"✗ Error generating Excel: {e}")
        print("Make sure pandas and openpyxl are installed:")
        print("  pip install pandas openpyxl")
