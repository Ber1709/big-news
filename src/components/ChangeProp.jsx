import React, { Component } from "react";


const ChangeProp = ({country, orderBy}) => {
    function changeCountry(e) {
        country(e.target.value);
    }

    function changeOrder(e) {
        orderBy(e.target.value);
    }
        

    return (
        <div className="container mb-4 mt-4">
            <p className="text-center">
            
            </p>
            <div className="text-center">
            <form method="GET">
            <label for="Countries"> Pais: </label>
            <select class="m-1" onChange={ changeCountry } name="Countries" id="CountriesSelect">
                <option value="ae">Emitatos Arabes Unidos</option>
                <option value="ar">Argentina</option>
                <option value="at">Austria</option>
                <option value="au">Australia</option>
                <option value="be">Belgica</option>
                <option value="bg">Bulgaria</option>
                <option value="br">Brasil</option>
                <option value="ca">Canada</option>
                <option value="ch">Suiza</option>
                <option value="cn">China</option>
                <option value="co">Colombia</option>
                <option value="cu">Cuba</option>
                <option value="cz">República Checa</option>
                <option value="de">Alemania</option>
                <option value="eg">Egipto</option>
                <option value="fr">Francia</option>
                <option value="gb">Reino Unido</option>
                <option value="gr">Grecia</option>
                <option value="hk">Hong Kong</option>
                <option value="hu">Hungría</option>
                <option value="id">Indonesia</option>
                <option value="ie">Irlanda</option>
                <option value="il">Israel</option>
                <option value="in">India</option>
                <option value="it">Italia</option>
                <option value="jp">Japón</option>
                <option value="kr">Corea del Sur</option>
                <option value="lt">Lituania</option>
                <option value="ma">Marruecos</option>
                <option value="mx">México</option>
                <option value="my">Malasia</option>
                <option value="ng">Nigeria</option>
                <option value="nl">Países Bajos</option>
                <option value="no">Noruega</option>
                <option value="nz">Nueva Zelanda</option>
                <option value="ph">Filipinas</option>
                <option value="pl">Polonia</option>
                <option value="pt">Portugal</option>
                <option value="ro">Rumanía</option>
                <option value="rs">Serbia</option>
                <option value="ru">Rusia</option>
                <option value="sa">Arabia Saudita</option>
                <option value="se">Suecia</option>
                <option value="sg">Singapur</option>
                <option value="si">Eslovenia</option>
                <option value="sk">Eslovaquia</option>
                <option value="th">Tailandia</option>
                <option value="tr">Turquía</option>
                <option value="tw">Taiwán</option>
                <option value="ua">Ucrania</option>
                <option value="us">Estados Unidos</option>
                <option value="ve">Venezuela</option>
                <option value="za">Sudáfrica</option>
                <option value="all countries" selected>Todos</option>
            </select>
        
            <label for="OrderBy"> Ordenar por: </label>
            <select className="m-1" onChange = { changeOrder } name="OrderBy" id="Orderby">
                <option value="relevancy">Relevancia</option>
                <option value="popularity">Popularidad</option>
                <option value="publishedAt" selected>Fecha de publicacion</option>
                
            </select>

            </form>
            </div>
            
        </div>

    )
}

export default ChangeProp;