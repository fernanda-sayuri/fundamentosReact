import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  // const clientes = [
  //   new Cliente('Fernanda', 21, '1'),
  //   new Cliente('Kimimaru', 23, '2'),
  //   new Cliente('Marta', 60, '3'),
  //   new Cliente('Jose', 64, '4')
  // ]

  useEffect(obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente){
    console.log(`excluir ${cliente.nome}`)
  }
  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
  }
  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  return (
    <div className={`flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white`}>

      <Layout titulo="Cadastro simples">
        { visivel === 'tabela' ? (
          <div>
            <div className="flex justify-end">
              <Botao 
                className="mb-4" 
                cor="green" 
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
    
            <Tabela clientes={clientes} 
              clienteSelecionado={clienteSelecionado} 
              clienteExcluido={clienteExcluido}
            />
          </div>
        ) : (
          <Formulario 
            cliente={cliente} 
            cancelado={() => setVisivel('tabela')} 
            clienteMudou={salvarCliente}
          />
        )}

      </Layout>

    </div>
  )
}
