// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'Fefe',
    metodo: req.method,
    
    //pegando parms da url
    //exemplo: localhost:3000/api?nome=fe&idade=21
    nome: req.query.nome,
    idade: req.query.idade
  })
}
