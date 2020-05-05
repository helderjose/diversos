clear();

// tela welcome
// diagnosticScreen = {};
diagnosticScreens = [
	{
		name: "welcome",
		file: "welcome.vue",
		tags: [
			"data-gtm-event-category: " + $x("//div[@id='welcome']//button")[0].attributes['data-gtm-event-category'].nodeValue,
			"data-gtm-event-label: " + $x("//div[@id='welcome']//button")[0].attributes['data-gtm-event-label'].nodeValue,
			"data-gtm-event-action: " + $x("//div[@id='welcome']//button")[0].attributes['data-gtm-event-action'].nodeValue
		]
	}
]

// date = new Date();
// fileName = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`


function saveTextAsFile() {
	var textToWrite = `Tela: ${diagnosticScreens[0].name}
Botão: Vamos lá
${diagnosticScreens[0].tags[0]}
${diagnosticScreens[0].tags[1]}
${diagnosticScreens[0].tags[2]}
`;
	let date = new Date();
	let textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
	let fileNameToSaveAs = `welcome-${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
	let downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null) {
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else {
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

saveTextAsFile();
