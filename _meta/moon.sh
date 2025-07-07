#!/bin/bash

# generate an svg with a moon icon representing the current moon phase for today
# The moon phase is determined by the current date and the moon's cycle

get_moon_phase() {
    local date_timestamp=$1
    local new_moon=946836840  # New moon reference date: 2000-01-06 18:14:00 UTC
    local cycle_length=29.53058867  # Average length of a lunar cycle in days

    local days_since_new_moon=$(echo "scale=10; ($date_timestamp - $new_moon) / (60 * 60 * 24)" | bc)
    local phase_index=$(echo "scale=0; ($days_since_new_moon / $cycle_length * 8) % 8" | bc)
    
    # Handle negative results and ensure we get a positive integer
    if [ $(echo "$phase_index < 0" | bc) -eq 1 ]; then
        phase_index=$(echo "scale=0; $phase_index + 8" | bc)
    fi
    
    echo $phase_index
}

get_moon_phase_icon() {
    local phase_index=$1
    
    case $phase_index in
        0) echo "🌑" ;;  # New Moon
        1) echo "🌒" ;;  # Waxing Crescent
        2) echo "🌓" ;;  # First Quarter
        3) echo "🌔" ;;  # Waxing Gibbous
        4) echo "🌕" ;;  # Full Moon
        5) echo "🌖" ;;  # Waning Gibbous
        6) echo "🌗" ;;  # Last Quarter
        7) echo "🌘" ;;  # Waning Crescent
        *) echo "🌑" ;;  # Default to New Moon
    esac
}

# Get current date timestamp
date_timestamp=$(date +%s)

# Get moon phase
phase_index=$(get_moon_phase $date_timestamp)

# Get moon icon
moon_icon=$(get_moon_phase_icon $phase_index)

# is my location important for the moon phase?
echo "<div class='moon-icon' title='Moon Phase: $moon_icon'>$moon_icon</div>"
# Note: The moon phase is generally the same globally, but local time can affect the exact appearance of the moon at a given moment.
# You can add CSS to style the moon icon as needed.
