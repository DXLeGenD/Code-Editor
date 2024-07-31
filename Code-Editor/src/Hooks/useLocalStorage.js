import React, { useEffect, useState } from 'react'

const PREFIX = 'code-editor-'

function useLocalStorage(key, initialValue) {
    const prefixValue = PREFIX + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixValue)
        if (JSON != null) return JSON.parse(jsonValue)

        if (typeof initialValue === 'function') { return initialValue() }
        else { return initialValue }
    })
    useEffect(() => {
        localStorage.setItem(prefixValue, JSON.stringify(value))
    }, [prefixValue, value])


    return [value, setValue]
}
export default useLocalStorage;