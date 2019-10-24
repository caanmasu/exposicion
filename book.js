const TYPE_BOOK = "book";

class FetchBook {
	get resources() {
		return [
			{ id: 1, title: "La Vorágine - José Eustasio Rivera" },
			{ id: 2, title: "La culpa es de la vaca - Lopera Gutiérrez" },
			{ id: 3, title: "Cien años de soledad - Gabo" }
		];
	}
	
	fetch(id) {
		return this.resources.find(item => item.id === id);
	}
}
