const brightness = document.getElementById('brightness');
const rulesback = document.getElementById('rulesback');
const close1 = document.getElementById('close1');
const rulesbtn = document.getElementById('rulesbtn');

const rock = document.getElementById('rocksback')
const scissor = document.getElementById('scissorsback')
const paper = document.getElementById('papersback')

const rock2 = document.getElementById('rocksback2')
const scissor2 = document.getElementById('scissorsback2')
const paper2 = document.getElementById('papersback2')

const rock3 = document.getElementById('rocksback3')
const scissor3 = document.getElementById('scissorsback3')
const paper3 = document.getElementById('papersback3')

const maincontent1 = document.getElementById('maincontent1')
const maincontent2 = document.getElementById('maincontent2')

const result = document.getElementById('result')
const count = document.getElementById('count')
const bolo = document.getElementById('bolo')
const again = document.getElementById('again')
const countdown = document.getElementById('countdown')
const reload = document.getElementById('reload')
const reset = document.getElementById('reset')
const countdown2 = document.getElementById('countdown2')

maincontent2.style.display = 'none'
maincontent1.style.display = 'block'
rulesback.style.visibility = 'visible'
brightness.style.visibility = 'visible'
again.style.visibility = 'hidden'
bolo.style.visibility = 'hidden'
countdown2.style.visibility = 'hidden'

paper2.style.visibility = 'hidden'
rock2.style.visibility = 'hidden'
scissor2.style.visibility = 'hidden'

paper3.style.visibility = 'hidden'
rock3.style.visibility = 'hidden'
scissor3.style.visibility = 'hidden'
countdown.style.visibility = 'hidden'
reset.style.visibility = 'hidden'


close1.addEventListener('click',function(){
rulesback.style.visibility = 'hidden'
brightness.style.visibility = 'hidden'
countdown2.style.visibility = 'visible'
countdown2.innerHTML = 'after 5 rounds if you' + "'ll" + " have more than 0 score you" + "'ll" + ' win game'
countdown2.style.fontSize = '19px'
})

rock.addEventListener('click',function(){
 play()
 attempt()
 z++
 round--;
})
paper.addEventListener('click',function(){
play1()
attempt()
z++
round--;
})
scissor.addEventListener('click',function(){
play2()
attempt()
z++
round--;

})

function attempt(){
    countdown.style.visibility = 'visible'
    countdown.innerHTML = "You left " + round + " attempt / " + "თქვენ დაგრჩათ " + round + " ცდა"
    countdown.style.fontSize = '24px'
    
    if(z > 3 && x > 0){
        countdown.innerHTML = 'you won  /  მოიგე საბოლოოდ!'
        countdown.style.fontSize = '32px'
        countdown.style.color = 'green' 
        reset.style.visibility = 'visible'
        again.style.visibility = 'hidden'
        
    }else if(z > 3 && x < 0){
        countdown.innerHTML = 'you lost  /  წააგე საბოლოოდ!'
        countdown.style.fontSize = '32px'
        countdown.style.color = 'red'  
        reset.style.visibility = 'visible'
        again.style.visibility = 'hidden'
    }else if(z > 3 && x === 0 && round === 0){
        countdown.innerHTML = 'Tie  /  ფრე!'
        countdown.style.fontSize = '35px'
        countdown.style.color = 'green'  
        reset.style.visibility = 'visible'
        again.style.visibility = 'hidden'
    }
}

rulesbtn.addEventListener('click',function(){
    rulesback.style.visibility = 'visible'
    brightness.style.visibility = 'visible'
})

reset.addEventListener('click',function(){
    location.reload(); 
    maincontent2.style.display = 'none'
    maincontent1.style.display = 'block'
    rulesback.style.visibility = 'visible'
    brightness.style.visibility = 'visible'
    again.style.visibility = 'hidden'
    bolo.style.visibility = 'hidden'
    
    paper2.style.visibility = 'hidden'
    rock2.style.visibility = 'hidden'
    scissor2.style.visibility = 'hidden'
    
    paper3.style.visibility = 'hidden'
    rock3.style.visibility = 'hidden'
    scissor3.style.visibility = 'hidden'
    reset.style.visibility = 'hidden'
    
    
    
    close1.addEventListener('click',function(){
    rulesback.style.visibility = 'hidden'
    brightness.style.visibility = 'hidden'
    randomVariable.style.visibility = 'hidden'
    
    
})

})

scissor3.style.left = '55%'
rock3.style.left = '55%'
paper3.style.left = '55%'
scissor2.style.left = '15%'
rock2.style.left = '15%'
paper2.style.left = '15%'
let shouldContinue = true;
let countdownInterval;
let x = 0
let y = 9
let z = 0 
let round = 4


function play(){

scissor3.style.left = '55%'
rock3.style.left = '55%'
paper3.style.left = '55%'
scissor2.style.left = '15%'
rock2.style.left = '15%'
paper2.style.left = '15%'

const randomIndex = Math.floor(Math.random() *  3);

    if(randomIndex === 1){
    setTimeout(tie,2000)
    maincontent1.style.display = 'none'
    maincontent2.style.display = 'block'
    rock3.style.visibility = 'visible' 
    rock2.style.visibility = 'visible'
    setTimeout(againvisible, 2000)
    }


    if(randomIndex === 0){
        maincontent1.style.display = 'none'
        maincontent2.style.display = 'block'
        scissor3.style.visibility = 'visible'
        rock2.style.visibility = 'visible'
        setTimeout(againvisible, 2000)
        setTimeout(won,2000)
        x++;
        result.innerHTML = x;
    }


    if(randomIndex === 2){
        maincontent1.style.display = 'none'
        maincontent2.style.display = 'block'
        paper3.style.visibility = 'visible'
        rock2.style.visibility = 'visible'
        setTimeout(againvisible, 2000)
        setTimeout(lose,2000)
        x--;
        result.innerHTML = x
    }

 function won(){
    scissor3.style.left = '80%'
    rock3.style.left = '80%'
    paper3.style.left = '80%'
    scissor2.style.left = '0%'
    rock2.style.left = '0%'
    paper2.style.left = '0%'
    bolo.innerHTML = 'won/მოიგე'
    bolo.style.visibility = 'visible'
    }

    function lose(){
        scissor3.style.left = '80%'
        rock3.style.left = '80%'
        paper3.style.left = '80%'
        scissor2.style.left = '0%'
        rock2.style.left = '0%'
        paper2.style.left = '0%'
        bolo.innerHTML = 'lose/წააგე'
        bolo.style.visibility = 'visible'
        }
        function tie(){
        scissor3.style.left = '80%'
        rock3.style.left = '80%'
        paper3.style.left = '80%'
        scissor2.style.left = '0%'
        rock2.style.left = '0%'
        paper2.style.left = '0%'
        bolo.innerHTML = 'tie/ფრე'
        bolo.style.visibility = 'visible'
        }

        
}
function play1(){
    scissor3.style.left = '55%'
    rock3.style.left = '55%'
    paper3.style.left = '55%'
    scissor2.style.left = '15%'
    rock2.style.left = '15%'
    paper2.style.left = '15%'

    const randomIndex = Math.floor(Math.random() *  3);
    
        if(randomIndex === 1){
        maincontent1.style.display = 'none'
        maincontent2.style.display = 'block'
        rock3.style.visibility = 'visible' 
        paper2.style.visibility = 'visible'
        setTimeout(againvisible,2000)
        setTimeout(won,2000)
        x++;
        result.innerHTML = x;
        }
    
    
        if(randomIndex === 0){
            maincontent1.style.display = 'none'
            maincontent2.style.display = 'block'
            scissor3.style.visibility = 'visible'
            paper2.style.visibility = 'visible'
            setTimeout(lose,2000)
            setTimeout(againvisible,2000)
            x--;
            result.innerHTML = x
        }
    
    
        if(randomIndex === 2){
            setTimeout(tie,2000)
            setTimeout(againvisible,2000)
            maincontent1.style.display = 'none'
            maincontent2.style.display = 'block'
            paper3.style.visibility = 'visible'
            paper2.style.visibility = 'visible'
           
        }

    
     function won(){
        scissor3.style.left = '80%'
        rock3.style.left = '80%'
        paper3.style.left = '80%'
        scissor2.style.left = '0%'
        rock2.style.left = '0%'
        paper2.style.left = '0%'
        bolo.innerHTML = 'won/მოიგე'
        bolo.style.visibility = 'visible'
        }
    
        function lose(){
            scissor3.style.left = '80%'
            rock3.style.left = '80%'
            paper3.style.left = '80%'
            scissor2.style.left = '0%'
            rock2.style.left = '0%'
            paper2.style.left = '0%'
            bolo.innerHTML = 'lose/წააგე'
            bolo.style.visibility = 'visible'
            }
            function tie(){
            scissor3.style.left = '80%'
            rock3.style.left = '80%'
            paper3.style.left = '80%'
            scissor2.style.left = '0%'
            rock2.style.left = '0%'
            paper2.style.left = '0%'
            bolo.innerHTML = 'tie/ფრე'
            bolo.style.visibility = 'visible'
            }
        
}
function play2(){
    scissor3.style.left = '55%'
    rock3.style.left = '55%'
    paper3.style.left = '55%'
    scissor2.style.left = '15%'
    rock2.style.left = '15%'
    paper2.style.left = '15%'
    
    const randomIndex = Math.floor(Math.random() *  3);
    
        if(randomIndex === 1){
        maincontent1.style.display = 'none'
        maincontent2.style.display = 'block'
        rock3.style.visibility = 'visible' 
        scissor2.style.visibility = 'visible'
        setTimeout(lose,2000)
        setTimeout(againvisible,2000)
        x--;
        result.innerHTML = x
     
        }
    
    
        if(randomIndex === 0){
            setTimeout(tie,2000)
            maincontent1.style.display = 'none'
            maincontent2.style.display = 'block'
            scissor3.style.visibility = 'visible'
            scissor2.style.visibility = 'visible'
            setTimeout(againvisible,2000)
            y++;
        }
    
    
        if(randomIndex === 2){
            maincontent1.style.display = 'none'
            maincontent2.style.display = 'block'
            paper3.style.visibility = 'visible'
            scissor2.style.visibility = 'visible'
            setTimeout(againvisible,2000)
            setTimeout(won,2000)
            x++;
            result.innerHTML = x;
           
        }
    
        function won(){
            scissor3.style.left = '80%'
            rock3.style.left = '80%'
            paper3.style.left = '80%'
            scissor2.style.left = '0%'
            rock2.style.left = '0%'
            paper2.style.left = '0%'
            bolo.innerHTML = 'won/მოიგე'
            bolo.style.visibility = 'visible'
            }
        
            function lose(){
                scissor3.style.left = '80%'
                rock3.style.left = '80%'
                paper3.style.left = '80%'
                scissor2.style.left = '0%'
                rock2.style.left = '0%'
                paper2.style.left = '0%'
                bolo.innerHTML = 'lose/წააგე'
                bolo.style.visibility = 'visible'
                }
                function tie(){
                scissor3.style.left = '80%'
                rock3.style.left = '80%'
                paper3.style.left = '80%'
                scissor2.style.left = '0%'
                rock2.style.left = '0%'
                paper2.style.left = '0%'
                bolo.innerHTML = 'tie/ფრე'
                bolo.style.visibility = 'visible'
                }
                
              

}
 
again.addEventListener('click',function(){
    maincontent2.style.display = 'none'
    maincontent1.style.display = 'block'
    rulesback.style.visibility = 'hidden'
    brightness.style.visibility = 'hidden'
    again.style.visibility = 'hidden'
    bolo.style.visibility = 'hidden'
    
    paper2.style.visibility = 'hidden'
    rock2.style.visibility = 'hidden'
    scissor2.style.visibility = 'hidden'
    
    paper3.style.visibility = 'hidden'
    rock3.style.visibility = 'hidden'
    scissor3.style.visibility = 'hidden'
    
    
    
    
    close1.addEventListener('click',function(){
    rulesback.style.visibility = 'hidden'
    brightness.style.visibility = 'hidden'
    randomVariable.style.visibility = 'hidden'
    
    
    })
})

function againvisible(){
    again.style.visibility = 'visible'
}
  