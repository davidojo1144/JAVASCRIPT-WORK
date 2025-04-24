function sortCardRanks(cards) {
    // Step 1: Define card rank mapping
    const rankOrder = {
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '10': 10,
      'Jack': 11,
      'Queen': 12,
      'King': 13,
      'Ace': 14
    };
    // Step 2: Normalize all card values to strings
    const normalized = cards.map(card => card.toString());
  
    // Step 3: Sort based on rankOrder
    normalized.sort((a, b) => rankOrder[a] - rankOrder[b]);
  
    // Step 4: Return sorted array
    return normalized;
  }
  
  // Example usage:
  const cards = ['Jack', 8, 2, 2, 6, 'King', 5, 3, 'Queen', 'King', 'Queen'];
  const sortedCards = sortCardRanks(cards);
  console.log(sortedCards);