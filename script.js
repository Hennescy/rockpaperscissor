let playerScore = 0;
let computerScore = 0;   

document.getElementById("rock").onclick = playRound;
document.getElementById("paper").onclick = playRound;    
document.getElementById("scissors").onclick = playRound;


function playRound(){
    
                    let playerSelection = this.id;
                    console.log("Your choice is:",playerSelection)
                    const options = ["rock", "paper", "scissors"];
                    const random = options[Math.floor(Math.random()*options.length)];
                    let computerSelection = random;
                    console.log("Computer's choice is:" + computerSelection);
                    console.log(compare(playerSelection, computerSelection)); 
                    console.log("Your score is: " +  playerScore)
                    console.log("The computer's score is: " + computerScore)

                    function compare(playerSelection, computerSelection) 
                        {   
                            if (playerSelection === 'rock')
                                {
                                    if (computerSelection === 'scissors')
                                        { !
                                            playerScore++;
                                            document.getElementById('result').innerHTML = "You won the round";
                                        }
                                    else if (computerSelection === 'paper')
                                        {
                                            computerScore++;
                                            document.getElementById('result').innerHTML = "you lost the round";
                                        }
                                    else 
                                        {
                                            document.getElementById('result').innerHTML = "draw";;
                                        }
                                }
                            else if (playerSelection == "paper")
                                {
                                    if (computerSelection == "rock")
                                        {
                                            playerScore++;
                                            document.getElementById('result').innerHTML = "You won the round";
                                        }
                                    else if (computerSelection == "scissors")
                                        {           
                                            computerScore++;
                                            document.getElementById('result').innerHTML = "you lost the round";
                                        }
                                    else 
                                        {
                                            document.getElementById('result').innerHTML = "draw";
                                         }
                                 }
                            else if (playerSelection == "scissors")
                                 {
                                    if (computerSelection == "paper")
                                        { 
                                            playerScore++;
                                            document.getElementById('result').innerHTML = "You won the round";;
                                         }
                                    else if (computerSelection == "rock")
                                        {
                                            computerScore++
                                            document.getElementById('result').innerHTML = "you lost the round";
                                        }
                                    else 
                                        {
                                            document.getElementById('result').innerHTML = "draw";
                                        }
                                 }
                         }                            
                         document.getElementById('playerScore').innerHTML = "Your score : " + playerScore;
                         document.getElementById('computerScore').innerHTML = "Computer's score : " + computerScore;
                         
                         if (playerScore === 5 )
                            {
                                document.getElementById('result').innerHTML = "You won the game!";
                                playerScore = 0;
                                computerScore = 0;                                
                            }   
                        else if (computerScore === 5)      
                            {
                                document.getElementById('result').innerHTML = "You lost the game!";
                                playerScore = 0;
                                computerScore = 0;                                                               
                            }          
    }
    
    
    
        
        
                       
                    
      
      