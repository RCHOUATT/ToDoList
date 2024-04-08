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
    const text = document.getElementById("text");
    const ul = document.getElementById("ul");
    const ajout = document.getElementById("ajout");
    const supp = this.querySelectorAll(".supp");
    const nouveau = document.getElementById("nouvelle");
    const right = document.getElementById("right")

    ajout.addEventListener("click", function(){
        const titlecontent = title.value.trim();
        const datecontent = date.value.trim();
        const textcontent =  text.value.trim();

        if (titlecontent !== "" ||  datecontent !== "" || textcontent !== "")
        {
            const addList = document.createElement("li");
            addList.classList.add("taches2");
            addList.innerHTML=`
            <input type="checkbox" class="select" name="select" value="select">
            <p class="tasktitle">${titlecontent}</p>
            <img src="../Img/favorite.png" alt="favorite" class="favorite"></img>`;
            ul.appendChild(addList);
            titlecontent.value= "";
            datecontent.value= "";
            textcontent.value= "";
        }
    })
    ul.addEventListener("click", function(event){
        if(event.target.classList.contains("deleteBtn")){
            event.target.parentElement.remove();
        }
    });
})