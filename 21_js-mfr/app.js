//Hui Min Wu
//SoftDev2 pd8
//K21 -- Onions, Bell Peppers, and Celery, Oh My!
//2019-04-30

d3.json("./data.json").then(function(data) {
    //console.log(data);
    tot = data.filter(function(n) {
                    return n['schoolyear'] == '20052006'})
        .reduce(function(a, b) {
                    return a + b['total_enrollment']}, 0);
    replace = document.getElementById("total");
    replace.innerHTML = tot;

    two = data.filter(function(n) {
                    return n['schoolyear'] == '20052006'})
        .reduce(function(a, b) {
                    return a + parseInt(b['asian_num'])}, 0);
    replaceper = document.getElementById("percent");
    replaceper.innerHTML = two/tot;
    
    avg = data.filter(function(n) {
                    return n['schoolyear'] == '20062007'})
                .map(function(n) {
                    return parseInt(n['hispanic_per'])})
                .reduce(function(a,b) {
                    return a + b}, 0);

    secondtot = data.filter(function(n) {
                    return n['schoolyear'] == '20062007'})
                .map(function(n) {
                    return parseInt(n['hispanic_per'])});

           

    replaceavg = document.getElementById("avg");
    replaceavg.innerHTML = avg/secondtot.length;
   console.log(avg);

});
