HW_1* 
Задания с разным количеством звездочек:)
1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

const checkAge = function (age) {
    let age_1 = age
    let age_2 = 18
    let age_3 = 60

    if (age_1 < age_2) {
        return(`You don’t have access cause your age is ` + age_1 + `. It’s less than ${age_2}.`)
    } else if(age_1 >= age_2 && age_1 < age_3) {
        return("Welcome!")
    } else if(age_1 > age_3) {
        return("Keep calm and look Culture channel")
    } else {
        return("Technical work")
    } 
    }

    console.log(checkAge(17))
    console.log(checkAge(18))
    console.log(checkAge(61))


2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const checkAge2 = function (age) {
    let age_1 = age
    let age_2 = 18
    let age_3 = 60
    let age_1_type = typeof(age_1)
    
    if (age_1_type != "number") {
        return ("Err: Not a number")
    } else if (age_1 < age_2) {
        return(`You don’t have access cause your age is ` + age_1 + `. It’s less than 18.`)
    } else if(age_1 >= age_2 && age_1 < age_3) {
        return("Welcome!")
    } else if(age_1 > age_3) {
        return("Keep calm and look Culture channel")
    } else {
        return("Technical work")
    } 
    }

    console.log(checkAge2(""))
    console.log(checkAge2(18))
    console.log(checkAge2("six"))
3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge = function(age) {
    age = Number(age)

    if (!isNaN(age)) {

    if (age < age_2) {
        console.log("You don't have access cause your age is '+ age +'It's less then'" )
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome!")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    } 
} else { console.log("Not integer value")}
}
checkAge(17);
checkAge('18');
checkAge('61');
