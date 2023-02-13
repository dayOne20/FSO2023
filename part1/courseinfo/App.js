const Header = (header) => {
  return <h1>{header.course}</h1>;
};

const Part = (content) => {
  return (
    <p>
      {content.part} {content.exercise}
    </p>
  );
};

const Content = (content) => {
  return (
    <div>
      <Part
        part={content.parts[0].title} exercise={content.parts[0].exercises}
      />
      <Part
        part={content.parts[1].title} exercise={content.parts[1].exercises}
      />
      <Part
        part={content.parts[2].title} exercise={content.parts[2].exercises}
      />
    </div>
  );
};

const Total = (total) => {
  return (
    <p>
      Number of exercises{": "}
      {total.parts[0].exercises +
        total.parts[1].exercises +
        total.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    title: "Half Stack application development",
    parts: [
      {
        title: "Fundamentals of React:" ,
        exercises: 10,
      },
      {
        title: "Using props to pass data:",
        exercises: 7,
      },
      {
        title: "State of a component:",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.title} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
