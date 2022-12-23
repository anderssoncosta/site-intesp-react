import './Formulario.css'

const Formulario = () => {
    return(
        <div className="formulario">
            <div className="formulario_container">
                <div className="formulario_texto">
                    <h1 className="titulo_formulario">QUER ESTUDAR?</h1>
                
                    <p className="descricao_formulario">Faça sua pré inscrição e garanta a sua vaga! Data da próxima turma: 10/10/2022</p>
                </div>
                
                <div className="formulario_form">
                    <div className="campo_formulario">
                        <div className="opcao_formulario">
                            <input className="campo_texto" type="text" placeholder="Nome"/>
                            <select className="campo_opcao" name="">
                                <option value="Teste">Selecione o curso</option>
                                <option value="Teste">Selecione o curso</option>
                                <option value="Teste">Selecione o curso</option>
                            </select>
                        </div>
                    
                        <div className="opcao_formulario">
                            <input className="campo_texto" type="text" placeholder="E-mail"/>
                            <select className="campo_opcao" name="">
                                <option>Periodo de estudo</option>
                                <option>Periodo de estudo</option>
                                <option>Periodo de estudo</option>
                            </select>
                        </div>
                    </div>

                    <a href="https://" className="botao_formulario">Quero me Inscrever</a>
                </div>
             </div>


        </div>
    )
}

export default Formulario