function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const text = document.querySelector('#inputs textarea').value;
      const input = JSON.parse(text);
      const restaurants = getRestaurants(input);

      const bestRestaurant = getBestRestaurant(restaurants);

      document.querySelector('#bestRestaurant p').textContent =
         `Name: ${bestRestaurant.name} ` +
         `Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} ` +
         `Best Salary: ${bestRestaurant.workers[0].salary.toFixed(2)}`;

      document.querySelector('#workers p').textContent =
         bestRestaurant.workers.map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');
   }

   function getRestaurants(input) {
      const restaurants = {};
      let counter = 0;
      input.forEach(record => {
         const [restaurant, workersList] = record.split(' - ');
         const workers = workersList.split(', ')
            .map(w => {
               [name, salary] = w.split(' ');
               return { name, salary: Number(salary) };
            });
         if (!restaurants.hasOwnProperty(restaurant)) {
            restaurants[restaurant] = { number: counter++, workers: [] };
         }

         restaurants[restaurant].workers = restaurants[restaurant].workers.concat(workers);
      });

      Object.values(restaurants).forEach(r => {
         r.workers.sort((a, b) => b.salary - a.salary);
         r.avgSalary = r.workers.reduce((p, q) => p + q.salary, 0) / r.workers.length;
      });
      return restaurants;
   }

   function getBestRestaurant(restaurants) {
      return Object.entries(restaurants)
      .map(r=>({name: r[0], avgSalary: r[1].avgSalary, workers: r[1].workers}))
      .sort((a, b) => b.avgSalary - a.avgSalary || a.number - b.number)[0];
   }
}

