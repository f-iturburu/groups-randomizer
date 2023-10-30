import { students } from "./students.js";

document.addEventListener("DOMContentLoaded", () => {
  renderAllStudents();
});

const renderAllStudents = () => {
  const studentsContainer = document.getElementById("students");
  studentsContainer.innerHTML = "";
  students.map(
    (student) => (studentsContainer.innerHTML += `<h5> ${student}</h5>`)
  );
};

const groupContainers = document.getElementsByClassName("group");

const resetGroupContainers = () => {
  for (let i = 0; i < groupContainers.length; i++) {
    groupContainers[i].innerHTML = "";
  }
};

const renderGroups = () => {
  const studentsCopy = [...students];
  resetGroupContainers();

  for (let j = 0; j < groupContainers.length; j++) {
    for (let i = 0; i < students.length; i++) {
      const randomNumberGenerator = Math.floor(
        Math.random() * studentsCopy.length
      );
      groupContainers[
        j
      ].innerHTML += `<h5>${studentsCopy[randomNumberGenerator]}</h5>`;
      studentsCopy.splice(randomNumberGenerator, 1);

      if (studentsCopy.length % 5 == 0 && i !== 0) {
        j++;
      }
    }
  }
};

const raffleButton = document.getElementById("raffle");
raffleButton.addEventListener("click", renderGroups);

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetGroupContainers);
