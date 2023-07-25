const choices = ['stone', 'paper', 'scissors'];
const prompt = require("prompt-sync")({ sigint: true });



function Generate_Random(){
  return choices[Math.floor(Math.random() * choices.length)];
}



function Winner(user, computer){
  if(user === computer){
    return 'draw';
  }

  if((user === 'stone' && computer === 'scissors') || (user === 'paper' && computer === 'stone') || (user === 'scissors' && computer === 'paper')){
    return 'user';
  } 
  
  else{
    return 'computer';
  }
}



function Player(){
    const player = prompt("Please enter your beautiful name before stepping into the game = ");
    return player; 
}



function Input(){
  const user = prompt('Enter your choice (stone, paper, or scissors) = ').toLowerCase();
  return user;
}



function Game(){
  console.log('   --- Welcome to Stone Paper Scissors Game ---');
  console.log('            Developed by Talha Khalid')

  let user = Input();
  
  while(!choices.includes(user)){
    user = prompt('Invalid choice. Please choose stone, paper, or scissors = ').toLowerCase();
    
    if(choices.includes(user)){
        break;
    }
  }

  const computer = Generate_Random();
  console.log(`Computer had chosen = ${computer}`);

  const winner = Winner(user, computer);

  if(winner === 'draw'){
    console.log("It's a draw!");
  } 
  
  else{
    console.log(winner === 'draw' ? "It's a draw!" : `You ${winner === 'user' ? 'win!' : 'lose!'}`);
  }   
}



function repeat(love){
    
    while(true){
        let option = prompt("Did you enjoy the game? Computer Wants to play again. So, please press (Y or N) = "); 
        
        if(option == 'y' || option == 'Y'){
           console.log("\n Oh means you're enjoying the game :) ...... \n")
           Game();
        }

        else{
           console.log(`Thanks for playing the game ${love}. Have a lovely day :)`)
           break;
        }
    }
} 

const love = Player();
Game();
repeat(love);
