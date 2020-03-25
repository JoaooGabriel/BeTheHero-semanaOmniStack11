const connection = require('../database/connection'); //importando o arquivo connection (config do banco)
const crypto = require('crypto'); //importando a biblioteca crypto (criptografia)

module.exports = {
    async index (request,response) {
        const ongs = await connection('ongs').select('*'); //seleciona todos os campos da tabela ongs
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

            const id = crypto.randomBytes(4).toString('HEX'); //criptografando a ver id com 4 Bites e do tipo texto HEX
            
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
}) //conectando com o banco e inserindo dados na tabela 'ongs'

    return response.json({ id }); //retorna o id da ong cadastrada para login
    }
}; //exportando o objeto de cadastro das ongs