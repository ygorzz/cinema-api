export function handleChange(e, setState){
    const {name, value} = e.target;
    // prev -> previous state
    setState(prev => ({
      ...prev, 
      [name]: value
    }));
  }