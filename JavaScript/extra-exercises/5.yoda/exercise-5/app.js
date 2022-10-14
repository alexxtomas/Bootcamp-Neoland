const $ = selector => document.querySelector(selector)
const baseURL = 'https://opentdb.com/api.php?amount='

const $startGame = $('button[data-function="start-game"]')
const $form = $('form')
const $howManyQuestions = $('input[data-function="questions-number"]')
const $questionsContainer = $('div[data-function="gameboard"]')
$startGame.addEventListener('click', evt => {
    if($howManyQuestions.value > 10 || $howManyQuestions.value <= 0) {
        alert('Plese enter a number between 1-10')
        $howManyQuestions.value = ''
    }  
       
})

$form.addEventListener('submit', async evt => {
    evt.preventDefault()
    const request = await fetch(`${baseURL}${$howManyQuestions.value}`)
    const {results} = await request.json()
    console.log(results)
    results.map(({question, correct_answer,incorrect_answers, type, }, i) => {
        if(type === 'multiple') {
            const randomIndex = Number.parseInt(Math.random() * incorrect_answers.length + 1)
            const answrs = [...incorrect_answers]
            answrs.splice(randomIndex, 0, correct_answer) 
            const questionElement = `
                <div>
                    <h3>${question}</h3>
                    ${answrs.map((answr) => ` <label> <input type="radio" name="asnwr${i}" > ${answr}</label>`)}
                </div>
            `
            console.log(questionElement)
            $questionsContainer.innerHTML += questionElement
        }
    })
    

})