import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore, collection as co, getDocs , query, where,setDoc,doc} from 'firebase/firestore';
import { getDatabase,ref, child, get } from "firebase/database";

//dd
const api_key = process.env.firebase_apikey
const db_fb = {
    firebaseConfig : {
        apiKey: api_key,
        authDomain: "daphne-d6497.firebaseapp.com",
        projectId: "daphne-d6497",
        storageBucket: "daphne-d6497.appspot.com",
        messagingSenderId: "866108407577",
        appId: "1:866108407577:web:439988a15d75b636cd0f88",
        },
        app:null,
        db:null,
        q_cat:null,
        contt:0,
        data_ca:new Object(),
        data_co:new Object()
        
    
    


}
db_fb.get_ids = function(){
    return this.contt
}
db_fb.inicialice = function(){
    this.app = initializeApp(this.firebaseConfig)
    this.db = getFirestore(this.app)

    console.log(this.db)

}
db_fb.inicialice_query_ca = function(){
    this.q_cat = query(co(this.db, "categorias"))
    
    console.log(this.q_cat)
}
db_fb.inicialice_query_co = function(){
    this.q_com = query(co(this.db, "comandos"))
    console.log(this.q_com)
}
db_fb.inicialice_q = function(){
    this.queries = {"comandos":{"q":this.q_com,"d":this.data_co},"categorias":{"q":this.q_cat,"d":this.data_ca}}
}

db_fb.get_d = function(documento){
    let querySnapshot = getDocs(this.queries[documento]['q']);
    let ids = 1
    this.contt = 0
    querySnapshot.then(
        q => {
            let get_data = q
            
            get_data.forEach((doc) => {
                    let item = {"id":doc.id,"data":doc.data(),"o":"desde fun"}
                    console.log(item)
                    this.contt = this.contt + 1
                    this.queries[documento]['d'][this.contt] = item
                    console.log(this.contt)
            });
            
        }
    ).catch((error) => {
        console.error(error);
    });
    return this.queries[documento]['d']
    
    
}


db_fb.set_d = function(datas,idd,document){
    let querySnapshot = getDocs(this.queries[document]['q']);
    let data = []
    let l_data = 0
    querySnapshot.then(
        q => {
            let d = doc(this.db,document,String(idd))
            console.log(datas[1][1])
            setDoc(d,datas[1][1]).then(
                r =>{
                    
                    console.log("33")
                }
            )
            
            
        }
    ).catch((error) => {
        console.error(error);
    });
}


export default db_fb
