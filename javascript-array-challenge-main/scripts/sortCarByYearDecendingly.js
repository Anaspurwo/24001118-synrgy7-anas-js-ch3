function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  for insertionSort = ("year", cars.length) => {
    let key;
    let j;

      for (let i=1; i<cars.length; i++) {
        key=cars[i];
        j=i-1;

        while (j >= 0 && cars[j] > key) {
          cars[j+1] = cars[j];
          j = j-1;
        }
        cars[j+1]=key;
      }
  };

  insertionSort(cars, cars.length);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
