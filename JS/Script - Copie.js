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

        if (titlecontent !== "")
        {
            const addList = document.createElement(li);
            addList.classList.add("taches2");
            addList.innerHTML=`
            <input type="checkbox" class="select" name="select" value="select">
            <p class="tasktitle">${titlecontent}</p>
            <img src="../Img/favorite.png" alt="favorite" class="favorite"></img>`;
            ul.appendChild("addList");
            titlecontent.value = "";
        }
    })

    ul.addEventListener("click", function(event){
        if(event.target.classList.contains("deleteBtn")){
            event.target.parentElement.remove();
        }
    });
    nouveau.addEventListener("click", function(){
        right.style.display = "none"
    })
    nouveau.addEventListener("click", function(){
        right.style.display = "block"
    })
})
/*<script>
            document.addEventListener("DOMContentLoaded", function(){
    const title = document.getElementById("title");
    const date = document.getElementById("date");
    const text = document.getElementById("text");
    const ajout = document.getElementById("ajout");
    const ul = document.getElementById("ul");



    ajout.addEventListener("click", function(){
        const titleContent= title.value.trim();
        const dateContent= date.value.trim();
        const textContent= text.value.trim();

        if(titleContent.value !== "", dateContent.value !== "", textContent.value !== ""){
            const addList= document.createElement("li");
            addList.classList.add("task");
            addList.innerHTML=`
                <span>${titleContent}</span>
                <span>${dateContent}</span>
                <span>${textContent}</span>
                <button class="deleteBtn">Supprimer</button>
            `;
            ul.appendChild(addList);
            titleContent.value= "";
            dateContent.value= "";
            textContent.value= "";
        }
    });
    ul.addEventListener("click", function(event){
        if(event.target.classList.contains("deleteBtn")){
            event.target.parentElement.remove();
        }
    });
});
        </script>*/
