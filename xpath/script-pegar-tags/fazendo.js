// clear();

// try{
//   if (execution === 0) {
//     execution = 1;
//   }
// }catch(exception) {
//   execution = 0;
//   diagnosticScreens = [];
// }

diagnosticScreens = [];



// welcome
welcomeScreen = {
  name: "welcome",
  file: "welcome.vue",
  title: "Olá <nome do usuário logado>",
  tags: [
    // "data-gtm-event-category: " + $x("//div[@id='welcome']//button")[0].attributes['data-gtm-event-category'].nodeValue,
    // "data-gtm-event-label: " + $x("//div[@id='welcome']//button")[0].attributes['data-gtm-event-label'].nodeValue,
    // "data-gtm-event-action: " + $x("//div[@id='welcome']//button")[0].attributes['data-gtm-event-action'].nodeValue
  ]
}


productSelectionScreen = {
  name: "product selection",
  file: "product-selection.vue",
  title: "Com o que você precisa de ajuda?",
  optionsTags: [
    {
      option: "Com a Internet",
      tags: [

      ]
    },
    {
      option: "Com a TV",
      tags: [

      ]
    },
  ],
  btnAvancarTags: []
}

issueSelectionScreen = {
  name: "issue selection",
  file: "issue-selection.vue",
  optionsTags: [],
  buttonsTags : [],
  buttonsModalPilhaControleTags: [],
  // modal aviso cobranca
  buttonsModalPilhaControleTags: []
}

function getWelcomeScreenTags() {

  if( ! $x("//div[@id='welcome']").length ) {
    return;
  }

  // pega todos os buttons do div com id welcome, nesse caso só tem um.
  let btnVamosLa = $x("//div[@id='welcome']//button") ? $x("//div[@id='welcome']//button")[0] : null;
  let elementTags = [];

  if (btnVamosLa) {
    elementTags =  [
      "data-gtm-event-category: " + btnVamosLa.attributes['data-gtm-event-category'].nodeValue,
      "data-gtm-event-label: " + btnVamosLa.attributes['data-gtm-event-label'].nodeValue,
      "data-gtm-event-action: " + btnVamosLa.attributes['data-gtm-event-action'].nodeValue
    ]
    welcomeScreen.tags = elementTags;
    putInDiagnosticScreens(welcomeScreen);
  }
}

function getProductSelectionScreenTags() {
  if( ! $x("//div[@id='product-selection']").length ) {
    return;
  }

  let productsLi = $x("//div[@class='check-component']");
  let screenOptionSkeleton = {
    option: "Com a Internet",
    tags: [
      "data-gtm-event-category: " + "tag name",
      "data-gtm-event-label: " + "tag name",
      "data-gtm-event-action: " + "tag name"
    ]
  };
  let elementTags = [];
  let btnAvancar = $x("//div[@id='product-selection']//button") ? $x("//div[@id='product-selection']//button")[0] : null;

  productsLi.forEach((productLi) => {
    screenOptionSkeleton.option = productLi.textContent.trim();
    //todo: mudar para json para evitar confusão com o "espaço"
    screenOptionSkeleton.tags = [
      "data-gtm-event-category: " + productLi.attributes.getNamedItem("data-gtm-event-category").textContent,
      "data-gtm-event-label: " + productLi.attributes.getNamedItem("data-gtm-event-label").textContent,
      "data-gtm-event-action: " + productLi.attributes.getNamedItem("data-gtm-event-action").textContent,
    ]
    elementTags.push(screenOptionSkeleton);
    screenOptionSkeleton = {};
  });

  productSelectionScreen.optionsTags = elementTags;

  if(btnAvancar) {
    productSelectionScreen.btnAvancarTags = [
      "data-gtm-event-category: " + btnAvancar.attributes.getNamedItem("data-gtm-event-category"),
      "data-gtm-event-label: " + btnAvancar.attributes.getNamedItem("data-gtm-event-label"),
      "data-gtm-event-action: " + btnAvancar.attributes.getNamedItem("data-gtm-event-action")
    ]
  }

  putInDiagnosticScreens(productSelectionScreen)
}


// issue
function getIssueSelectionScreenTags() {

  if( ! $x("//div[@id='issue-selection']").length ) {
    return;
  }

  let issuesLi = $x("//div[@class='check-component']");
  // pega soh os botoes da pagina, nao pega do modal
  let buttons = $x("//div[@id='issue-selection']//div[@class='action__buttons']//button");
  // modal pilha do controle remoto
  let isModalControlBatery = $x("//div[contains(@class,'modal_box')]//p[contains(text(), 'verifique as pilhas')]").length;
  // modal aviso de cobranca
  let isBillingWarning = $x("//div[contains(@class,'modal_box')]//p[contains(text(), 'condições de cobrança')]").length;
  let buttonsModalPilhacontrole = $x("//div[contains(@class,'modal')]//button");
  let buttonsModalBillinWarning = $x("//div[contains(@class,'modal_box') and //p[contains(text(), 'condições de cobrança')]]//button");
  let optionsTags = [];
  let buttonsTags = [];
  let buttonsModalPilhaControleTags = [];
  let buttonsModalBillinWarningTags = [];
  let optionSkeleton = {
    optionLabel: "Imagem ruim",
    tags: {
      dataGtmEventCategory: "tag name",
      dataGtmEventLabel: "tag name",
      dataGtmEventAction: "tag name"
    }
  };

  let buttonSkeleton = {
    btnText: "lorem ipsum",
    tags: {
      dataGtmEventCategory: "tag name",
      dataGtmEventLabel: "tag name",
      dataGtmEventAction: "tag name"
    }
  };

  // options
  issuesLi.forEach((issueLi) => {
    optionSkeleton.optionLabel = issueLi.textContent.trim();
    optionSkeleton.tags.dataGtmEventCategory = issueLi.parentElement.attributes.getNamedItem("data-gtm-event-category").textContent;
    optionSkeleton.tags.dataGtmEventLabel = issueLi.parentElement.attributes.getNamedItem("data-gtm-event-label").textContent;
    optionSkeleton.tags.dataGtmEventAction = issueLi.parentElement.attributes.getNamedItem("data-gtm-event-action").textContent;

    optionsTags.push(new Object(optionSkeleton));

  	optionSkeleton = {};
    optionSkeleton.tags = {};
  });

  // botoes voltar e avancar
  buttons.forEach((btn) => {
    buttonSkeleton.btnText = btn.textContent.trim();
    buttonSkeleton.tags.dataGtmEventCategory = btn.attributes.getNamedItem("data-gtm-event-category").textContent;
    buttonSkeleton.tags.dataGtmEventLabel = btn.attributes.getNamedItem("data-gtm-event-label").textContent;
    buttonSkeleton.tags.dataGtmEventAction = btn.attributes.getNamedItem("data-gtm-event-action").textContent;

    buttonsTags.push(buttonSkeleton);
    buttonSkeleton = {};
    buttonSkeleton.tags = {};
  });

  // modal, verifique as pilhas do controle remoto
  if(isModalControlBatery) {

    buttonsModalPilhacontrole.forEach((btn) => {
      buttonSkeleton.btnText = btn.textContent.trim();
      buttonSkeleton.tags.dataGtmEventCategory = btn.attributes.getNamedItem("data-gtm-event-category").textContent;
      buttonSkeleton.tags.dataGtmEventLabel = btn.attributes.getNamedItem("data-gtm-event-label").textContent;
      buttonSkeleton.tags.dataGtmEventAction = btn.attributes.getNamedItem("data-gtm-event-action").textContent;

      buttonsModalPilhaControleTags.push(buttonSkeleton);
      buttonSkeleton = {};
      buttonSkeleton.tags = {};
    });

    issueSelectionScreen.buttonsModalPilhaControleTags = buttonsModalPilhaControleTags;
  }

  // modal aviso de cobranca
  if(isBillingWarning) {

    buttonsModalBillinWarning.forEach((btn) => {
      buttonSkeleton.btnText = btn.textContent.trim();
      buttonSkeleton.tags.dataGtmEventCategory = btn.attributes.getNamedItem("data-gtm-event-category").textContent;
      buttonSkeleton.tags.dataGtmEventLabel = btn.attributes.getNamedItem("data-gtm-event-label").textContent;
      buttonSkeleton.tags.dataGtmEventAction = btn.attributes.getNamedItem("data-gtm-event-action").textContent;

      buttonsModalBillinWarningTags.push(buttonSkeleton);
      buttonSkeleton = {};
      buttonSkeleton.tags = {};
    });

    issueSelectionScreen.buttonsModalBillinWarningTags = buttonsModalBillinWarningTags;
  }

  issueSelectionScreen.optionsTags = optionsTags;
  issueSelectionScreen.buttonsTags = buttonsTags;
  putInDiagnosticScreens(issueSelectionScreen);

}

function putInDiagnosticScreens(screenToAdd) {

  if( diagnosticScreens.length ) {

    if(diagnosticScreens.some((diagScreen) => {
      return diagScreen.name == screenToAdd.name;
    })) {
      diagnosticScreens.map((diagnosticScreen) => {
        if (diagnosticScreen.name == screenToAdd.name) {
          diagnosticScreen = screenToAdd;
        }
      });
    } else {
      console.log("no else")
      diagnosticScreens.push(screenToAdd);
    }


  } else {
    diagnosticScreens.push(screenToAdd);
  }

}

function getTags() {
  getWelcomeScreenTags();
  getProductSelectionScreenTags();
  getIssueSelectionScreenTags();
  console.log(diagnosticScreens)
}

// clear();
// getTags();







