const overlay = document.querySelector('#overlay');
const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');

let add = function (class1, class2, class3) {
    class3.addEventListener("click", () => {
        const popUp = document.querySelector(class1);
        popUp.classList.add(class2);
    })
}
let remove = function (class1, class2, class3) {
    class3.addEventListener("click", () => {
        const popUp = document.querySelector(class1);
        popUp.classList.remove(class2);
        popUp.event.stopPropagation();

    })
}
add('#sign-in-pop-up', 'active', signIn)
add('#overlay', 'active', signIn)
remove('#sign-in-pop-up', 'active', overlay)
remove('#overlay', 'active', overlay)
add('#sign-up-pop-up', 'active', signUp)
add('#overlay', 'active', signUp)
remove('#sign-up-pop-up', 'active', overlay)
remove('#overlay', 'active', overlay)



