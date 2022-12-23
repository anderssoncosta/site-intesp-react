import './BannerInformativo.css'

const BannerInformativo = () => {
    return(
        <div className="banner_principal">
            <div className="banner2">
                    <div className="caixa">
                        <h1 className="titulo_banner2">SOBRE O CURSO</h1>
                                    
                        <p className="descricao">
                            O curso de enfermagem está entre os mais procurados do país! O papel principal do enfermeiro é: promover a saúde, tratar enfermidades e cuidar das pessoas. Só que para exercer essas atividades, o campo de atuação do enfermeiro moderno vai muito além do cuidado direto com o paciente e familiares em hospitais. O profissional de enfermagem deve estar preparado para fazer parte de equipes multidisciplinares, entender de administração e gestão, ter bom relacionamento interpessoal, etc. Por isso, a grade curricular da graduação em Enfermagem da Universidade Anhanguera inclui temas como Empreendedorismo e Pensamento Científico.</p>
                        
                        <a href='https://' className="botao">Quero me Inscrever</a>
                        
                        
                    </div>
                    
            <img src="Imagens/image3.png" className="img_banner2" alt='Banner2'></img>
            
            </div>
        </div>
    )

}

export default BannerInformativo