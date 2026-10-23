(function () {
  var D = window.LOVE;
  var lang = "am";
  try { lang = localStorage.getItem("lang") || "am"; } catch (e) {}
  if (lang !== "en" && lang !== "am") lang = "am";

  var $ = function (id) { return document.getElementById(id); };
  var dayNumber = Math.floor(Date.now() / 86400000);
  var verseIdx = dayNumber % D.verses.length;
  var reasonIdx = -1;

  function t() { return D.ui[lang]; }
  function plural(pair, n) { return n === 1 ? pair[0] : pair[1]; }

  function daysTogether() {
    var s = new Date(D.startDate + "T00:00:00");
    var now = new Date();
    if (isNaN(s.getTime()) || s > now) return null;
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var total = Math.round((today - s) / 86400000);
    var y = now.getFullYear() - s.getFullYear();
    var m = now.getMonth() - s.getMonth();
    var d = now.getDate() - s.getDate();
    if (d < 0) { m--; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (m < 0) { y--; m += 12; }
    return { total: total, y: y, m: m, d: d };
  }

  function renderVerse() {
    var v = D.verses[verseIdx];
    $("verseText").textContent = "\u201C" + v[lang] + "\u201D";
    $("verseRef").textContent = v.ref[lang];
  }

  function renderReason() {
    $("reasonText").textContent = reasonIdx < 0 ? t().reasonStart : D.reasons[reasonIdx][lang];
  }

  function renderStatic() {
    var u = t();
    document.documentElement.lang = lang;
    $("brand").textContent = u.brand;
    $("langBtn").textContent = u.lang;
    $("title").textContent = u.title;
    $("subtitle").textContent = u.subtitle;
    $("verseTitle").textContent = u.verseTitle;
    $("nextVerse").textContent = u.nextVerse;
    $("daysTitle").textContent = u.daysTitle;
    $("lettersTitle").textContent = u.lettersTitle;
    $("reasonsTitle").textContent = u.reasonsTitle;
    $("nextReason").textContent = u.nextReason;
    $("prayerTitle").textContent = u.prayerTitle;
    $("prayerText").textContent = D.prayer[lang];
    $("storyTitle").textContent = u.storyTitle;
    $("footer").textContent = u.footer;

    var dt = daysTogether();
    if (dt) {
      $("daysNum").textContent = dt.total.toLocaleString("en-US");
      $("daysDetail").textContent = dt.y + " " + plural(u.year, dt.y) + ", " +
        dt.m + " " + plural(u.month, dt.m) + ", " + dt.d + " " + plural(u.day, dt.d);
    } else {
      $("daysNum").textContent = "\u221E";
      $("daysDetail").textContent = u.daysUnit;
    }

    var box = $("letters");
    box.textContent = "";
    D.letters.forEach(function (l) {
      var det = document.createElement("details");
      var sum = document.createElement("summary");
      sum.textContent = t().lettersTitle.replace("...", "") + " " + l.title[lang];
      var p = document.createElement("p");
      p.textContent = l[lang];
      det.appendChild(sum);
      det.appendChild(p);
      box.appendChild(det);
    });

    var tl = $("timeline");
    tl.textContent = "";
    D.timeline.forEach(function (e) {
      var li = document.createElement("li");
      var date = document.createElement("span");
      date.className = "date";
      var dd = new Date(e.date + "T00:00:00");
      date.textContent = isNaN(dd.getTime()) ? e.date :
        dd.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
      var txt = document.createElement("span");
      txt.textContent = e[lang];
      li.appendChild(date);
      li.appendChild(txt);
      tl.appendChild(li);
    });

    renderVerse();
    renderReason();
  }

  $("langBtn").addEventListener("click", function () {
    lang = lang === "am" ? "en" : "am";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    renderStatic();
  });
  $("nextVerse").addEventListener("click", function () {
    verseIdx = (verseIdx + 1) % D.verses.length;
    renderVerse();
  });
  $("nextReason").addEventListener("click", function () {
    var next;
    do { next = Math.floor(Math.random() * D.reasons.length); }
    while (D.reasons.length > 1 && next === reasonIdx);
    reasonIdx = next;
    renderReason();
  });

  renderStatic();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }
})();