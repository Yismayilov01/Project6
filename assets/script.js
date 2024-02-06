const start=document.querySelector('#start')
const exit=document.querySelector('#exit')
start.onclick=function(){
    document.querySelector('#section1').style.display='none'
    document.querySelector('#section2').style.display='block'
}
exit.onclick=function(){
    window.close()
}

const suallar=[
    {
        sual:'Which famous scientist formulated the theory of relativity?',
        yourChoices:[
            {
                choices:'Isaac Newton',
                correctAnswers: false
            },
            {
                choices:'Albert Einstein',
                correctAnswers: true
            },
            {
                choices:'Nikola Tesla',
                correctAnswers: false
            },
        ]
    },
    {
        sual:'What is the largest mammal in the world?',
        yourChoices:[
            {
                choices:'African Elephant',
                correctAnswers: false
            },
            {
                choices:'Giraffe',
                correctAnswers: false
            },
            {
                choices:'Blue Whale',
                correctAnswers: true
            },
        ]
    },
    {
        sual:'Who painted the famous artwork "Starry Night"?',
        yourChoices:[
            {
                choices:'Pablo Picasso',
                correctAnswers: false
            },
            {
                choices:'Leonardo da Vinci',
                correctAnswers: false
            },
            {
                choices:'Vincent van Gogh',
                correctAnswers: true
            },
        ]
    },
    {
        sual:'What is the currency of Japan?',
        yourChoices:[
            {
                choices:'Yuan',
                correctAnswers: false
            },
            {
                choices:'Yen',
                correctAnswers: true
            },
            {
                choices:'Won',
                correctAnswers: false
            },
        ]
    },
    {
        sual:'In which year did the Titanic sink?',
        yourChoices:[
            {
                choices:'1912',
                correctAnswers: true
            },
            {
                choices:'1914',
                correctAnswers: false
            },
            {
                choices:'1911',
                correctAnswers: false
            },
        ]
    }
]
function changeProgressBar(){
    const percentage=100*(index/suallar.length)
    document.querySelector('#progBar2').style.width=percentage+'%'
}


let index=0
let correctAnswer=0
function showQuession(){
    const sual=suallar[index]
    document.querySelector("#question").innerHTML=sual.sual
    for(let i=0;i<sual.yourChoices.length;i++){
        document.querySelector('.variant'+(i+1)).style.backgroundColor = '#343a40'
        const btn=document.querySelector('.answer'+(i+1))
        btn.innerHTML=sual.yourChoices[i].choices
        btn.onclick=function(){
            if(sual.yourChoices[i].correctAnswers){
            document.querySelector('.variant'+(i+1)).style.backgroundColor = 'green' 
            correctAnswer++
            console.log(correctAnswer)
            }else{
            document.querySelector('.variant'+(i+1)).style.backgroundColor = 'red'
            }
            setTimeout(next,1000)
            setTimeout(changeProgressBar,1000)
        }
    }
    
}

function next(){
    index++
    const number=document.querySelector('.questionNumber')
    number.innerHTML=`Question ${index+1}`
    if(index>suallar.length-1){
        number.innerHTML=`Question 1`
        index=0
        document.querySelector('.variant1').style.backgroundColor = '#343a40'
        document.querySelector('.variant2').style.backgroundColor = '#343a40'
        document.querySelector('.variant3').style.backgroundColor = '#343a40'
        document.querySelector('#section1').style.display='block'
        document.querySelector('#section2').style.display='none'
        const result=document.querySelector('#h1')
        result.innerHTML=`Total points : ${(correctAnswer*100)/suallar.length}%`
    }else{
        showQuession()
    }
}
showQuession()