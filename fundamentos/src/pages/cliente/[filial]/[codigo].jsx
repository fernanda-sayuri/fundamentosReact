import { useRouter } from "next/router";

export default function ClienteProCodigo(props) {
    const router = useRouter();

    return (
        <div >
            <div>Navegação Dinâmica</div>
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </div>
    )
}