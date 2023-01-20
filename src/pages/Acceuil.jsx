import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Acceuil =() => {
    
    return (
        <div>
            <p><a href="/listeCategorie">Categories</a></p>
            <p><a href="/parametrage">Parametrage</a></p>   
            <p><a href="stat">Statistique</a></p>   
            <p><a href="/credit">Demandes de rechargement</a></p>   
            
     
        </div>

    );
};
export default Acceuil;