var app = new Vue({
  el: "#app",
  data: {
    cv: {
      information: [
        {icon: 'assignment_ind', value: '1214713458'},
        {icon: 'map', value: 'Medellín, Antioquia'},
        {icon: 'location_on', value: 'CRA 67A 79C-10'},
        {icon: 'phone', value: '+57 4 434 8954'},
        {icon: 'smartphone', value: '+57 3146022349'},
        {icon: 'email', value: 'jhoxsan@gmail.com'}
      ],
      skills: [
        {name: 'Rails', level: 5},
        {name: 'Front End', level: 4},
        {name: 'SQL', level: 3},
        {name: 'PHP', level: 3},
        {name: 'Excel', level: 5},
        {name: 'Access', level: 2},
        {name: 'Ingles', level: 3}
      ],
      profile: 'Comprometido con mi trabajo, me gusta ser autodidacta y proactivo; tengo facilidad para relacionarme con las personas, me apasiona innovar y brindar nuevas o mejores soluciones, tengo gran facilidad para manipular tecnología, me agradan los retos que se presentan y mi misión en todo lugar al que llego es cumplir con los objetivos y contribuir a la evolución y el desarrollo.',
      academy: [
        {
          college: "Instituto Tecnológico Metropolitano",
          type: 'Universitarios',
          title: 'Ingeniero en Telecomunicaciones',
          time: 'Pendiente de grados 09-2018'
        },{
          college: "Instituto Tecnológico Metropolitano",
          type: 'Universitarios',
          title: 'Tecnólogo en Telecomunicaciones',
          time: '2010 hasta 2013'
        },{
          college: "Institución Educativa san Vicente de Paúl",
          type: 'Estudios Secundarios',
          title: 'Bachiller',
          time: '2004 hasta 2009'
        }
      ],
      languages: [
        {
          name: 'Ingles', lee: 'e', escribe: 'b', habla: 'b'
        }
      ],
      courses: [
        {
          type: 'Curso', name: 'Mercadeo y ventas en Confama, Medellín 2006',
        },{
          type: 'Curso', name: 'Ingles básico en Escolme, Medellín 2008',
        },{
          type: 'Curso', name: 'Joomla en Emtelco, Medellín 2013',
        }
      ],
      experience: [
        {
          company: 'TIGOUNE',
          appointment: 'Soporte Operación',
          functions: 'Diseñar, desarrollar e implementar la plataforma del área backoffice pymes y sus bases de datos bajo Ruby on Rails, Javascript, HTML, SCSS, Materialize, Vue JS, PostgreSQL. Administrar plataforma. Crear consumos de Web Services, bajo SOAP, de mensajería certificada para envíos masivos. Desarrollar real time y non-real time Dashboards para visualizar estados de la operación e indicadores.',
          leader: 'Lina Ramirez',
          phone: '5158638',
          time: 'Septiembre 2017 - Actualidad'
        }, {
          company: 'EMTELCO',
          appointment: 'Analista de Programación y Control de Apoyo a Gerencia BPO Presencial',
          functions: 'Analista de Indicadores, nómina y factura. Controlador de cupos, administrador de bases de datos y desarrollador de plataformas de la gerencia en Ruby on Rails, PHP, Vue JS, MySQL, HTML5, CSS3, JQuery, Bootstrap, Material Design. Manejo de Excel Avanzado.',
          leader: 'Maria Elena Badillo Cueto',
          phone: '3897000',
          time: 'Marzo 2015 – Septiembre 2017'
        }, {
          company: 'EMTELCO',
          appointment: 'Analista de Programación y Control',
          functions: 'Analista de reportes, nómina y factura. Manejo de Excel avanzado.',
          leader: 'Deisy Marcela Fernández Montoya',
          phone: '3897000',
          time: 'Enero 2015 –  Marzo 2015'
        }, {
          company: 'EMTELCO',
          appointment: 'Gestor de contenidos virtuales',
          functions: 'Virtualizar procesos y contenidos de información.',
          leader: 'Jaime Yesid Álvarez Peinado',
          phone: '3897000',
          time: 'Marzo 2014 – Enero 2015'
        }, {
          company: 'EMTELCO',
          appointment: 'Asesor',
          functions: 'Realizar soporte a los técnicos de UNE.',
          leader: 'Natalia Valderrama',
          phone: '3897000',
          time: 'Noviembre 2013 –  Marzo  2014'
        }, {
          company: 'EMTELCO',
          appointment: 'Aprendiz',
          functions: 'Auxiliar Formación.',
          leader: 'Jose Juan Montoya',
          phone: '3897000',
          time: 'Abril – Octubre, 2013'
        }
      ],
      references: {
        family: [
          {
            name: 'Gloria Delly Marin Marin',
            job: 'Operaria',
            company: 'Vestimundo S.A',
            phone: '3117811382'
          }, {
            name: 'Edier Leon Marín',
            job: 'Administrador',
            company: 'Ingeniería y Servicios Ltda.',
            phone: '3007730299'
          }
        ],
        personal: [
          {
            name: 'Jose Roberto Franco Lopez',
            job: 'Analista Líder de nomina',
            company: 'Emtelco',
            phone: '3004838918'
          },
          {
            name: 'David Alejandro Oquendo Arango',
            job: 'Ingeniero O&M',
            company: 'Huawei',
            phone: '3015645089'
          }
        ]
      }
    }
  }
})
