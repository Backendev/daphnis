import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore, collection as co, getDocs , query, where,setDoc,doc} from 'firebase/firestore';
import { getDatabase,ref, child, get } from "firebase/database";

    const firebaseConfig = {
        apiKey: "AIzaSyBCuYo9UyiOJbcRw3pAvPKUP0Fz67YMvQY",
        authDomain: "daphne-d6497.firebaseapp.com",
        projectId: "daphne-d6497",
        storageBucket: "daphne-d6497.appspot.com",
        messagingSenderId: "866108407577",
        appId: "1:866108407577:web:439988a15d75b636cd0f88",
        databaseURL: "https://categorias.firebaseio.com",
        }
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app)
    const collection = co(db,'/categorias')

    // const q = query(co(db, "categorias"), where("name", "==", "python"));
    const q = query(co(db, "categorias"));
    const querySnapshot = getDocs(q);
    let data = []
    querySnapshot.then(
        q => {
            console.log(q)
            let get_data = q
            get_data.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    let item = {"id":doc.id,"data":doc.data(),"o":"desde fun"}
                    data.push(item)
                  });
        }
    ).catch((error) => {
        console.error(error);
    });
    //Guardar
    const l_data = data.length
    let d = doc(db,"categorias",String(l_data + 1))
    setDoc(d,{name:"javascript"})
    // set_d.then(
    //     s =>{
    //         s = {name:"javascript"}
    //     }
    // )

export default data
