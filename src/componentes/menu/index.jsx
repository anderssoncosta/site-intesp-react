import './menu.css'

function Menu() {
    return(
        <div className='container_menu'>
            <img src='Imagens/logo.png' className='logo' alt='Logo Site IntEsp'/>
            <nav className='menu'>
                <ul class="lista_menu">
                    <a href="https://" className='menu_lista' >Inicio</a>
                    <a href="https://" className='menu_lista' >Sobre a Instituição</a>
                    <a href="https://" className='menu_lista' >Grade Curricular</a>
                    <a href="https://" className='menu_lista' >Contato</a>
                    <a href="https://" className='menu_lista link'>Quero me Inscrever</a>
                </ul>
            </nav>
        </div>
    )
}
export default Menu