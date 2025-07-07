<?php
// Debug version of the moon script
function getMoonPhase($date) {
    $newMoon = strtotime("2000-01-06 18:14:00"); // New moon reference date
    $cycleLength = 29.53058867; // Average length of a lunar cycle in days

    echo "Debug - PHP timestamp: " . $date . "\n";
    echo "Debug - New moon timestamp: " . $newMoon . "\n";
    echo "Debug - Current date: " . date('Y-m-d H:i:s', $date) . "\n";
    echo "Debug - New moon date: " . date('Y-m-d H:i:s', $newMoon) . "\n";

    $daysSinceNewMoon = ($date - $newMoon) / (60 * 60 * 24);
    echo "Debug - Days since new moon: " . $daysSinceNewMoon . "\n";
    
    $phaseCalc = $daysSinceNewMoon / $cycleLength * 8;
    echo "Debug - Phase calculation (before round): " . $phaseCalc . "\n";
    
    $phaseIndex = round($phaseCalc) % 8;
    echo "Debug - Phase index (after round and modulo): " . $phaseIndex . "\n";

    return $phaseIndex;
}

$date = new DateTime();
$phaseIndex = getMoonPhase($date->getTimestamp());
echo "Final phase index: " . $phaseIndex . "\n";
?>
