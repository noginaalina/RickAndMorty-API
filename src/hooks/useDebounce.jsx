const useDebounce = () => {
    function debounce (callback, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                callback.apply(this, args)
            }, delay)
        }
    }
    return {debounce}
};

export default useDebounce