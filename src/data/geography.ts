// ============================================================
// UBIGEO PERÚ — Fuente: INEI (Instituto Nacional de
// Estadística e Informática) vía datosabiertos.gob.pe
// Jerarquía: Departamento → Provincia → Distrito
// ============================================================

export interface Distrito {
  nombre: string;
}

export interface Provincia {
  nombre: string;
  distritos: string[];
}

export interface Departamento {
  nombre: string;
  provincias: Provincia[];
}

export const departamentos: Departamento[] = [
  {
    nombre: "Amazonas",
    provincias: [
      { nombre: "Bagua", distritos: ["La Peca", "Aramango", "Copallin", "El Parco", "Imaza"] },
      { nombre: "Bongara", distritos: ["Jumbilla", "Corosha", "Cuispes", "Chisquilla", "Churuja", "Florida", "Recta", "San Carlos", "Shipasbamba", "Valera", "Yambrasbamba", "Jazan"] },
      { nombre: "Chachapoyas", distritos: ["Chachapoyas", "Asuncion", "Balsas", "Cheto", "Chiliquin", "Chuquibamba", "Granada", "Huancas", "La Jalca", "Leimebamba", "Levanto", "Magdalena", "Mariscal Castilla", "Molinopampa", "Montevideo", "Olleros", "Quinjalca", "San Francisco de Daguas", "San Isidro de Maino", "Soloco", "Sonche"] },
      { nombre: "Condorcanqui", distritos: ["Nieva", "El Cenepa", "Rio Santiago"] },
      { nombre: "Luya", distritos: ["Lamud", "Camporredondo", "Cocabamba", "Colcamar", "Conila", "Inguilpata", "Longuita", "Lonya Chico", "Luya", "Luya Viejo", "Maria", "Ocalli", "Ocumal", "Pisuquia", "Providencia", "San Cristobal", "San Francisco del Yeso", "San Jeronimo", "San Juan de Lopecancha", "Santa Catalina", "Santo Tomas", "Tingo", "Trita"] },
      { nombre: "Rodriguez de Mendoza", distritos: ["San Nicolas", "Chirimoto", "Cochamal", "Huambo", "Limabamba", "Longar", "Mariscal Benavides", "Milpuc", "Omia", "Santa Rosa", "Totora", "Vista Alegre"] },
      { nombre: "Utcubamba", distritos: ["Bagua Grande", "Cajaruro", "Cumba", "El Milagro", "Jamalca", "Lonya Grande", "Yamon"] },
    ],
  },
  {
    nombre: "Ancash",
    provincias: [
      { nombre: "Aija", distritos: ["Aija", "Coris", "Huacllan", "La Merced", "Succha"] },
      { nombre: "Antonio Raymondi", distritos: ["Llamellin", "Aczo", "Chaccho", "Chingas", "Mirgas", "San Juan de Rontoy"] },
      { nombre: "Asuncion", distritos: ["Chacas", "Acochaca"] },
      { nombre: "Bolognesi", distritos: ["Chiquian", "Abelardo Pardo Lezameta", "Antonio Raymondi", "Aquia", "Cajacay", "Canis", "Colquioc", "Huallanca", "Huasta", "Huayllacayan", "La Primavera", "Mangas", "Pacllon", "San Miguel de Corpanqui", "Ticllos"] },
      { nombre: "Carhuaz", distritos: ["Carhuaz", "Acopampa", "Amashca", "Anta", "Ataquero", "Marcara", "Pariahuanca", "San Miguel de Aco", "Shilla", "Tinco", "Yungar"] },
      { nombre: "Carlos Fermin Fitzcarrald", distritos: ["San Luis", "San Nicolas", "Yauya"] },
      { nombre: "Casma", distritos: ["Casma", "Buena Vista Alta", "Comandante Noel", "Yautan"] },
      { nombre: "Corongo", distritos: ["Corongo", "Aco", "Bambas", "Cusca", "La Pampa", "Yanac", "Yupan"] },
      { nombre: "Huaraz", distritos: ["Huaraz", "Cochabamba", "Colcabamba", "Huanchay", "Independencia", "Jangas", "La Libertad", "Olleros", "Pampas", "Pariacoto", "Pira", "Tarica"] },
      { nombre: "Huari", distritos: ["Huari", "Anra", "Cajay", "Chavin de Huantar", "Huacachi", "Huacchis", "Huachis", "Huantar", "Masin", "Paucas", "Ponto", "Rahuapampa", "Rapayan", "San Marcos", "San Pedro de Chana", "Uco"] },
      { nombre: "Huarmey", distritos: ["Huarmey", "Cochapeti", "Culebras", "Huayan", "Malvas"] },
      { nombre: "Huaylas", distritos: ["Caraz", "Huallanca", "Huata", "Huaylas", "Mato", "Pamparomas", "Pueblo Libre", "Santa Cruz", "Santo Toribio", "Yuracmarca"] },
      { nombre: "Mariscal Luzuriaga", distritos: ["Piscobamba", "Casca", "Eleazar Guzman Barron", "Fidel Olivas Escudero", "Llama", "Llumpa", "Lucma", "Musga"] },
      { nombre: "Ocros", distritos: ["Ocros", "Acas", "Cajamarquilla", "Carhuapampa", "Cochas", "Congas", "Llipa", "San Cristobal de Rajan", "San Pedro", "Santiago de Chilcas"] },
      { nombre: "Pallasca", distritos: ["Cabana", "Bolognesi", "Conchucos", "Huacaschuque", "Huandoval", "Lacabamba", "Llapo", "Pallasca", "Pampas", "Santa Rosa", "Tauca"] },
      { nombre: "Pomabamba", distritos: ["Pomabamba", "Huayllan", "Parobamba", "Quinuabamba"] },
      { nombre: "Recuay", distritos: ["Recuay", "Catac", "Cotaparaco", "Huayllapampa", "Llacllin", "Marca", "Pampas Chico", "Pararin", "Tapacocha", "Ticapampa"] },
      { nombre: "Santa", distritos: ["Chimbote", "Caceres del Peru", "Coishco", "Macate", "Moro", "Nepeqa", "Samanco", "Santa", "Nuevo Chimbote"] },
      { nombre: "Sihuas", distritos: ["Sihuas", "Acobamba", "Alfonso Ugarte", "Cashapampa", "Chingalpo", "Huayllabamba", "Quiches", "Ragash", "San Juan", "Sicsibamba"] },
      { nombre: "Yungay", distritos: ["Yungay", "Cascapara", "Mancos", "Matacoto", "Quillo", "Ranrahirca", "Shupluy", "Yanama"] },
    ],
  },
  {
    nombre: "Apurimac",
    provincias: [
      { nombre: "Abancay", distritos: ["Abancay", "Chacoche", "Circa", "Curahuasi", "Huanipaca", "Lambrama", "Pichirhua", "San Pedro de Cachora", "Tamburco"] },
      { nombre: "Andahuaylas", distritos: ["Andahuaylas", "Andarapa", "Chiara", "Huancarama", "Huancaray", "Huayana", "Kishuara", "Pacobamba", "Pacucha", "Pampachiri", "Pomacocha", "San Antonio de Cachi", "San Jeronimo", "San Miguel de Chaccrampa", "Santa Maria de Chicmo", "Talavera", "Tumay Huaraca", "Turpo", "Kaquiabamba"] },
      { nombre: "Antabamba", distritos: ["Antabamba", "El Oro", "Huaquirca", "Juan Espinoza Medrano", "Oropesa", "Pachaconas", "Sabaino"] },
      { nombre: "Aymaraes", distritos: ["Chalhuanca", "Capaya", "Caraybamba", "Chapimarca", "Colcabamba", "Cotaruse", "Huayllo", "Justo Apu Sahuaraura", "Lucre", "Pocohuanca", "San Juan de Chacqa", "Saqayca", "Soraya", "Tapairihua", "Tintay", "Toraya", "Yanaca"] },
      { nombre: "Chincheros", distritos: ["Chincheros", "Anco-Huallo", "Cocharcas", "Huaccana", "Ocobamba", "Ongoy", "Uranmarca", "Ranracancha"] },
      { nombre: "Cotabambas", distritos: ["Tambobamba", "Cotabambas", "Coyllurqui", "Haquira", "Mara", "Challhuahuacho"] },
      { nombre: "Grau", distritos: ["Chuquibambilla", "Curpahuasi", "Gamarra", "Huayllati", "Mamara", "Micaela Bastidas", "Pataypampa", "Progreso", "San Antonio", "Santa Rosa", "Turpay", "Vilcabamba", "Virundo", "Curasco"] },
    ],
  },
  {
    nombre: "Arequipa",
    provincias: [
      { nombre: "Arequipa", distritos: ["Arequipa", "Alto Selva Alegre", "Cayma", "Cerro Colorado", "Characato", "Chiguata", "Jacobo Hunter", "La Joya", "Mariano Melgar", "Miraflores", "Mollebaya", "Paucarpata", "Pocsi", "Polobaya", "Quequeqa", "Sabandia", "Sachaca", "San Juan de Siguas", "San Juan de Tarucani", "Santa Isabel de Siguas", "Santa Rita de Siguas", "Socabaya", "Tiabaya", "Uchumayo", "Vitor", "Yanahuara", "Yarabamba", "Yura", "Jose Luis Bustamante y Rivero"] },
      { nombre: "Camana", distritos: ["Camana", "Jose Maria Quimper", "Mariano Nicolas Valcarcel", "Mariscal Caceres", "Nicolas de Pierola", "Ocoqa", "Quilca", "Samuel Pastor"] },
      { nombre: "Caraveli", distritos: ["Caraveli", "Acari", "Atico", "Atiquipa", "Bella Union", "Cahuacho", "Chala", "Chaparra", "Huanuhuanu", "Jaqui", "Lomas", "Quicacha", "Yauca"] },
      { nombre: "Castilla", distritos: ["Aplao", "Andagua", "Ayo", "Chachas", "Chilcaymarca", "Choco", "Huancarqui", "Machaguay", "Orcopampa", "Pampacolca", "Tipan", "Uqon", "Uraca", "Viraco", "Yanque", "Majes"] },
      { nombre: "Caylloma", distritos: ["Chivay", "Achoma", "Cabanaconde", "Callalli", "Caylloma", "Coporaque", "Huambo", "Huanca", "Ichupampa", "Lari", "Lluta", "Maca", "Madrigal", "San Antonio de Chuca", "Sibayo", "Tapay", "Tisco", "Tuti", "Yanque", "Majes"] },
      { nombre: "Condesuyos", distritos: ["Chuquibamba", "Andaray", "Cayarani", "Chichas", "Iray", "Rio Grande", "Salamanca", "Yanaquihua"] },
      { nombre: "Islay", distritos: ["Mollendo", "Cocachacra", "Dean Valdivia", "Islay", "Mejia", "Punta de Bombon"] },
      { nombre: "La Union", distritos: ["Cotahuasi", "Alca", "Charcana", "Huaynacotas", "Pampamarca", "Puyca", "Quechualla", "Sayla", "Tauria", "Tomepampa", "Toro"] },
    ],
  },
  {
    nombre: "Ayacucho",
    provincias: [
      { nombre: "Cangallo", distritos: ["Cangallo", "Chuschi", "Los Morochucos", "Maria Parado de Bellido", "Paras", "Totos"] },
      { nombre: "Huamanga", distritos: ["Ayacucho", "Acocro", "Acos Vinchos", "Carmen Alto", "Chiara", "Ocros", "Pacaycasa", "Quinua", "San Jose de Ticllas", "San Juan Bautista", "Santiago de Pischa", "Socos", "Tambillo", "Vinchos", "Jesús Nazareno"] },
      { nombre: "Huanca Sancos", distritos: ["Sancos", "Carapo", "Sacsamarca", "Santiago de Lucanamarca"] },
      { nombre: "Huanta", distritos: ["Huanta", "Ayahuanco", "Huamanguilla", "Iguain", "Luricocha", "Santillana", "Sivia", "Llochegua"] },
      { nombre: "La Mar", distritos: ["San Miguel", "Anco", "Ayna", "Chilcas", "Chungui", "Luis Carranza", "Santa Rosa", "Tambo"] },
      { nombre: "Lucanas", distritos: ["Puquio", "Aucara", "Cabana", "Carmen Salcedo", "Chaviqa", "Chipao", "Huac-Huas", "Laramate", "Leoncio Prado", "Llauta", "Lucanas", "Ocaqa", "Otoca", "Saisa", "San Cristobal", "San Juan", "San Pedro", "San Pedro de Palco", "Sancos", "Santa Ana de Huaycahuacho", "Santa Lucia"] },
      { nombre: "Parinacochas", distritos: ["Coracora", "Chumpi", "Coronel Castaqeda", "Pacapausa", "Pullo", "Puyusca", "San Francisco de Ravacayco", "Upahuacho"] },
      { nombre: "Paucar del Sara Sara", distritos: ["Pausa", "Colta", "Corculla", "Lampa", "Marcabamba", "Oyolo", "Pararca", "San Javier de Alpabamba", "San Jose de Ushua", "Sara Sara"] },
      { nombre: "Sucre", distritos: ["Querobamba", "Belen", "Chalcos", "Chilcayoc", "Huacaqa", "Morcolla", "Paico", "San Pedro de Larcay", "San Salvador de Quije", "Santiago de Paucaray", "Soras"] },
      { nombre: "Victor Fajardo", distritos: ["Huancapi", "Alcamenca", "Apongo", "Asquipata", "Canaria", "Cayara", "Colca", "Huamanquiquia", "Huancaraylla", "Huaya", "Sarhua", "Vilcanchos"] },
      { nombre: "Vilcas Huaman", distritos: ["Vilcas Huaman", "Accomarca", "Carhuanca", "Concepcion", "Huambalpa", "Independencia", "Saurama", "Vischongo"] },
    ],
  },
  {
    nombre: "Cajamarca",
    provincias: [
      { nombre: "Cajabamba", distritos: ["Cajabamba", "Cachachi", "Condebamba", "Sitacocha"] },
      { nombre: "Cajamarca", distritos: ["Cajamarca", "Asuncion", "Chetilla", "Cospan", "Encaqada", "Jesus", "Llacanora", "Los Baqos del Inca", "Magdalena", "Matara", "Namora", "San Juan"] },
      { nombre: "Celendin", distritos: ["Celendin", "Chumuch", "Cortegana", "Huasmin", "Jorge Chavez", "Jose Galvez", "Miguel Iglesias", "Oxamarca", "Sorochuco", "Sucre", "Utco", "La Libertad de Pallan"] },
      { nombre: "Chota", distritos: ["Chota", "Anguia", "Chadin", "Chiguirip", "Chimban", "Choropampa", "Cochabamba", "Conchan", "Huambos", "Lajas", "Llama", "Miracosta", "Paccha", "Pion", "Querocoto", "San Juan de Licupis", "Tacabamba", "Tocmoche", "Chalamarca"] },
      { nombre: "Contumaza", distritos: ["Contumaza", "Chilete", "Cupisnique", "Guzmango", "San Benito", "Santa Cruz de Toled", "Tantarica", "Yonan"] },
      { nombre: "Cutervo", distritos: ["Cutervo", "Callayuc", "Choros", "Cujillo", "La Ramada", "Pimpingos", "Querocotillo", "San Andres de Cutervo", "San Juan de Cutervo", "San Luis de Lucma", "Santa Cruz", "Santo Domingo de la Capilla", "Santo Tomas", "Socota", "Toribio Casanova"] },
      { nombre: "Hualgayoc", distritos: ["Bambamarca", "Chugur", "Hualgayoc"] },
      { nombre: "Jaen", distritos: ["Jaen", "Bellavista", "Chontali", "Colasay", "Huabal", "Las Pirias", "Pomahuaca", "Pucara", "Sallique", "San Felipe", "San Jose del Alto", "Santa Rosa"] },
      { nombre: "San Ignacio", distritos: ["San Ignacio", "Chirinos", "Huarango", "La Coipa", "Namballe", "San Jose de Lourdes", "Tabaconas"] },
      { nombre: "San Marcos", distritos: ["Pedro Galvez", "Chancay", "Eduardo Villanueva", "Gregorio Pita", "Ichocan", "Jose Manuel Quiroz", "Jose Sabogal"] },
      { nombre: "San Miguel", distritos: ["San Miguel", "Bolivar", "Calquis", "Catilluc", "El Prado", "La Florida", "Llapa", "Nanchoc", "Niepos", "San Gregorio", "San Silvestre de Cochan", "Tongod", "Union Agua Blanca"] },
      { nombre: "San Pablo", distritos: ["San Pablo", "San Bernardino", "San Luis", "Tumbaden"] },
      { nombre: "Santa Cruz", distritos: ["Santa Cruz", "Andabamba", "Catache", "Chancaybaqos", "La Esperanza", "Ninabamba", "Pulan", "Saucepampa", "Sexi", "Uticyacu", "Yauyucan"] },
    ],
  },
  {
    nombre: "Cusco",
    provincias: [
      { nombre: "Acomayo", distritos: ["Acomayo", "Acopia", "Acos", "Mosoc Llacta", "Pomacanchi", "Rondocan", "Sangarara"] },
      { nombre: "Anta", distritos: ["Anta", "Ancahuasi", "Cachimayo", "Chinchaypujio", "Huarocondo", "Limatambo", "Mollepata", "Pucyura", "Zurite"] },
      { nombre: "Calca", distritos: ["Calca", "Coya", "Lamay", "Lares", "Pisac", "San Salvador", "Taray", "Yanatile"] },
      { nombre: "Canas", distritos: ["Yanaoca", "Checca", "Kunturkanki", "Langui", "Layo", "Pampamarca", "Quehue", "Tupac Amaru"] },
      { nombre: "Canchis", distritos: ["Sicuani", "Checacupe", "Combapata", "Marangani", "Pitumarca", "San Pablo", "San Pedro", "Tinta"] },
      { nombre: "Chumbivilcas", distritos: ["Santo Tomas", "Capacmarca", "Chamaca", "Colquemarca", "Livitaca", "Llusco", "Quiqota", "Velille"] },
      { nombre: "Cusco", distritos: ["Cusco", "Ccorca", "Poroy", "San Jeronimo", "San Sebastian", "Santiago", "Saylla", "Wanchaq"] },
      { nombre: "Espinar", distritos: ["Espinar", "Condoroma", "Coporaque", "Ocoruro", "Pallpata", "Pichigua", "Suyckutambo", "Alto Pichigua"] },
      { nombre: "La Convencion", distritos: ["Santa Ana", "Echarate", "Huayopata", "Maranura", "Ocobamba", "Quellouno", "Quimbiri", "Santa Teresa", "Vilcabamba", "Pichari"] },
      { nombre: "Paruro", distritos: ["Paruro", "Accha", "Ccapi", "Colcha", "Huanoquite", "Omacha", "Paccaritambo", "Pillpinto", "Yaurisque"] },
      { nombre: "Paucartambo", distritos: ["Paucartambo", "Caicay", "Challabamba", "Colquepata", "Huancarani", "Kosqipata"] },
      { nombre: "Quispicanchi", distritos: ["Urcos", "Andahuaylillas", "Camanti", "Ccarhuayo", "Ccatca", "Cusipata", "Huaro", "Lucre", "Marcapata", "Ocongate", "Oropesa", "Quiquijana"] },
      { nombre: "Urubamba", distritos: ["Urubamba", "Chinchero", "Huayllabamba", "Machupicchu", "Maras", "Ollantaytambo", "Yucay"] },
    ],
  },
  {
    nombre: "Huancavelica",
    provincias: [
      { nombre: "Acobamba", distritos: ["Acobamba", "Andabamba", "Anta", "Caja", "Marcas", "Paucara", "Pomacocha", "Rosario"] },
      { nombre: "Angaraes", distritos: ["Lircay", "Anchonga", "Callanmarca", "Ccochaccasa", "Chincho", "Congalla", "Huanca-Huanca", "Huayllay Grande", "Julcamarca", "San Antonio de Antaparco", "Santo Tomas de Pata", "Secclla"] },
      { nombre: "Castrovirreyna", distritos: ["Castrovirreyna", "Arma", "Aurahua", "Capillas", "Chupamarca", "Cocas", "Huachos", "Huamatambo", "Mollepampa", "San Juan", "Santa Ana", "Tantara", "Ticrapo"] },
      { nombre: "Churcampa", distritos: ["Churcampa", "Anco", "Chinchihuasi", "El Carmen", "La Merced", "Locroja", "Paucarbamba", "San Miguel de Mayocc", "San Pedro de Coris", "Pachamarca"] },
      { nombre: "Huancavelica", distritos: ["Huancavelica", "Acobambilla", "Acoria", "Conayca", "Cuenca", "Huachocolpa", "Huayllahuara", "Izcuchaca", "Laria", "Manta", "Mariscal Caceres", "Moya", "Nuevo Occoro", "Palca", "Pilchaca", "Vilca", "Yauli", "Ascensión", "Huando"] },
      { nombre: "Huaytara", distritos: ["Huaytara", "Ayavi", "Cordova", "Huayacundo Arma", "Laramarca", "Ocoyo", "Pilpichaca", "Querco", "Quito-Arma", "San Antonio de Cusicancha", "San Francisco de Sangayaico", "San Isidro", "Santiago de Chocorvos", "Santiago de Quirahuara", "Santo Domingo de Capillas", "Tambo"] },
      { nombre: "Tayacaja", distritos: ["Pampas", "Acostambo", "Acraquia", "Ahuaycha", "Colcabamba", "Daniel Hernandez", "Huachocolpa", "Huando", "Huaribamba", "Qahuimpuquio", "Pazos", "Pachamarca", "Quishuar", "Salcabamba", "Salcahuasi", "San Marcos de Rocchac", "Surcubamba", "Tintay Puncu"] },
    ],
  },
  {
    nombre: "Huanuco",
    provincias: [
      { nombre: "Ambo", distritos: ["Ambo", "Cayna", "Colpas", "Conchamarca", "Huacar", "San Francisco", "San Rafael", "Tomay Kichwa"] },
      { nombre: "Dos de Mayo", distritos: ["La Union", "Chuquis", "Marias", "Pachas", "Quivilla", "Ripan", "Shunqui", "Sillapata", "Yanas"] },
      { nombre: "Huacaybamba", distritos: ["Huacaybamba", "Canchabamba", "Cochabamba", "Pinra"] },
      { nombre: "Huamalies", distritos: ["Llata", "Arancay", "Chavin de Pariarca", "Jacas Grande", "Jircan", "Miraflores", "Monzon", "Punchao", "Puqos", "Singa", "Tantamayo"] },
      { nombre: "Huanuco", distritos: ["Huanuco", "Amarilis", "Chinchao", "Churubamba", "Margos", "Quisqui", "San Francisco de Cayran", "San Pedro de Chaulan", "Santa Maria del Valle", "Yarumayo", "Pillcomarca"] },
      { nombre: "Lauricocha", distritos: ["Jesus", "Baqos", "Jivia", "Queropalca", "Rondos", "San Francisco de Asis", "San Miguel de Cauri"] },
      { nombre: "Leoncio Prado", distritos: ["Rupa-Rupa", "Daniel Alomias Robles", "Hermilio Valdizan", "Jose Crespo y Castillo", "Luyando", "Mariano Damaso Beraun"] },
      { nombre: "Maraqon", distritos: ["Huacrachuco", "Cholon", "San Buenaventura"] },
      { nombre: "Pachitea", distritos: ["Panao", "Chaglla", "Molino", "Umari"] },
      { nombre: "Puerto Inca", distritos: ["Puerto Inca", "Codo del Pozuzo", "Honoria", "Tournavista", "Yuyapichis"] },
      { nombre: "Yarowilca", distritos: ["Chavinillo", "Cahuac", "Chacabamba", "Chupan", "Jacas Chico", "Obas", "Pampamarca", "Choras"] },
    ],
  },
  {
    nombre: "Ica",
    provincias: [
      { nombre: "Chincha", distritos: ["Chincha Alta", "Alto Laran", "Chavin", "Chincha Baja", "El Carmen", "Grocio Prado", "Pueblo Nuevo", "San Juan de Yanac", "San Pedro de Huacarpana", "Sunampe", "Tambo de Mora"] },
      { nombre: "Ica", distritos: ["Ica", "La Tinguiqa", "Los Aquijes", "Ocucaje", "Pachacutec", "Parcona", "Pueblo Nuevo", "Salas", "San Jose de los Molinos", "San Juan Bautista", "Santiago", "Subtanjalla", "Tate", "Yauca del Rosario  1/"] },
      { nombre: "Nazca", distritos: ["Nazca", "Changuillo", "El Ingenio", "Marcona", "Vista Alegre"] },
      { nombre: "Palpa", distritos: ["Palpa", "Llipata", "Rio Grande", "Santa Cruz", "Tibillo"] },
      { nombre: "Pisco", distritos: ["Pisco", "Huancano", "Humay", "Independencia", "Paracas", "San Andres", "San Clemente", "Tupac Amaru Inca"] },
    ],
  },
  {
    nombre: "Junin",
    provincias: [
      { nombre: "Chanchamayo", distritos: ["Chanchamayo", "Perene", "Pichanaqui", "San Luis de Shuaro", "San Ramon", "Vitoc"] },
      { nombre: "Chupaca", distritos: ["Chupaca", "Ahuac", "Chongos Bajo", "Huachac", "Huamancaca Chico", "San Juan de Iscos", "San Juan de Jarpa", "Tres de Diciembre", "Yanacancha"] },
      { nombre: "Concepcion", distritos: ["Concepcion", "Aco", "Andamarca", "Chambara", "Cochas", "Comas", "Heroinas Toledo", "Manzanares", "Mariscal Castilla", "Matahuasi", "Mito", "Nueve de Julio", "Orcotuna", "San Jose de Quero", "Santa Rosa de Ocopa"] },
      { nombre: "Huancayo", distritos: ["Huancayo", "Carhuacallanga", "Chacapampa", "Chicche", "Chilca", "Chongos Alto", "Chupuro", "Colca", "Cullhuas", "El Tambo", "Huacrapuquio", "Hualhuas", "Huancan", "Huasicancha", "Huayucachi", "Ingenio", "Pariahuanca", "Pilcomayo", "Pucara", "Quichuay", "Quilcas", "San Agustin", "San Jeronimo de Tunan", "Saqo", "Sapallanga", "Sicaya", "Santo Domingo de Acobamba", "Viques"] },
      { nombre: "Jauja", distritos: ["Jauja", "Acolla", "Apata", "Ataura", "Canchayllo", "Curicaca", "El Mantaro", "Huamali", "Huaripampa", "Huertas", "Janjaillo", "Julcan", "Leonor Ordoqez", "Llocllapampa", "Marco", "Masma", "Masma Chicche", "Molinos", "Monobamba", "Muqui", "Muquiyauyo", "Paca", "Paccha", "Pancan", "Parco", "Pomacancha", "Ricran", "San Lorenzo", "San Pedro de Chunan", "Sausa", "Sincos", "Tunan Marca", "Yauli", "Yauyos"] },
      { nombre: "Junin", distritos: ["Junin", "Carhuamayo", "Ondores", "Ulcumayo"] },
      { nombre: "Satipo", distritos: ["Satipo", "Coviriali", "Llaylla", "Mazamari", "Pampa Hermosa", "Pangoa", "Rio Negro", "Rio Tambo"] },
      { nombre: "Tarma", distritos: ["Tarma", "Acobamba", "Huaricolca", "Huasahuasi", "La Union", "Palca", "Palcamayo", "San Pedro de Cajas", "Tapo"] },
      { nombre: "Yauli", distritos: ["La Oroya", "Chacapalpa", "Huay-Huay", "Marcapomacocha", "Morococha", "Paccha", "Santa Barbara de Carhuacayan", "Santa Rosa de Sacco", "Suitucancha", "Yauli"] },
    ],
  },
  {
    nombre: "La Libertad",
    provincias: [
      { nombre: "Ascope", distritos: ["Ascope", "Chicama", "Chocope", "Magdalena de Cao", "Paijan", "Razuri", "Santiago de Cao", "Casa Grande"] },
      { nombre: "Bolivar", distritos: ["Bolivar", "Bambamarca", "Condormarca", "Longotea", "Uchumarca", "Ucuncha"] },
      { nombre: "Chepen", distritos: ["Chepen", "Pacanga", "Pueblo Nuevo"] },
      { nombre: "Gran Chimu", distritos: ["Cascas", "Lucma", "Marmot", "Sayapullo"] },
      { nombre: "Julcan", distritos: ["Julcan", "Calamarca", "Carabamba", "Huaso"] },
      { nombre: "Otuzco", distritos: ["Otuzco", "Agallpampa", "Charat", "Huaranchal", "La Cuesta", "Mache", "Paranday", "Salpo", "Sinsicap", "Usquil"] },
      { nombre: "Pacasmayo", distritos: ["San Pedro de Lloc", "Guadalupe", "Jequetepeque", "Pacasmayo", "San Jose"] },
      { nombre: "Pataz", distritos: ["Tayabamba", "Buldibuyo", "Chillia", "Huancaspata", "Huaylillas", "Huayo", "Ongon", "Parcoy", "Pataz", "Pias", "Santiago de Challas", "Taurija", "Urpay"] },
      { nombre: "Sanchez Carrion", distritos: ["Huamachuco", "Chugay", "Cochorco", "Curgos", "Marcabal", "Sanagoran", "Sarin", "Sartimbamba"] },
      { nombre: "Santiago de Chuco", distritos: ["Santiago de Chuco", "Angasmarca", "Cachicadan", "Mollebamba", "Mollepata", "Quiruvilca", "Santa Cruz de Chuca", "Sitabamba"] },
      { nombre: "Trujillo", distritos: ["Trujillo", "El Porvenir", "Florencia de Mora", "Huanchaco", "La Esperanza", "Laredo", "Moche", "Poroto", "Salaverry", "Simbal", "Victor Larco Herrera"] },
      { nombre: "Viru", distritos: ["Viru", "Chao", "Guadalupito"] },
    ],
  },
  {
    nombre: "Lambayeque",
    provincias: [
      { nombre: "Chiclayo", distritos: ["Chiclayo", "Chongoyape", "Eten", "Eten Puerto", "Jose Leonardo Ortiz", "La Victoria", "Lagunas", "Monsefu", "Nueva Arica", "Oyotun", "Picsi", "Pimentel", "Reque", "Santa Rosa", "Saqa", "Cayaltí", "Patapo", "Pomalca", "Pucalá", "Tumán"] },
      { nombre: "Ferreqafe", distritos: ["Ferreqafe", "Caqaris", "Incahuasi", "Manuel Antonio Mesones Muro", "Pitipo", "Pueblo Nuevo"] },
      { nombre: "Lambayeque", distritos: ["Lambayeque", "Chochope", "Illimo", "Jayanca", "Mochumi", "Morrope", "Motupe", "Olmos", "Pacora", "Salas", "San Jose", "Tucume"] },
    ],
  },
  {
    nombre: "Lima",
    provincias: [
      { nombre: "Barranca", distritos: ["Barranca", "Paramonga", "Pativilca", "Supe", "Supe Puerto"] },
      { nombre: "Cajatambo", distritos: ["Cajatambo", "Copa", "Gorgor", "Huancapon", "Manas"] },
      { nombre: "Callao", distritos: ["Callao", "Bellavista", "Carmen de la Legua Reynoso", "La Perla", "La Punta", "Ventanilla"] },
      { nombre: "Canta", distritos: ["Canta", "Arahuay", "Huamantanga", "Huaros", "Lachaqui", "San Buenaventura", "Santa Rosa de Quives"] },
      { nombre: "Cañete", distritos: ["San Vicente de Cañete", "Asia", "Calango", "Cerro Azul", "Chilca", "Coayllo", "Imperial", "Lunahuana", "Mala", "Nuevo Imperial", "Pacaran", "Quilmana", "San Antonio", "San Luis", "Santa Cruz de Flores", "Zuqiga"] },
      { nombre: "Huaral", distritos: ["Huaral", "Atavillos Alto", "Atavillos Bajo", "Aucallama", "Chancay", "Ihuari", "Lampian", "Pacaraos", "San Miguel de Acos", "Santa Cruz de Andamarca", "Sumbilca", "Veintisiete de Noviembre"] },
      { nombre: "Huarochiri", distritos: ["Matucana", "Antioquia", "Callahuanca", "Carampoma", "Chicla", "Cuenca", "Huachupampa", "Huanza", "Huarochiri", "Lahuaytambo", "Langa", "Laraos", "Mariatana", "Ricardo Palma", "San Andres de Tupicocha", "San Antonio", "San Bartolome", "San Damian", "San Juan de Iris", "San Juan de Tantaranche", "San Lorenzo de Quinti", "San Mateo", "San Mateo de Otao", "San Pedro de Casta", "San Pedro de Huancayre", "Sangallaya", "Santa Cruz de Cocachacra", "Santa Eulalia", "Santiago de Anchucaya", "Santiago de Tuna", "Santo Domingo de los Olleros", "Surco"] },
      { nombre: "Huaura", distritos: ["Huacho", "Ambar", "Caleta de Carquin", "Checras", "Hualmay", "Huaura", "Leoncio Prado", "Paccho", "Santa Leonor", "Santa Maria", "Sayan", "Vegueta"] },
      { nombre: "Lima", distritos: ["Cercado de Lima", "Ancon", "Ate", "Barranco", "Breña", "Carabayllo", "Chaclacayo", "Chorrillos", "Cieneguilla", "Comas", "El Agustino", "Independencia", "Jesus Maria", "La Molina", "La Victoria", "Lince", "Los Olivos", "Lurigancho", "Lurin", "Magdalena del Mar", "Pueblo Libre", "Miraflores", "Pachacamac", "Pucusana", "Puente Piedra", "Punta Hermosa", "Punta Negra", "Rimac", "San Bartolo", "San Borja", "San Isidro", "San Juan de Lurigancho", "San Juan de Miraflores", "San Luis", "San Martin de Porres", "San Miguel", "Santa Anita", "Santa Maria del Mar", "Santa Rosa", "Santiago de Surco", "Surquillo", "Villa El Salvador", "Villa Maria del Triunfo"] },
      { nombre: "Oyon", distritos: ["Oyon", "Andajes", "Caujul", "Cochamarca", "Navan", "Pachangara"] },
      { nombre: "Yauyos", distritos: ["Yauyos", "Alis", "Ayauca", "Ayaviri", "Azangaro", "Cacra", "Carania", "Catahuasi", "Chocos", "Cochas", "Colonia", "Hongos", "Huampara", "Huancaya", "Huangascar", "Huantan", "Huaqec", "Laraos", "Lincha", "Madean", "Miraflores", "Omas", "Putinza", "Quinches", "Quinocay", "San Joaquin", "San Pedro de Pilas", "Tanta", "Tauripampa", "Tomas", "Tupe", "Viqac", "Vitis"] },
    ],
  },
  {
    nombre: "Loreto",
    provincias: [
      { nombre: "Alto Amazonas", distritos: ["Yurimaguas", "Balsapuerto", "Barranca", "Cahuapanas", "Jeberos", "Lagunas", "Manseriche", "Morona", "Pastaza", "Santa Cruz", "Teniente Cesar Lopez Rojas"] },
      { nombre: "Loreto", distritos: ["Nauta", "Parinari", "Tigre", "Trompeteros", "Urarinas"] },
      { nombre: "Mariscal Ramon Castilla", distritos: ["Ramon Castilla", "Pebas", "Yavari", "San Pablo"] },
      { nombre: "Maynas", distritos: ["Iquitos", "Alto Nanay", "Fernando Lores", "Indiana", "Las Amazonas", "Mazan", "Napo", "Punchana", "Putumayo", "Torres Causana", "Yaquerana", "Belén", "San Juan Bautista"] },
      { nombre: "Requena", distritos: ["Requena", "Alto Tapiche", "Capelo", "Emilio San Martin", "Maquia", "Puinahua", "Saquena", "Soplin", "Tapiche", "Jenaro Herrera", "Yaquerana"] },
      { nombre: "Ucayali", distritos: ["Contamana", "Inahuaya", "Padre Marquez", "Pampa Hermosa", "Sarayacu", "Vargas Guerra"] },
    ],
  },
  {
    nombre: "Madre de Dios",
    provincias: [
      { nombre: "Manu", distritos: ["Manu", "Fitzcarrald", "Madre de Dios", "Huepetuhe"] },
      { nombre: "Tahuamanu", distritos: ["Iqapari", "Iberia", "Tahuamanu"] },
      { nombre: "Tambopata", distritos: ["Tambopata", "Inambari", "Las Piedras", "Laberinto"] },
    ],
  },
  {
    nombre: "Moquegua",
    provincias: [
      { nombre: "General Sanchez Cerro", distritos: ["Omate", "Chojata", "Coalaque", "Ichuqa", "La Capilla", "Lloque", "Matalaque", "Puquina", "Quinistaquillas", "Ubinas", "Yunga"] },
      { nombre: "Ilo", distritos: ["Ilo", "El Algarrobal", "Pacocha"] },
      { nombre: "Mariscal Nieto", distritos: ["Moquegua", "Carumas", "Cuchumbaya", "Samegua", "San Cristobal", "Torata"] },
    ],
  },
  {
    nombre: "Pasco",
    provincias: [
      { nombre: "Daniel Alcides Carrion", distritos: ["Yanahuanca", "Chacayan", "Goyllarisquizga", "Paucar", "San Pedro de Pillao", "Santa Ana de Tusi", "Tapuc", "Vilcabamba"] },
      { nombre: "Oxapampa", distritos: ["Oxapampa", "Chontabamba", "Huancabamba", "Palcazu", "Pozuzo", "Puerto Bermudez", "Villa Rica"] },
      { nombre: "Pasco", distritos: ["Chaupimarca", "Huachon", "Huariaca", "Huayllay", "Ninacaca", "Pallanchacra", "Paucartambo", "San Fco.De Asis de Yarusyacan", "Simon Bolivar", "Ticlacayan", "Tinyahuarco", "Vicco", "Yanacancha"] },
    ],
  },
  {
    nombre: "Piura",
    provincias: [
      { nombre: "Ayabaca", distritos: ["Ayabaca", "Frias", "Jilili", "Lagunas", "Montero", "Pacaipampa", "Paimas", "Sapillica", "Sicchez", "Suyo"] },
      { nombre: "Huancabamba", distritos: ["Huancabamba", "Canchaque", "El Carmen de la Frontera", "Huarmaca", "Lalaquiz", "San Miguel de El Faique", "Sondor", "Sondorillo"] },
      { nombre: "Morropon", distritos: ["Chulucanas", "Buenos Aires", "Chalaco", "La Matanza", "Morropon", "Salitral", "San Juan de Bigote", "Santa Catalina de Mossa", "Santo Domingo", "Yamango"] },
      { nombre: "Paita", distritos: ["Paita", "Amotape", "Arenal", "Colan", "La Huaca", "Tamarindo", "Vichayal"] },
      { nombre: "Piura", distritos: ["Piura", "Castilla", "Catacaos", "Cura Mori", "El Tallan", "La Arena", "La Union", "Las Lomas", "Tambo Grande"] },
      { nombre: "Sechura", distritos: ["Sechura", "Bellavista de la Union", "Bernal", "Cristo Nos Valga", "Vice", "Rinconada Llicuar"] },
      { nombre: "Sullana", distritos: ["Sullana", "Bellavista", "Ignacio Escudero", "Lancones", "Marcavelica", "Miguel Checa", "Querecotillo", "Salitral"] },
      { nombre: "Talara", distritos: ["Pariqas", "El Alto", "La Brea", "Lobitos", "Los Organos", "Mancora"] },
    ],
  },
  {
    nombre: "Puno",
    provincias: [
      { nombre: "Azangaro", distritos: ["Azangaro", "Achaya", "Arapa", "Asillo", "Caminaca", "Chupa", "Jose Domingo Choquehuanca", "Muqani", "Potoni", "Saman", "San Anton", "San Jose", "San Juan de Salinas", "Santiago de Pupuja", "Tirapata"] },
      { nombre: "Carabaya", distritos: ["Macusani", "Ajoyani", "Ayapata", "Coasa", "Corani", "Crucero", "Ituata", "Ollachea", "San Gaban", "Usicayos"] },
      { nombre: "Chucuito", distritos: ["Juli", "Desaguadero", "Huacullani", "Kelluyo", "Pisacoma", "Pomata", "Zepita"] },
      { nombre: "El Collao", distritos: ["Ilave", "Capazo", "Pilcuyo", "Santa Rosa", "Conduriri"] },
      { nombre: "Huancane", distritos: ["Huancane", "Cojata", "Huatasani", "Inchupalla", "Pusi", "Rosaspata", "Taraco", "Vilque Chico"] },
      { nombre: "Lampa", distritos: ["Lampa", "Cabanilla", "Calapuja", "Nicasio", "Ocuviri", "Palca", "Paratia", "Pucara", "Santa Lucia", "Vilavila"] },
      { nombre: "Melgar", distritos: ["Ayaviri", "Antauta", "Cupi", "Llalli", "Macari", "Nuqoa", "Orurillo", "Santa Rosa", "Umachiri"] },
      { nombre: "Moho", distritos: ["Moho", "Conima", "Huayrapata", "Tilali"] },
      { nombre: "Puno", distritos: ["Puno", "Acora", "Amantani", "Atuncolla", "Capachica", "Chucuito", "Coata", "Huata", "Maqazo", "Paucarcolla", "Pichacani", "Plateria", "San Antonio", "Tiquillaca", "Vilque"] },
      { nombre: "San Antonio de Putina", distritos: ["Putina", "Ananea", "Pedro Vilca Apaza", "Quilcapuncu", "Sina"] },
      { nombre: "San Roman", distritos: ["Juliaca", "Cabana", "Cabanillas", "Caracoto"] },
      { nombre: "Sandia", distritos: ["Sandia", "Cuyocuyo", "Limbani", "Patambuco", "Phara", "Quiaca", "San Juan del Oro", "Yanahuaya", "Alto Inambari"] },
      { nombre: "Yunguyo", distritos: ["Yunguyo", "Anapia", "Copani", "Cuturapi", "Ollaraya", "Tinicachi", "Unicachi"] },
    ],
  },
  {
    nombre: "San Martin",
    provincias: [
      { nombre: "Bellavista", distritos: ["Bellavista", "Alto Biavo", "Bajo Biavo", "Huallaga", "San Pablo", "San Rafael"] },
      { nombre: "El Dorado", distritos: ["San Jose de Sisa", "Agua Blanca", "San Martin", "Santa Rosa", "Shatoja"] },
      { nombre: "Huallaga", distritos: ["Saposoa", "Alto Saposoa", "El Eslabon", "Piscoyacu", "Sacanche", "Tingo de Saposoa"] },
      { nombre: "Lamas", distritos: ["Lamas", "Alonso de Alvarado", "Barranquita", "Caynarachi", "Cuqumbuqui", "Pinto Recodo", "Rumisapa", "San Roque de Cumbaza", "Shanao", "Tabalosos", "Zapatero"] },
      { nombre: "Mariscal Caceres", distritos: ["Juanjui", "Campanilla", "Huicungo", "Pachiza", "Pajarillo"] },
      { nombre: "Moyobamba", distritos: ["Moyobamba", "Calzada", "Habana", "Jepelacio", "Soritor", "Yantalo"] },
      { nombre: "Picota", distritos: ["Picota", "Buenos Aires", "Caspisapa", "Pilluana", "Pucacaca", "San Cristobal", "San Hilarion", "Shamboyacu", "Tingo de Ponasa", "Tres Unidos"] },
      { nombre: "Rioja", distritos: ["Rioja", "Awajun", "Elias Soplin Vargas", "Nueva Cajamarca", "Pardo Miguel", "Posic", "San Fernando", "Yorongos", "Yuracyacu"] },
      { nombre: "San Martin", distritos: ["Tarapoto", "Alberto Leveau", "Cacatachi", "Chazuta", "Chipurana", "El Porvenir", "Huimbayoc", "Juan Guerra", "La Banda de Shilcayo", "Morales", "Papaplaya", "San Antonio", "Sauce", "Shapaja"] },
      { nombre: "Tocache", distritos: ["Tocache", "Nuevo Progreso", "Polvora", "Shunte", "Uchiza"] },
    ],
  },
  {
    nombre: "Tacna",
    provincias: [
      { nombre: "Candarave", distritos: ["Candarave", "Cairani", "Camilaca", "Curibaya", "Huanuara", "Quilahuani"] },
      { nombre: "Jorge Basadre", distritos: ["Locumba", "Ilabaya", "Ite"] },
      { nombre: "Tacna", distritos: ["Tacna", "Alto de la Alianza", "Calana", "Ciudad Nueva", "Inclan", "Pachia", "Palca", "Pocollay", "Sama", "Cor Gregorio Albarracín"] },
      { nombre: "Tarata", distritos: ["Tarata", "Chucatamani", "Estique", "Estique-Pampa", "Sitajara", "Susapaya", "Tarucachi", "Ticaco"] },
    ],
  },
  {
    nombre: "Tumbes",
    provincias: [
      { nombre: "Contralmirante Villar", distritos: ["Zorritos", "Casitas"] },
      { nombre: "Tumbes", distritos: ["Tumbes", "Corrales", "La Cruz", "Pampas de Hospital", "San Jacinto", "San Juan de la Virgen"] },
      { nombre: "Zarumilla", distritos: ["Zarumilla", "Aguas Verdes", "Matapalo", "Papayal"] },
    ],
  },
  {
    nombre: "Ucayali",
    provincias: [
      { nombre: "Atalaya", distritos: ["Raymondi", "Sepahua", "Tahuania", "Yurua"] },
      { nombre: "Coronel Portillo", distritos: ["Calleria", "Campoverde", "Iparia", "Masisea", "Yarinacocha", "Nueva Requena"] },
      { nombre: "Padre Abad", distritos: ["Padre Abad", "Irazola", "Curimana"] },
      { nombre: "Purus", distritos: ["Purus"] },
    ],
  },
  {
    nombre: "Callao",
    provincias: [
      { nombre: "Callao", distritos: ["Callao", "Bellavista", "Carmen de la Legua Reynoso", "La Perla", "La Punta", "Mi Peru", "Ventanilla"] },
    ],
  },
];

// Helper: get all departamento names
export const getNombresDepartamentos = (): string[] =>
  departamentos.map((d) => d.nombre).sort();

// Helper: get provincias for a given departamento
export const getProvinciasDe = (depto: string): string[] => {
  const d = departamentos.find((d) => d.nombre === depto);
  return d ? d.provincias.map((p) => p.nombre).sort() : [];
};

// Helper: get distritos for a given provincia inside a departamento
export const getDistritosDe = (depto: string, prov: string): string[] => {
  const d = departamentos.find((d) => d.nombre === depto);
  if (!d) return [];
  const p = d.provincias.find((p) => p.nombre === prov);
  return p ? [...p.distritos].sort() : [];
};