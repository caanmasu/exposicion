const TYPE_TV = "tv";

class FetchTv {
	get resources() {
		return [
		{ id: 1, title: "South Park" },
		{ id: 2, title: "Futurama" },
		{ id: 3, title: "The Simpsons" }
		];
	}
	
	fetch(id) {
		return this.resources.find(item => item.id === id);
	}
}
