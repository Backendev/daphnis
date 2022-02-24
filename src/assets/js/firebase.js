import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore, collection as co, getDocs , query, where,setDoc,doc} from 'firebase/firestore';
import { getDatabase,ref, child, get } from "firebase/database";

const db_fb = {}



//const collection = co(db,'/categorias')

// const q = query(co(db, "categorias"), where("name", "==", "python"));

db_fb.get_categorias = function(){
    let firebaseConfig = {
        apiKey: "AIzaSyBCuYo9UyiOJbcRw3pAvPKUP0Fz67YMvQY",
        authDomain: "daphne-d6497.firebaseapp.com",
        projectId: "daphne-d6497",
        storageBucket: "daphne-d6497.appspot.com",
        messagingSenderId: "866108407577",
        appId: "1:866108407577:web:439988a15d75b636cd0f88",
        databaseURL: "https://categorias.firebaseio.com",
        }
    let app = initializeApp(firebaseConfig);
    let db = getFirestore(app)
    let q = query(co(db, "categorias"));
    let querySnapshot = getDocs(q);
    let data = []
    querySnapshot.then(
        q => {
            //console.log(q)
            let get_data = q
            get_data.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    let item = {"id":doc.id,"data":doc.data(),"o":"desde fun"}
                    data.push(item)
                  });
        }
    ).catch((error) => {
        console.error(error);
    });
    return data
}


db_fb.set_categoria= function(name_c){
    let firebaseConfig = {
        apiKey: "AIzaSyBCuYo9UyiOJbcRw3pAvPKUP0Fz67YMvQY",
        authDomain: "daphne-d6497.firebaseapp.com",
        projectId: "daphne-d6497",
        storageBucket: "daphne-d6497.appspot.com",
        messagingSenderId: "866108407577",
        appId: "1:866108407577:web:439988a15d75b636cd0f88",
        databaseURL: "https://categorias.firebaseio.com",
        }
    let app = initializeApp(firebaseConfig);
    let db = getFirestore(app)
    let q = query(co(db, "categorias"));
    let querySnapshot = getDocs(q);
    let data = []
    let l_data = 0
    let datas = null
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
            l_data = data.length
            let d = doc(db,"categorias",String(l_data + 1))
            setDoc(d,{name:name_c}).then(
                r =>{
                    datas = db_fb.get_categorias()
                    return "22"
                }
            )
            
            
        }
    ).catch((error) => {
        console.error(error);
    });
}


export default db_fb
