class Vytvoreni {
	constructor() {
		// Načtení všech Id pojištencu z localStorage
		this._vsechnaId = JSON.parse(localStorage.getItem('pojistenci-vsechna-id')) || [];

		// Inicializace prazdnách polí pro uložení pojištenců
		this._pojistenci = [];

		// Naačtení jednotlivých pojištenců pomocí ID
		for (const pojistenecID of this._vsechnaId) {
			const pojistenec = JSON.parse(localStorage.getItem('pojistenec-' + pojistenecID));
			this._pojistenci.push(
				new Pojistenec(pojistenec.id, pojistenec.jmeno, pojistenec.prijmeni, pojistenec.vek, pojistenec.telefon)
			);
		}

		// Inicializace metody pro vytváření nového pojištence
		this._vytvoreniNovehoPojistence();
	}

	// Vytvoření nového pojištence
	_vytvoreniNovehoPojistence() {
		// Ziskaní informaci pro tlačítko pro vytvoření pojištence
		const vytvoritPojistence = document.getElementById('vytvorit-pojistenec');
		// Nastavení kliknutí na tlačítko
		vytvoritPojistence.onclick = (e) => {
			e.preventDefault();

			// Generace nového ID pro pojištence
			let id = 0;
			if (this._vsechnaId.length) id = this._vsechnaId[this._vsechnaId.length - 1] + 1;

			// Ziskavání informaci z polí
			let jmeno = document.getElementById("jmeno").value;
			let prijmeni = document.getElementById("prijmeni").value;
			let vek = document.getElementById("vek").value;
			let telefon = document.getElementById("telefon").value;
			let novyPojisteny = new Pojistenec(id, jmeno, prijmeni, vek, telefon);
			this._pojistenci.push(novyPojisteny);
			this._vsechnaId.push(id);

			// Uložení aktualizovaného seznamu a nového pojištence do localStorage
			localStorage.setItem('pojistenci-vsechna-id', JSON.stringify(this._vsechnaId));
			localStorage.setItem('pojistenec-' + novyPojisteny.id, JSON.stringify(novyPojisteny));

			// Výpis nového pojitence do konzole
			console.log(JSON.stringify(novyPojisteny))
		};
	}
}
