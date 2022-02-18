import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    // properties
    name = 'Fernando';
    role = 'Associate';

    // method
    changeRole(event) { // the method received an event by default
        let newRole = event.target.value;
        this.role = newRole
    }


    // object address that contains 2 properties
    // city and state
    // @track allows for changing the properties values
    @track address = {
        city: "Melbourne",
        state: "Vic"
    }

    // function called to change the city when a new value is entered
    // this will now update the value of city because the object address
    // is decorated with @track
    changeAddress(event) {
        this.address.city = event.target.value
    }



    // its possible to change the object values without the 
    // @track decorator by creating a copy of the object and just updating
    profile = {
        age: 36,
        gender: "male"
    }

    // you can use the spread operator to change the value in objects
    // instead of using the @track operator
    // it will COPY the value of the object and update just the fields you want
    changeProfile(event) {
        this.profile = {
            ... this.profile,
            "age": event.target.value
        }
    }

    ceoList = [
        {
            id: 1,
            company: "Google",
            name: "Sundar Pichai"
        },
        {
            id: 2,
            company: "Apple",
            name: "Tim Cook"

        },
        {
            id: 3,
            company: "Meta",
            name: "Mark"

        },
        {
            id: 4,
            company: "Amazon",
            name: "Jeffy"

        }
    ]

}