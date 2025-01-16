function totalVolume(...boxes) {
  return boxes.reduce((total, box) => total + (box[0] * box[1] * box[2]), 0);
}
console.log(totalVolume([2,3,2], [6,6,7], [1,2,1]));  // ผลลัพธ์: 266
console.log(totalVolume([4,2,4], [3,3,3], [1,1,2], [2,1,1]));  // ผลลัพธ์: 63
console.log(totalVolume([2,2,2], [2,1,1]));  // ผลลัพธ์: 10
console.log(totalVolume([1,1,1]));  // ผลลัพธ์: 1
