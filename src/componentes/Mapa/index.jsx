import './Mapa.css'

const Mapa = () => {
    return(
        <div class="campo_mapa">
            <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.021358732781!2d-46.64629018449357!3d-23.56767636771183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59bc57a3a5bd%3A0x123c252785d1ab72!2sInstituto%20Educacional%20S%C3%A3o%20Paulo%20-%20INTESP!5e0!3m2!1spt-BR!2sbr!4v1671295595583!5m2!1spt-BR!2sbr" width={window.innerWidth} height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Mapa' />
        </div>
    )
}
export default Mapa