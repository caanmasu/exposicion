const TYPE_BOOK = "book";

class FetchBook {
	get resources() {
		return [
			{ id: 1, title: "La Vor�gine - Jos� Eustasio Rivera" },
			{ id: 2, title: "La culpa es de la vaca - Lopera Guti�rrez" },
			{ id: 3, title: "Cien a�os de soledad - Gabo" }
		];
	}
	
	fetch(id) {
		return this.resources.find(item => item.id === id);
	}
}
