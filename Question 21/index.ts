// They think of something you could store in a Typescript Object. 
// Write a program that creates Objects containing these items.

interface items{
    Name:string
    Price:number 
    }
    
    // Make two different objects
    
   
    let car: items={
        Name: "Suzuki Alto",
        Price: 2000000,
    }
    
        
    let book: items ={
        Name: "Economics",
    Price: 1000,
    }
    
    console.log(`Car Name: ${car.Name}, Car Price: ${car.Price}`);
    console.log(`Book Name: ${book.Name}, Book Price: ${book.Price}`);
    