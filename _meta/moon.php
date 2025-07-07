<?php
// generate an svg with a moon icon representing the current moon phase for today
// The moon phase is determined by the current date and the moon's cycle
function getMoonPhase($date) {
    $newMoon = strtotime("2000-01-06 18:14:00"); // New moon reference date
    $cycleLength = 29.53058867; // Average length of a lunar cycle in days

    $daysSinceNewMoon = ($date - $newMoon) / (60 * 60 * 24);
    $phaseIndex = round($daysSinceNewMoon / $cycleLength * 8) % 8;

    return $phaseIndex;
}
function getMoonPhaseIcon($phaseIndex) {
    $icons = [
        '🌑', // New Moon
        '🌒', // Waxing Crescent
        '🌓', // First Quarter
        '🌔', // Waxing Gibbous
        '🌕', // Full Moon
        '🌖', // Waning Gibbous
        '🌗', // Last Quarter
        '🌘'  // Waning Crescent
    ];
    
    return $icons[$phaseIndex];
}
$date = new DateTime();
$phaseIndex = getMoonPhase($date->getTimestamp());
$moonIcon = getMoonPhaseIcon($phaseIndex);
// is my location important for the moon phase?
echo "<div class='moon-icon' title='Moon Phase: {$moonIcon}'>".$moonIcon."</div>";
// Note: The moon phase is generally the same globally, but local time can affect the exact appearance of the moon at a given moment.
// You can add CSS to style the moon icon as needed.
 
?>