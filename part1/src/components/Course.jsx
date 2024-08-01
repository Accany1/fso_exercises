const Course = ({courses}) => {
    const Header = ({course}) => <h1>{course}</h1>

    const Total = ({parts}) => {
        const sum = parts.reduce((sum,part) => sum + part.exercises, 0)
        return (<p>
            Number of exercises {sum}
        </p>
        )
    }

    const Part = ({part, exercises}) => 
        <p>
            {part} {exercises}
        </p>

    const Content = ({parts}) => {
        return (
        <div>
            {parts.map((part) => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
        </div>
    )}
    
    return (
        <div>
            {courses.map((course) => 
                <div key={course.id}>
                    <Header course={course.name} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts} />
                </div>
            )
            }
        </div>
    )
}

export default Course