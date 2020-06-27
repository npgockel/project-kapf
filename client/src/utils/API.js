import axios from "axios";

/**
 * Private function to get all of an entity
 * @param {String} entity API Path/Entity 
 */
function _getAll(entity){
    return axios.get(`/api/${entity}/`);
}

/**
 * Private function to get a single entity by id
 * @param {String} entity API Path/Entity 
 * @param {Integer} id Id to find by
 */
function _getOne(entity, id){
    return axios.get(`/api/${entity}/${id}`);
}

/**
 * Private function to delete a single entity by id
 * @param {String} entity API Path/Entity 
 * @param {Integer} id Id to delete
 */
function _delete(entity, id){
    return axios.delete(`/api/${entity}/${id}`);
}

/**
 * Private function to create a single entity
 * @param {String} entity entity API Path/Entity 
 * @param {Object} data data to create an entity by
 */
function _create(entity, data){
    return axios.post(`/api/${entity}/`, data);
}

/**
 * Private function to update a single entity
 * @param {String} entity entity API Path/Entity 
 * @param {Integer} id Id of the entity
 * @param {Object} data data to update an entity by
 */
function _update(id, entity, data){
    return axios.post(`/api/${entity}/${id}`, data);
}


export default {
    Auth: {
        login: function(data){
            return axios.post("/auth/login", data)
        },
        signup: function(data){
            return axios.post("/auth/signup", data)
        },
        logout: function(){
            return axios.get("/auth/logout");
        },
        user_data: function(){
            return axios.get("/auth/user_data");
        }
    },
    Post: {
        getAll: function () {
            return _getAll("posts");
        },
        getById: function (id) {
            return _getOne("posts", id);
        },
        delete: function (id) {
            return _delete("posts", id);
        },
        create: function(data){
            return _create("posts", data);
        },
        update: function(id, data){
            return _update("posts", id, data);
        }
    },
    User: {
        getAll: function () {
            return _getAll("users");
        },
        getById: function (id) {
            return _getOne("users", id);
        },
        delete: function (id) {
            return _delete("users", id);
        },
        create: function(data){
            return _create("users", data);
        },
        update: function(id, data){
            return _update("users", id, data);
        }
    }
}