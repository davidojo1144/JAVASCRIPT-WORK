//Split an array into subarrays (chunks) of a specified size.

const chunkArray = (arr, size)=> {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}


console.log(chunkArray([1, 2, 3, 4, 5], 2));
console.log(chunkArray(["a", "b", "c", "d"], 3)); 