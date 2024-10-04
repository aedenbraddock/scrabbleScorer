# scrabbleScorer

// Word Scoring Function

This JavaScript code defines a function called `score` that calculates the point value of a given word based on a predefined scoring system.

**How it Works:**

1. **Score Groups:** The function starts by defining an object called `scoreGroups`, which maps numerical scores to sets of letters. For example, letters in group 1 have a score of 1, letters in group 2 have a score of 2, and so on.
2. **Points Dictionary:** It then creates an empty object called `points` that will store the letter scores.
3. **Populating Points:** The code iterates through each score group and its corresponding letters in the `scoreGroups` object. For each letter, it adds the letter to the `points` dictionary with its corresponding score value. 
4. **Word Input:** The function takes a word as input (case-insensitive). It converts the word to lowercase and splits it into an array of individual letters.
5. **Calculating Total Score:**  The code iterates through each letter in the word. For each letter, it checks if the letter exists as a key in the `points` dictionary. If it does, the corresponding score is added to the `totalScore`. If the letter is not found (e.g., punctuation), 0 points are added.
6. **Output:** Finally, the function prints the individual letters of the word and the calculated total score.

**Example Usage:**

```javascript
score('quirky');  // Outputs 22
