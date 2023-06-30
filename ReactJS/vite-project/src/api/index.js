import Chance from "chance";

const chance= Chance();

export const fakeapi = () => {
    return(
        chance.name({ middle: true })
    );
}