// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let sum = document.querySelector('span#kaisu');
let answer = document.querySelector('span#answer');
let result = document.querySelector('p#result');
let n = 0;

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu ++;

  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  sum.textContent = kaisu;
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso = document.querySelector('input[name="math"]');

  // ここまで: テキストボックスに指定された数値を yoso に代入する
  let yosoint = Number(yoso.value);
  answer.textContent = yosoint;
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  if (kaisu <= 3) {
    if (n === 1){
      result.textContent = '答えは ◯ でした．すでにゲームは終わっています';
    } else if (yosoint === kotae) {
      result.textContent = '正解です．おめでとう!';
      n ++;
    } else if (yosoint > kotae) {
      result.textContent = 'まちがい．答えはもっと小さいですよ';
    } else {
      result.textContent = 'まちがい．答えはもっと大きいですよ';
    }
  } else if (kaisu === 3 && yosoint !== kotae) {
    result.textContent('答えは ◯ でした．すでにゲームは終わっています');
  } else {
    result.textContent('答えは ◯ でした．すでにゲームは終わっています');
  }

  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b = document.querySelector('button#print');
b.addEventListener('click', hantei);

// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録