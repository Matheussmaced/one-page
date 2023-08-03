import ImgHeader from '../assets/img/imagem.png'

const Header = () => {
    return(
        <div id="containerHeader">
            <header>
                <div id="informationsGeral">
                    <div id="informations">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
                        <button>Botão</button>
                    </div>
                    <div id="imagemHeader">
                        <img src={ImgHeader} alt="Imagem Header" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
