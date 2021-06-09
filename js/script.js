const answer = [];

const question = prompt ("Enter Question");
const question_id = document.getElementById('question_id');
question_id.textContent = question;


function sayAnswer () {
    let answerString = prompt ("Enter Answer");
    answerString = answerString.toUpperCase();

    if (answerString === "") {
        return sayAnswer();
    }else if(answerString === null){
        return sayAnswer();
    }

    const answerSplit = answerString.split("");
     for (let i = 0; i < answerSplit.length; i++) {
         if ((!isNaN(+answerSplit[i]))) {
            return sayAnswer();
         } else {
            answer.push(answerSplit[i]);
         }
     }
}

sayAnswer();


let gameCount = Math.ceil((answer.length)/2);
let winComb = 0;
const main_cont = document.getElementById("main_cont");

const letters = ['A', 'B', 'C', 'D', 'E', "F", 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z'];
const letters_cont = document.getElementById("letters_cont");

setTimeout(() => {
    main_cont.style.width = '100%';
    letters_cont.style.width = '100%';
    setTimeout(() => {
        for (let i = 0; i < answer.length; i++) {
            const main_cont_div = document.createElement('div');
            main_cont.appendChild(main_cont_div);
            main_cont_div.setAttribute('class', 'faf');
            const answer_let = document.createElement('div');
            answer_let.setAttribute('class', 'letters_div');
            main_cont_div.appendChild(answer_let);
            answer_let.setAttribute('id', `${answer[i]}${i}`);
            const h2_letters = document.createElement("h2");
            answer_let.appendChild(h2_letters);
            h2_letters.textContent = answer[i];
        }

        for (let j = 0; j < letters.length; j++) {
            const button = document.createElement('button');
            button.setAttribute('value', letters[j]);
            button.setAttribute('id', letters[j]);
            button.setAttribute('class', 'letter');
            button.setAttribute('onclick', 'reply_click(this.value), this.disabled = true , winLose()');
            button.textContent = letters[j];
            letters_cont.appendChild(button);
        }
    }, 1000);
}, 0);

function reply_click(clicked_value)  {
    let gameCount_id = document.getElementById('count_id');
    let x = --gameCount;
    gameCount_id.textContent = x;
    console.log(gameCount);
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === clicked_value ) {
            document.getElementById(`${answer[i]}${i}`).style.transform  = 'rotateY(0deg)';
            gameCount++;
            winComb++;
        }
    }
}

function winLose(){
    if (winComb === answer.length) {
        setTimeout(() => {
            document.getElementById('main_id').style.display = 'none';
            document.getElementById('win_img').style.display = 'block';
        }, 1500);
            
    }
    if (gameCount === 0) {
        setTimeout(() => {
            document.getElementById('main_id').style.display = 'none';
            document.getElementById('lose_img').style.display = 'block';
        }, 1500);
    }
}

