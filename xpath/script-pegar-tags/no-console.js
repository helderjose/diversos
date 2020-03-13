
clear();
tags = '';

// welcome

// welcome botão vamos lá
$x("//div[@id='welcome']//button[contains(text(), 'Vamos')]").forEach((btn) => {
  tags += `welcome - botão Vamos Lá!
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}
`;
});



// product-selection - products
$x("//div[@id='product-selection']//li//div[contains(@class, 'check-component')]").forEach((btn) => {

//   console.log(btn.firstElementChild.attributes.getNamedItem("value").textContent)
  tags += `product-selection - ${btn.firstElementChild.attributes.getNamedItem("value").textContent}
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`;
});

// TODO: colocar tags
// product-selection botão voltar -  estah dando null porque estah sem tag

$x("//div[@id='product-selection']//button[contains(text(), 'Avançar')]").forEach((btn) => {
  try{
    tags +=
      `product-selection botão Avançar
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}
`;
  }catch(err){
    tags += `product-selection - botão Avançar
nao tem tags`
  }

});



// issue-selection issues
$x("//div[@id='issue-selection']//div[@id='options']//div[@id='items']/li").forEach((btn) => {
  tags += `issue-selection - ${btn.firstElementChild.innerText}
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`
});

// issue-selection botão voltar
$x("//div[@id='issue-selection']//div[@class='action__buttons']//button[contains(text(), 'Voltar')]").forEach((btn) => {
  tags += `issue-selection - botão Voltar
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`;
});

// issue-selection botão avancar
$x("//div[@id='issue-selection']//button[contains(text(), 'Avançar')]").forEach((btn) => {
  tags += `issue-selection - botão Avançar
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`;
});

// issue-selection modal pilhas do controle - voltar e continuar
  $x("//div[contains(@class,'modal_box') and //p[contains(text(), 'verifique as pilhas')]]//button").forEach((btn) => {
  tags += `issue-selection - botão ${btn.innerText} - modal verificar pilhas do controle
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`;
});


// ----- vt-type-selection -----
//  O que você prefere fazer agora? - continuar suporte pelo site e chamar um técnico
$x("//div[@id='vt-type-selection']//*[@class='option']").forEach((btn) => {
  tags += `O que você prefere fazer agora? - ${btn.firstChild.firstChild.innerText}
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`;
});

// O que você prefere fazer agora? - botão voltar
$x("//div[@id='vt-type-selection']//button").forEach((btn) => {
  tags += `O que você prefere fazer agora? - btn - ${btn.innerText}
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`;
});



// Está tudo certo por aí agora?
$x("//div[@id='resolved']//button").forEach((btn) => {
  tags += `Está tudo certo por aí agora? - btn ${btn.innerText}
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`;
});



// vamos começar? solution-steps
$x("//div[@id='solution-steps']//button[contains(text(), 'Vamos')]").forEach((btn) => {
  tags += `Vamos Começar? - botão ${btn.innerText}
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`;
});




/*
solution-steps - Passso 1/3 todos os passos usam os mesmos botões, só muda a tag
*/
$x("//div[@id='solution-steps']//button").forEach((btn) => {
  tags += `
solution-steps - ${$x("//p[contains(text(), 'Passo')]")[0].innerText} - btn ${btn.innerText}
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`;
});




// uma pena!
$x("//div[@id='schedule-vt']//div[@id='schedule-vt__message']//button").forEach((btn) => {
  tags +=`
schedule-vt - Uma Pena! - btn ${btn.innerText}
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`;
});





// aviso de cobrança
$x("//div[contains(@class,'modal_box') and //p[contains(text(), 'condições de cobrança')]]//button").forEach((btn) => {
  tags += `
Modal aviso de cobrança - btn continuar
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}

`;
});



// schedule-vt - Agendar Visita
$x("//div[@id='schedule-vt']//div[contains(@class, 'schedule-vt__schedule') and not(contains(@style, 'display: none'))]//button").forEach((btn) => {
  tags += `
Agendar Visita - btn - ${btn.innerText}
data-gtm-event-category=${btn.attributes.getNamedItem("data-gtm-event-category").textContent}
data-gtm-event-label=${btn.attributes.getNamedItem("data-gtm-event-label").textContent}
data-gtm-event-action=${btn.attributes.getNamedItem("data-gtm-event-action").textContent}
`;
});



if(tags)
  console.log(tags)











