let newAge = '';
let averageLife = '';

const age = document.getElementById('age');
const answer = document.getElementById('answer');
const btn = document.getElementById('btn');
const agePlace = document.getElementById('agePlace');
// const averageLife = 81.47;
// 2021年の平均寿命は男性81.47、女性87.57
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



// 選択した年齢の情報を取得
btn.addEventListener('click',getAge);

function getAge(){

  const selectValue = gender.value;
  if(selectValue == "men"){
    averageLife = 81.47;
  } else{
    averageLife = 87.57;
  }
  const selectAge = age.value;
  const remainingLife = averageLife - selectAge;
  let remainingTime = remainingLife * 365.25 * 24;
  remainingTime = Math.round(remainingTime);
  const formatter = new Intl.NumberFormat('ja-JP');
  answer.innerHTML = "あなたは平均してあと" + formatter.format(remainingTime) + "時間生きられます。";
};
