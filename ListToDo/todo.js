//получаем объекты - поле ввода input, кнопку button, ul//
let addMessage = document.querySelector('.message'),
    addButton = document.querySelector(' .add');
todo = document.querySelector('.todo');

//объявляем переменную массив, в который будет сохраняться весь список дел**//
let todoList = [];
//возвращаем данные на страницу из localStorage: в случае обновления страницы ранее внесенные задачи не будут утеряны//
if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}
//создаем обработчик событий при введении в поле input новой информации и нажатии на кнопку button//
addButton.addEventListener('click', function () {
    if (!addMessage.value) return;
    //создаем массив при добавлении новых задач с набором св-в//
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };
    todoList.push(newTodo);
    displayMessages();
    //сохранение данных при помощи localStorage, передавая туда наш объект todoList (для этого объект преобразовываем в JSON строку)//
    localStorage.setItem('todo', JSON.stringify(todoList));
    //после ввода данных и их добавления, кликаем в поле ввода  - строка очищается- как сделать???//

});
//создаем ф-цию которая будет перебирать элементы массива и выводить список дел//
function displayMessages() {
    let displayMessage = '';
    todoList.forEach(function (item, i) {
        //**при помощи интерполяции в строке создаётся конструкция ${...}, внутри которой можно поместить любую переменную или выражение */
        displayMessage += `
        <li>
        <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
        <label for='item_${i}' class="${item.important ? 'important' : ''}">${item.todo}</label>
        </li>
        `;
    });
    todo.innerHTML = displayMessage;
    todo.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        //при клике правой кнопки мыши вместо контекст меню будет перебираться весь массив//
        todoList.forEach(function (item) {
            if (item.todo === event.target.innerHTML) {
                item.important = !item.important;
                displayMessages();
                localStorage.setItem('todo', JSON.stringify(todoList));
            }
        });
    });
}
