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

const supportWidget = document.createElement("div");
supportWidget.className = "support-widget";
supportWidget.innerHTML = `
  <section class="support-panel" aria-label="Чат поддержки" aria-hidden="true" inert>
    <header class="support-header">
      <div><strong>Поддержка CyberZone</strong><span>На связи круглосуточно</span></div>
      <button class="support-close" type="button" aria-label="Закрыть чат">×</button>
    </header>
    <div class="support-log" role="log" aria-live="polite">
      <p class="support-message support-message-agent">Привет! Выбери вопрос — подскажу.</p>
    </div>
    <div class="support-questions">
      <button type="button" data-question="booking">Как забронировать место?</button>
      <button type="button" data-question="prices">Сколько стоит игра?</button>
      <button type="button" data-question="address">Где находится клуб?</button>
    </div>
  </section>
  <button class="support-toggle" type="button" aria-expanded="false" aria-label="Открыть чат поддержки">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5 8 8 0 0 1-3.5-.8L4 20l1.2-4A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></svg>
    <span>Поддержка</span>
  </button>`;
document.body.append(supportWidget);

const supportToggle = supportWidget.querySelector(".support-toggle");
const supportPanel = supportWidget.querySelector(".support-panel");
const supportLog = supportWidget.querySelector(".support-log");
const supportAnswers = {
  booking: "Выбери игровую зону, дату и время в форме бронирования. После отправки заявки администратор позвонит для подтверждения.",
  prices: "Стоимость зависит от игровой зоны и длительности игры. Тарифы и пакетные предложения собраны на странице услуг.",
  address: "Мы находимся в Москве по адресу: ул. Тверская, 12. Клуб открыт круглосуточно."
};

const closeSupport = () => {
  supportPanel.classList.remove("is-open");
  supportPanel.setAttribute("aria-hidden", "true");
  supportPanel.inert = true;
  supportToggle.setAttribute("aria-expanded", "false");
  supportToggle.setAttribute("aria-label", "Открыть чат поддержки");
};

supportToggle.addEventListener("click", () => {
  const isOpen = supportPanel.classList.contains("is-open");
  if (isOpen) {
    closeSupport();
    return;
  }

  supportPanel.inert = false;
  supportPanel.setAttribute("aria-hidden", "false");
  supportPanel.classList.add("is-open");
  supportToggle.setAttribute("aria-expanded", "true");
  supportToggle.setAttribute("aria-label", "Закрыть чат поддержки");
});
supportWidget.querySelector(".support-close").addEventListener("click", closeSupport);
supportWidget.querySelectorAll("[data-question]").forEach((button) => {
  button.addEventListener("click", () => {
    const question = button.textContent;
    const userMessage = document.createElement("p");
    userMessage.className = "support-message support-message-user";
    userMessage.textContent = question;
    supportLog.append(userMessage);

    const answer = document.createElement("p");
    answer.className = "support-message support-message-agent";
    answer.textContent = supportAnswers[button.dataset.question];
    supportLog.append(answer);
    supportLog.scrollTop = supportLog.scrollHeight;
  });
});

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
  const zone = bookingForm.querySelector("#zone");
  const seats = bookingForm.querySelector("#seats");
  const duration = bookingForm.querySelector("#bookingHours");
  const estimate = bookingForm.querySelector("#bookingEstimate");
  const breakdown = bookingForm.querySelector("#bookingBreakdown");

  const updateBookingEstimate = () => {
    const option = zone.selectedOptions[0];
    const hours = Number(duration.value);
    const rate = Number(option.dataset.rate);
    const isRoomRate = option.dataset.unit === "room";
    const seatCount = isRoomRate ? 1 : Number(seats.value);

    if (!rate || !Number.isInteger(hours) || hours < 1 || hours > 24) {
      estimate.textContent = "—";
      breakdown.textContent = "Выбери игровую зону и длительность от 1 до 24 часов.";
      return;
    }

    const total = rate * hours * seatCount;
    estimate.textContent = `${new Intl.NumberFormat("ru-RU").format(total)} ₽`;
    const seatUnit = seatCount === 1 ? "место" : seatCount < 5 ? "места" : "мест";
    breakdown.textContent = isRoomRate
      ? `${new Intl.NumberFormat("ru-RU").format(rate)} ₽/ч за комнату × ${hours} ч`
      : `${new Intl.NumberFormat("ru-RU").format(rate)} ₽/ч × ${hours} ч × ${seatCount} ${seatUnit}`;
  };

  const updateMinimumVisitTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    visitTime.min = now.toISOString().slice(0, 16);
  };

  updateMinimumVisitTime();
  updateBookingEstimate();

  zone.addEventListener("change", updateBookingEstimate);
  seats.addEventListener("change", updateBookingEstimate);
  duration.addEventListener("input", updateBookingEstimate);
  bookingForm.querySelectorAll("[data-hours-change]").forEach((button) => {
    button.addEventListener("click", () => {
      const step = Number(button.dataset.hoursChange);
      const currentHours = Number(duration.value) || Number(duration.min);
      const nextHours = Math.min(Number(duration.max), Math.max(Number(duration.min), currentHours + step));
      duration.value = String(nextHours);
      updateBookingEstimate();
    });
  });

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
    const selectedZone = formData.get("zone");
    const selectedHours = formData.get("duration");
    bookingMessage.textContent = `Спасибо, ${guestName}! Заявка подготовлена: ${selectedZone}, ${selectedHours} ч. Предварительная стоимость — ${estimate.textContent}. Для подтверждения бронирования позвони нам по телефону +7 (495) 123-45-67.`;
    bookingMessage.classList.remove("d-none");
    bookingForm.reset();
    bookingForm.classList.remove("was-validated");
    updateMinimumVisitTime();
    updateBookingEstimate();
    bookingMessage.focus();
  });
}
