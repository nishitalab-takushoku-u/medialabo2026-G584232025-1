
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for (let n of data.list.g1) {
    count += 1;
    console.log(count + "件目の検索結果");
    console.log("開始時刻：" + n.start_time);
    console.log("終了時刻：" + n.end_time);
    console.log("チャンネル：" + n.title);
    console.log("サブタイトル：" + n.subtitle);
    console.log("番組説明：" + n.content);
    console.log("出演者：" + n.act);
    console.log();
  }
}

let btn = document.querySelector('button#sendRequest');
btn.addEventListener('click', sendRequest);

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let d = document.createElement('div');
  d.setAttribute('id', 'result');
  let b = document.querySelector('main');
  b.insertAdjacentElement('beforeend', d);

  let c = document.querySelector('span#count');

  let h2, u, l;
  channel = document.querySelector('select[name="channel"]');
  channelName = channel.value;
  if (channelName === 'g1') {
    let count = data.list.g1.length;
    c.textContent = '検索結果' + count + '件';
    for (let n = 0; n < data.list.g1.length; n++) {
      h2 = document.createElement('h2');
      h2.setAttribute('id', 'title');
      d.insertAdjacentElement('beforeend', h2);
      h2.textContent = data.list.g1[n].title;

      u = document.createElement('ul');
      u.setAttribute('id', 'table');
      d.insertAdjacentElement('beforeend', u);

      l = document.createElement('li');
      l.setAttribute('id', 'list');
      l.textContent = 'サブタイトル：' + data.list.g1[n].subtitle;
      u.insertAdjacentElement('beforeend', l);

      l = document.createElement('li');
      l.setAttribute('id', 'list');
      l.textContent = '開始時刻：' + data.list.g1[n].start_time;
      u.insertAdjacentElement('beforeend', l);

      l = document.createElement('li');
      l.setAttribute('id', 'list');
      l.textContent = '終了時刻：' + data.list.g1[n].end_time;
      u.insertAdjacentElement('beforeend', l);

      l = document.createElement('li');
      l.setAttribute('id', 'list');
      l.textContent = 'チャンネル：' + data.list.g1[n].service.name;
      u.insertAdjacentElement('beforeend', l);

      l = document.createElement('li');
      l.setAttribute('id', 'list');
      l.textContent = '番組説明：' + data.list.g1[n].content;
      u.insertAdjacentElement('beforeend', l);

      l = document.createElement('li');
      l.setAttribute('id', 'list');
      l.textContent = '出演者：' + data.list.g1[n].act;
      u.insertAdjacentElement('beforeend', l);
    }
  } else {
    let count = data.list.e1.length;
    c.textContent = '検索結果' + count + '件';
    for (let n = 0; n < data.list.e1.length; n++) {
      h2 = document.createElement('h2');
      h2.setAttribute('id', 'title');
      d.insertAdjacentElement('beforeend', h2);
      h2.textContent = data.list.e1[n].title;

      u = document.createElement('ul');
      u.setAttribute('id', 'table');
      d.insertAdjacentElement('beforeend', u);

      l = document.createElement('li');
      l.setAttribute('id', 'list');
      l.textContent = 'サブタイトル：' + data.list.e1[n].subtitle;
      u.insertAdjacentElement('beforeend', l);

      l = document.createElement('li');
      l.setAttribute('id', 'list');
      l.textContent = '開始時刻：' + data.list.e1[n].start_time;
      u.insertAdjacentElement('beforeend', l);

      l = document.createElement('li');
      l.setAttribute('id', 'list');
      l.textContent = '終了時刻：' + data.list.e1[n].end_time;
      u.insertAdjacentElement('beforeend', l);

      l = document.createElement('li');
      l.setAttribute('id', 'list');
      l.textContent = 'チャンネル：' + data.list.e1[n].service.name;
      u.insertAdjacentElement('beforeend', l);

      l = document.createElement('li');
      l.setAttribute('id', 'list');
      l.textContent = '番組説明：' + data.list.e1[n].content;
      u.insertAdjacentElement('beforeend', l);

      l = document.createElement('li');
      l.setAttribute('id', 'list');
      l.textContent = '出演者：' + data.list.e1[n].act;
      u.insertAdjacentElement('beforeend', l);
    }
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let channel = document.querySelector('select[name="channel"]');
  let channelName = channel.value;

  let genre = document.querySelector('select[name="genres"]');
  let genresName = genres.value;

  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + channelName + '-' + genresName + '-j.json';

  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  if (typeof data == 'string') {
    data = JSON.parse(data);
  }

  let delet = document.querySelector('div#result');
  if (delet != null) {
    delet.remove();
  }
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
}

