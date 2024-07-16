interface User{
    id: string,
    email: string,
    password: string,
    hobbies?: string[]
}

const user: User ={
    id:'1',
    email: 'toto@toto.fr',
    password: 'toto'
}