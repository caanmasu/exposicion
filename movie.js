const TYPE_MOVIE = "movie";
class FetchMovie {
	get resources() {
		return [
		{ id: 1, title: "The Joker" },
		{ id: 2, title: "Capitana Marvel" },
		{ id: 3, title: "Maléfica" }
		];
	}
	
	fetch(id) {
		return this.resources.find(item => item.id === id);
	}
}