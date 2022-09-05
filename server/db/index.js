// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')

const campuses =   
[{
  name: 'Drexel Avenue School',
  imageUrl:'https://www.usnews.com/dims4/USNEWS/71a8df3/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F39%2F4587aa9f863870da97d88e408aba9d%2Fcollege-photo_12762.jpg',
  address:'Westbury NY',
  description:'Its a good elementary school!'
}, {
  name: 'The North Hills School',
  imageUrl:'https://www.usnews.com/dims4/USNEWS/1197d08/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F2a%2F625aa26f9c4544283a51182de20834%2FFirstDayInstaWIDE-1_USNews.jpg',
  address:'Queens NY',
  description:'Its an excellent elementary school!'
}, {
  name: 'Queensborough Community College',
  imageUrl:'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1635255884/doane/yjfzvmktnviq57ald35x/MorningCircleOctober2021.jpg',
  address:'Queens NY',
  description:'Its a good college!'
}, {
  "name": "Tunku Syed Sirajuddin Polytechnic",
  "address": "2 Toban Pass"
}, {
  "name": "Universidad Nacional de San Luis",
  "address": "69 Debs Road"
}, {
  "name": "National Formosa University",
  "address": "8657 Novick Lane"
}, {
  "name": "Türkisch-Deutsche Universität",
  "address": "9117 Sherman Crossing"
}, {
  "name": "Muroran Institute of Technology",
  "address": "52 Warner Way"
}, {
  "name": "Police Academy",
  "address": "37 Paget Alley"
}, {
  "name": "Edison Community College",
  "address": "55776 4th Circle"
}, {
  "name": "Universidad Justo Sierra",
  "address": "5571 Carey Pass"
}, {
  "name": "University of Jinan",
  "address": "0737 Del Sol Junction"
}, {
  "name": "Federal University of Technology, Akure",
  "address": "7498 Dawn Drive"
}, {
  "name": "University of Nova Gorica",
  "address": "103 Esker Street"
}, {
  "name": "Haverford College",
  "address": "145 Eagan Hill"
}, {
  "name": "Centro Regional Universitário de Espiríto Santo do Pinhal",
  "address": "63 Green Trail"
}, {
  "name": "Berklee College of Music",
  "address": "07 Pine View Lane"
}, {
  "name": "International School of Management in Prešov",
  "address": "889 Scofield Point"
}, {
  "name": "Camosun College",
  "address": "1 Fieldstone Parkway"
}, {
  "name": "National Chiao Tung University",
  "address": "78 Bunting Park"
}, {
  "name": "Lviv Polytechnic National University",
  "address": "7 Fordem Court"
}, {
  "name": "Tokyo University of Pharmacy and Life Science",
  "address": "58908 Brickson Park Center"
}, {
  "name": "Friends University",
  "address": "5707 Arrowood Parkway"
}, {
  "name": "Université Paris-Sorbonne (Paris IV)",
  "address": "39 Norway Maple Park"
}, {
  "name": "Universitas Islam Sumatera Utara",
  "address": "04753 Amoth Lane"
}, {
  "name": "Oregon State University",
  "address": "9275 Mosinee Parkway"
}, {
  "name": "Institute of Teachers Education, Keningau",
  "address": "3106 Reindahl Terrace"
}, {
  "name": "De Montfort University Leicester",
  "address": "3 Westerfield Avenue"
}, {
  "name": "Institute of Accountancy Arusha",
  "address": "60 Briar Crest Alley"
}, {
  "name": "Universidad Iberoamericana de Ciencias y Tecnologia",
  "address": "30 Caliangt Court"
}, {
  "name": "DeVry Institute of Technology, Chicago",
  "address": "95 Esch Place"
}, {
  "name": "Ling Tung University",
  "address": "34692 Eagle Crest Hill"
}, {
  "name": "Hannibal-Lagrange College",
  "address": "7 Dunning Street"
}, {
  "name": "Kisii University",
  "address": "32601 Farwell Park"
}, {
  "name": "Hyupsung University",
  "address": "9 Coleman Circle"
}, {
  "name": "National Institute of Technology, Warangal",
  "address": "04 Fremont Crossing"
}, {
  "name": "Canadian Sudanese College",
  "address": "124 Goodland Junction"
}, {
  "name": "St. Petersburg State Medical Academy",
  "address": "30 Gale Avenue"
}, {
  "name": "University of California, Merced",
  "address": "6507 Bonner Road"
}, {
  "name": "University of Essex",
  "address": "49 Westerfield Trail"
}, {
  "name": "Wolaita Sodo University",
  "address": "21 Toban Lane"
}, {
  "name": "Gifu Women's University",
  "address": "0 Monterey Circle"
}, {
  "name": "School of Business and Finance",
  "address": "1901 Muir Road"
}, {
  "name": "Glendale University College of Law",
  "address": "22 Hovde Place"
}, {
  "name": "Shorter College",
  "address": "8629 Texas Lane"
}, {
  "name": "Kanagawa Dental College",
  "address": "665 Arapahoe Junction"
}, {
  "name": "Presbyterian University of East Africa",
  "address": "8342 Ridge Oak Park"
}, {
  "name": "Oregon Institute of Technology",
  "address": "639 Hanover Hill"
}, {
  "name": "Universidad Maritima de Chile",
  "address": "6 Summit Parkway"
}, {
  "name": "Asahi University",
  "address": "45903 Ridge Oak Court"
}, {
  "name": "National Taipei College of Nursing",
  "address": "49 Harper Pass"
}, {
  "name": "Texas College of Osteopathic Medicine",
  "address": "6198 Sage Avenue"
}, {
  "name": "Universidad Miguel Hernández de Elche",
  "address": "5 Arrowood Circle"
}, {
  "name": "Nanjing University of Chemical Technology",
  "address": "67 Bashford Terrace"
}, {
  "name": "Bauchi State University, Gadau",
  "address": "97 Tennyson Way"
}, {
  "name": "University of Bridgeport",
  "address": "0 Briar Crest Circle"
}, {
  "name": "Universitas Bhayangkara Surabaya",
  "address": "96508 Judy Junction"
}, {
  "name": "Chengdu Institute of Sichuan International Studies University",
  "address": "1 Surrey Center"
}, {
  "name": "Shandong Normal University",
  "address": "723 Pankratz Pass"
}, {
  "name": "Universidad Salvadorena \"Alberto Masferrer\"",
  "address": "8 Debra Way"
}, {
  "name": "University of Presov",
  "address": "664 Corben Avenue"
}, {
  "name": "Azabu University",
  "address": "0 Norway Maple Hill"
}, {
  "name": "University of Mysore",
  "address": "2863 Kensington Crossing"
}, {
  "name": "Bogazici University",
  "address": "4335 Shasta Park"
}, {
  "name": "Miryang National University",
  "address": "5 Farmco Parkway"
}, {
  "name": "Guilford College",
  "address": "9 Del Mar Junction"
}, {
  "name": "Berne University",
  "address": "269 Dwight Circle"
}, {
  "name": "University of Florence",
  "address": "9 Hallows Avenue"
}, {
  "name": "Hyogo University",
  "address": "9643 Harper Place"
}, {
  "name": "University of Wisconsin - Superior",
  "address": "351 Dottie Point"
}, {
  "name": "Universidad La Republica",
  "address": "04 Saint Paul Crossing"
}, {
  "name": "Armenian State Agrarian University",
  "address": "42167 Meadow Valley Trail"
}, {
  "name": "Goldey-Beacom College",
  "address": "69351 2nd Plaza"
}, {
  "name": "University of the Philippines Visayas",
  "address": "05 Maywood Pass"
}, {
  "name": "Universidade Federal da Bahia",
  "address": "73664 Lien Alley"
}, {
  "name": "Centro de Estudios Investigación y Tecnología (CEIT)",
  "address": "1 Mayfield Parkway"
}, {
  "name": "Fujian Agricultural University",
  "address": "5 Dayton Junction"
}, {
  "name": "Universität Fridericana Karlsruhe (Technische Hochschule)",
  "address": "2056 Fairfield Terrace"
}, {
  "name": "Coker College",
  "address": "48491 Montana Center"
}, {
  "name": "Universität Hohenheim",
  "address": "9 Eggendart Road"
}, {
  "name": "Universitas Dian Nuswantoro",
  "address": "1 Claremont Trail"
}, {
  "name": "Virginia Military Institute",
  "address": "20 Weeping Birch Point"
}, {
  "name": "Lithunian Academy of Music and Theatre",
  "address": "152 Pepper Wood Way"
}, {
  "name": "Washington College",
  "address": "71 Service Pass"
}, {
  "name": "Royal Danish School of Pharmacy",
  "address": "214 Steensland Park"
}, {
  "name": "Universidad Cristiana de las Asambleas de Dios",
  "address": "52 Myrtle Drive"
}, {
  "name": "Husson College",
  "address": "8 Londonderry Trail"
}, {
  "name": "Marij State University",
  "address": "87 3rd Parkway"
}, {
  "name": "Framingham State College",
  "address": "47 Sage Trail"
}, {
  "name": "Baker College of Mount Clemens",
  "address": "452 Sheridan Center"
}, {
  "name": "Posts & Telecommunications Institute of Technology",
  "address": "1088 Mccormick Court"
}, {
  "name": "University of the Virgin Islands",
  "address": "14225 Almo Drive"
}, {
  "name": "Nishinippon Institute of Technology",
  "address": "25 Waxwing Court"
}, {
  "name": "Motilal Nehru National Institute Of Technology",
  "address": "218 Emmet Trail"
}, {
  "name": "Alfaisal University",
  "address": "1 Fremont Crossing"
}, {
  "name": "University of Padua",
  "address": "4 Maple Wood Avenue"
}, {
  "name": "Technical University of Rzeszow",
  "address": "3508 Grim Lane"
}, {
  "name": "Marywood University",
  "address": "7871 Gerald Avenue"
}, {
  "name": "Universidad de Santiago de Compostela",
  "address": "431 Veith Avenue"
}, {
  "name": "University of Rhode Island",
  "address": "18 Springview Drive"
}]
const students =[{

  firstName: 'Aaron',
  lastName: 'Wang',
  email: 'wo-08@hotmail.com',
  imageUrl: 'https://l450v.alamy.com/450v/2hwe125/little-boy-in-tracksuit-guy-got-ready-for-sports-activities-cheerful-person-standing-pose-cartoon-comic-style-flat-design-single-character-2hwe125.jpg',
  gpa: 3.9,
},{

  firstName: 'Dora',
  lastName: 'Zhang',
  email: 'dorazhang86@gmail.com',
  imageUrl: 'https://l450v.alamy.com/450v/2h9h5jy/female-cook-in-overalls-girl-from-kitchen-in-an-apron-cheerful-person-standing-pose-cartoon-comic-style-flat-design-single-character-2h9h5jy.jpg',
  gpa: 3.7,
},{

  firstName: 'Tom',
  lastName: 'Li',
  email: 'tomli00@gmail.com',
  imageUrl: 'https://c8.alamy.com/zooms/6/e5566fcb06c6469d9b8078805fd0bd29/2h7ce4f.jpg',
  gpa: 3.8, 
},{

  firstName: 'Jerry',
  lastName: 'Dong',
  email: 'jerryzhao00@gmail.com',
  imageUrl: 'https://c8.alamy.com/zooms/6/d637d3fd8b0a42c1b2ad6b53061f3da2/2h6ggek.jpg',
  gpa: 3.6, 
}, {
"firstName": "Abner",
"lastName": "Roussel",
"email": "aroussel4@wikipedia.org"
}, {
"firstName": "Esra",
"lastName": "De Maine",
"email": "edemaine5@sourceforge.net"
}, {
"firstName": "Benni",
"lastName": "Sheilds",
"email": "bsheilds6@irs.gov"
}, {
"firstName": "Rafa",
"lastName": "Beedell",
"email": "rbeedell7@purevolume.com"
}, {
"firstName": "Cristiano",
"lastName": "Sycamore",
"email": "csycamore8@unesco.org"
}, {
"firstName": "Ignatius",
"lastName": "Woodage",
"email": "iwoodage9@amazon.de"
}, {
"firstName": "Vannie",
"lastName": "Erdes",
"email": "verdesa@macromedia.com"
}, {
"firstName": "Thedric",
"lastName": "Swyer",
"email": "tswyerb@rakuten.co.jp"
}, {
"firstName": "Hersh",
"lastName": "O'Shee",
"email": "hosheec@squarespace.com"
}, {
"firstName": "Katherine",
"lastName": "Gartshore",
"email": "kgartshored@indiegogo.com"
}, {
"firstName": "Merline",
"lastName": "Chue",
"email": "mchuee@devhub.com"
}, {
"firstName": "Christalle",
"lastName": "Issacoff",
"email": "cissacofff@ow.ly"
}, {
"firstName": "Wandie",
"lastName": "Guiver",
"email": "wguiverg@youku.com"
}, {
"firstName": "Agna",
"lastName": "Bignell",
"email": "abignellh@paginegialle.it"
}, {
"firstName": "Lettie",
"lastName": "Willgress",
"email": "lwillgressi@flickr.com"
}, {
"firstName": "Ines",
"lastName": "Shalloo",
"email": "ishallooj@bizjournals.com"
}, {
"firstName": "Mada",
"lastName": "Eastcott",
"email": "meastcottk@people.com.cn"
}, {
"firstName": "Vin",
"lastName": "Matias",
"email": "vmatiasl@networksolutions.com"
}, {
"firstName": "Christophorus",
"lastName": "Martinovic",
"email": "cmartinovicm@jigsy.com"
}, {
"firstName": "Opal",
"lastName": "Mundow",
"email": "omundown@acquirethisname.com"
}, {
"firstName": "Tye",
"lastName": "Ebourne",
"email": "tebourneo@va.gov"
}, {
"firstName": "Cathrine",
"lastName": "Cambridge",
"email": "ccambridgep@usda.gov"
}, {
"firstName": "Florentia",
"lastName": "Broker",
"email": "fbrokerq@netscape.com"
}, {
"firstName": "Joyce",
"lastName": "Killerby",
"email": "jkillerbyr@dmoz.org"
}, {
"firstName": "Misty",
"lastName": "Brissard",
"email": "mbrissards@harvard.edu"
}, {
"firstName": "Garwood",
"lastName": "Halfpenny",
"email": "ghalfpennyt@google.co.uk"
}, {
"firstName": "Loni",
"lastName": "Ferri",
"email": "lferriu@g.co"
}, {
"firstName": "Leela",
"lastName": "Merrifield",
"email": "lmerrifieldv@xinhuanet.com"
}, {
"firstName": "Ethelind",
"lastName": "Jacop",
"email": "ejacopw@elpais.com"
}, {
"firstName": "Haydon",
"lastName": "Biset",
"email": "hbisetx@sogou.com"
}, {
"firstName": "Anson",
"lastName": "McGrann",
"email": "amcgranny@accuweather.com"
}, {
"firstName": "Dredi",
"lastName": "Berni",
"email": "dberniz@usnews.com"
}, {
"firstName": "Findlay",
"lastName": "Fenemore",
"email": "ffenemore10@google.de"
}, {
"firstName": "Janine",
"lastName": "Greatorex",
"email": "jgreatorex11@toplist.cz"
}, {
"firstName": "Claudell",
"lastName": "Lemerle",
"email": "clemerle12@slashdot.org"
}, {
"firstName": "Clyde",
"lastName": "Urch",
"email": "curch13@wunderground.com"
}, {
"firstName": "Beverie",
"lastName": "Kures",
"email": "bkures14@plala.or.jp"
}, {
"firstName": "Noreen",
"lastName": "Nowlan",
"email": "nnowlan15@xrea.com"
}, {
"firstName": "Ardra",
"lastName": "Poff",
"email": "apoff16@skype.com"
}, {
"firstName": "Lisle",
"lastName": "Cartwight",
"email": "lcartwight17@cornell.edu"
}, {
"firstName": "Erinna",
"lastName": "Kerkham",
"email": "ekerkham18@nih.gov"
}, {
"firstName": "Shari",
"lastName": "Hambright",
"email": "shambright19@discuz.net"
}, {
"firstName": "Glen",
"lastName": "Parkes",
"email": "gparkes1a@sphinn.com"
}, {
"firstName": "Elga",
"lastName": "Fasse",
"email": "efasse1b@netlog.com"
}, {
"firstName": "Daniela",
"lastName": "Fominov",
"email": "dfominov1c@mapquest.com"
}, {
"firstName": "Jody",
"lastName": "Seddon",
"email": "jseddon1d@statcounter.com"
}, {
"firstName": "Nicol",
"lastName": "Ovendon",
"email": "novendon1e@narod.ru"
}, {
"firstName": "Gordon",
"lastName": "Gilvear",
"email": "ggilvear1f@comcast.net"
}, {
"firstName": "Stanton",
"lastName": "Aleksidze",
"email": "saleksidze1g@github.com"
}, {
"firstName": "Babette",
"lastName": "Ivanchikov",
"email": "bivanchikov1h@bing.com"
}, {
"firstName": "Giacomo",
"lastName": "Withur",
"email": "gwithur1i@illinois.edu"
}, {
"firstName": "Carroll",
"lastName": "Crassweller",
"email": "ccrassweller1j@dailymail.co.uk"
}, {
"firstName": "Frazer",
"lastName": "Brunger",
"email": "fbrunger1k@harvard.edu"
}, {
"firstName": "Juli",
"lastName": "Polgreen",
"email": "jpolgreen1l@free.fr"
}, {
"firstName": "Gianna",
"lastName": "Purcell",
"email": "gpurcell1m@acquirethisname.com"
}, {
"firstName": "Hermann",
"lastName": "Gatlin",
"email": "hgatlin1n@a8.net"
}, {
"firstName": "Annice",
"lastName": "Papes",
"email": "apapes1o@miibeian.gov.cn"
}, {
"firstName": "Alena",
"lastName": "Slyford",
"email": "aslyford1p@cnn.com"
}, {
"firstName": "Babita",
"lastName": "Vollam",
"email": "bvollam1q@zdnet.com"
}, {
"firstName": "Corinne",
"lastName": "Yarmouth",
"email": "cyarmouth1r@furl.net"
}, {
"firstName": "Austine",
"lastName": "Jordin",
"email": "ajordin1s@youtube.com"
}, {
"firstName": "Gilbertine",
"lastName": "Clausson",
"email": "gclausson1t@dmoz.org"
}, {
"firstName": "Alix",
"lastName": "Tutchener",
"email": "atutchener1u@plala.or.jp"
}, {
"firstName": "Sansone",
"lastName": "Keld",
"email": "skeld1v@reuters.com"
}, {
"firstName": "Veronica",
"lastName": "Laughren",
"email": "vlaughren1w@prnewswire.com"
}, {
"firstName": "Cris",
"lastName": "Challiss",
"email": "cchalliss1x@springer.com"
}, {
"firstName": "Renate",
"lastName": "Goslin",
"email": "rgoslin1y@go.com"
}, {
"firstName": "Wanda",
"lastName": "Maclaine",
"email": "wmaclaine1z@narod.ru"
}, {
"firstName": "Juliet",
"lastName": "Lawrinson",
"email": "jlawrinson20@google.co.jp"
}, {
"firstName": "Leoine",
"lastName": "Sabati",
"email": "lsabati21@home.pl"
}, {
"firstName": "Chevy",
"lastName": "Pattemore",
"email": "cpattemore22@odnoklassniki.ru"
}, {
"firstName": "Dallon",
"lastName": "Coxall",
"email": "dcoxall23@google.de"
}, {
"firstName": "North",
"lastName": "Rannigan",
"email": "nrannigan24@harvard.edu"
}, {
"firstName": "Devan",
"lastName": "Devenish",
"email": "ddevenish25@weibo.com"
}, {
"firstName": "Gerta",
"lastName": "Trounce",
"email": "gtrounce26@ted.com"
}, {
"firstName": "Annmaria",
"lastName": "Ponton",
"email": "aponton27@cdbaby.com"
}, {
"firstName": "Jase",
"lastName": "Kellard",
"email": "jkellard28@princeton.edu"
}, {
"firstName": "Ericka",
"lastName": "Callf",
"email": "ecallf29@japanpost.jp"
}, {
"firstName": "Dalis",
"lastName": "Drezzer",
"email": "ddrezzer2a@fema.gov"
}, {
"firstName": "Rancell",
"lastName": "Aleksandrov",
"email": "raleksandrov2b@china.com.cn"
}, {
"firstName": "Olive",
"lastName": "Bartolomivis",
"email": "obartolomivis2c@thetimes.co.uk"
}, {
"firstName": "Saidee",
"lastName": "Cicculini",
"email": "scicculini2d@msu.edu"
}, {
"firstName": "Moshe",
"lastName": "Flintiff",
"email": "mflintiff2e@typepad.com"
}, {
"firstName": "Dulciana",
"lastName": "Michin",
"email": "dmichin2f@washington.edu"
}, {
"firstName": "Pattin",
"lastName": "Grevile",
"email": "pgrevile2g@istockphoto.com"
}, {
"firstName": "Jess",
"lastName": "Wrey",
"email": "jwrey2h@huffingtonpost.com"
}, {
"firstName": "Parry",
"lastName": "Champley",
"email": "pchampley2i@comsenz.com"
}, {
"firstName": "Veda",
"lastName": "Woolfitt",
"email": "vwoolfitt2j@360.cn"
}, {
"firstName": "Brooke",
"lastName": "Basketfield",
"email": "bbasketfield2k@4shared.com"
}, {
"firstName": "Trumann",
"lastName": "Keeves",
"email": "tkeeves2l@tiny.cc"
}, {
"firstName": "Robinet",
"lastName": "Hastwall",
"email": "rhastwall2m@shinystat.com"
}, {
"firstName": "Susi",
"lastName": "Pohlke",
"email": "spohlke2n@globo.com"
}, {
"firstName": "Eadie",
"lastName": "Immings",
"email": "eimmings2o@google.cn"
}, {
"firstName": "Dirk",
"lastName": "Robilliard",
"email": "drobilliard2p@gravatar.com"
}, {
"firstName": "Gustie",
"lastName": "Philcott",
"email": "gphilcott2q@aboutads.info"
}, {
"firstName": "Elvina",
"lastName": "Swadlinge",
"email": "eswadlinge2r@admin.ch"
}]


const syncAndSeed = async () => {
    await db.sync({ force: true });

    //use this area to sync your database
    await Promise.all(campuses.map(campus => {
      return Campus.create(campus);
    }));

    await Promise.all(students.map(student => {
      return Student.create(student);
    }));

    const student1 = await Student.findByPk(1)
    student1.update({campusId: 1})
    await student1.save()
    const student2 = await Student.findByPk(2)
    student2.update({campusId: 1})
    await student2.save()
    const student3 = await Student.findByPk(3)
    student3.update({campusId: 2})
    await student3.save()
    const student4 = await Student.findByPk(4)
    student4.update({campusId: 3})
    await student4.save()

    console.log(`
    Seeding successful!
  `);
};

Campus.hasMany(Student)
Student.belongsTo(Campus);



module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed,
    Student,
    Campus
}