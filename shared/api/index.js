const axios = require("axios");

class API {
    constructor(base) {
        this.base = base;
    }

    async get(path, opts = {}) {
        return axios.get(`${this.base}${path}`, opts).then(r => r.data);
    }

    async post(path, body, opts = {}) {
        return axios.post(`${this.base}${path}`, body, opts).then(r => r.data);
    }

    async put(path, body, opts = {}) {
        return axios.put(`${this.base}${path}`, body, opts).then(r => r.data);
    }

    async delete(path, opts = {}) {
        return axios.delete(`${this.base}${path}`, opts).then(r => r.data);
    }
}

module.exports = API;
