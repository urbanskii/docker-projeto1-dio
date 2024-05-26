document.addEventListener("DOMContentLoaded", function() {
    fetch("/api/data")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("data-table");
            data.forEach(person => {  
                const row = document.createElement("tr");
                row.innerHTML = `<td>${person.nome}</td><td>${person.cidade}</td><td>${person.salario}</td>`;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});
