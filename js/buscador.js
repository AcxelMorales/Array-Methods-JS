// crear los años
const years = document.createElement('option');
const max = new Date().getFullYear();
let min = max - 10;

for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

const getAutos = () => {
    return [{
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Audi',
            modelo: 'A4',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Audi',
            modelo: 'A6',
            year: 2010,
            precio: 35000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2019,
            precio: 80000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Audi',
            modelo: 'A3',
            year: 2017,
            precio: 55000,
            puertas: 2,
            color: 'Negro',
            transmision: 'manual'
        },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2017,
            precio: 60000,
            puertas: 2,
            color: 'Negro',
            transmision: 'manual'
        },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Audi',
            modelo: 'A4',
            year: 2016,
            precio: 30000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        }
    ];
};

let datosBusqueda = {
    marca: '',
    year: '',
    min: '',
    max: '',
    puertas: '',
    transmision: '',
    color: ''
};

const AUTOS = getAutos();

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(AUTOS);
});

const mostrarAutos = (autos) => {

    clearHTML();

    const DIV = document.getElementById('resultado');

    autos.forEach(e => {
        const AUTO_HTML = document.createElement('p');
        AUTO_HTML.innerHTML = `
            <p>${e.marca} ${e.modelo} - ${e.year} - ${e.puertas} Puertas - Transmisión: ${e.transmision} - Precio: $${e.precio} - Color: ${e.color}<p>
        `;
        DIV.append(AUTO_HTML);
    });
}

const clearHTML = () => {
    const DIV = document.getElementById('resultado');

    while (DIV.firstChild) {
        DIV.removeChild(DIV.firstChild);
    }
}

const MARCA = document.getElementById('marca');
MARCA.addEventListener('input', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAutos();
});

const filtrarAutos = () => {
    //                           filter(auto => auto.marca === datosBusqueda .marca)
    const RESULTADO = getAutos().filter(filtrarMarca).filter(filtrarAño).filter(filtrarMin).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    if (RESULTADO.length) {
        mostrarAutos(RESULTADO);
    } else {
        noResult();
    }
};

const noResult = () => {
    clearHTML();
    const NONE = document.createElement('div');
    NONE.classList.add('alerta', 'error');
    NONE.textContent = 'No hay resultado';
    document.getElementById('resultado').append(NONE);
};

function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    } else {
        return auto;
    }
}

const YEAR = document.getElementById('year');
YEAR.addEventListener('input', e => {
    datosBusqueda.year = Number(e.target.value);
    filtrarAutos();
});

function filtrarAño(auto) {
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    } else {
        return auto;
    }
}

const MIN = document.getElementById('minimo');
MIN.addEventListener('input', e => {
    datosBusqueda.min = Number(e.target.value);
    filtrarAutos();
});

function filtrarMin(auto) {
    if (datosBusqueda.min) {
        return auto.precio >= datosBusqueda.min;
    } else {
        return auto;
    }
}

const MAX = document.getElementById('maximo');
MAX.addEventListener('input', e => {
    datosBusqueda.max = Number(e.target.value);
    filtrarAutos();
});

function filtrarMax(auto) {
    if (datosBusqueda.max) {
        return auto.precio <= datosBusqueda.max;
    } else {
        return auto;
    }
}

const PUERTAS = document.getElementById('puertas');
PUERTAS.addEventListener('input', e => {
    datosBusqueda.puertas = Number(e.target.value);
    filtrarAutos();
});

function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    } else {
        return auto;
    }
}

const TRANS = document.getElementById('transmision');
TRANS.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAutos();
});

function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    } else {
        return auto;
    }
}

const COLOR = document.getElementById('color');
COLOR.addEventListener('input', e => {
    datosBusqueda.color = e.target.value;
    filtrarAutos();
});

function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    } else {
        return auto;
    }
}