"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
function make_shirt(size = "Large", text = "Stay Positive!") {
    console.log(`${size}, T-shirt with message: ${text}`);
}
make_shirt();
make_shirt('Medium', 'Keep Calm and Carry On!');
make_shirt('Small', 'Believe in Yourself!');
