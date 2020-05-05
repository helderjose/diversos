
clear();
tags = '';

// dashboard - btn Preciso de ajuda
$x("//a[contains(text(), 'Preciso de ajuda')]").forEach((btn) => {
  let dataGtmEventCategory = btn.attributes.getNamedItem("data-gtm-event-category");
  let dataGtmEventLabel = btn.attributes.getNamedItem("data-gtm-event-label");
  let dataGtmEventAction = btn.attributes.getNamedItem("data-gtm-event-action");

  dataGtmEventCategory = dataGtmEventCategory ? dataGtmEventCategory.textContent : dataGtmEventCategory;
  dataGtmEventLabel = dataGtmEventLabel ? dataGtmEventLabel.textContent : dataGtmEventLabel;
  dataGtmEventAction = dataGtmEventAction ? dataGtmEventAction.textContent : dataGtmEventAction;

  tags += `Dashboard - btn - ${btn.innerText}
data-gtm-event-category=${dataGtmEventCategory}
data-gtm-event-label=${dataGtmEventLabel}
data-gtm-event-action=${dataGtmEventAction}

`;
});



if(tags)
  console.log(tags)
