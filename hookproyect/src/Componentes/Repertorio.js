import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Estructura} from '../Formato/Estructura'
import {useContext} from 'react';


const Lista = () => {
  const {lista, eliminar} = useContext(Estructura);
    return ( 
        <div className="List">
                <h4 style={{marginBottom:'5vmin' }}>Solicitados</h4>
                  {
                    lista.length===0? 
                    <p>No tienes libros agregados</p>
                    :
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
                          lista.map((l,i)=>{
                          
                          return(<tr key={i}>
                            <td>{l.codigo}</td>
                            <td>{l.titulo}</td>
                            <td>{l.idioma}</td>
                            <td>{<Button variant="dark"  onClick={()=>eliminar(l)}>Eliminar</Button>}</td>
                            </tr>)
  
  
                          })
                        }
                        
  
                      </tbody>
                      </Table>}
                                               
        </div>
     );
} 
export default Lista;