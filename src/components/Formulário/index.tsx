import { useState, useEffect, useRef } from "react";
import { AddButton, Formulario, InputAtv} from "./style";

export default function Form(props:any){
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
    useEffect(() => {
        //@ts-ignore
        inputRef.current.focus()
    })

    const alterar = (e:any) => {
        setInput(e.target.value);
    }

    const enviar = (e:any) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');
    };

    const editStyle = {
        
    }

    return(
        <Formulario className={props.edit && 'form-edit'} onSubmit={enviar}>
            <InputAtv
                type='text'
                placeholder='Inserir Atividade'
                value={input}
                name='text'
                onChange={alterar}
                ref={inputRef}
            />
                        
            <AddButton>{props.edit ? 'Atualizar' : 'Adicionar'}</AddButton>
        </Formulario>
    );
}