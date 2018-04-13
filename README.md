 # ZettaByte_Assignment
A Web App based on Nodejs converts a queryString into the JSON format.

## Requirements
Nodejs(v8.10.0)

Expressjs(^4.16.3)

Mongoose(^5.0.14)

## Working 
* first install the dependencies by "npm install".
* then start the server by "node server".
* then hit the api's made in the web app.
 
 ## For Example
#### get request on this api => 
               http://localhost:3000/api/users
               
#### response =>
               [
                {
                    "pictures": [
                        {
                            "_id": "5ad0a495da53b113b4122111",
                            "url": "ajhb/vfdb"
                        },
                        {
                            "_id": "5ad0a8bf37f17023e84f4f44",
                            "url": "kaskjh"
                        }
                    ],
                      "_id": "5ad0a495da53b113b4122110",
                      "name": "Himanshu",
                      "email": "him@gmail.com",
                      "mobile": 98745,
                      "gender": "male",
                      "__v": 0
                },
              {
                  "pictures": [
                      {
                          "_id": "5ad0a8eb37f17023e84f4f45",
                          "url": "bskdjj"
                      },
                      {
                          "_id": "5ad0a8f537f17023e84f4f46",
                          "url": "olpas/cb"
                      }
                  ],
                    "_id": "5ad0a4a5da53b113b4122112",
                    "name": "Alok",
                    "email": "Alok@gmail.com",
                    "mobile": 93445,
                    "gender": "male",
                    "__v": 0
              },
              {
                  "pictures": [
                      {
                          "_id": "5ad0a98237f17023e84f4f48",
                          "url": "likesachin"
                      },
                      {
                          "_id": "5ad0aa9615ca030cb032638c",
                          "url": "sachin/path"
                      },
                      {
                          "_id": "5ad0aaa315ca030cb032638d",
                          "url": "sachin"
                      },
                      {
                          "_id": "5ad0ae39cf3970040c2e1ce6",
                          "url": "luthrahim"
                      }
                  ],
                    "_id": "5ad0a98237f17023e84f4f47",
                    "name": "Sachin",
                    "email": "sach@gmail.com",
                    "mobile": 98146,
                    "gender": "male",
                    "__v": 0
              }
]
