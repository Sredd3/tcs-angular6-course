import {sortBy, first} from 'underscore';

class User{
    constructor(firstname, lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    getFullName(){
        return this.firstname+ this.lastname;
    }

    setFirstName(firstname){
        this.firstname = firstname;
    }
    setLastName(lastname){
        this.lastname = lastname;
    }
};

export default User;