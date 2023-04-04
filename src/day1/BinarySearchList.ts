export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const middle = Math.floor(low + (high - low) / 2);
        if (haystack[middle] === needle) {
            return true;
        } else if (haystack[middle] > needle) {
            high = middle;
        } else {
            low = middle + 1;
        }
    } while (low < high);

    return false;
}
