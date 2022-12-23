import './Areas.css'

const Areas = () => {
    return(
        <div>
        <ul className="areas">
            <li className="card_areas">
                <img className="imagem" src="Imagens/areadeatuacao.png" alt="Area de Atuação"/>
                <h1 className="titulo">Área de Atuação</h1>
                <p className="texto_area">A Enfermagem vem se modernizando constantemente e isso ampliou o campo de atuação desse profissional, tornando-o muito requisitado em diversas áreas da saúde.</p>
            </li>
            <li className="card_areas">
                <img className="imagem" src="Imagens/publicoalvo.png" alt="Público Alvo"/>
                <h1 className="titulo">Público Alvo</h1>
                <p className="texto_area">Você gosta de cuidar e se preocupa com as pessoas? Já pensou em ser enfermeiro? Você vai aprender a aliviar dores e promover a saúde, mas, além disso, a Enfermagem vai proporcionar a você um convívio</p>
            </li>
            <li className="card_areas">
                <img className="imagem" src="Imagens/mercadodetrabalho.png" alt="Mercado de Trabalho"/>
                <h1 className="titulo">Mercado de Trabalho</h1>
                <p className="texto_area">O mercado de trabalho para o enfermeiro tem crescido cada vez mais, não só nas atividades mais tradicionais como também em novos campos como os de gestão e planejamento. Os salários podem variar de acordo com as regiões do país e também conforme a especialização, sendo que os enfermeiros de berçário, de p
                </p>
            </li>
        </ul>
    </div>
    )
}

export default Areas