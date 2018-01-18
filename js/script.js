//var element = React.createElement('div', {}, 'Hello world!');

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
	src: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/9d/Harry-Potter-Wizarding-World-Weekly.jpg/revision/latest/scale-to-width-down/670?cb=20160914202759'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
	src:'https://vignette.wikia.nocookie.net/fanowska-krol-lew/images/f/fe/Asha-_Kr%C3%B3l_Lew.jpg/revision/latest?cb=20170623150420&path-prefix=pl'
  },
    {
    id: 3,
    title: 'Zakręceni',
    desc: 'Film o królu księżniczce uwięzioneh w wieży',
	src:'http://www.tapeciarnia.pl/tapety/normalne/228390_bajka_zaplatani.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
	  React.createElement('img', {src: movie.src}),
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);
  
ReactDOM.render(element, document.getElementById('app'));