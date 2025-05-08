function excusa(){
    const sujetos = ["Mi perro", "El gato", "Mi abuela", "Un extraterrestre", "Mi hermano menor", 
        "Un fantasma", "El vecino", "Mi robot doméstico", "Una cabra en patineta", "Un duende borracho", "Un dios Griego", "Un payaso interdimensional", 
        "Mi profesor zombie", "Dora la Exploradora", "Una cucaracha con doctorado",
        "El conserje del multiverso",
        "Un payaso telepático",
        "Mi reflejo en el espejo",
        "Un perezoso con jetpack",
        "Una versión malvada de mi peluche",
        "Un pingüino exiliado del Polo Sur"]

    const acciones = ["se comió", "tiró", "rompió", "escondió", "quemó", "mojó", "perdió", "hackeó", "metio", "secuestró", 
        "vomitó sobre", "teletransportó", "sacrificó", "transformó en gelatina", "lanzó por la ventana", "convirtió en origami", 
        "escribió encima con salsa", "tiró al volcán", "confundió con comida",  "invocó demonios con", "me uso como control remoto para", 
        "me lavo el cerebro de una ostia con", "me convirtio en rana con",
        "se olvidó de cómo caminar y comenzó a flotar con",
        "me desafió a un duelo de baile usando",
        "se convirtió en un agujero negro y absorbió",
        "empezó a filosofar sobre el sentido de la tarea mientras abrazaba",
        "decidió aprender kung-fu y practicó con",
        "tuvo una crisis de identidad y se fusionó con",
        "rompió las leyes del tiempo y arrastró consigo",
        "intentó hackear el sistema educativo usando",
        "se puso a cantar ópera encima de",
        "se apuntó a una secta organizada por",
        "me arrastró a una dimensión paralela junto con",
        "comenzó a flotar mientras recitaba excusas encima de",
        "entró en huelga y bloqueó el acceso a",
        "intentó resolver la tarea y explotó sobre",
        "se convirtió en meme junto a",
        "se fue a meditar al armario acompañado por",
        "me encerró en un bucle de procrastinación con ayuda de",
        "activó el modo fiesta y decoró todo con",
        "sacó un diploma falso impreso desde",
        "reveló ser un agente doble oculto en",
        "robo un cuadro de Versalles y al intentar huir se tropezo con",
        "desarrolló sentimientos románticos hacia",
        "abrió un canal de cocina usando",
        "se disfrazó y robó identidad de",
        "usó su poder psíquico para levitar",
        "se cayó por la escalera mientras sostenía",
        "organizó una protesta en contra de",
        "confundió a su abuela con",
        "saltó al vacío interdimensional aferrado a",
        "se comunicó con alienígenas a través de",
        "intentó hornear deberes dentro de",
        "se atragantó de la risa al ver",
        "se metió en una secta que adoraba a",
        "redactó una carta de despedida en",
        "intentó atrapar mi atención lanzando",
        "rompió el continuo espacio-tiempo con",
        "me retó a un duelo de inteligencia usando",
        "se convirtió en youtuber con la ayuda de",
        "organizó una competencia de baile sobre" ]

    const objetos = ["mis deberes", "mi PC", "la tarea", "el informe", "mi movil", "el cuaderno", "el proyecto", "mi coche", 
        "mi agujero negro de mascota", "mis dramas indios","el cactus parlante", "el refrigerador portátil", "el cubo de basura interdimensional",
        "el cactus parlante", "el refrigerador portátil", "el cubo de basura interdimensional", "el enchufe extradimensional", "el martillo de Thor"
        , "las gemas del infinito", "mi repertorio de mangas", "mi libro favorito", "una fregona emocionalmente inestable",
        "un tronco de acacia ancestral",
        "una chancla voladora",
        "una tostadora vengativa",
        "una tetera que grita cuando mientes",
        "un ventilador con opiniones políticas",
        "un diccionario que solo traduce insultos",
        "una lupa que quema los deberes por accidente",
        "una escalera que da consejos de vida",
        "una grapadora con complejo de artista",
        "un reloj de arena sin arena",
        "un casco de bicicleta con inteligencia artificial",
        "una caja de cereales interdimensional",
        "una alfombra que intenta escapar",
        "un espejo que muestra tus malas decisiones",
        "una lámpara que solo alumbra si dices la verdad",
        "un cactus que opina sobre tus calificaciones",
        "una impresora que imprime tus pensamientos",
        "un router que odia los lunes",
        "una sartén con complejo de superhéroe",
        "una bufanda que habla francés",
        "un globo ocular de repuesto",
        "una caja fuerte llena de secretos inútiles",
        "un dado de 100 caras maldito",
        "un teclado que solo escribe en élfico",
        "un tamagotchi que dirige mi vida",
        "una escoba que exige respeto",
        "un plato de sopa que nunca se enfría",
        "una planta carnívora adicta al drama",
        "una impresora que imprime excusas automáticamente",
        "una lámpara que ilumina tus errores",
        "un paraguas que hace stand-up comedy",
        "un cubo con wifi incorporado",
        "un diccionario lleno de palabras que no existen",
        "una mochila que grita cada vez que la abres",
        "una agenda que te juzga en silencio" ]


        const relaciones = [
            "así pues, no logré hacer la tarea.",
            "por eso no pude asistir a clase.",
            "en consecuencia, el ejercicio quedó sin hacer.",
            "de ahí que mi mochila esté en llamas.",
            "por ende, sigo atrapado en la fotocopiadora.",
            "por lo tanto, tuve que cambiar de identidad.",
            "así que me vi obligado a huir del aula.",
            "en resumen, mi perro ahora da clases en mi lugar.",
            "por consiguiente, el archivo desapareció misteriosamente.",
            "así fue como terminé disfrazado de pizarra.",
            "por ello, decidí convertirme en un mito urbano.",
            "por tal motivo, no podré entregar nada hoy.",
            "y por razones legales, no puedo dar más detalles.",
            "por eso ahora tengo prohibido acercarme al laboratorio.",
            "por ende, esta es la historia oficial y no se discute."
          ]

    const sujeto = sujetos[Math.floor(Math.random() * sujetos.length)];

    const accion = acciones[Math.floor(Math.random() * acciones.length)];

    const objeto = objetos[Math.floor(Math.random() * objetos.length)];
    /*
    * Ya que muchos de estos no tienen relacion conmigo he creado un apartado llamado relacion, 
    * de esta manera yo nunca estare fuera de la historia y la excusa tendra sentido (en verdad probablemente no).
    */   

    let relacion = " " + relaciones[Math.floor(Math.random() * relaciones.length)]


    const resultado = sujeto + " " + accion + " " + objeto + relacion;
    document.getElementById("excusa").innerHTML = "<strong>"+ resultado  + "</strong>";
}