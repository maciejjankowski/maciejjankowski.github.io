#!/bin/bash

# List of 3-letter month names
# months=("Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" 
months=("Sep" "Oct" "Nov" "Dec")

# Loop through each month
for month in "${months[@]}"; do
  # Create a .md file with the month name
  echo "worth checking:\n\n" > "${month}.md"
done
