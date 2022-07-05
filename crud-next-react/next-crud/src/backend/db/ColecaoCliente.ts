import firebase from '../config';
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

// comunicação com o Firebase
export default class ColecaoCliente implements ClienteRepositorio {
    #conversor = {
        toFirestore(cliente: Cliente){
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options){
            const dados = snapshot?.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot?.id)
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
       const query = await this.colecao().get()
       return query.docs.map(doc => doc.data()) ?? []
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        // se tiver id, altera, senão, adiciona novo cliente
        if(cliente?.id){
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else{
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data
        }
    }

    private colecao(){
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.#conversor)
    }
}