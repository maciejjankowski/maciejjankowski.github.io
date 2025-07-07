#!/bin/bash

# generate an svg with a moon icon representing the current moon phase for today
# The moon phase is determined by the current date and the moon's cycle

get_moon_phase() {
    local date_timestamp=$1
    local new_moon=946836840  # New moon reference date: 2000-01-06 18:14:00 UTC
    local cycle_length=29.53058867  # Average length of a lunar cycle in days

    local days_since_new_moon=$(echo "scale=10; ($date_timestamp - $new_moon) / (60 * 60 * 24)" | bc)
    echo "Days since new moon: $days_since_new_moon" >&2
    
    local cycles=$(echo "scale=10; $days_since_new_moon / $cycle_length" | bc)
    echo "Cycles: $cycles" >&2
    
    # Get the fractional part of cycles
    local cycles_int=$(echo "scale=0; $cycles / 1" | bc)
    local phase_fraction=$(echo "scale=10; $cycles - $cycles_int" | bc)
    echo "Phase fraction: $phase_fraction" >&2
    
    local phase_index=$(echo "scale=0; ($phase_fraction * 8) / 1" | bc)
    echo "Phase index: $phase_index" >&2
    
    # Ensure we get a value between 0 and 7
    if [ -z "$phase_index" ] || [ "$phase_index" -lt 0 ] || [ "$phase_index" -gt 7 ]; then
        phase_index=0
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
        *) echo "X" ;;  # Default to New Moon
    esac
}

# Get current date timestamp
date_timestamp=$(date +%s)

# Debug output
echo "Current timestamp: $date_timestamp" >&2
echo "Current date: $(date)" >&2

# Get moon phase
phase_index=$(get_moon_phase $date_timestamp)

echo "Phase index: $phase_index" >&2

# Get moon icon
moon_icon=$(get_moon_phase_icon $phase_index)

# is my location important for the moon phase?
# echo "<div class='moon-icon' title='Moon Phase: $moon_icon'>$moon_icon</div>"
echo "$moon_icon"
# Note: The moon phase is generally the same globally, but local time can affect the exact appearance of the moon at a given moment.
# You can add CSS to style the moon icon as needed.
