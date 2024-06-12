function compareTriplet(a,b){
    // let a=[1,2,3];
    // let b=[3,2,1];
    let alice=0;
    let bob=0;
    if(a[0]<b[0]){
        bob++;
    }
    if(a[2]>b[2]){
        alice++;
    }
    console.log(alice,bob);
    }
    compareTriplet([1,2,3],[3,2,1]);