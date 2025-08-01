// src/counter.ts
export function setupCounter(element: HTMLElement): void {
    let counter = 0
    const setCounter = (count: number): void => {
        counter = count
        element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}
