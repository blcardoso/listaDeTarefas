import { useState, useEffect, useRef } from "react";

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

    return(
            <form className='formulario' onSubmit={enviar}>
                {!props.edit ?
                (   
                    <>
                    <input
                    type='text'
                    placeholder='Inserir Atividade'
                    value={input}
                    name='text'
                    className='atividade-input'
                    onChange={alterar}
                    ref={inputRef}
                    />

                    <button className='botao-inserir'>Adicionar</button>
                    </>
                ) :
                (
                    <>
                    <input
                    type='text'
                    placeholder='Atualizar Atividade'
                    value={input}
                    name='text'
                    className='atividade-input editar'
                    onChange={alterar}
                    ref={inputRef}
                    />

                    <button className='botao-inserir editar'>Salvar</button>
                    </>
                )
                }
                
            </form>
    );
}