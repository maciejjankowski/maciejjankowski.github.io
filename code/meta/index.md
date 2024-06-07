# Scripts making working with markdown blogging easier


## Create a list of files in the current directory in markdown
```bash
# prompt: using bash create a list of files in the current directory and output the links to those files using markdown language
ls -1 | grep -v "index.md" | awk '{print "- [[" $1 "]](./" $1 ")"}'
```



## Bash Script to Generate Markdown Pages for Each Month

This script generates markdown pages for each month using the three-letter month name (as in JavaScript) as a filename.

Prompt: Create a bash script which generates markdown pages for every month using the three letter month name (as in Javascript) as a filename

**Requirements:**

* Bash shell

**Instructions:**

1. Save the script as `generate_monthly_pages.sh`.
2. Make the script executable: `chmod +x generate_monthly_pages.sh`.
3. Run the script: `./generate_monthly_pages.sh`.

**Script:**

```bash
#!/bin/bash

# Get the current year
year=$(date +%Y)

# Loop through each month
for month in Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec; do
  # Create the filename
  filename="$month-$year.md"

  # Create the markdown file
  echo "# $month $year" > "$filename"

  # Add a link to the previous month's page
  if [[ $month != "Jan" ]]; then
    previous_month=$(date -d "$month 1 month ago" +%b)
    previous_year=$(date -d "$month 1 month ago" +%Y)
    echo "- Previous month: [[$previous_month $previous_year]]($previous_month-$previous_year.md)" >> "$filename"
  fi

  # Add a link to the next month's page
  if [[ $month != "Dec" ]]; then
    next_month=$(date -d "$month 1 month" +%b)
    next_year=$(date -d "$month 1 month" +%Y)
    echo "- Next month: [[$next_month $next_year]]($next_month-$next_year.md)" >> "$filename"
  fi
done
