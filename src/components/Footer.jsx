const Footer = () => {
    return(
        <footer>
            <h2>Entre em contato</h2>
            <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail"/>
                <input type="tele" placeholder="Telefone"/>
                <textarea id="msg" type="text" placeholder="Mensagem..." rows='4' wrap='hard'></textarea>
                <input id="submit" type="submit" value='Enviar mensagem'/>
            </form>
        </footer>
    )
}

export default Footer
