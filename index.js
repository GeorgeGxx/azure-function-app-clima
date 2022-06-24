module.exports = async function (context, req) {
    
    context.log("Iniciando funcion...");

    //req.query.ciudad
    if(req.query.ciudad) {
        let resultado;
        switch(req.query.ciudad.toLowerCase()){
            case 'mexico':
            resultado = {'clima': 'el clima es templado',
                        'ropa': 'se recomienda usar ropa ligera'};
            break;

            case 'austin':
            resultado = {'clima': 'El clima es demasiado caliente',
                        'ropa': 'Se recomienda usar ropa muy ligera'};
            break;

            case 'nueva york':
            resultado = {'clima': 'El clima es muy frio',
                        'ropa': 'Se recomienda usar ropa gruesa y termica'};
            break;

            default:
            resultado = {'error': 'No existe informacion para esa ciudad'};
    }
    context.res = {
        body: JSON.stringify({'result': resultado})
    };
}else{
    context.res = {
        body: JSON.stringify({'error': 'No hay ciudad especificada...'})
    };
}

};