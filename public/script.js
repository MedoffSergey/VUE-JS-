let userList = [
    { id: 4, name: 'Admin', login: 'Admin', password:"qwe"},
    { id: 2, name: 'Igor', login: 'Amstel', password:"123"},
    { id: 5, name: 'Serega', login: 'MRG_Serejka', password:"12345"},
    { id: 6, name: 'Artur', login: 'Archi', password:"qwerty"},
    { id: 33, name: 'Elsa', login: 'Els@', password:"AdG4Q1q7"},
    { id: 9, name: 'Sanek', login: 'MRG_Sanek', password:"Sanekkk"},
    { id: 7, name: 'Serega', login: 'GREY', password:"3145Wqq1"},
    { id: 12, name: 'Irina', login: 'Beller', password:"qwerty"}
];


var app = new Vue({
  el: '#app',
  data: {
    sort: userList
  }
})
