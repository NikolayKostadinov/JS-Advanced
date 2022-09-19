function modify(worker){
    if (worker.dizziness){
        worker.levelOfHydrated = (worker.levelOfHydrated | 0) + worker.weight * worker.experience * 0.1;
        worker.dizziness = false;
    }

    return worker;
}

console.log(modify({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));

  console.log(modify({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));
  console.log(modify({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  ));