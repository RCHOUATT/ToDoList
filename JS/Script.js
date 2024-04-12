function afficherModale(){
    const modale = document.getElementById('right1');

    modale.style.display = 'block';
}
function fermerModale(){
    const modale = document.getElementById('right1');

    modale.style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function(){
    const title = document.getElementById("title");
    const date = document.getElementById("date");
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");
    const ul = document.getElementById("ul");
    const ajout = document.getElementById("ajout");
    const supp = document.querySelectorAll(".supp");
    const corps = document.getElementById("corps");

    ajout.addEventListener("click", function(){
        const titlecontent = title.value.trim();
        const datecontent = date.value.trim();
        const textcontent =  text.value.trim();
        const selectcontent1 =  select1.value.trim();
        const selectcontent2 =  select2.value.trim();

        if (titlecontent !== "" ||  datecontent !== "" || textcontent !== "" || selectcontent1 != "" || selectcontent2 != "")
        {
            const addList = document.createElement("li");
            addList.innerHTML=`
            <div class="tacheinfo tacheinfocont" id="tacheinfo">
                <h2>${titlecontent}</h2>
                <div class="souscont" id="souscont">
                    <div class="sousleft"><p>${textcontent}</P></div>
                    <div class="sousright">
                        <div class="dateinfo" id="dateinfo">${datecontent}</div>
                        <div class="priorityinfo" id="priorityinfo">${selectcontent1}</div>
                        <div class="statusinfo" id="statusinfo">${selectcontent2}</div>
                        <button class="deleteBtn">X</button>
                    </div>
                </div>
            </div>`;
            ul.appendChild(addList);
            savetask();
            
            // Réinitialiser les valeurs des champs d'entrée
            title.value = "";
            date.value = "";
            text.value = "";
            select1.value = "";
            select2.value = "";
            fermerModale()
            bindDeleteButtons()
        }
    });

    function deleteTask(taskElement) {
        taskElement.remove();
        savetask();
    }

    function bindDeleteButtons() {
        const deleteButtons = document.querySelectorAll(".deleteBtn");
        deleteButtons.forEach(button => {
            button.addEventListener("click", function() {
                deleteTask(button.closest("li"));
            });
        });
    }

    function savetask(){
        localStorage.setItem('data', ul.innerHTML)
    }
    function gettask(){
        ul.innerHTML = localStorage.getItem('data');
        bindDeleteButtons();
    }
    gettask();
    
    // Fermer la modal et réinitialiser les valeurs des champs d'entrée
    // const fermer = document.getElementById("fermer");
    // fermer.addEventListener("click", function() {
    //     fermerModale();
    //     title.value = "";
    //     date.value = "";
    //     text.value = "";
    //     select1.value = "";
    //     select2.value = "";
    // });
});

