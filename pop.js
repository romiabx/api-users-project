const loadBtn = document.getElementById("loadBtn");

const loading = document.getElementById("loading");

const error = document.getElementById("error");

const usersContainer = document.getElementById("usersContainer");


loadBtn.addEventListener("click", getUsers);



async function getUsers() {

   
    error.innerText = "";

    usersContainer.innerHTML = "";


    loading.style.display = "block";

    try {

      
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


     
        if (!response.ok) {

            throw new Error("دریافت اطلاعات با مشکل مواجه شد");

        }


       
        const users = await response.json();


      
        showUsers(users);

    }

    catch (err) {

        error.innerText = "خطا: " + err.message;

    }

    finally {
        loading.style.display = "none";

    }
}

function showUsers(users) {

    users.forEach(function(user) {

        usersContainer.innerHTML += `
        
            <div class="user-card">

                <h2>${user.name}</h2>

                <p>
                    <strong>Username:</strong>
                    ${user.username}
                </p>

                <p>
                    <strong>Email:</strong>
                    ${user.email}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${user.phone}
                </p>

                <p>
                    <strong>Website:</strong>
                    ${user.website}
                </p>

            </div>

        `;

    });

}