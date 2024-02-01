var now = new Date();
function createtime() {
  now.setTime(now.getTime() + 1e3);
  var e = new Date("01/01/2023 00:00:00"),
    t = Math.trunc(234e8 + ((now - e) / 1e3) * 17),
    a = (t / 1496e5).toFixed(6),
    o = new Date("01/01/2023 00:00:00"),
    n = (now - o) / 1e3 / 60 / 60 / 24,
    r = Math.floor(n),
    i = (now - o) / 1e3 / 60 / 60 - 24 * r,
    s = Math.floor(i);
  1 == String(s).length && (s = "0" + s);
  var d = (now - o) / 1e3 / 60 - 1440 * r - 60 * s,
    l = Math.floor(d);
  1 == String(l).length && (l = "0" + l);
  var g = (now - o) / 1e3 - 86400 * r - 3600 * s - 60 * l,
    b = Math.round(g);
  1 == String(b).length && (b = "0" + b);
  let c = "";
  (c =
    s < 18 && s >= 9
    // https://cdn.staticaly.com/gh/xiaozhao-student/picture_bed@main/imgs/睡觉中.svg https://pic.imgdb.cn/item/65bb797c871b83018a952d68.png
    // https://cdn.staticaly.com/gh/xiaozhao-student/picture_bed@main/imgs/摸鱼中.svg https://pic.imgdb.cn/item/65bb792f871b83018a94225c.png
      ? `<img class='boardsign' src='https://img2.imgtp.com/2024/02/01/60YrpsxS.svg' title='努力奋斗打工人！'><br> <div style="font-size:13px;font-weight:bold">本站居然已运行 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 </div>`
      : `<img class='boardsign' src='https://img2.imgtp.com/2024/02/01/kid5wJH0.svg' title='闲着没事就瞎搞～'><br> <div style="font-size:13px;font-weight:bold">本站居然已运行 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 </div>`),
    document.getElementById("workboard") &&
      (document.getElementById("workboard").innerHTML = c);
}
setInterval(() => {
  createtime();
}, 1e3);
