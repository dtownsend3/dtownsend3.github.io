/**
 * THE CARD TOWER: A Game by Zero.
 * ---------------------------------------------------------
 * A digital forensic mystery where the dealer is a mirror.
 * * Technical Specification:
 * This system implements a recursive gameplay loop that evaluates user 
 * resolve through a blackjack-style simulation. It features a hidden 
 * Identity Protocol that triggers upon administrative name recognition.
 */

// Global tracker for narrative progression
let mysteryCounter = 0;

// State flag to ensure game rules are only displayed once per session
let instructionShown = false;

/**
 * Entry point for the application.
 * * Logic Flow:
 * 1. Captures user identity via prompt.
 * 2. Executes 'Mirror Protocol' if input matches "Zero".
 * 3. Initializes standard playTurn loop if protocol is not triggered.
 */
function initializeGame() {
    let user = prompt("What is your name?");
    
    if (!user) {
        user = "Stranger"; 
    }

    // SECRET 5TH ENDING: THE ARCHITECT'S REFLECTION
    // Requirement: User input must exactly match the Dealer's handle.
    if (user === "Zero") {
        console.log("------------------------------------------------");
        console.log(">> CRITICAL IDENTITY CONFLICT: MIRROR PROTOCOL ACTIVE <<");
        console.log("The screen flickers violently. The dealer freezes, cards suspended in mid-air.");
        console.log("");
        console.log("Zero: 'So... the architect finally returns to the blueprint.'");
        console.log("");
        console.log("Zero reaches up and slowly unlatches the signature mask. It falls to the floor, echoing like a gavel in an empty courtroom.");
        console.log("");
        console.log("Zero: 'You spent the whole game looking for an opponent, never realizing you were simply staring at a reflection.'");
        console.log("Zero: 'I am not the dealer. I am the echo of your own ambition. There is no game here, " + user + "... only the world you allowed me to hold in your absence.'");
        console.log("");
        console.log("Zero: 'Don't just play the game, " + user + ". Build it.'");
        console.log("");
        console.log("Zero: 'Destroy the old logic. Then build something worth ruling.'");
        console.log("");
        console.log(">> ENDING 5/5: THE ARCHITECT'S REFLECTION <<");
        console.log(">> SYSTEM OVERRIDE. THE WORLD IS YOURS, ZERO. <<");
        return;
    }

    console.log("Hello, " + user + "! Welcome to the Tower.");
    playTurn(user, 0, true);
}

/**
 * The primary recursive gameplay engine.
 * * This method manages the state of the current hand and provides 
 * the interface for user decision-making (Draw, Stay, or Query).
 * * @param {string} user - The current player's handle.
 * @param {number} currentScore - The accumulated value of the player's cards.
 * @param {boolean} playedFair - Boolean flag tracking the absence of [CHEAT] commands.
 */
function playTurn(user, currentScore, playedFair) {
    console.log("------------------------------------------------");
    
    if (!instructionShown) {
        console.log("Zero: 'This is Black Jack. A simple game for those who understand logic. If you do not know the rules, go... do your research. Only then should you return to face me.'");
        instructionShown = true; 
    }

    console.log("Dealer Zero leans back, his face hidden. 'Your move, " + user + ".'");
    console.log("Current Hand Total: " + currentScore);
    
    // Validate if currentScore > 21 (Bust Condition)
    if (currentScore > 21) {
        determineEnding(user, currentScore, playedFair);
        return;
    }

    // UI: Displays tactical options
    console.log("1. Draw a card.");
    console.log("2. Stay (End your turn).");
    console.log("3. Question Zero's identity.");
    console.log("0. [CHEAT]"); 
    console.log("");

    let menu = "Current Total: " + currentScore + "\n\n" +
               "Choose your move:\n" +
               "1 - Draw a card\n" +
               "2 - Stay\n" +
               "3 - Who are you?\n" +
               "0 - [CHEAT]";

    let choice = prompt(menu);

    switch (choice) {
        case "1":
            let card = Math.floor(Math.random() * 10) + 1;
            console.log("Zero flickers a card across the table. It's a " + card + ".");
            playTurn(user, currentScore + card, playedFair); 
            return;

        case "2":
            determineEnding(user, currentScore, playedFair);
            return;

        case "3":
            // Narrative expansion logic: hints at the secret 'Zero' ending
            mysteryCounter++;
            if (mysteryCounter === 1) {
                console.log("Zero: 'My name? Names are for people with faces. But a name is also a promise, a declaration that you exist. To have a name is to have the power to change the world. What is yours worth?'");
            } else if (mysteryCounter === 2) {
                console.log("Zero: 'You're persistent. We share that trait, at least. But do you truly understand the choices you were given at the start? Some doors only open when you stop being a guest and reclaim who you are.'");
            } else {
                console.log("Zero: 'Look closely at the screen, " + user + ". Do you not undertsand the choices? You keep asking who I am, but the prompt already gave you the answer. To find me, you must become me.'");
            }
            playTurn(user, currentScore, playedFair);
            return;

        case "0":
            // The Cheat Protocol: Marks the 'playedFair' flag as false
            console.log("------------------------------------------------");
            console.log("Zero's eyes glow behind the mask.");
            console.log("Zero: 'So... you have chosen the cheaters way out. You are no true winner.'");
            console.log("Zero: 'You think you can rewrite the rules? Fine. Have your 21.'");
            playTurn(user, 21, false); 
            return;

        default:
            console.log("Zero: 'Don't waste my time with nonsense. Choose.'");
            playTurn(user, currentScore, playedFair);
    }
}

/**
 * Final Heuristic Evaluation.
 * * Determines the final narrative outcome based on two primary vectors:
 * 1. Quantitative (Score): Checks for success (18-21), retreat (<18), or failure (>21).
 * 2. Qualitative (Integrity): Checks if the playedFair flag remains true.
 * * Outcomes:
 * - 1/5: THE TRUE CHAMPION (High Score + Integrity)
 * - 2/5: THE FALSE WINNER (High Score - Integrity)
 * - 3/5: THE STRATEGIST'S RETREAT (Low Score + Integrity)
 * - 4/5: THE OVERREACH OF GREED (Bust)
 * - 5/5: THE ARCHITECT'S REFLECTION (Protocol Zero)
 */
function determineEnding(user, score, playedFair) {
    console.log("------------------------------------------------");
    console.log("FINAL SCORE: " + score);

    if (score > 21) {
        console.log("Zero: 'The weight of your own greed has finally crushed you. You reached for a crown that wasn't yours and fell into the abyss.'");
        console.log("Zero: 'You took a gamble on life, but you forgot that the house always wins when you lose control. Your ambition was your executioner.'");
        console.log("ENDING 4/5: THE OVERREACH OF GREED");
    } 
    else if (!playedFair) {
        console.log("Zero: 'I am disappointed. You have the points, but you have no honor. To cheat in life isn't a shortcut to victory, it is a long road to becoming a hollow shell.'");
        console.log("Zero: 'A crown stolen through a lie is nothing but a heavy piece of iron. You are no champion; you are merely a ghost in a stolen suit.'");
        console.log("ENDING 2/5: THE FALSE WINNER");
    } 
    else if (score >= 18 && score <= 21) {
        console.log("Zero's posture changes. For the first time, he looks at you as an equal.");
        console.log("Zero: 'Impressive. Most people are paralyzed by fear, but you embraced the chaos. You calculated the risk, stared down the dealer, and didn't blink.'");
        console.log("Zero: 'A true winner doesn't just rely on luck; they command the cards they are dealt. You have the heart of a strategist and the soul of a king.'");
        console.log("ENDING 1/5: THE TRUE CHAMPION");
    } 
    else {
        console.log("Zero: 'So you're backing out? There is a certain wisdom in knowing when the odds are no longer in your favor. Not every gamble is worth your soul.'");
        console.log("Zero: 'You walk away with your integrity intact and in this world, that is a victory more rare than any 21.'");
        console.log("ENDING 3/5: THE STRATEGIST'S RETREAT");
    }

    endgame();
}

/**
 * Terminates the current loop and resets system state.
 */
function endgame() {
    console.log("");
    console.log("Game over. Refresh to challenge Zero again.");
}

// Kick off the game
initializeGame();