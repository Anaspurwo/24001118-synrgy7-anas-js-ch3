function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  const print = (cars, n) => {
    let i;
    for (i=0; i<cars.length; i++) {
      console.log (cars[i] + " ");
    }
  }

  const bubbleSort = (cars, n) => {
    let temp;
    for (let i=0; i<cars.length; i++) {
    for (let j=0; j<cars.length-i-1; j++) {
      if (cars[j] > cars[j+1]) {
        temp = cars[j];
        cars[j]=cars[j+1];
        cars[j+1]=temp;
        }
      }
    }
  }
}
console.log("year", cars)
bubbleSort(cars, cars.length);
print(cars, cars.length)

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;

