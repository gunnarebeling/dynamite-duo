export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Jim",
            power: "gets really angry"
        },
        {
            id:2,
            name: "Barbra the barbarian",
            power:"Complains about everything"
        }
    ]
}
export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}