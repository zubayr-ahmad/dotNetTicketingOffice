// get api for ticket details, parameter--> params:{id:val}
let ticket={
    subject:'For API testing',
    description:'some lorem ipsem',
    taskId:'#83j82j',
    createdDate:"date",
    startDate:"date",
    dueDate:"date",
    assignees:[
        {id:1,name:'zubair',email:'zubair@gmail.com'},
        {id:1,name:'zubair',email:'zubair@gmail.com'}],
    comments:[
        {text:'comment text',sentiment:-1,user:{id:1,name:"zubair"}},
        {text:'comment text02',sentiment:-1,user:{id:1,name:"zubair"}},
    ] 
};

// post api for add ticket, I will give following things baqi khudi dalni hain tunai database mai
let addTicket={
    subject:'For API testing',
    description:'some lorem ipsem',
    startDate:"date",
    dueDate:"date",
    selectedAssignees:['id1','id2','id3']
}

// get api for all users
let singleUser = {id:1,name:'Zubair Ahmad',email:'zubair@gmail.com'} //name mai firstName and lastName
// space k saath concatinate ker k bhej di