let newAge = '';

const age = document.getElementById('age');
const answer = document.getElementById('answer');
const btn = document.getElementById('btn');
const agePlace = document.getElementById('agePlace');
const averageLife = 81.47;
const gender = document.getElementById('gender');

// 選べる年齢の選択肢
const addDom = () => {
  for (let i = 0; i <= 100; i++) {
    if ( i == 50) {
      newAge += `<option value="0" selected> 選んでください▼ </option>\n`;
    }
    newAge += `<option value=${i}> ${i}歳▼ </option>\n`;
  }
  age.innerHTML = newAge;
};
addDom();


// ↓↓↓averageLifeを男女ごとに分けてみる↓↓↓
// if(gender.value = 'men'){
//   averageLife = 81.47;
// }


// 選択した年齢の情報を取得
function getAge(){
  const selectAge = age.value;
  const remainingLife = averageLife - selectAge;
  const remainingTime = remainingLife * 365.25 * 24;
  answer.innerHTML = "平均的にあと" + remainingTime + "時間生きられます。";
};

// 結果はHTMLで、
// displayをnoneで作成。
// inlineもしくはblockに変更すればいい？
// ボタンが押下された時に結果を表示する
// 平均寿命から選択した年齢を引き算して残りの寿命を出す




