import {useState} from 'react'
import Form from '../Formulário'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

//@ts-ignore
export function Atividade({atividades, atividadeCompleta, deletarAtividade, atualizarAtividade}){
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const enviarAtualizacao = (value:string) => {
        atualizarAtividade(edit.id, value)
        setEdit({
            id:null,
            value:''
        });
    }

    if (edit.id){
        return <Form edit={edit} onSubmit={enviarAtualizacao} />
    }

    //@ts-ignore
    return atividades.map((atividade, index) => (
        <div 
            className={atividade.atividadeCompleta ? 
            'atividade-linha completa' : 'atividade-linha'} 
            key={index}
        >
            <div key={atividade.id} onClick={() => 
                atividadeCompleta(atividade.id)}>
                {atividade.text}
            </div>

            <div className='icones'>
                <RiCloseCircleLine
                onClick={() => deletarAtividade(atividade.id)}
                className='icone-deletar' />
                <TiEdit
                onClick={() => setEdit({id: atividade.id, value: atividade.text})}
                className='icone-editar' />
            </div>
        </div>
    ))
}