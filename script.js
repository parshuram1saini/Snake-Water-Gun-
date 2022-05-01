'use strict'

let random = Math.trunc(Math.random() * 3) + 0
let flag
// console.log(random);
document.querySelector('.number').textContent = random

const comp = ['S', 'W', 'G']
let computer = comp[random]
document.querySelector('.number').textContent = computer
document.querySelector('.number').textContent = '?'
let round = 5
let roundwin = 0

//used again with function
let again = function () {
  random = Math.trunc(Math.random() * 3) + 0
  document.querySelector('.number').textContent = random
  document.querySelector('.round').textContent = round
  computer = comp[random]
  document.querySelector('.number').textContent = computer
  document.querySelector('.number').textContent = '?'
  document.querySelector('.message').textContent = 'start playing!..'
  document.querySelector('body').style.background = '#222'
}

let message = function (elment1, elment2) {
  document.querySelector('.message').textContent = elment1
  document.querySelector('body').style.background = elment2
}

let gamewin = function (flag, round, computer) {
  document.querySelector('.number').textContent = computer
  if (flag === 0) {
    message('✓ GAME IS TIE!', 'aqua')
    round--
    document.querySelector('.round').textContent = round
    message('✓ GAME IS TIE!', 'aqua')
  }

  if (flag === -1) {
    message('✓ YOU LOST! ', 'red')
    round--
    document.querySelector('.score').textContent = round
  }
  if (flag === 1) {
    message('✓ YOU WON!', '#60b347')
    round--
    document.querySelector('.score').textContent = round
  }
}

document.querySelector('.check').addEventListener('click', function () {
  let user = document.querySelector('.you').value

  // guess  the correct alphabet
  if (computer == 'G') {
    if (user == 'G') {
      flag = 0
      gamewin(flag, round, computer)
    } else if (user == 'W') {
      flag = 1
      gamewin(flag, round, computer)
    } else if (user == 'S') {
      flag = -1
      gamewin(flag, round, computer)
    }
  } else if (computer == 'S') {
    if (user == 'S') {
      flag = 0
      gamewin(flag, round, computer)
    } else if (user == 'G') {
      flag = 1
      gamewin(flag, round, computer)
    } else if (user == 'W') {
      flag = -1
      gamewin(flag, round, computer)
    }
  } else if (computer == 'W') {
    if (user == 'W') {
      flag = 0
      gamewin(flag, round, computer)
    } else if (user == 'S') {
      flag = 1
      gamewin(flag, round, computer)
    } else if (user == 'G') {
      flag = -1
      gamewin(flag, round, computer)
    }
  }
})
// used again button
document.querySelector('.again').addEventListener('click', again)
