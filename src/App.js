//import Hola from "./components/Hola";
// import Contador from "./components/Contador";
import Cursos from "./components/Cursos";
import react, {useState} from "react";
const lista_Cursos =[
  {id:1, curso:'Aprendiendo Laravel'},
  {id:2, curso:'Curso de Doker para principiantes'},
  {id:3, curso:'Milton Diaz'},
  {id:4, curso:'Segundo'},
  ];


function App() {

  const [cursos, setCursos]= useState(lista_Cursos);
  const eliminarCurso = (id) =>{
    console.log("eliminado");
    const nuevosCursos = cursos.filter(item => {
      return item.id!==id;
    })
    setCursos(nuevosCursos);
      }
  return (
    <div>
{     <h1>Hola mundo REACT</h1> 
/*       <Hola mensaje="Este es un mensaje" pie="La fecha es 2022-feb-07"/>
      <Hola mensaje="Esmeraldas" pie="Es una ciudad hermosa"/>
      <Hola mensaje="Ecuador" pie="País Multicultural"/> */} 
{/* <Contador/> */}
<Cursos cursos={cursos} onEliminarCurso={eliminarCurso}/>
    </div>
  );
}

export default App;