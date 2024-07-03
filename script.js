let btn = document.getElementById('test');

btn.addEventListener('click', () => { // 監聽此元素是否被點擊，若被點擊則執行內容
  alert("點到我了");                     // 跳出「點到我了」視窗
  btn.disabled = true;                  // 設為禁止點擊
});

function name(game) {
    console.log(game + "，啟動!");
  }
  
  name("原神");   // "原神，啟動！"
  name("星鐵");   // "星鐵，啟動！"

