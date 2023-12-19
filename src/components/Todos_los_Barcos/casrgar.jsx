import axios from "axios"

export default function carga(){
    const barcos = {}

    barcos.map(async (bark)=>{
        const imagenes = []
        bark.imagenes.map(ig=>{
            const number =Math.floor(Math.random() * 10000)

            var remoteimageurl = ig
            var filename = `Fotos de barcos/${bark.marcaBarco}-${bark.modelo}-${number}/${bark.marcaBarco}${bark.imagenes.length}`

            axios(remoteimageurl).then(res => {
            return res.blob;
            }).then(blob => {
                //uploading blob to firebase storage
            firebase.storage().ref().child(filename).put(blob).then(function(snapshot) {
                imagenes.push(snapshot.ref.getDownloadURL())
            }).then(url => {
            console.log("Firebase storage image uploaded : ", url); 
            }) 
            }).catch(error => {
            console.error(error);
            });
        })
        // await addDoc(collection(db, "barcos"), nuevoBarco);

    })


}