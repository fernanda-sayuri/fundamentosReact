import Link from 'next/link';
import Navegador from '../components/Navegador';

export default function Inicio(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador destino="/estiloso" texto="/estiloso" />
            <Navegador destino="/exemplo" texto="/exemplo" cor="#9400d3" />
            <Navegador destino="/jsx" texto="/jsx" cor="crimson" />
            <Navegador destino="/navegacao" texto="Navegação #01 simples encadeada" cor="green" />
            <Navegador destino="/cliente/sp/123" texto="Navegação #02 dinâmica" cor="blue" />
            <Navegador destino="/estado" texto="Navegação #03 componente com estado" cor="pink" />
        </div>
    )
}