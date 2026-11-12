const bookingForm = document.querySelector("#bookingForm");
const footer = document.querySelector(".site-footer");

if (footer) {
  footer.innerHTML = `
    <div class="container">
      <div class="footer-main">
        <div class="footer-about">
          <a class="brand" href="index.html"><span class="brand-mark">C</span> CYBER<span>ZONE</span></a>
          <p>Твоя территория побед. Мощные компьютеры, комфортные игровые зоны и дружеская атмосфера — каждый день, круглосуточно.</p>
        </div>
        <nav class="footer-column" aria-label="Навигация в подвале">
          <h2>НАВИГАЦИЯ</h2>
          <a href="index.html">Главная</a>
          <a href="catalog.html">Игровые зоны</a>
          <a href="prices.html">Услуги</a>
        </nav>
        <div class="footer-column footer-contacts">
          <h2>КОНТАКТЫ</h2>
          <a href="https://maps.google.com/?q=Москва,+Тверская+улица,+12">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            <span>Москва, ул. Тверская, 12</span>
          </a>
          <div class="footer-phone">
            <a href="tel:+74951234567">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z"/></svg>
              <span>+7 (495) 123-45-67</span>
            </a>
            <span class="footer-hours">Отвечаем круглосуточно</span>
          </div>
          <a href="mailto:hello@cyberzone.ru">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            <span>hello@cyberzone.ru</span>
          </a>
          <div class="footer-socials">
            <a href="https://t.me/" aria-label="Telegram" rel="noreferrer" target="_blank"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 3-4 18-6-5-3 3v-6l11-8-14 7-5-2 21-7Z"/></svg></a>
            <a href="https://vk.com/" aria-label="ВКонтакте" rel="noreferrer" target="_blank"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h3c.4 4 2.1 5.7 3.4 6.1V7h2.8v3.5c1.3-.1 2.7-1.7 3.2-3.5h2.8a9.5 9.5 0 0 1-2.9 5c1.6.7 3 2.2 3.8 4.5h-3.2a5 5 0 0 0-3.7-3v3h-.5C7.2 16.5 3.3 13 3 7Z"/></svg></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} CYBERZONE. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</span>
      </div>
    </div>`;
}

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  const updateBackToTop = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 360);
  };

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (bookingForm) {
  const visitTime = bookingForm.querySelector("#visitTime");
  const bookingMessage = document.querySelector("#bookingMessage");

  const updateMinimumVisitTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    visitTime.min = now.toISOString().slice(0, 16);
  };

  updateMinimumVisitTime();

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    bookingForm.classList.add("was-validated");

    if (!bookingForm.checkValidity()) {
      bookingForm.querySelector(":invalid")?.focus();
      return;
    }

    const formData = new FormData(bookingForm);
    const guestName = formData.get("name");
    bookingMessage.textContent = `Спасибо, ${guestName}! Заявка подготовлена. Для подтверждения бронирования позвони нам по телефону +7 (495) 123-45-67.`;
    bookingMessage.classList.remove("d-none");
    bookingForm.reset();
    bookingForm.classList.remove("was-validated");
    updateMinimumVisitTime();
    bookingMessage.focus();
  });
}
