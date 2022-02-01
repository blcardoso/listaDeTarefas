import styled from "styled-components";

export const Formulario = styled.form`
    margin-bottom: 32px;
    .form-edit input {
        border: 2px solid #149fff;
    }
    .form-edit button {
        background: linear-gradient(90deg, rgba(20, 159, 255, 1) 0%,rgba(17, 122, 255, 1) 100%);
        padding: 16px 22px;
    }
`
export const InputAtv = styled.input`
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #5d0cff;
    outline: none;
    width: 320px;
    background: transparent;
    color: #fff;
`

export const AddButton = styled.button`
    padding: 16px;
    width: 100px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background: linear-gradient(
        90deg,
        rgba(93, 12, 255, 1) 0%,
        rgba(155, 0, 250, 1) 100%
    );
    color: #fff;
    text-transform: capitalize;
`