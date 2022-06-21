import Cliente from "../core/Cliente";

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela (props: TabelaProps) {
    function renderizarCabecalho(){
        return (
            <tr>
                <td className="text-left p-4">Código</td>
                <td className="text-left p-4">Nome</td>
                <td className="text-left p-4">Idade</td>
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
                </tr>
            )
        })
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