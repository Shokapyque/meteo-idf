export function Capitalize(string) {
    let s = string.split("")
    s[0] = s[0].toUpperCase()
    s.join('')
    return s
}