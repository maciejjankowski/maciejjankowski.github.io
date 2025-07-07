# return emoji for the current moon phase
# Usage: moon.sh
moon() {
  local phase=$(date +%d)
  local emoji="🌑" # New Moon

  if (( phase < 3 || phase > 27 )); then
    emoji="🌑" # New Moon
  elif (( phase < 7 )); then
    emoji="🌒" # Waxing Crescent
  elif (( phase < 11 )); then
    emoji="🌓" # First Quarter
  elif (( phase < 15 )); then
    emoji="🌔" # Waxing Gibbous
  elif (( phase < 19 )); then
    emoji="🌕" # Full Moon
  elif (( phase < 23 )); then
    emoji="🌖" # Waning Gibbous
  elif (( phase < 27 )); then
    emoji="🌗" # Last Quarter
  else
    emoji="🌘" # Waning Crescent
  fi

  echo "$emoji"
}
# Add moon emoji to the prompt
if [[ -n "$PS1" ]]; then
  PROMPT_COMMAND='PS1="${PS1}$(moon) "'
fi
# Add moon emoji to the command line
if [[ -n "$PS2" ]]; then
  PS2="${PS2}$(moon) "
fi
# Add moon emoji to the command line for multi-line prompts
if [[ -n "$PS3" ]]; then
  PS3="${PS3}$(moon) "
fi
# Add moon emoji to the command line for select prompts
if [[ -n "$PS4" ]]; then
  PS4="${PS4}$(moon) "
fi
