function YandexMetrikaInformer() {
  var first = document.createElement('a');
  first.setAttribute('href', 'https://metrika.yandex.by/stat/?id=41169954&amp;from=informer');
  first.setAttribute('target', '_blank');
  first.setAttribute('rel', 'nofollow');
  var second = document.createElement('img');
  second.setAttribute('src', 'https://informer.yandex.ru/informer/41169954/3_1_FFFFFFFF_EFEFEFFF_0_pageviews');
  second.setAttribute('width', '88');
  second.setAttribute('height', '31');
  second.setAttribute('alt', 'Яндекс.Метрика');
  second.setAttribute('title', 'Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)');
  second.setAttribute('class', 'ym-advanced-informer');
  second.setAttribute('data-cid', '41169954');
  second.setAttribute('data-lang', 'ru');
  first.appendChild(second);
  document.querySelector('#metrik').appendChild(first);
}
function YandexMetrikaCounter() {
  var yaScript = '(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter41169954 = new Ya.Metrika({ id:41169954, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");';
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.text = yaScript;
  document.querySelector('#metrik').appendChild(script);
}
function GoogleUA() {
  var GoogleUA = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-53949817-1', 'auto');ga('send', 'pageview');";
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.text = GoogleUA;
  document.querySelector('#metrik').appendChild(script);
}
function loadMetrik() {
  YandexMetrikaInformer();
  YandexMetrikaCounter();
  GoogleUA();
}
window.addEventListener('load', loadMetrik);
window.addEventListener('unload', () => {
  window.removeEventListener('load', loadMetrik);
});
