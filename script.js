function mediaDiaria(meta = 0, valor = 0, folga = 0) {
  const hoje = new Date();
  const diasNoMes = new Date(
    hoje.getFullYear(),
    hoje.getMonth() + 1,
    0,
  ).getDate();
  const diasUteis = diasNoMes - folga - hoje.getDate();
  window.console.log("Dias úteis restantes:", diasUteis);
  const media = (meta - valor) / diasUteis;
  return Math.max(0, media);
}

function percentual(meta = 0, valor = 0) {
  const percentual = (valor / meta) * 100;
  return percentual;
}

const media = document.querySelector("#media");
const form = document.querySelector("form");
const calendar = document.querySelector("#calendar");
const monthLabel = document.querySelector("#month-label");
const today = new Date();
let displayedMonth = new Date(today.getFullYear(), today.getMonth(), 1);

function renderCalendar() {
  const year = displayedMonth.getFullYear();
  const month = displayedMonth.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = displayedMonth.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });
  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  monthLabel.textContent = monthName;
  calendar.innerHTML = weekdays
    .map(
      (weekday) =>
        `<span class="calendar-day calendar-weekday" role="columnheader">${weekday}</span>`,
    )
    .join("");

  for (let blank = 0; blank < firstWeekday; blank += 1) {
    calendar.insertAdjacentHTML(
      "beforeend",
      '<span class="calendar-day" aria-hidden="true"></span>',
    );
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const classes = ["calendar-day", "calendar-date"];

    if (isToday) classes.push("is-today");
    if (isWeekend) classes.push("is-weekend");

    calendar.insertAdjacentHTML(
      "beforeend",
      `<span class="${classes.join(" ")}" role="gridcell"${isToday ? ' aria-current="date"' : ""}>${day}</span>`,
    );
  }
}

document.querySelector("#previous-month").addEventListener("click", () => {
  displayedMonth = new Date(
    displayedMonth.getFullYear(),
    displayedMonth.getMonth() - 1,
    1,
  );
  renderCalendar();
});

document.querySelector("#next-month").addEventListener("click", () => {
  displayedMonth = new Date(
    displayedMonth.getFullYear(),
    displayedMonth.getMonth() + 1,
    1,
  );
  renderCalendar();
});

renderCalendar();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = document.querySelector("#valor").value;
  const meta = document.querySelector("#meta").value;
  const folga = document.querySelector("#folga").value;

  const mediaCalculada = mediaDiaria(meta, valor, folga);
  const percentualCalculado = percentual(meta, valor);
  media.innerHTML = `
  Percentual atingido: ${percentualCalculado.toFixed(2)}%
  <br>
  Média diária para atingimento da meta: ${mediaCalculada.toFixed(2)}
  `;
});
