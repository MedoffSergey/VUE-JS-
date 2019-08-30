<template>

  <div class="">
    <a v-on:click="addNewUser()" >
      <img src="img/new-user.svg" width="40" height="40">
    </a>

    <p>
      <label>Name</label>
      <input type="text" v-model="newUser.name">
    </p>

    <p>
      <label>Login</label>
      <input type="text" v-model="newUser.login">
    </p>

    <p>
      <label>Password</label>
      <input type="password" v-model="newUser.password">
    </p>


    <table border=1>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Login</th>
        <th>Password</th>
        <th>Remove</th>
      </tr>
      <tr v-for="(user, index) in userList"
          :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.login}}</td>
        <td>{{ user.password}}</td>
        <td>
          <a v-on:click="removeUser(user.id)">
            <img src="img/cancel.svg" width="32" height="32">
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
  export default {
    name: 'HelloWorld',
    data(){
      return {
        userList: [
          { id: 1, name: 'Admin', login: 'Admin', password:"qwe"},
          { id: 2, name: 'Igor', login: 'Amstel', password:"123"},
          { id: 3, name: 'Serega', login: 'MRG_Serejka', password:"12345"},
          { id: 4, name: 'Artur', login: 'Archi', password:"qwerty"},
          { id: 5, name: 'Elsa', login: 'Els@', password:"AdG4Q1q7"},
          { id: 6, name: 'Sanek', login: 'MRG_Sanek', password:"Sanekkk"},
          { id: 7, name: 'Serega', login: 'GREY', password:"3145Wqq1"},
          { id: 8, name: 'Irina', login: 'Beller', password:"qwerty"},
          { id: 9, name: 'Admin', login: 'Admin', password:"qwe"},
          { id: 10, name: 'Igor', login: 'Amstel', password:"123"},
          { id: 11, name: 'Serega', login: 'MRG_Serejka', password:"12345"},
          { id: 12, name: 'Artur', login: 'Archi', password:"qwerty"},
          { id: 13, name: 'Elsa', login: 'Els@', password:"AdG4Q1q7"},
          { id: 14, name: 'Sanek', login: 'MRG_Sanek', password:"Sanekkk"},
          { id: 15, name: 'Serega', login: 'GREY', password:"3145Wqq1"},
          { id: 16, name: 'Irina', login: 'Beller', password:"qwerty"}
        ],
        newUser: {
          name: '',
          login: '',
          password: ''
        }
      }
    },

    methods: {
      removeUser(id) {

        for (let i = 0; i < this.userList.length; i++) {
          if (this.userList[i].id === id) {
            this.userList.splice(i, 1);
          }
        }

      },

      addNewUser() {

        this.userList.push({
          id: this.userList.length + 1,
          name: this.newUser.name,
          login: this.newUser.login,
          password: this.newUser.password,
        });

        this.newUser.name="";
        this.newUser.login="";
        this.newUser.password="";
      }
    }
  }
</script>
