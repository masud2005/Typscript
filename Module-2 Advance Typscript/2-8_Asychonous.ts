{
    type ToDo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }
    const getTodo = async (): Promise<ToDo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log(data);
        return data;
    };
    getTodo();


    
}