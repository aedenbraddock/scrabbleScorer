const score = (word) => {
    const scoreGroups = {
        1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
        2: ['d', 'g'],
        3: ['b', 'c', 'm', 'p'],
        4: ['f', 'h', 'v', 'w', 'y'],
        5: ['k'],
        8: ['j', 'x'],
        10: ['q', 'z']
        
    };

    const points = {};

    for (const [score, letters] of Object.entries(scoreGroups)) {
        letters.forEach(letter => {
            points[letter] = parseInt(score);
        });
    }

    const letters = word.toLowerCase().split('');
    let totalScore = 0;
  
  // test letter output  
  // console.log(letters);

  letters.forEach(letter => {
    totalScore += points[letter] || 0;
  });

  console.log(`The letters of ${word} are: ${letters}`);

  console.log(`Your total score is: ${totalScore}`);

  return totalScore;

};

// Example
score('quirky');  // Outputs 22
