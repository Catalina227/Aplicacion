import React from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, ForaGroup, ModalFooter, FormGroup, onClick} from 'reactstrap';

const data =[
{lista: 1, genero: "Terror", funcion: "4:30pm"},
{lista: 2, genero: "Romance", funcion: "7:00pm"},
{lista: 3, genero: "Aventura", funcion: "2:40pm"},
{lista: 4, genero: "Acción", funcion: "9:00pm"},
];

class App extends React.Component {
  state={
    data: data,
    form:{
      lista:'',
      genero:'',
      funcion:''
    },
    modalInsertar: false,
  };

  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value,
      }
    });
  }

  mostrarModalInsertar=()=>{
    this.setState({modalInsertar:true});
  }

  ocultarModalInsertar=()=>{
    this.setState({modalInsertar:false});
  }

  insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista, modalInsertar: false});
  }
  render(){
    return (
      <>
      <Container>
      <br/>
      <Button color="success" onClick={()=>this.mostrarModalInsertar()} >Insertar un nuevo genero de pelicula</Button>
      <br/><br/>

      <Table>
        <thead><tr><th>Lista</th>
        <th>Género</th>
        <th>Función</th>
        <th>Opciones</th></tr></thead>
        <tbody>
          {this.state.data.map((elemento)=>(
            <tr>
              <td>{elemento.lista}</td>
              <td>{elemento.genero}</td>
              <td>{elemento.funcion}</td>
              <td><Button color="info">Editar</Button>{"  "}
              <Button color="danger">Eliminar</Button></td>
            </tr>
           
           ))}
        </tbody>
      </Table>
      </Container>
       <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
              <div><h3>Insertar registro</h3>
              </div>
            </ModalHeader>

            <ModalBody>
              <FormGroup>
              <label>Lista</label>
              <input className="form-control"readOnly type="text" value={this.state.data.length+1}/>
              </FormGroup>

              <FormGroup>
                <label>Genero:</label>
                <input className="form-control" name="genero" type="text" onChange={this.handleChange} />
              </FormGroup>

              <FormGroup>
                <label>Funcion</label>
                <input className="form-control" name="funcion" type="text" onChange={this.handleChange}/>
              </FormGroup>
               </ModalBody>

              <ModalFooter>
                <Button color="primary"onClick={()=>this.insertar()}>Insertar</Button>
                <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
              </ModalFooter>

</Modal>
      </>)
     
  }
}
    


export default App;


