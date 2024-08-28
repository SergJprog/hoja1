document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo
    const names = ["Ana", "Luis", "Carlos", "Maria", "José", "Laura", "Jorge", "Sofia", "Ricardo", "Isabel"];
    const comments = [
        "Las vistas panorámicas desde el Cerro El Baúl son impresionantes. Es el lugar perfecto para una caminata relajante y disfrutar del aire fresco de la montaña. No te pierdas la oportunidad de ver Quetzaltenango desde las alturas.",
        "La Catedral del Espíritu Santo es una joya arquitectónica en el corazón de Quetzaltenango. Su fachada imponente y su interior lleno de detalles históricos la convierten en un sitio imprescindible para los amantes del arte y la historia.",
        "Escalar el Volcán Santa María fue una experiencia desafiante pero totalmente gratificante. La vista desde la cima es espectacular, especialmente al amanecer. Un lugar mágico para los aventureros y amantes de la naturaleza.",
        "El Parque a Centroamérica es el corazón de Quetzaltenango, un lugar vibrante donde la historia y la cultura se entrelazan. Disfruté de un paseo tranquilo, admirando la arquitectura colonial y los hermosos jardines.",
        "Un lugar perfecto para disfrutar de un día al aire libre con la familia. Las áreas de picnic y los senderos bien marcados hacen de Cerro El Baúl un destino ideal para una escapada rápida de la ciudad.",
        "La Catedral del Espíritu Santo es impresionante tanto por fuera como por dentro. Su historia y la paz que se siente al entrar la hacen un lugar especial para reflexionar y conectarse con lo espiritual.",
        "Si buscas una aventura inolvidable, la caminata al Volcán Santa María es para ti. La vista del cráter Santiaguito en erupción desde la cima es simplemente espectacular.",
        "Un lugar encantador para relajarse y observar la vida diaria de los quetzaltecos. El ambiente es acogedor, y siempre hay algo interesante que ver, desde eventos culturales hasta la hermosa fuente central.",
        "El mirador en el Cerro El Baúl ofrece una vista incomparable de la ciudad. Además, la tranquilidad del lugar lo convierte en un excelente sitio para desconectar y disfrutar de la naturaleza.",
        "Una catedral majestuosa que refleja la rica historia de Quetzaltenango. Cada visita es un viaje en el tiempo, lleno de detalles arquitectónicos que cuentan historias del pasado."
    ];

    function getRandomElements(arr, num) {
        const shuffled = arr.slice(0);
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, num);
    }

    const selectedNames = getRandomElements(names, 3);
    const selectedComments = getRandomElements(comments, 3);

    const commentsContainer = document.getElementById('comments-container');
    selectedNames.forEach((name, index) => {
        const commentBox = document.createElement('div');
        commentBox.className = 'comment-box';
        commentBox.innerHTML = `
            <strong>${name}</strong>
            <p>${selectedComments[index]}</p>
        `;
        commentsContainer.appendChild(commentBox);
    });

    // Validación y Envío del Formulario
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log(`Nombre: ${name}`);
        console.log(`Fecha de Nacimiento: ${dob}`);
        console.log(`Correo Electrónico: ${email}`);
        console.log(`Mensaje: ${message}`);

        // Mostrar modal de confirmación
        $('#confirmationModal').modal('show');
    });
});
 