import React from 'react';

import whatsappsIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css"

function TeacherItem () {
    return(
        <article className="teacher-item">
        <header>
            <img 
                src="https://pbs.twimg.com/profile_images/1267589058785677312/V3ai46Rz_400x400.jpg" 
                alt="Imagem de Perfil" 
            />
            <div>
                <strong>Francisca Jeciane</strong>
                <span>Análise de algoritmo</span>
            </div>
        </header>

        <p>
            A análise de algoritmos estuda a correção e o desempenho de algoritmos.  Em outras palavras, a análise de algoritmos procura respostas para perguntas do seguinte tipo:  
            <br />
            Este algoritmo resolve o meu problema?  Quanto tempo o algoritmo consome para processar uma 'entrada' de tamanho n?.  (A resposta à segunda pergunta é necessariamente um tanto grosseira, algo como o consumo de tempo é proporcional a n² log n no pior caso.)
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappsIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;