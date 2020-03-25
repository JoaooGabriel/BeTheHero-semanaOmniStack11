const connection = require('../database/connection.js');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query; //buscando dentro da query (query params = ?)

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //buscando dados da tabela ongs
        .limit(5)
        .offset((page -1) * 5)
        .select(['incidents.*',
                 'ongs.name',  
                 'ongs.email', 
                 'ongs.whatsapp', 
                 'ongs.city', 
                 'ongs.uf'
                ]); //buscando todos os casos, mas separando 5 por pagina

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    }, //buscando um caso no banco e criando uma lista
    async create(request, response) {
        const { title, description, value  } =  request.body
        const ong_id = request.headers.authorization; // acessando os dados da ong logada

        const [ id ] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        }); //inserindo dados na tabela do banco

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization; // acessando os dados da ong logada

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if (incident.ong_id !== ong_id ) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    } // deleteando casos do banco

}; //cadastrando um caso no banco