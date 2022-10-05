export interface CounterInterface {
    count: number,
    upCount: () => void,
    setCount: (value: number) => void,
    getCount: () => number,
    testje: string
}

export interface CounterElementInterface extends HTMLElement {
    acmWidget: CounterInterface
}