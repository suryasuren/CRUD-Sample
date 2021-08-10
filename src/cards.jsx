
import React, { Component } from 'react'
import './card.css'
import axios from 'axios';
import { Container, Row, Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';


class Cards extends Component {

    state = {
        users : [],
        newUsers : {
            name : '',
            designation: '',
            salary : '',
            
        },

        editUsers: {
            id: '',
            name : '',
            designation: '',
            salary : '',
            
        },

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

    addUsers() {
        axios.post('http://localhost:3005/users', this.state.newUsers).then((response => {
            let {users} = this.state;

            users.push(response.data);

            this.setState({
                users,
                newModal : false,
                newUsers : {
                    name : '',
                    designation: '',
                    salary : '',
                    
                }
            })
        }))
    }


    updateUsers() {
        let {name, designation, salary} = this.state.editUsers

        axios.put('http://localhost:3005/users/' + this.state.editUsers.id, {name, designation, salary}).then((response) => {
            this._refreshUsers();

            this.setState({
                
                editModal : false,
                editUsers : {
                    name : '',
                    designation: '',
                    salary : '',
                    
                }
            })
        } )
    }


    editBook(id, name, designation, salary) {
        this.setState({
          editUsers: { id, name, designation, salary }, editModal: ! this.state.editModal
        });
      }


      deleteBook(id) {
        axios.delete('http://localhost:3005/users/' + id).then((response) => {
          this._refreshUsers();
        });
      }


      _refreshUsers() {
        axios.get('http://localhost:3005/users').then((response) => {
            this.setState({
                users : response.data
            })
        })
    }

render() {

  
    //const {users} = this.state

    let userList = this.state.users.map((user) => {
        return (   
          
         

         <li>
            <div class="card" key={user.id}>
                <div class="card-body" key={user.id} >
                        <h6 class="card-title" >Name : {user.name} </h6>
                        <h6 class="card-text">UserName : {user.designation} </h6>
                        <h6 class="card-text"> Salary : {user.salary}</h6>
                        <Button color="success" size="sm" className="btnaling" onClick={this.editBook.bind(this, user.id, user.name, user.designation, user.salary )}>Edit</Button>
                        <Button color="danger" size="sm"  className="btnaling" onClick={this.deleteBook.bind(this, user.id)}>Delete</Button>
                </div>
            </div>
        </li> 

    )})
    
    return (


<div class="container-fluid">

<h5 className="my-3"><b>EMPLOYEE DETAILS</b> <br></br> <Button color="primary" className="mx-4 mt-4" onClick={this.toggleNewModal.bind(this)}>Add User</Button></h5>

    <div class="row">

        <div class="col">
        <ul>
            <Container>
                <Row xs="1" sm="2" md="3">
                    {userList}
                </Row>
            </Container>
        </ul>
        </div>

    </div>

    <Modal isOpen={this.state.newModal} toggle={this.toggleNewModal.bind(this)}>
        <ModalHeader toggle={this.toggleNewModal.bind(this)}>Add a new User</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input id="name" value={this.state.newUsers.name} onChange={(e) => {
              let { newUsers } = this.state;

              newUsers.name = e.target.value;

              this.setState({ newUsers });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="desingnation">Desingnation</Label>
            <Input id="desingnation" value={this.state.newUsers.designation} onChange={(e) => {
              let { newUsers } = this.state;

              newUsers.designation = e.target.value;

              this.setState({ newUsers });
            }} />
          </FormGroup>

          <FormGroup>
            <Label for="salary">Salary</Label>
            <Input id="salary" value={this.state.newUsers.salary} onChange={(e) => {
              let { newUsers } = this.state;

              newUsers.salary = e.target.value;

              this.setState({ newUsers });
            }} />
          </FormGroup>



        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.addUsers.bind(this)}>Add User</Button>{' '}
          <Button color="secondary" onClick={this.toggleNewModal.bind(this)}>Cancel</Button>
        </ModalFooter>
    </Modal>


    <Modal isOpen={this.state.editModal} toggle={this.toggleEditModal.bind(this)}>
        <ModalHeader toggle={this.toggleEditModal.bind(this)}>Edit a new User</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input id="name" value={this.state.editUsers.name} onChange={(e) => {
              let { editUsers } = this.state;

              editUsers.name = e.target.value;

              this.setState({ editUsers });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="designation">Designation</Label>
            <Input id="designation" value={this.state.editUsers.designation} onChange={(e) => {
              let { editUsers } = this.state;

              editUsers.designation = e.target.value;

              this.setState({ editUsers });
            }} />
          </FormGroup>

          <FormGroup>
            <Label for="salary">Salary</Label>
            <Input id="salary" value={this.state.editUsers.salary} onChange={(e) => {
              let { editUsers } = this.state;

              editUsers.salary = e.target.value;

              this.setState({ editUsers });
            }} />
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.updateUsers.bind(this)}>Update Book</Button>{' '}
          <Button color="secondary" onClick={this.toggleEditModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>


</div>
    
)}}

export default Cards




