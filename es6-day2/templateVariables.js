function printName(firstName, lastName){
    console.log("The name of employee is "+firstName+","+ lastName);
}

//template variables
function printName2(firstName, lastName, age){
    return `
        The full name of employee is 
        ${"Mr "+ firstName } ,
        ${lastName} and ${age * 365 } days old`  ;
}


function returnCities(city){
    return `
        <div>
          <ul>
            <li>${city}</li>
          </ul>
        </div>
    `
}

document.querySelector('#cities').innerHTML=returnCities("Mumbai");




console.log(printName2("harish", "naik", 32));