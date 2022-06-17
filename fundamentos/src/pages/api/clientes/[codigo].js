export default function handler(req, res){
    // pegando params dinâmicos da url
    //exemplo: localhost:3000/api/clientes/123

    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Fernanda ${codigo}`,
        email: `feferfe${codigo}@gmail.com`
    })
}