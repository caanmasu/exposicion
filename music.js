const TYPE_MUSIC = "music";

class FetchMusic {
	get resources() {
		return [
		{ id: 1, title: "The Killers - Mr. Brightside" },
		{ id: 2, title: "The Police - Every Breath You Take" },
		{ id: 3, title: "Daddy Yankee - Dura" }
		];
	}
	
	fetch(id) {
		return this.resources.find(item => item.id === id);
	}
}
