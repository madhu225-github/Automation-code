/*
 * Description: This class will be using to store MyOrders related test methods.
 */

const fs = require('fs');

class JsonReader {
    constructor(filePath) {
        this.filePath = filePath;
        this.data = null;
        this.loadJson();
    }

    loadJson() {
        try {
            const jsonData = fs.readFileSync(this.filePath, 'utf-8');
            this.data = JSON.parse(jsonData);
        } catch (error) {
            console.error(`Failed to load JSON file: ${error.message}`);
        }
    }

    getItemByKeyAndIndex(key, index) {
        if (this.data && this.data[key] && Array.isArray(this.data[key]) && index >= 0 && index < this.data[key].length) {
            return this.data[key][index];
        }
        throw new Error(`Item not found for key '${key}' at index ${index}.`);
    }
}

module.exports = JsonReader;
