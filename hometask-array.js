/**the amount of the letters in the array
 * функция для определения кол-ва каждого символа в строке,
 * объявляем объект lettercount с пустым свойством*
 * в цикле for объвляем переменную как свойство объекта для каждого элемента в строке;
 * проверяем на условие отсутствия буквы, если условие выполняется, то переменной присваивается значение 0.**/
function countletters(str) {
    var lettercount = {};
    for (var i = 0; i < str.length; i++) {
        var letter = lettercount[str[i]];
        if (!letter) letter = 0;
        letter++;
    }
    return letter;
}
//**the amount of negative and positive numbers in the array */
function amountnumbers(numbers) {
    var amountpositive = 0;
    var amountnegative = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            amountnegative++;
        } else {
            amountpositive++;
        }
    }
    return [amountpositive, amountnegative];
}
//** the product of negative numbers in the array; */
function negativeproduct(numbers) {
    var product = 1;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) { product *= numbers[i] }
    }
    return product;
}
//** the sum of positive numbers in the array; */
function sumpositive(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) { sum += numbers[i] }
    }
    return sum;
}
//*the biggest of these numbers in the array; the smallest of these numbers in the array; use operator spread */
Math.max(...numbers)
Math.min(...numbers)
