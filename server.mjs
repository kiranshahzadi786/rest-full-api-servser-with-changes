
import express from 'express'
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors())


const port =process.env.PORT|| 3000

let user = []

//generate random number from 1 to 10000000000

function randomNumber(){
  return Math.floor(Math.random()*10000000000)
}

app.post("/user", (req, res) =>{

  console.log(req.body)
let newUser = {
  id: randomNumber(),
  fullname : req.body.fullname,
    username:req.body.username,
    password:req.body.password,

}


 user.push (newUser)

res.send("user is created")

})

app.get("/user/:userId", (req, res) =>{
    let userId = req.params.userId;
    let isFound = false
    for(let i=0; i < users.length; i++){
      if(users[i].id == userId){
        res.send(users[i])
        isFound = true
        break;
      }
    }
    if (!isFound){
      res.send("user is not found")
  }
    })
    app.get("/users", (req, res) =>{
      res.send( users )
      
      })

    app.put("/user/:userId", (req, res) =>{ //get all user
        res.send(" your user is modified ")
        let userId = req.params.userId;
    let userIndex = -1
    for(let i=0; i < users.length; i++){
      if(users[i].id == userId){
        userIndex = i
        break;
      }
    }
    if(userIndex== -1){
      res.send("user not found")
    }
    else{
     if(req.body.fullname) {
      users[userIndex].fullname = req.body.fullname
    }
     if(req.body.username){
      users[userIndex].username = req.body.username
    }
     if(req.body.password) {
      users[userIndex].password = req.body.password
    }
    res.send(users[userIndex])
    }
        })

        app.delete("/user/:userId", (req, res) =>{
          let userIndex = -1
    for(let i=0; i < users.length; i++){
      if(users[i].id == userId){
        userIndex = i
        break;
      }
    }
    for(let i=0; i < users.length; i++){
      if(users[i].id == userId){
        userIndex = i
        break;
      }
      else{
        users.splice(userIndex,1)
        users = []
        res.send("All users are deleted")

        
        res.send(" your user is deleted ")
      }
    }
          
          
          
          })
          app.delete("/users", (req, res) =>{
            res.send(" your user is modified ")
            
            })

app.get('/', (req, res) => {
    console.log("aik request  server pai ai")
  res.send('Hello World!')
})

app.get('/profile', (req, res) => {
    console.log("aik request  server pai ai")
  res.send('this is a profile!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})