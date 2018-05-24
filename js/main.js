//Javascript
//video element
var video = document.getElementById('camera');

//video element（プレビュー画面）をクリックして撮影
video.addEventListener("click", function() {
    take_picture()
});

//テキストクリック撮影（撮影トリガー 1）
$("#rec").click(function() {
    take_picture()
});

//撮影関数
function take_picture() {
    //videoのstreamをcanvasに書き出す方法
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    //videoの縦幅横幅を取得
    var w = video.offsetWidth;
    var h = video.offsetHeight;    
    canvas.setAttribute("width", w);
    canvas.setAttribute("height", h);
    ctx.drawImage(video, 0, 0, w, h);

    //canvasを更にimgに書き出す方法
    var img = document.getElementById('img');
    img.src = canvas.toDataURL('img/png');
}