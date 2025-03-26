// 1.
//  Создайте класс Product, который будет иметь свойства name, price и quantity. Напишите метод
//  getTotalCost(products), который принимает список продуктов и возвращает общую стоимость всех
//  товаров в каталоге.
//  Входные: Product("Apple", 2, 5) → Результат: 10
//  Входные: Product("Orange", 3, 4)→ Результат: 12

// class Product{
//     constructor(name, price, quantity){
//         this.name=name;
//         this.price=price;
//         this.quantity=quantity;
//     }
//     getTotalCost=()=>this.price*this.quantity;
// }
// const pr=new Product("Apple", 2, 5);
// console.log(pr. getTotalCost());

//  2. Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
//  getAverageGrade(), который возвращает средний баллстудента.
//  Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20) имеет средний балл 4.2"
//  Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22) имеет средний балл 3.0"
//  Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19) имеет средний балл 4.4«

// class Student {
//   constructor(name, age, marks) {
//     this.name = name;
//     this.age = age;
//     this.marks = marks;
//   }
//   getAverageGrade() {
//     const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
//     const average = sum / this.marks.length;
//     return `${this.name} (${this.age}) имеет средний балл ${average.toFixed(1)}`;
// }
// }
// const st = new Student("Alice", 20, [5, 4, 5, 3, 4]);
// console.log(st.getAverageGrade());

//  3. *Реализуйте класс CommonPrefix, который будет принимать массив строк. В классе должен быть
//  метод findLongestPrefix(), который возвращает самый длинный общий префикс среди всех строк в
//  массиве. Если общегопрефиксанет, методвозвращаетпустуюстроку.
//  Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
//  Входные: new CommonPrefix(["dog", "racecar", "car"]) → Результат: ""
//  Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inte"




//  4. СоздайтеклассTwoSum, которыйбудетпринимать массивцелых чиселnumsицелоечислоtarget.
//  Реализуйте метод findIndices(), который возвращает индексы двух чисел, сумма которых равна
//  target. Гарантируется, что существует ровно одно решение, и вы не можете использовать один и
//  тот жеэлементдважды.
//  Условия:
//  • Массивnumsсодержиттолькоцелыечисла.
//  • Выможетевернутьиндексывлюбомпорядке.
//  • Длякаждогонаборавходныхданныхсуществуетровнооднорешение.
//  Входные: new TwoSum([2, 7, 11, 15], 9) → Результат: [0, 1]
//  Объяснение:Посколькуnums[0] + nums[1] ==9, мы возвращаем[0, 1].
//  Входные: new TwoSum([3, 2, 4], 6)→ Результат: [1, 2]
//  Входные: new TwoSum([2, 3, 4], 6)→ Результат: [0, 2]

// class TwoSum {
//     constructor(nums, target) {
//         this.nums = nums;
//         this.target = target;
//     }

//     findIndices() {
//         for (let i = 0; i < this.nums.length; i++) {
//             for (let j = i + 1; j < this.nums.length; j++) {
//                 if (this.nums[i] + this.nums[j] === this.target) {
//                     return [i, j];
//                 }
//             }
//         }
//     }
// }
// const tw = new TwoSum([2, 3, 4], 6);
// console.log(tw.findIndices());

//  5. Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
//  класс PalindromeChecker, который будет проверять, является ли это числопалиндромом.
//  Входные: new PalindromeChecker(-121) → Результат: false
//  Входные: new PalindromeChecker(10) → Результат: false
//  Входные: new PalindromeChecker(12321) → Результат: true

// class Number{
//     constructor(num){
//         this.num=num;
//     }
// }
// class PalindromeChecker extends Number{
//     constructor(num){
//         super(num);
//     }
//     checker(){
//         const a = this.num.toString();
//         if(a==a.split('').reverse().join('')) return true;
//         else return false;
//     }
// }
// const pal = new PalindromeChecker(12321);
// console.log(pal.checker());

//  6. Создайте родительский класс Number, который будет хранить статичное число. Затем создайте
//  дочерний класс SquareRootCalculator, который будет содержать метод calculateSquareRoot(),
//  вычисляющийквадратныйкореньэтогочислабезиспользованиявстроеннойфункцииMath.sqrt().
//  Входные: new SquareRootCalculator(16) → Результат: 4
//  Входные: new SquareRootCalculator(25) → Результат: 5
//  Входные: new SquareRootCalculator(1) → Результат: 1

// class Number{
//     constructor(number){
//         this.number=number;
//     }
// }
// class SquareRootCalculator extends Number{
//     constructor(number){
//         super(number);
//     }
//     find(){
//         for(let i = 1 ;i<=this.number;i++){
//             if(i*i==this.number) return i;
//         }
//         return 'нет числа';
//     }
// }
// const sq = new SquareRootCalculator(15);
// console.log(sq.find());

//  7. Создайте родительский класс NumberGenerator, который будет генерировать и возвращать
//  случайное число с помощью метода generateNumber(). Затем создайте дочерний класс
//  SquareRootCalculator, который переопределяет метод generateNumber() и находит квадратный
//  корень этогочисла безиспользованиявстроеннойфункцииMath.sqrt().
//  Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 16)→
//  Результат: 4
//  Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 25) →
//  Результат: 5

// class NumberGenerator {
//   generateNumber() { 
//     const num = Math.round(Math.random() * 100)
//     console.log(`Рандомное ${num}`);
//     return num;
//   };
// }
// class SquareRootCalculator extends NumberGenerator {
//   generateNumber() {
//     const num = super.generateNumber();
//     for (let i = 1; i <= num; i++) {
//       if (i * i == num) return i;
//     }
//     return "нет числа";
//   }
// }
// const sq = new SquareRootCalculator();
// console.log(sq.generateNumber());



//  8. Создайте родительский класс NumberArrayGenerator, который будет генерировать массив чисел
//  от 1 до 8 с помощью метода generateArray(). Затем создайте дочерний класс EvenNumberFilter,
//  которыйпереопределяетметодgenerateArray() и оставляет в массиветолькочётные числа.
//  Входные: new EvenNumberFilter().generateArray() → Результат: [2, 4, 6, 8]

// class NumberArrayGenerator{
//     generateArray(){
//         const arr = [];
//         for(let i = 1;i<=8;i++){
//             arr.push(i)
//         }
//         return arr;
//     }
// }
// class EvenNumberFilter extends NumberArrayGenerator{
//     generateArray(){
//        const arr = super.generateArray();
//        return arr.filter(el=>el%2==0);
//     }
// }
// const a = new EvenNumberFilter();
// console.log(a.generateArray());


//  9. Создайте родительский класс RandomNumberArrayGenerator, который будет генерировать массив
//  случайных чисел с помощью метода generateArray(). Затем создайте дочерний класс MultipleFilter,
//  который переопределяет метод generateArray() и оставляет в массиве только те числа, которые
//  кратны 3или7.
//  Входные: new MultipleFilter().generateArray() → Результат: [21, 14, 9] (может быть другим, так как числа
//  случайные)
//  Входные: new RandomNumberArrayGenerator().generateArray() → Результат: [13, 21, 8, 9, 14, 27] (может быть
//  другим, так как числаслучайные)

// class RandomNumberArrayGenerator{
//     generateArray(){
//         const arr = [];
//         for(let i = 0;i<10;i++){
//             arr.push(Math.round(Math.random()*100))
//         }
//         return arr;
//     }
// }
// class MultipleFilter extends RandomNumberArrayGenerator{
//     generateArray(){
//         const arr = super.generateArray();
//         return arr.filter(el=>(el%3==0 || el%7==0))
//     }
// }
// const a = new MultipleFilter();
// console.log(a.generateArray());


//  10. Создайте родительский классNumberProcessor, которыйбудет содержать массивчисел [1,-1,-4, 3, 3,
//  5, 4, 4, 2, 2, 2] и метод processNumbers(), который оставляет в массиве только положительные числа.
//  Затем создайте дочерний класс UniqueNumberProcessor, который переопределяет метод
//  processNumbers() и удаляет дубликаты измассива.
//  Входные: new NumberProcessor().processNumbers() → Результат: [1, 2, 3, 4, 5]

// class NumberProcesso{
//     arr = [1,-1,-4, 3, 3, 5, 4, 4, 2, 2, 2];
//     processNumbers(){
//         return this.arr.filter(el=>el>0);
//     }
// }
// class UniqueNumberProcessor extends NumberProcesso{
//     processNumbers(){
//        const arr = super.processNumbers();
//        const uniq=[];
//        for(let el of arr){
//         if(!uniq.includes(el)) uniq.push(el);
//        }
//        return uniq.sort();
//     }
// }
// const a = new UniqueNumberProcessor();
// console.log(a.processNumbers());


//  11.
//  *Создайте класс PascalsTriangle, который будет принимать количество строк
//  numRows и содержать метод generateTriangle(), возвращающий первые
//  numRowsстроктреугольникаПаскаля.
//  Входные: new PascalsTriangle(5).generateTriangle() → Результат: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1],
// [1, 4, 6, 4, 1]]
// Входные: new PascalsTriangle(1).generateTriangle() → Результат: [[1]]

class PascalsTriangle{
    constructor(numRows){
        this.numRows=numRows;
    }
    generateTriangle(){
        
    }
}