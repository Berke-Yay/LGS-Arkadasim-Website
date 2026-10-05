/* Sayfa çizilmeden önce çalışır: animasyon açıksa açılış öğelerini baştan gizli başlatır.
   Böylece içerik bir an görünüp sonra kaybolup yeniden belirmez (titreme/donukluk olmaz). */
(function () {
  try {
    var m = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!m && 'IntersectionObserver' in window) document.documentElement.classList.add('motion');
  } catch (e) { /* sorun olursa animasyonsuz devam */ }
})();
