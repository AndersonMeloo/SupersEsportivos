import sass from './sass.module.scss'

function Parallax() {

    return (

        <>

            <div className={sass.containerParallax}>

                <div className={sass.container}>

                    <div className={sass.div1}>
                        <img src="imagens/icons/safety.png" alt="" />
                        <h2>Segurança e Confiança</h2>
                    </div>

                    <div className={sass.div2}>
                        <img src="imagens/icons/money.png" alt="" />
                        <h2>100% Gratuito</h2>
                    </div>

                    <div className={sass.div3}>
                        <img src="imagens/icons/quick.png" alt="" />
                        <h2>Venda Rápida</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Parallax;