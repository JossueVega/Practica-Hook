import React from 'react'
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from 'react';
import {Estructura} from '../Formato/Estructura'

export default function Libros () {
        const {catalogo, agregar} = useContext(Estructura);
        return (
            <div className="Cartelera">
                <h4 style={{marginBottom:'5vmin' }}>Libros disponibles</h4>
                  {
                    <Table>
                    <thead>
                      <tr>
                        <th>Codigo</th>
                        <th>Titulo</th>
                        <th>Idioma</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>

                      {
                        catalogo.map((l,i)=>{
                        
                        return(<tr key={i}>
                          <td>{l.codigo}</td>
                          <td>{l.titulo}</td>
                          <td>{l.idioma}</td>
                          <td>{<Button variant="dark" disabled={l.desactivado} onClick={()=>agregar(l)}>Agregar</Button>}</td>
                          </tr>)


                        })
                      }
                      

                    </tbody>
                    </Table>
                   
                  }
 
            </div>
        )
}