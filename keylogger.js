/**
 * @file keylogger.js
 * @description Tracks keystrokes to trigger the "SCENT".
 * This script uses a for-in loop to audit character frequency.
 */

// The object that acts as the tally sheet
let keyCounts = {};

/**
 * eventHandler function
 * Captures keystrokes and applies dynamic CSS updates.
 */
function eventHandler(event) {
    // Capture the key and convert to lowercase for consistency
    let key = event.key.toLowerCase();

    // Update the tally object
    if (keyCounts[key]) {
        keyCounts[key]++;
    } else {
        keyCounts[key] = 1;
    }

    /**
     * The For-Loop
     * This loop iterates through every character in the object and 
     * displays the count to the console.
     */
    console.clear(); 
    console.log("%c--- Character Audit Log ---", "font-weight: bold; color: #1e3a8a;");
    for (let char in keyCounts) {
        console.log("Key: '" + char + "' | Typed: " + keyCounts[char] + " times");
    }

    // --- 'S' Trigger: Background Gradient & Glassmorphism ---
    if (key === 's' && keyCounts['s'] === 5) {
        // Update the background to the deep Navy/Green gradient
        document.body.style.setProperty(
            "background-image", 
            "linear-gradient(135deg, #0c0e1a, #071a14)", 
            "important"
        );
        
        let article = document.querySelector("article");
        if (article) {
            // Transform the white box into a transparent "Glass" card
            article.style.setProperty("background", "rgba(255, 255, 255, 0.15)", "important");
            article.style.setProperty("backdrop-filter", "blur(8px)", "important");
            
            // Text turns Orange to contrast the dark background
            article.style.setProperty("color", "orange", "important");
        }
        console.log("Trigger 'S' Active: Glass effect applied with Orange text.");
    }

    // --- 'C' Trigger: Heart Note (First Letter Detail) ---
    if (key === 'c' && keyCounts['c'] === 5) {
        // Inject a CSS rule to make the first letter of each paragraph forest green (#00763b)
        let style = document.createElement('style');
        style.innerHTML = "article p::first-letter { color: #00763b !important; }";
        document.head.appendChild(style);
        
        console.log("Trigger 'C' Active: Forest Green first letters applied.");
    }

    // --- 'E' Trigger: Emphasis (Header Accents) ---
    if (key === 'e' && keyCounts['e'] === 5) {
        let headers = document.querySelectorAll("h1, h2");
        // Using the deep purple hex code (#390f7d)
        headers.forEach(h => h.style.setProperty("color", "#390f7d", "important"));
        console.log("Trigger 'E' Active: Deep Purple header accents applied.");
    }

    // --- 'N' Trigger: Underline and Italics Highlight ---
    if (key === 'n' && keyCounts['n'] === 5) {
        // 1. Change all Underlined text (<u>) to Yellow-Green (#adff2f)
        let underlines = document.querySelectorAll("u");
        underlines.forEach(u => u.style.setProperty("color", "#adff2f", "important"));

        // 2. Change all Italics (<i> or <em>) to Slate Gray (#3d414f)
        let italics = document.querySelectorAll("i, em");
        italics.forEach(i => i.style.setProperty("color", "#3d414f", "important"));

        console.log("Trigger 'N' Active: Underlines (Yellow-Green) and Italics (Slate Gray) highlighted.");
    }

    // --- 'T' Trigger: Texture & Border Accents ---
    if (key === 't' && keyCounts['t'] === 5) {
        // Change all <strong> tags to Red
        let boldTags = document.querySelectorAll("strong");
        boldTags.forEach(s => s.style.setProperty("color", "red", "important"));

        let article = document.querySelector("article");
        if (article) {
            // Adds a subtle glow around the article box
            article.style.setProperty("box-shadow", "0 0 30px rgba(0, 212, 255, 0.3)", "important");
            
            // Border changes to Grey as specified
            article.style.setProperty("border-left", "6px solid grey", "important");
        }
        console.log("Trigger 'T' Active: Red bold tags and Grey border applied.");
    }
}

// Attach the listener to the window using the eventHandler function
window.addEventListener("keyup", eventHandler);