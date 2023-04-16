IP Address	0.0.0.0/0 
------------------------------------------------------------------
GET all products:           http://localhost:5001/api/products/             GET        
GET a product:              http://localhost:5001/api/products/:id          GET
POST a product:             http://localhost:5001/api/products/             POST
                            {
                                "name": "",
                                "description": "",
                                "price": "",
                                "ImageURL": ""
                            }    

Update update a product:    http://localhost:5001/api/products/:id          PUT
Delete a product:           http://localhost:5001/api/products/:id          DELete
---------------------------------------------------------------------


Register user:              http://localhost:5001/api/users/Register        POST
                            {
                                "username": "",
                                "email": "",
                                "password": ""
                            }

Login a user:               http://localhost:5001/api/users/Login           POST
                            {
                                "email": "",
                                "password": ""
                            }
                        
Current user info:          http://localhost:5001/api/users/Current         GET
                            {
                                "email": "",
                                "password": ""
                            }
-------------------------------------------------------------------------

