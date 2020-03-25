const connection = require('../database/connection.js');

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization; // acessando os dados da ong logada

        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents);
    }
}