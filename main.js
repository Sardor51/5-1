let object ={

}



for(let i = 1; i<=10;i++){
    alert(object.name=prompt('Введите ваше имя'))
    alert(object.age=+prompt('Введите ваш возраст'))
    console.log(`Пользователь${i}`);
    console.log(`Имя - ${object.name}`);
    console.log(`Возраст - ${object.age}`);
}