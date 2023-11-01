export const urlapleiro ={
    nev:{
        megjelenes:"Név",
        tipus:"text",
        value:"",
        placeholder:"Én vagyok Batman",
        regex: "[A-Z][a-z]{2,15}",
        validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!"
    },

    szulEv:{
        megjelenes:"Születési év",
        tipus:"number",
        value:"2000",
        regex: {
            min: 1900,
            max: 2023
        },
        validalas: "Az érték 1900-ál kisebb vagy 2023-ál nagyobb"
    },

    email:{
        megjelenes:"Email cím",
        tipus:"email",
        value:"",
        placeholder:"valaki@gmail.com",
        regex: "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
        validalas: "Az email címet kisbetüvel írjuk, @ jellel pl: m@gmail.com"
       
    },

    phone:{
        megjelenes:"Elérhetőség",
        tipus:"phone",
        value:"",
        placeholder:"+368888888",
        regex:/^\+\d{11}$/,
        validalas: "+ jellel kezdődjön egybe írva"
    }

}