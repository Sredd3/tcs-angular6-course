import {User} from './User';

let user = new User('pradeep', 'kumar');

let node = document.querySelector('.test');
node.innerHTML=user.getFullName();