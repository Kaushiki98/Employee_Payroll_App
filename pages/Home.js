window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml = <tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
  </tr>
  const innerHtml = `${headerHtml}
  <tr>
    <td><img class="profile" alt="" src="../assert/profile-image/Ellipse -2.png">

    </td>
    <td>kaushiki</td>
    <td>Female</td>
    <td>
      <div class='dept-lable'>HR</div>
      <div class='dept-label'>Finance</div>
    </td>
    <td>300000</td>
    <td>1 Nov 2020</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete"
            src="../asserts/assets/icons/delete-black-18dp.svg">
        <img id="1" alt="edit" onclick="update(this)"
            src="../asserts/assets/icons/create-black-18dp.svg">
    </td>
  </tr>
  `;
  
document.querySelector("#table-display").innerHTML = innerHtml;
};