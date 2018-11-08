export const people = [
    {
        id: "1",
        name: "sunghyun",
        age: 21,
        gender: "female",
    }, 
    {
        id: "2",
        name: "donghyuk",
        age: 19,
        gender: "male",
    }, 
    {
        id: "3",
        name: "gunwoo",
        age: 28,
        gender: "male",
    }, 
    {
        id: "4",
        name: "seoyeon",
        age: 22,
        gender: "female",
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => people.id === id );
    return filteredPeople[0];
}
