class Pojistenec {
	constructor(id, jmeno, prijmeni, vek, telefon, parentClass) {
		this.id = id;
		this.jmeno = jmeno;
		this.prijmeni = prijmeni;
		this.vek = vek;
		this.telefon = telefon;
		this.parentClass = parentClass;
		this._vytvorHTML();
	}
    // Metoda pro vytvoření HTML
	_vytvorHTML() {
		let pojistenec = document.createElement("tr"); // Vytvoření řádku tabulky
		pojistenec.setAttribute("data-id", this.id);

		// Vytvoření buněk tabulky pro jednotlivé údaje
		let jmenoTD = document.createElement("td");
		let vekTD = document.createElement("td");
		let telefonTD = document.createElement("td");
		let smazatTD = document.createElement("td");
		let smazatButton = document.createElement("button");

		jmenoTD.textContent = `${this.jmeno} ${this.prijmeni}`;
		telefonTD.textContent = this.telefon;
		vekTD.textContent = this.vek;
		smazatButton.textContent = "Smazat";
		smazatButton.onclick = () => {
			this._smazat();
		};

		smazatTD.appendChild(smazatButton);
		pojistenec.appendChild(jmenoTD);
		pojistenec.appendChild(telefonTD);
		pojistenec.appendChild(vekTD);
		pojistenec.appendChild(smazatTD);

		let tabule = document.getElementById("tabule");
		tabule.appendChild(pojistenec);
	}

	// Metoda pro mazaní pojištěnce
	_smazat() {
		let tabule = document.getElementById("tabule");
		let pojistenec = tabule.querySelector(`tr[data-id='${this.id}']`);
		tabule.removeChild(pojistenec);
		this.parentClass.odstranitPojistence(this.id);
	}
}
// Funkce pro zamezení čisel do textových poli 
function zamezitCislum(event) {
	const regex = /[0-9]/g;
	if (regex.test(event.key)) {
		event.preventDefault();
	}
}
// Obsluha pro zamezení čisel do polí pro jméno a přijmení
document.getElementById('jmeno').addEventListener('keydown', zamezitCislum);
document.getElementById('prijmeni').addEventListener('keydown', zamezitCislum);

document.getElementById('jmeno').addEventListener('input', function (event) {
	this.value = this.value.replace(/[0-9]/g, '');
});
document.getElementById('prijmeni').addEventListener('input', function (event) {
	this.value = this.value.replace(/[0-9]/g, '');
});