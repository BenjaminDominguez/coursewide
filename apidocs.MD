# Documentation for API 
### 3 user classes
There are three user classes defined: User, Teacher, and Student.

Teacher and Student have a one-to-one relationship between user, defined with the **is_student** and **is_teacher** attributes. There are create methods within the Viewsets to handle the json requests appropriately. For example, if a JSON request is made to create a new user, one would have to send 

    {
        "user": {
            "username": "bendominguez011",
            "password": "password",
            "is_student": true,
            ....
        }
    }

