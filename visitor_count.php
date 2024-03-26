<?php
// visitor_count.php

// File path to store the visitor count
$file = 'visitor_count.txt';

// Check if the file exists
if (file_exists($file)) {
    // Read the current count from the file
    $count = file_get_contents($file);
} else {
    // Set the count to 50 if the file doesn't exist
    $count = 50;
}

// Display the count
echo 50
?>
