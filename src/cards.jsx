
import React, { Component } from 'react'
import './card.css'
import axios from 'axios';
import { Container, Row, Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';


class Cards extends Component {

    state = {
        users : [],
        /* newUsers : {
            name : '',
            designation: '',
            salary : '',
            
        },

        editUsers: {
            id: '',
            name : '',
            designation: '',
            salary : '',
            
        }, */
            id: 0,
            index: 0,
            name : '',
            designation: '',
            salary : '',

        newModal: false,
        editModal: false
            
    }

    componentWillMount() {
        this._refreshUsers();
    }

    toggleNewModal() {
        this.setState({
            newModal : ! this.state.newModal
        })
    }

    toggleEditModal() {
        this.setState({
            editModal : ! this.state.editModal
        })
    }

    addUsers = () => {
        //axios.post('http://localhost:3005/users', this.state.newUsers).then((response => {
            let {name, designation, salary} = this.state;

            this.setState({
              users: this.state.users.concat({id: this.state.users.length + 1, name, designation, salary} )
            }, () => {
              this.setState({
               
                newModal : false,
                
                    name : '',
                    designation: '',
                    salary : '',
                    
                
            })
            })
           

            
        //}))
    }


    updateUsers = () => {
        let {name, designation, salary, id, index} = this.state

        //axios.put('http://localhost:3005/users/' + this.state.editUsers.id, {name, designation, salary}).then((response) => {
            this._refreshUsers();

            let users = this.state.users
            users[index].name = name
            users[index].designation = designation
            users[index].salary = salary
            this.setState({
               users,
              newModal : false,
              
                  name : '',
                  designation: '',
                  salary : '',
                  
              
          })
        //} )
    }


    editBook(id, name, designation, salary, index) {
        this.setState({
           id, name, designation, salary, index,  newModal: ! this.state.newModal
        });
      }


      deleteBook(index) {
        // //axios.delete('http://localhost:3005/users/' + id).then((response) => {
        //   this._refreshUsers();
        // });
        this.setState({
          users : this.state.users.filter((d, i) => i !== index)
        })
      }


      _refreshUsers() {
        axios.get('http://localhost:3005/users').then((response) => {
            this.setState({
                users : response.data
            })
        })
    }

render() {

   

    console.log(this.state.users)
    
    return (


<div class="container-fluid">

<h5 className="my-3"><b>EMPLOYEE DETAILS</b> <br></br> <Button color="primary" className="mx-4 mt-4" onClick={this.toggleNewModal.bind(this)}>Add User</Button></h5>

    <div class="row">

        <div class="col">
        <ul>
            <Container>
                <Row xs="1" sm="2" md="3">
                    {this.state.users.map((user, i) => 
         
          
         

         <li key={i}>
            <div class="card" >
                <div class="card-body" >
                        <h6 class="card-title" >Name : {user.name} </h6>
                        <h6 class="card-text">UserName : {user.designation} </h6>
                        <h6 class="card-text"> Salary : {user.salary}</h6>
                        <Button color="success" size="sm" className="btnaling" onClick={this.editBook.bind(this, user.id, user.name, user.designation, user.salary, i )}>Edit</Button>
                        <Button color="danger" size="sm"  className="btnaling" onClick={this.deleteBook.bind(this, i)}>Delete</Button>
                </div>
            </div>
        </li> 

    )}
                </Row>
            </Container>
        </ul>
        </div>

    </div>

    <Modal isOpen={this.state.newModal} >
        <ModalHeader > Add a new User</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input id="name" value={this.state.name} onChange={(e) => {


              this.setState({ name: e.target.value });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="desingnation">Desingnation</Label>
            <Input id="desingnation" value={this.state.designation} onChange={(e) => {
              

              this.setState({ designation : e.target.value });
            }} />
          </FormGroup>

          <FormGroup>
            <Label for="salary">Salary</Label>
            <Input id="salary" value={this.state.salary} onChange={(e) => {
              

              this.setState({ salary : e.target.value });
            }} />
          </FormGroup>



        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={ this.state.id == 0 ?   this.addUsers : this.updateUsers}>{this.state.id == 0 ? "Add User" : "Update User"}</Button>{' '}
          <Button color="secondary" onClick={this.toggleNewModal.bind(this)}>Cancel</Button>
        </ModalFooter>
    </Modal>


    


</div>
    
)}}

export default Cards




