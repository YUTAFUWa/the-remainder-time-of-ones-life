let newElm = '';

const elm = document.getElementById('age');
const answer = document.getElementById('answer');
const btn = document.getElementById('btn');


// 選べる年齢の選択肢
const addDom = () => {
  for (let i = 0; i <= 100; i++) {
    if ( i == 50) {
      newElm += '<option value="0" selected> 選んでください▼ </option>\n';
    }
    newElm += '<option value=${i}> ${i}歳▼ </option>\n';
  }
  elm.innerHTML = newElm;
};
addDom();


// 選択した年齢の情報を取得

// 結果はHTMLで、
// displayをnoneで作成。
// inlineもしくはblockに変更すればいい？



// ボタンが押下された時に結果を表示する
btn.addEventListener('click',() => {})





// 平均寿命から選択した年齢を引き算して残りの寿命を出す
const cal = () => {
  
}




