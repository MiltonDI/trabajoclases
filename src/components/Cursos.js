import React from "react";

function cursos({cursos, onEliminarCurso}){
    const eliminarCursoHandler =(id) =>{
        console.log(id);
        onEliminarCurso(id);
    }
return(
    <div>
        <h2>Listado de cursos</h2>
        <hr/>
        <Cursoform/>
        <hr/>
        <ul>
            {
                cursos.map(item =>(
                    <li key={item.id}>{item.id} - {item.curso}
                    <button onClick={()=>eliminarCursoHandler(item.id)}>Eliminar Curso</button>
                    </li>
                ))
            }

        </ul>
    </div>
);
}
export default cursos;
