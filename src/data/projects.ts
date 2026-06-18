export const projects = [
  {
    id: 1,
    name: "Meditation session tracker",
    github: ["https://github.com/Eoghain2708/meditation-application"],
    description: `
    A fullstack application made with a Rails API as the backend and React/TypeScript on the frontend. Users can log in with JWT-auth
    and browse a selection of meditations, search specific ones, and filter by category. On each meditation page, they can read about the meditation itself, create a session
    with said meditation (including duration, public/private, and notes on the session), as well as browse sessions completed by other users
    with that meditation. There is also a user search functionality to discover other users and browse their sessions, as well as a dashboard
    showing some basic statistics for the current user. 
    `,
    tools: "Ruby/Rails, React/TS, SQLite"
  },
  {
    id: 2,
    name: "Shift scraper",
    github: ["https://github.com/Eoghain2708/shifts"],
    description: `
    A Ruby scraper which reverse engineers an undocumented API (from my workplace) and uses it to scrape useful data about the current week
    and the following week's rotas. The scraper auto-logs in to the roster website with environment variables and saves a JSON token in
    a cache for future requests, then accesses the JSON of rota page via the API, which contains all employee shifts for the week. This
    is packaged into a CLI app which is on PATH and can be called from anywhere on the device. Users can call a variety of commands, e.g
    "shifts whosin tomorrow", "shifts hours me nextweek", as well as "shifts willsee (name1) (name2) thisweek/nextweek" to find shifts in
    common.
    `,
    tools: "Ruby"
  },
  {
    id: 3,
    name: "Knowledge base",
    github: ["https://github.com/Eoghain2708/knowledge-base"],
    description: `
    A knowledge base written with a Rails API, React frontend and PostgreSQL database in which the user can create categories and notes within
    them for a combined, centralised knowledge base. Uses Ollama on the backend to provide embedded vectors on each note, which in turn supports an
    AI generated, site-wide search of notes, meaning that when a user searches their knowledge base, they can type general requests and
    get a host of notes related to that request. The idea is to have a mixture of notes, offline documentation, anything useful at all, and be able to
    search it all with the power of AI Front end functionality is currently a work in progress, but Rails endpoints are functional.
    `,
    tools: "Ruby/Rails, React/TS, PostgreSQL"
  },
  {
    id: 4,
    name: "Workout API",
    github: ["https://github.com/Eoghain2708/workout-library"],
    description: `
    A Java library published on GitHub packages and installable on Maven projects. Features a core API for creating workout applications,
    with custom classes, prioritising flexibility through builders while maintaining inheritance through recursive generics in builder classes.
    API includes Exercise, ExerciseSet (abstract), CardioSet, WeightSet, Workout. It also features useful methods to derive ORM (maximum weight a
    person can lift for one repetition) from a given WeightSet, as well as to derive the approximate weight needed to make a target repetition count
    sufficiently challenging given a user's ORM. 
    `,
    tools: "Java, Maven"
  },
  {
    id: 5,
    name: "Quantity surveyor scraper",
    github: ["https://github.com/Eoghain2708/qs_scraper", "https://github.com/Eoghain2708/scraper-with-frontend"],
    
    description: `
    A data scraper written in Ruby which takes in a search param, runs the search on three merchant websites (B&Q, Travis Perkins, Haldane Fisher),
    then returns the first n results (adjustable) from each site, including name, price, reviews, and extra information if the site exposes it.
    These products can be ordered by price. The React frontend version also includes the images of each product pulled from the site. The CLI application
    features an experimental 'list' option which allows the user to type multiple products, with the cheapest result being extracted from each site and added
    to a shopping list, which is returned at the end with a total price. It also features a points system to restrict query results to the most relevant ones.
    `,
    tools: "Ruby, React"
  },
  {
    id: 6,
    name: "Hotel Room Processor, Uni Exam",
    github: ["https://github.com/Eoghain2708/hotel-room-processor"],
    description: `
    Exam code written without access to the internet, with the exam spec present in the README. Takes a CSV of hotel rooms and associated data,
    parses them into Java Objects, ignoring invalid data, and sorts them using idiomatic Java (streams, generics, etc) and outputs results in a new thread. 
    `,
    tools: "Java"
  },
  {
    id: 7,
    name: "Chess gameplay analysis (unfinished)",
    github: ["https://github.com/Eoghain2708/chess-data-analysis"],
    description: `
    An (incomplete) project which begins to analyse my chess playstyle against random opponents versus against a close friend of mine.
    Scrapes PGN (Portable Game Notation) data off the chess.com API to save moves, results and other data from several hundreds of games,
    then seeks to analyse certain characteristics of the games to reflect playstyle (e.g amount of pieces developed by move 10 signifying
    passiveness vs taking initiative, pawn moves in the first N moves signalling aggression, etc).
    `,
    tools: "Python, Jupyter Notebook"
  }

]