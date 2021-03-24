// const val1 = ['dog', 'cat'];
// val1[0] = 'bird'
// val1.push('monkey')
// console.log(val1);

// // 分割代入
// const myProfile = {
//   name: "kotaro",
//   age: 31,
// };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// // console.log(message1);

// // 分割代入
// const {age, name} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// 分割代入を配列にも利用
// const myProfile = ['kotaro', 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

// default
// テンプレート文字列
// const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん`);
// sayHello('kotaro')
// sayHello()

// スプレッド構文　...
// 配列の展開
// ドット３つを書いた後に配列を設定すると配列の中身を順番に処理
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // イコールではダメか
// // →参照が引き継がれている。元の配列に影響を受けてしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

// const nameArr = ['田中', '山田', 'じゃけえ']
// const newNameArr = nameArr.map((name) => {
//   if (name === 'じゃけえ'){
//     return name
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

// 三項演算子
// ある条件？条件がtrueの時：条件がFalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

const num = 1300;

// console.log(num.toLocaleString());
// toLocaleString 3桁区切り

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です";
};
console.log(checkSum(50, 40));

// 論理演算子の本当の意味をしる
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("１か２はtrueになります");
}
if (flag1 && flag2) {
  console.log("１も２もtrueになります");
}
