interface Store {
    exists(key: name): boolean
    get(key: name): ArrayBuffer
    set(key: NamedCurve, value: ArrayBuffer)
    list(): string[]
    delete(key: name)
}

declare global {
    const Variables = {
        get(key: string): string
    }

    const KVstore = {
        open: (name: string) => Store,
        openDefault: () => Store
    }
}

export { }