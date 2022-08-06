function solution(N, M, X, Y){
    const K = X.length;
    if (K % 2 == 1) return 0;

    let res = 0;
    let aX = new Array(N - 1).fill(0);
    let aY = new Array(M - 1).fill(0);
    for (let i=0; i<K; i++) {
        aX[X[i]]++;
        aY[Y[i]]++;
    }
    if (aX[0] == K / 2) res++;
    if (aY[0] == K / 2) res++;
    for (let i=1; i<N-1; i++) {
        aX[i] = aX[i] + aX[i - 1];
        if (aX[i] == K / 2) res++;
    }
    for (let i=1; i<M-1; i++) {
        aY[i] = aY[i] + aY[i - 1];
        if (aY[i] == K / 2) res++;
    }
    return res;
}
