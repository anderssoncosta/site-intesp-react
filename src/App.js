import Menu from './componentes/menu';
import Banner from './componentes/Banner'
import Areas from './componentes/Areas';
import BannerInformativo from './componentes/BannerInformativo';
import Formulario from './componentes/Formulario';
import Mapa from './componentes/Mapa';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div className='App'>
      <Menu/>
      <Banner/>
      <Areas/>
      <BannerInformativo/>
      <Formulario/>
      <Mapa/>
      <Rodape/>
    </div>
  );
}

export default App;
