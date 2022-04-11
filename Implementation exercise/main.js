window.addEventListener('load', ()=>{
    const form  = document.querySelector('#Formato-de-tareas');
    const input  = document.querySelector('#Entrada');
    const List  = document.querySelector('#Tareas');

    form.addEventListener('submit', (e) =>{
        e.preventDefault();//Evita que se refresque la página

        const task = input.value;
        if(!task){
            alert("Por favor ingrese una tarea");
            return;
        }
        else{
            console.log("Ingresado exitosamente");
        }

        const Elementos_Task = document.createElement("div");
        Elementos_Task.classList.add("Task");

        const Elementos_Task_content = document.createElement("div");
        Elementos_Task_content.classList.add("content");

        Elementos_Task.appendChild(Elementos_Task_content);

        const Elementos_Task_input = document.createElement("input");
        Elementos_Task_input.classList.add("text");
        Elementos_Task_input.type = "text";
        Elementos_Task_input.value = task;
        Elementos_Task_input.setAttribute("readonly", "readonly");

        Elementos_Task_content.appendChild(Elementos_Task_input);

        const Botones_Tareas = document.createElement("div");
        Botones_Tareas.classList.add("Buttons");

        const Edit_button = document.createElement("button");
        Edit_button.classList.add("Edit");
        Edit_button.innerHTML = "Edit";

        const Delete_button = document.createElement("button");
        Delete_button.classList.add("Delete");
        Delete_button.innerHTML = "Delete";

        Botones_Tareas.appendChild(Edit_button);
        Botones_Tareas.appendChild(Delete_button);
        Elementos_Task.appendChild(Botones_Tareas);
        List  = appendChild(Elementos_Task);

        input.value ="";

        Edit_button.addEventListener('click', ()=>{
            if(Edit_button.innerText.toLowerCase()=="edit"){
                Elementos_Task_input.removeAttribute("readonly");
                Elementos_Task_input.focus();
                Edit_button.innerText = "Save";
            }
            else{
                Elementos_Task_input.removeAttribute("readonly", "readonly");
                Edit_button.innerText = "Edit";
            }
        });

        Delete_button.addEventListener('click', ()=>{
            List  = removeChild(Elementos_Task);
        });
    });
});