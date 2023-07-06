import React, { useState } from 'react';
import svgArrow from '../../assets/svg/svgArrow.jpg';

const Collapse = ({title, content}) => {
    // Utilisation du hook useState pour gérer l'état d'ouverture/fermeture du Collapse
    const [isOpen, setIsOpen] = useState(false);

    // Fonction de basculement de l'état isOpen
    const chevronToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className= {`collapse ${isOpen ? 'open' : ''}`}>
            <div className='toggle'>
                <span className='collapseTitle'>{title}</span>
                <span className='chevron'>
                    <img src={svgArrow} alt="Flèche ouverture et fermeture collapse" onClick={chevronToggle}/>
                </span>
            </div>
            {/* Affichage du contenu du Collapse en fonction de l'état isOpen */}
            <div className={`collapseContent ${isOpen ? 'open' : ''}`}>
                {content}
            </div> 
        </div>
    );
};

export default Collapse;