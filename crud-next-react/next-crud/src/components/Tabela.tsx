import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

//parâmetros que vamos receber
interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela (props: TabelaProps) {
    //exibe botões de ações somente se for passada a função de excluir ou selecionar cliente 
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return (
            <tr>
                <td className="text-left p-4">Código</td>
                <td className="text-left p-4">Nome</td>
                <td className="text-left p-4">Idade</td>

                {/* Se tiver ações, exibe <td>; senão, false */}
                {exibirAcoes ? <td className="text-left p-4">Ações</td> : false}
            </tr>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i%2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>

                    {/* Se tiver ações, exibe <td> que virá pela function renderizarAcoes(); senão, false */}
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente){
        return (
            <td className="flex ">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50`}>
                        {IconeEdicao}
                    </button>
                ) : false}
                
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`flex justify-center items-center text-red-600 rounded-full p-2 m-1 hover:bg-purple-50`}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-lg overflow-hidden">
            <thead className={`text-gray-100 bg-gradient-to-r from bg-purple-500 to-purple-800`}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
    
}