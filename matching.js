// Worked with House Gardener

//reset button will reset whole game board
document.querySelector('button').addEventListener('click', reset);
//board array
document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'icecream(1)',
      img: 'images/icecream(1).png'
    },
    {
      name: 'icecream(1)',
      img: 'images/icecream(1).png'
    },
    {
      name: 'icecream(2)',
      img: 'images/icecream(2).png',
    },
    {
      name: 'icecream(2)',
      img: 'images/icecream(2).png',
    },
    {
      name: 'icecream(3)',
      img: 'images/icecream(3).jfif'
    },
    {
      name: 'icecream(3)',
      img: 'images/icecream(3).jfif'
    },
    {
      name: 'icecream(4)',
      img: 'images/icecream(4).jfif'
    },
    {
      name: 'icecream(4)',
      img: 'images/icecream(4).jfif'
    },
    {
      name: 'icecream(6)',
      img: 'images/icecream(6).jfif'
    },
    {
      name: 'icecream(6)',
      img: 'images/icecream(6).jfif'
    },
  ];
  //shuffles cards on the  boars `match
  cardArray.sort(() => 0.10 - Math.random());

  //board
  const board = document.querySelector('.board');
  const winningDisplay = document.querySelector('#result'); //doesn't work
  let cardsChosen = [];
  let cardsChosenId = [];
  let matchesWon = [];
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let match = document.createElement('img');
      match.setAttribute('src', 'images/background.png');
      match.setAttribute('data-id', i);
      match.addEventListener('click', flipCard);
      board.appendChild(match)
    }
    //check to see the board and how the matches align
  }
  function checkForMatch() {
    let matches = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You have a match!');
      matches[optionOneId].classList.add("hidden");
      matches[optionTwoId].classList.add("hidden");
      matchesWon.push(cardsChosen);
    } else {
      matches[optionOneId].setAttribute('src', 'images/background.png');
      matches[optionTwoId].setAttribute('src', 'images/background.png');
      alert('Not a Match, Try Again!');
    }
    cardsChosen = [];
    cardsChosenId = [];
    winningDisplay.textcontent = matchesWon.length;
    if (matchesWon.length === cardArray.length / 2)
      alert('Hooray! You found all the matches!!');
  }
  //flips cards

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 1500);
    }
  }

  createBoard ();
});
//reset function
function reset() {
  location.reload();
}
