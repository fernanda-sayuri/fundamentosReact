import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

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
    console.log(`excluir ${cliente.nome}`)
  }
  function salvarCliente(cliente: Cliente){
    console.log(`salvar ${cliente.nome}`)
    setVisivel('tabela')
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
                onClick={() => setVisivel('form')}>
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
            cliente={clientes[0]} 
            cancelado={() => setVisivel('tabela')} 
            clienteMudou={salvarCliente}
          />
        )}

      </Layout>

    </div>
  )
}
