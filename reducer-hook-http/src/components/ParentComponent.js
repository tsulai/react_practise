import React,{useState, useCallback} from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

function ParentComponent(props) {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary])

    return (
        <div>
            <Title />
            {/* 1. Component to display the person age */}  
            {/* 2. Component to increase the person age */}          
            <Count text="Age" count={age}/>            
            <Button handleClick={incrementAge}>Increment Age </Button>

            {/* 3. Component to display the person age */}  
            {/* 4. Component to increase the person age */}   
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    );
}

export default React.memo(ParentComponent);