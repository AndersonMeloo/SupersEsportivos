import { Copyright, Github } from 'lucide-react';
import sass from './sass.module.scss'

function Footer() {

    return (

        <>
            <div className={sass.containerFooter}>
                <div>
                    <Copyright size={14} />
                    <p>Desenvolvidor por Anderson Melo</p>
                    <p>Todos direitos Reservados</p>
                </div>
                <a href="https://github.com/AndersonMeloo" target='_blank'>
                    <Github size={16} className={sass.iconGit} />
                </a>
            </div>
        </>
    );
}

export default Footer;