class WordNotFoundException extends Error{
    constructor(message) {
        super(message || "Word not found");
        this.status = 404;
    }
}
module.exports = WordNotFoundException;