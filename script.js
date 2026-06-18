const PHONE = "5527995806969";

const messages = {
  pedido: "Olá! Vim pelo site do Churrasquinho Vianense e gostaria de fazer um pedido.",
  evento: "Olá! Vim pelo site do Churrasquinho Vianense e gostaria de solicitar um orçamento para evento.",
  domingo: "Olá! Vim pelo site do Churrasquinho Vianense e gostaria de pedir marmita de feijão tropeiro ou salpicão para domingo."
};

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  const type = link.getAttribute("data-whatsapp") || "pedido";
  const text = encodeURIComponent(messages[type] || messages.pedido);
  link.href = `https://wa.me/${PHONE}?text=${text}`;
  link.target = "_blank";
  link.rel = "noopener";
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

document.querySelectorAll(".nav a").forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
