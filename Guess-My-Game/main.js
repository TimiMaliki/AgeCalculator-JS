/**
 * Guess My Game project
 */
 'use strict';

//  document.querySelector('.message').textContent = "correct Number!";
//  document.querySelector('.num__box').textContent = 17;
//  document.querySelector('.guess').value = 17;
//  document.querySelector('.High__score').textContent = "Highscore:" + 13;
 document.querySelector('.score').textContent = "score:" + 11;

const number = Math.trunc(Math.random()*20)+1;

document.querySelector('.num__box').textContent = number;

  document.querySelector('.check__box').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value );

   if(!guess){
     document.querySelector('.message').textContent = "No Number!"
   }else if( guess === number){
    document.querySelector('.message').textContent = "correct Number!"
   }
 });