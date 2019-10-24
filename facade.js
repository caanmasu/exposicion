class CultureFacade {
	constructor(type) {
		this.type = type;
	}

	get(id) {
		switch (this.type) {
		case TYPE_MUSIC: {
			return this._tryToReturn(this._findMusic, id);
		}
	
		case TYPE_MOVIE: {
			return this._tryToReturn(this._findMovie, id);
		}
	
		case TYPE_TV: {
			return this._tryToReturn(this._findTVShow, id);
		}
	
		case TYPE_BOOK: {
			return this._tryToReturn(this._findBook, id);
		}
	
		default: {
			throw new Error("No type set!");
		}
		}
	}

	get _error() {
		return { status: 404, error: `No item with this id found` };
	}
	
	_tryToReturn(func, id) {
		const result = func.call(this, id);
		return new Promise((ok, err) => !!result
		? ok(result)
		: err(this._error));
	}
	
	_findMusic(id) {
		const db = new FetchMusic();
		return db.fetch(id);
	}
	
	_findMovie(id) {
		const db = new FetchMovie();
		return db.fetch(id);
	}
	
	_findTVShow(id) {
		const db = new FetchTv();
		return db.fetch(id);
	}
	
	_findBook(id) {
		const db = new FetchBook();
		return db.fetch(id);
	}
}