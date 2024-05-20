console.log("ade");

let questionContainer = document.querySelectorAll(".questions-container");
let answers = document.querySelectorAll(".answer");
let sign = document.querySelectorAll(".sign");

//
// USING the forEach method to loops throung the questionContainer HTML collection

questionContainer.forEach((question, index) => {
  question.addEventListener("click", () => {
    // Using the TRANSITION method for the text show and remove Effect effect(Note: Comment out the 'animationMethod' and  the 'keyframes' class in the CSS and uncomment the 'transitionShow' class in the CSS )

    // Using toggle()
    // if (answers[index].classList.contains('answer')) {
    //     answers[index].classList.toggle('transitionShow')
    // }

    // Using the Logical long Method

    if (answers[index].classList.contains("transitionRemove")) {
      answers[index].classList.remove("transitionRemove");
      answers[index].classList.add("transitionShow");
      sign[index].textContent = "^";
    } else if (answers[index].classList.contains("transitionShow")) {
      answers[index].classList.add("transitionRemove");
      answers[index].classList.remove("transitionShow");
      sign[index].textContent = "^";
      sign[index].style.rotate = "-180deg";
    }

    // Using the ANIMATION method for the text show and remove Effect effect(Note: Comment out the 'transitionShow' class in the CSS uncomment the 'animationMethod' and the 'keyframe' )
    // if (answers[index].classList.contains('answer')) {
    //     answers[index].classList.toggle('animationMethod')
    // }
  });
});

// // USING the normal loop method to loops throung the questionContainer HTML collection
// for (let i = 0; i < questionContainer.length; i++) {

//     questionContainer[i].addEventListener('click', () => {
//         // Using the TRANSITION method for the text show and remove Effect effect(Note: Comment out the 'transitionShow' class in the CSS )

//         // Using toggle()
//         // if (answers[i].classList.contains('answer')) {
//         //     answers[i].classList.toggle('transitionShow')
//         // }

//         // Using the Logical long Method

//         // if (answers[i].classList.contains('transitionRemove')) {
//         //     answers[i].classList.remove('transitionRemove')
//         //     answers[i].classList.add('transitionShow')
//         //     sign[i].textContent = '^'

//         // }
//         // else if (answers[i].classList.contains('transitionShow')) {

//         //     answers[i].classList.add('transitionRemove')
//         //     answers[i].classList.remove('transitionShow')
//         //     sign[i].textContent = '^'
//         //     sign[i].style.rotate = '-180deg'
//         // }

//         // Using the ANIMATION method for the text show and remove Effect effect(Note: Comment out the 'transitionShow' class in the CSS )
//         // if (answers[i].classList.contains('answer')) {
//         //     answers[i].classList.toggle('animationMethod')
//         // }

//     })
// }
