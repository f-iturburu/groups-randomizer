import { students } from "./students.js";
import { requirements } from "./requirements.js";

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
  const requirementsCopy = [...requirements];
  resetGroupContainers();

  for (let j = 0; j < groupContainers.length; j++) {
    for (let i = 0; i < students.length; i++) {
      const studentsRng = Math.floor(Math.random() * studentsCopy.length);

      const requirementsRng = Math.floor(
        Math.random() * requirementsCopy.length
      );

      groupContainers[j].innerHTML += `<h5>${studentsCopy[studentsRng]}</h5>`;
      studentsCopy.splice(studentsRng, 1);

      if (studentsCopy.length % 5 == 0 && i !== 0) {
        groupContainers[
          j
        ].innerHTML += `<h4 class="fw-bold">Tema: ${requirementsCopy[requirementsRng]}</h4>`;
        requirementsCopy.splice(requirementsRng, 1);
        j++;
      }
    }
  }
};

const raffleButton = document.getElementById("raffle");
raffleButton.addEventListener("click", renderGroups);

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetGroupContainers);
