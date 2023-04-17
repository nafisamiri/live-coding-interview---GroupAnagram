const groupAnagrams = (strs) => {
  const anagramMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const charCount = new Array(26).fill(0);
    for (let j = 0; j < word.length; j++) {
      const charCode = word.charCodeAt(j) - 97;
      charCount[charCode]++;
    }
    const key = charCount.join(',');
    if (anagramMap.has(key)) {
      anagramMap.get(key).push(word);
    } else {
      anagramMap.set(key, [word]);
    }
  }
  return Array.from(anagramMap.values());
};
