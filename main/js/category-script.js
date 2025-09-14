
const menuBtns = document.querySelectorAll('.btn');
const foodItems = document.querySelectorAll('.card');

let activeBtn = "All";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        setTimeout(showFoodMenu(btn.id), 30000);
        // showFoodMenu(btn.id);
        btn.classList.add('active');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active');
    });
}

function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    foodItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = 'grid';
        } else {
            item.style.display = "none";
        }
    });
}