let userList = [
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
];

var app = new Vue({
      el: '#app',
      data(){
          return {
            // sort: userList,
            newUser: {
              id: userList.length + 1,
              name: '',
              login: '',
              password: ''
            }
          }
  },
  computed: {
    sort() {
      return userList;
    }
  },
  methods: {
    removeUser(id) {
      console.log(id);
      for (let i = 0; i < userList.length; i++) {
        if (userList[i].id == id) {
          userList.splice(i, 1);
          i--;
        }
      }

    },

    addNewUser() {
      console.log(this.newUser)
      userList.push(this.newUser)
        console.log("userList ",userList)
        this.newUser.name=""
        this.newUser.login=""
        this.newUser.password=""
    }
  }
})
