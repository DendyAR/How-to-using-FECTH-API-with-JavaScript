var btn = document.getElementById("btn").addEventListener("click", getPost);
var temp = 0;
var div = document.getElementById("tableDiv");

function getPost() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((user) => {
      for (let i = 0; i < 1; i++) {
        div.innerHTML += `
        <div class="row">
            <table class="table table-bordered">
                <tbody>
                    <tr>
                      <th scope="row">${user[temp].id}</th>
                      <td>${user[temp].name}</td>
                      <td>${user[temp].username}</td>
                      <td>${user[temp].email}</td>
                      <td>${user[temp].address.street},${user[temp].address.suite},${user[temp].address.city},${user[temp].address.zipcode},${user[temp].address.geo.lat},${user[temp].address.geo.lng}</td>
                      <td>${user[temp].phone}</td>
                      <td>${user[temp].website}</td>
                      <td>${user[temp].company.name},${user[temp].company.catchPhrase},${user[temp].company.bs}</td>
                    </tr>
                </tbody>
            </table>
        </div>
                `;
        temp = temp + 1;
      }
    });
}
