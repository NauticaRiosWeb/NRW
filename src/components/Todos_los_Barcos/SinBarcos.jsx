

import axios from "axios";

export default function SinBarcos(){
    const bark = async () => await axios('https://www.instagram.com/p/C0UrID9pzem/embed')
    console.log('acaperro')
    

    return (
        <div className="min-h-screen items-center justify-end p-40 w-full">
        <div className="mt-8 ">
            <h1>Lo sentimosfuckkkkkk no hay barcos por los que se ha filtrado. Por favor, vuelve a filtrar o modifica los criterios de búsqueda.</h1>
        </div>
    </div>
    )
}