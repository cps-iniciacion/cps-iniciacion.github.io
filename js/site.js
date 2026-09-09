/* CPS — comportamiento minimo: tema, progreso, aparicion, indice activo */
(function () {
  "use strict";

  /* --- Tema --------------------------------------------------------- */
  var root = document.documentElement;
  var KEY = "cps-tema";
  try {
    var guardado = localStorage.getItem(KEY);
    if (guardado === "dark" || guardado === "light") root.setAttribute("data-theme", guardado);
  } catch (e) {}

  function pintaBoton() {
    var b = document.querySelector(".themetoggle");
    if (!b) return;
    var oscuro = root.getAttribute("data-theme") === "dark";
    b.textContent = oscuro ? "☀" : "☾";
    b.setAttribute("aria-label", oscuro ? "Cambiar a claro" : "Cambiar a oscuro");
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".themetoggle");
    if (!b) return;
    var oscuro = root.getAttribute("data-theme") === "dark";
    root.setAttribute("data-theme", oscuro ? "light" : "dark");
    try { localStorage.setItem(KEY, oscuro ? "light" : "dark"); } catch (err) {}
    pintaBoton();
  });

  /* --- Barra de progreso -------------------------------------------- */
  var barra = document.querySelector(".progress");
  function progreso() {
    if (!barra) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    barra.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  }

  /* --- Aparicion ----------------------------------------------------- */
  var animables = [].slice.call(document.querySelectorAll(".rise"));
  if ("IntersectionObserver" in window && animables.length) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    animables.forEach(function (el) { io.observe(el); });
  } else {
    animables.forEach(function (el) { el.classList.add("in"); });
  }

  /* --- Indice lateral ------------------------------------------------ */
  var enlaces = [].slice.call(document.querySelectorAll(".toc a[href^='#']"));
  var dianas = enlaces
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  function indiceActivo() {
    if (!dianas.length) return;
    var y = window.scrollY + 140, activo = dianas[0];
    for (var i = 0; i < dianas.length; i++) if (dianas[i].offsetTop <= y) activo = dianas[i];
    enlaces.forEach(function (a) {
      a.classList.toggle("on", a.getAttribute("href") === "#" + activo.id);
    });
  }

  var pendiente = false;
  window.addEventListener("scroll", function () {
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(function () { progreso(); indiceActivo(); pendiente = false; });
  }, { passive: true });

  pintaBoton();
  progreso();
  indiceActivo();
})();
