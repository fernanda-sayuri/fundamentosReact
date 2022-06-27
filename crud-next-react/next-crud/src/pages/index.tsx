import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Fernanda', 21, '1'),
    new Cliente('Kimimaru', 23, '2'),
    new Cliente('Marta', 60, '3'),
    new Cliente('Jose', 64, '4')
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  return (
    <div className={`flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white`}>

      <Layout titulo="Cadastro simples">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado} 
          clienteExcluido={clienteExcluido}/>
      </Layout>

    </div>
  )
}
