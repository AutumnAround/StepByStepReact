//first hello world in react
// import в app любую функцию компонента, которая возвращает jsx


function Hello() {
    const name = 'React-ученик';
    const age = 25;
    const isHappy = true;
    const skills = ['JSX', 'Компоненты', 'Пропсы', 'Состояние'];
  
    return (
      <div>
        <h1>Привет, {name}!</h1>
        <p>Тебе {age} лет</p>
        <p>{isHappy ? 'Ты счастлив 🙂' : 'Ты грустный 🙁'}</p>
        <h3>Ты уже знаешь:</h3>
        <ul>
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  
  export default Hello;
 