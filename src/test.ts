import { createContext } from "react";

export interface Dto {
    test: string;
}

export const TestContext = createContext<Dto>({
    test: "",
});
