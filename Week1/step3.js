'use strict'

//Point No. 1:

const booksRead = [
    'holy_blood_holy_grail',
    'rule_by_secrecy',
    'pawns_in_the_game',
    'inferno',
    'the_symbol',
    'human_animalization',
    'theory_of_fun',
    'afrah_qubba',
    'divine_comedy',
    'davinci_code'
];
console.table(booksRead); //to view the array in Inspector's console as a table.

//Point 3:

function listCreator() {
    let myDiv = document.createElement('div');
    let myList = document.createElement('ul');
    myDiv.appendChild(myList);

    for (let i = 0; i < booksRead.length; i++) {
        let itemList = document.createElement('li');
        myList.appendChild(itemList);
        let bookTitle = booksRead[i];
        itemList.innerHTML = bookTitle;
        // console.log(itemList);
    }
    console.log(myDiv);
}

listCreator();

//Point 4:
//Make an object containing information for each book. 
//Each item(object) in this object should have the book ID 
//you thought up in point 1 as a key, 
//and it should have at least the following fields: 
//title, language and author.

const booksInfo = {
    holy_grail: {
        title: 'Holy Blook, Holy Grail',
        language: 'Arabic translation',
        author: 'Michael Baigent and others'
    },
    rule_by_secrecy: {
        title: 'Rule by Secrecy',
        language: 'Arabic translation',
        author: 'Jim Mars'
    },
    pawns_in_the_game: {
        title: 'Pawns in the game',
        language: 'Arabic translation',
        author: 'William Guy Carr'
    },
    inferno: {
        title: 'Inferno',
        language: 'Arabic translation',
        author: 'Dan Brown'
    },
    the_symbol: {
        title: 'The Symbol',
        language: 'Arabic translation',
        author: 'Dan Brown'
    },
    human_animalization: {
        title: 'Human Animalization',
        language: 'Arabic',
        author: 'Mamdouh Adwan'
    },
    theory_of_fun: {
        title: 'Theory of Fun',
        language: 'English',
        author: 'Raph Koster'
    },
    afrah_qubba: {
        title: 'Afrah Al Qubba',
        language: 'Arabic',
        author: 'Najib Mahfouz'
    },
    divine_comedy: {
        title: 'Divine Comedy',
        language: 'Arabic translation',
        author: 'Dante'
    },
    davinci_code: {
        title: 'Davinci Code',
        language: 'Arabic translation',
        author: 'Dan Brown'
    }
};


//Point No. 5:
/**
 * Now change the function you used to display
 * the book ID's in a list to take the actual information
 * about the book from the object and display that.
 * Make sure you choose the right html elements for each
 * piece of info, for instance, a heading for the title.
 */
//Based on Mr. Jim's solution (I couldn't do it :( )
// function newListCreator(ul, keys, details) {
//     for (let key of keys) {
//         const book = details[key];
//         const li = document.createElement('li');
//         li.setAttribute('id', key);
//         const h1 = document.createElement('h1');
//         h1.innerHTML = book.title;
//         const h3 = document.createElement('h3');
//         h3.innerHTML = 'the author: ' + book.author;
//         const p = document.createElement('p');
//         p.innerHTML = 'the language: ' + book.language;
//         li.appendChild(h1);
//         li.appendChild(h3);
//         li.appendChild(p);
//         ul.appendChild(li);
//     }
// }

// newListCreator();