function solution(A, X) {
    let len = A.length;
    if (len < 4) return 0;

    let sorted = A.sort((a, b) => a - b);

    let arr = [], unique = [], res = 0;
    for (let i=0; i<len; i++) {
        if ((arr[sorted[i]] > 0) && (unique[unique.length - 1] !== sorted[i])) {
            unique.push(sorted[i]);
        }
        if ((arr[sorted[i]] > 2) && (sorted[i] !== sorted[i+1]) && (sorted[i]*sorted[i] >= X)) res++;

        if (arr[sorted[i]] > 0) {
            arr[sorted[i]]++;
        } else {
            arr[sorted[i]] = 1;
        }
    }

    const max = unique[unique.length-1];
    let count = [];
    for (let i=1; i<unique.length; i++) {
        count[unique[i]] = unique.length - i;
    }
    for (let i=0; i<unique.length -1; i++) {
        let bigger = Math.ceil(X / unique[i]);
        bigger = Math.max(bigger, unique[i + 1]);
        if (bigger <= max) {
            for (let j=bigger; j<=max; j++) {
                if (count[j] > 0) {
                    res += count[j];
                    if (res > 1000000000) return -1;
                    j = max + 1;
                }
            }
        }
    }

    return res;
}
