import { useState } from "react";
import { Atividade } from "../Atividade";
import Form from "../Formulário";

export default function ListaAtividades() {
    const [atividades, setAtividade] = useState([]);

    const addAtividade = (atividade: any) => {
        if (!atividade.text || /^\s*$/.test(atividade.text)) {
            return
        }

        const novaAtividade = [atividade, ...atividades];
        //@ts-ignore
        setAtividade(novaAtividade);
        console.log(atividade);
    };

    const atividadeCompleta = (id:any) => {
        let atividadeAtualizada = atividades.map((atividade) => {
            //@ts-ignore
            if (atividade.id === id) {
                //@ts-ignore
                atividade.atividadeCompleta = !atividade.atividadeCompleta
            }
            return atividade;
        });
        setAtividade(atividadeAtualizada);
    }

    const atualizarAtividade = (atividadeId:any, novoValor:any) => {
        if (!novoValor.text || /^s*$/.test(novoValor.text)) {
            return;
        }
        //@ts-ignore
        setAtividade(prev => prev.map(item => (item.id === atividadeId ? novoValor : item))
        );
    }
 
    const deletarAtividade = (id:any) => {
        //@ts-ignore
        const deletados = [...atividades].filter(atividade => atividade.id !== id)

        setAtividade(deletados);
    }

    return (
        <div>
            <h1>Atividades Diárias</h1>
            <Form onSubmit={addAtividade} />
            <Atividade
                atividades={atividades}
                atividadeCompleta={atividadeCompleta}
                deletarAtividade={deletarAtividade}
                atualizarAtividade={atualizarAtividade} />
        </div>
    )
}