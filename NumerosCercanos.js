function findClosestSum(arr, x) {
    // ordenar el arreglo en orden ascendente
    arr.sort((a, b) => a - b);
  
    // variables para almacenar los números más cercanos y la suma más cercana
    let closestSum = Infinity;
    let closestNum1, closestNum2;
  
    // iterar sobre el arreglo y encontrar la suma más cercana a x
    for (let i = 0; i < arr.length - 1; i++) {
      let left = i + 1;
      let right = arr.length - 1;
  
      while (left < right) {
        let sum = arr[i] + arr[left] + arr[right];
        let diff = Math.abs(x - sum);
  
        if (diff < Math.abs(x - closestSum)) {
          closestSum = sum;
          closestNum1 = arr[i];
          closestNum2 = arr[left] + arr[right];
        }
  
        if (sum < x) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    // devolver los números más cercanos
    return [closestNum1, closestNum2];
  }
  