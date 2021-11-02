import React, {createContext, useState} from 'react'
export const Estructura = createContext();

const Libreria = (props)=>{
  const [lista,setlista]= useState([]);
  const [catalogo,setcatalogo]= useState([
    {codigo:1,titulo:"Programación", idioma:'ESP', desactivado:false},
    {codigo:2,titulo:"Aprende Python", idioma:'ESP',desactivado:false},     
    {codigo:3,titulo:"Precálculo", idioma:'ESP',desactivado:false},
    {codigo:4,titulo:"Ingenieria De Software", idioma:'ESP',desactivado:false}
  ]); 

  const  agregar=(libro)=>{
      var seleccionar= catalogo;
      
      var index= seleccionar.findIndex((element)=>element.codigo===libro.codigo);
      //alert(index)
      seleccionar[index].desactivado=true;
  
      var buscar =[...lista,libro];
      buscar= buscar.sort((a,b)=>a.codigo>b.codigo)
  
      setlista(buscar);
      setcatalogo(seleccionar);
    }
       
  const  eliminar=(libro)=>{
      var seleccionar= catalogo;    
      var index= seleccionar.findIndex((element)=>element.codigo===libro.codigo);
      //alert(index)
      seleccionar[index].desactivado=false;
  
      var buscar= lista.filter(c=>c.codigo!==libro.codigo)
      setlista(buscar);
      setcatalogo(seleccionar);    
    }  

    return(
        <Estructura.Provider
            value={{
                catalogo,
                lista,
                eliminar,
                agregar
            }}>
                {props.children}

        </Estructura.Provider>
    );
}

export default Libreria;