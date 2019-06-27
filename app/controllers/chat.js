
    module.exports.iniciaChat = function(application, req, res) {
        // recuperar os valores do form pelo body parser
        var dadosForm = req.body; 
        
        // fazer validações do form com express validator
        req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
        req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

        // recuperar os erros
        var erros = req.validationErrors();

        if(erros) {
            // caso houver erros renderiza no index para o usuário
            res.render("index.ejs", {validacao : erros}); 
            return;
        } 

        res.render("chat.ejs");
    }