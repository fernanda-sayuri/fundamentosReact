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

  return (
    <div className={`flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500`}>

      <Layout titulo="Cadastro simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>

    </div>
  )
}
