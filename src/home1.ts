// Функцыя для определения факториала числа
const ftl  = (n: number): number =>  n ? n * ftl(n - 1) : 1;
// Функцыя которая принимает любое количество чисел и возвращать их произведени
const multiply = (numbers: Array<number>): number => numbers ? numbers.reduce((composition, item) => composition * item) : 0;
//  Функцыя которая принимает строку  и возвращать строку перевертыш
const reverseStr = (str:string):string => str ? str.split("").reverse().join("") : 'Напишите слово';
// Интерфейс Админа
interface AdminInterface {
    name: string;
    email: string;
    password: string;
    readonly type: string;
    required: boolean;
    defaults: null | string;
}
let admin: AdminInterface = {
    name: 'Имя Админа',
    email: 'admin@mail.ru',
    password: '123',
    type: 'Admin'
};

