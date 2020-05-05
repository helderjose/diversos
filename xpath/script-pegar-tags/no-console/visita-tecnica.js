
clear();
tags = '';

// $x("//button")
// $x("//section[@id= 'wifi-password-home']//button")
// $x("//section[@id= 'wifi-password-home']//div[contains(@class, 'wifiVisible')]//button")

// $x("//div[@id= 'technical-visit']//div[@id= 'list__visit']//div[contains(@class, 'list__visit__item__info')]//button")



// btns Reagendar e Cancelar Visita
$x("//div[@id= 'technical-visit']//div[@id= 'list__visit']//div[contains(@class, 'list__visit__item__info')]//button").forEach((btn) => {
  tags += `Visita Técnica btn - ${btn.innerText}
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`;
});

// Agendar Visita - btn Agendar visita
$x("//div[contains(@class, 'modal_box__windowed')]//div[contains(@class, 'schedule-visit__hour__actions')]//button").forEach((btn) => {
  // acho que o certo seria esse padrao
//   data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
// data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
// data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}
  tags += `Visita Técnica btn - ${btn.innerText}
data-gtm-category=${btn.attributes.getNamedItem("data-gtm-category").textContent}
data-gtm-label=${btn.attributes.getNamedItem("data-gtm-label").textContent}
data-gtm-action=${btn.attributes.getNamedItem("data-gtm-action").textContent}

`;
});

// Deseja cancelar a visita técnica agendada?
$x("//div[@id='list__visit']//div[contains(@class, 'modal_box')]//button").forEach((btn) => {
  if(btn.innerText) {
      tags += `Deseja cancelar a visita técnica agendada? btn - ${btn.innerText}
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`;
  }
});



if(tags)
  console.log(tags)











