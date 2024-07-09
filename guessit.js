 const range = prompt("enter your range");
  const   num = Math.floor(Math.random()* range ) + 1;
 let userinput = prompt("enter the number you guess");
  while(true){
    if(userinput == "quit"){
        console.log("quitting the game");
        break;
    }
   else  if(userinput == num){
        console.log("you guess it right");
        break;
    }
   else  if (userinput<num){
        userinput = prompt(" Hint : your guess was too small ,please trt again");
    }
    else if (userinput>num){
        userinput = prpmpt(" Hint : your guess was too big ,please tery again");
    }
    

  }