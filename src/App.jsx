import './App.css';

function Container(props) {
  console.log('container');
  // props.children yra yra viskas kas bus tarp <Container> ir </Container>
  return <div className='container'>{props.children}</div>;
}

function SingleCard(props) {
  console.log('card');
  // console.log('props ===', props);
  //const props = {title: 'Monday', text: 'Is the first day'}
  // <button>Do not click</button> paspaudimu iskviesti sayHi()
  // <button>Do not click</button> paspaudimu iskviesti sayHi() ir perduoti varda pzd "James"
  return (
    <div className={`card ${props.isSpecial ? 'tomato' : ''}`}>
      <h2>title: {props.title}</h2>
      <p>{props.text}</p>
      <button onClick={() => props.onHi('James')}>Do not click</button>
    </div>
  );
}

export default function App() {
  console.log('app');

  function sayHi(yourName) {
    console.log(`hello there ${yourName}`);
  }

  return (
    <Container>
      <h1>New topic</h1>
      <p>hello </p>
      <button>Click</button>
      <hr />
      <SingleCard
        onHi={sayHi}
        title='Monday'
        text='Is the first day'
        isSpecial={true}
      />
      <SingleCard
        onHi={sayHi}
        title='React'
        text='is not that dificult'
        count={50}
      />
    </Container>
  );
}
