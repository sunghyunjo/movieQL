const sunghyun = {
    name: "sunghyun",
    age: 21,
    gender: "female",
}

const resolvers = {
    Query: {
        person: () => sunghyun,
    }
};

export default resolvers;
