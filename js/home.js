let empPayrollList;
window.addEventListener('DOMContentLoaded', (event)=>{
  empPayrollList = getEmployeePayrollDataFromStorage();
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
  localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => { 
  return localStorage.getItem('EmployeePayrollList') ?
             JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
  const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                      "<th>Salary</th><th>Start Date</th><th>Actions</th>";
  let innerHtml = `${headerHtml}`;
  if(empPayrollList.length == 0) return;
  for (const empPayrollData of empPayrollList) {
      innerHtml = `${innerHtml}
   <tr>
    <td><img class="profile" alt="" src="${empPayrollData._profilePic}">
    </td>
    <td>${empPayrollData._name}</td>
    <td>${empPayrollData._gender}</td>
    <td>${getDeptHtml(empPayrollData._department)}</td>
    <td>${empPayrollData._salary}</td>
    <td>${stringifyDate(empPayrollData._startDate)}</td>
    <td>
<<<<<<< HEAD
=======
        <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete"
            src="../assets/icon/delete-black-18dp.svg">
        <img id="${empPayrollData._id}"  alt="edit" onclick="update(this)"
            src="../assets/icon/create-black-18dp.svg">
    </td>
      <td>
>>>>>>> 6ec8ca7509977288d2a5906c85917fbe64659737
        <img id="${empPayrollData._id}" onclick="remove(this)"
            src="../assets/icon/delete-black-18dp.svg"  alt="delete">
        <img id="${empPayrollData._id}" onclick="update(this)"
            src="../assets/icon/create-black-18dp.svg"  alt="edit">
      </td>
   </tr>
   `;
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
  let deptHtml = '';
  for (const dept of deptList) {
    deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
  }
  return deptHtml;
}

const remove = (node) => {
  let empPayrollData = empPayrollList.find(empData => empData._id == node._id);
  if(!empPayrollData) return;
  const index = empPayrollList
                  .map(empData => empData._id)
                  .indexOf(empPayrollData._id);
  empPayrollList.splice(index, 1);
  localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
  document.querySelector('.emp-count').textContent = empPayrollList.length;
  createInnerHtml();
<<<<<<< HEAD

}

const update = (node) => {
  console.log("in update");
  let empPayrollData = empPayrollList.find(empData => empData._id == node._id)
  if (!empPayrollData) return;
  localStorage.setItem('editEmp', JSON.stringify(empPayrollData))
  window.location.replace(site_properties.add_emp_payroll_pages); 
}

=======
}
  
>>>>>>> 6ec8ca7509977288d2a5906c85917fbe64659737
