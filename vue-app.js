var app = new Vue({
  el: "#app",
  data: {
    cv: {
      information: [
        { kind: 'Teléfono', icon: 'smartphone', value: '+57 3146022349'},
        { kind: 'Correo', icon: 'email', value: 'jhoxsan@gmail.com'},
        { kind: 'Ciudad', icon: 'map', value: 'Medellín, Antioquia'}
      ],
      skills: [
        {name: 'Vue', level: 5},
        {name: 'Nuxt', level: 5},
        {name: 'JavaScript', level: 4},
        {name: 'Typescript', level: 4},
        {name: 'Rails', level: 4},
        {name: 'Ingles', level: 3}
      ],
      profile: 'Comprometido con mi trabajo, me gusta ser autodidacta y proactivo; tengo facilidad para relacionarme con las personas, me apasiona innovar y brindar nuevas o mejores soluciones, tengo gran facilidad para manipular tecnología, me agradan los retos que se presentan y mi misión en todo lugar al que llego es cumplir con los objetivos y contribuir a la evolución y el desarrollo.',
      academy: [
        {
          college: "Instituto Tecnológico Metropolitano",
          type: 'Universitarios',
          title: 'Ingeniero en Telecomunicaciones',
          time: '09-2018'
        },{
          college: "Instituto Tecnológico Metropolitano",
          type: 'Universitarios',
          title: 'Tecnólogo en Telecomunicaciones',
          time: '2010 hasta 2013'
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
          company: 'La Haus',
          appointment: 'Senior Frontend Developer',
          functions: 'Desarrollar FrontEnd de la plataforma con el framework NuxtJs, VueJS y el BackEnd en Ruby on Rails.',
          time: 'Abril 2022 - Actualidad'
        }, {
          company: 'La Haus',
          appointment: 'FullStack Developer Mid',
          functions: 'Desarrollar FrontEnd de la plataforma con el framework VueJS y el BackEnd en Ruby on Rails.',
          time: 'Mayo 2019 - Abril 2022'
        }, {
          company: 'La Haus',
          appointment: 'FullStack Developer Junior',
          functions: 'Desarrollar FrontEnd de la plataforma con e; framework VueJS y el BackEnd en Ruby on Rails.',
          time: 'Noviembre 2018 - Mayo 2019'
        }, {
          company: 'TIGOUNE',
          appointment: 'Soporte Operación',
          functions: 'Diseñar, desarrollar e implementar la plataforma del área backoffice pymes y sus bases de datos bajo Ruby on Rails, Javascript, HTML, SCSS, Materialize, Vue JS, PostgreSQL. Administrar plataforma. Crear consumos de Web Services, bajo SOAP, de mensajería certificada para envíos masivos. Desarrollar real time y non-real time Dashboards para visualizar estados de la operación e indicadores.',
          time: 'Septiembre 2017 - Octubre 2018'
        }, {
          company: 'EMTELCO',
          appointment: 'Analista de Programación y Control de Apoyo a Gerencia BPO Presencial',
          functions: 'Analista de Indicadores, nómina y factura. Controlador de cupos, administrador de bases de datos y desarrollador de plataformas de la gerencia en Ruby on Rails, PHP, Vue JS, MySQL, HTML5, CSS3, JQuery, Bootstrap, Material Design. Manejo de Excel Avanzado.',
          time: 'Marzo 2015 – Septiembre 2017'
        }, {
          company: 'EMTELCO',
          appointment: 'Analista de Programación y Control',
          functions: 'Analista de reportes, nómina y factura. Manejo de Excel avanzado.',
          time: 'Enero 2015 –  Marzo 2015'
        }, {
          company: 'EMTELCO',
          appointment: 'Gestor de contenidos virtuales',
          functions: 'Virtualizar procesos y contenidos de información.',
          time: 'Marzo 2014 – Enero 2015'
        }, {
          company: 'EMTELCO',
          appointment: 'Asesor',
          functions: 'Realizar soporte a los técnicos de UNE.',
          time: 'Noviembre 2013 –  Marzo  2014'
        }, {
          company: 'EMTELCO',
          appointment: 'Aprendiz',
          functions: 'Auxiliar Formación.',
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
      },
      interests: [
        'Viajar', 'Música', 'Desarrollo', 'Tecnología', 'Motocicletas', 'Fotografía'
      ]
    }
  }
})
