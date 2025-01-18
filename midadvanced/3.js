function bomb(sensors) {
    const v = 0.343; // Speed of sound in km/s
  
    // Extract sensor data
    const [sensor1, sensor2, sensor3] = sensors;
    const [x1, y1, t1] = sensor1;
    const [x2, y2, t2] = sensor2;
    const [x3, y3, t3] = sensor3;
  
    // Calculate distances
    const d1 = v * t1;
    const d2 = v * t2;
    const d3 = v * t3;
  
    // Function to calculate distance between two points
    function distance(x1, y1, x2, y2) {
      return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }
  
    // Brute force search for integer coordinates
    let minError = Infinity;
    let bestLocation = null;
  
    for (let xb = 0; xb <= 50; xb++) {
      for (let yb = 0; yb <= 50; yb++) {
        const error =
          Math.abs(distance(xb, yb, x1, y1) - d1) +
          Math.abs(distance(xb, yb, x2, y2) - d2) +
          Math.abs(distance(xb, yb, x3, y3) - d3);
  
        if (error < minError) {
          minError = error;
          bestLocation = [xb, yb];
        }
      }
    }
  
    return bestLocation;
  }
  
  // Examples
  console.log(bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]])); // [0, 25]
  console.log(bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]])); // [0, 0]
  console.log(bomb([[5, 8, 48.872], [12, 21, 35.107], [24, 0, 22.203]]));   // [21, 13]
  console.log(bomb([[18, 42, 35.558], [39, 16, 106.004], [7, 24, 32.202]])); // [8, 35]
  