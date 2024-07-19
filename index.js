//1) import json_server

const jsonServer = require("json-server")


// 2) create json server

const inventoryServer = jsonServer.create()


// 3) create a connection to db.json. It uses a method named router

const router = jsonServer.router('db.json')

// 4) create a middleware

const middleware = jsonServer.defaults();

// 5) use this middleware 

inventoryServer.use(middleware)
inventoryServer.use(router)

const port = 5000;

inventoryServer.listen(port,()=>{
    console.log(`server is up and running in port ${port}`)
})