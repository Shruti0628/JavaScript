function intializeEventDelegation() {
    const mainbody = document.querySelector('.mainbody');
    for(let i = 1; i <= 50; i++){
        const ele = document.createElement('div');
        ele.innerText = i;
        ele.style.display = 'inline-block';
        ele.style.margin = '4px';
        ele.style.padding = '6px';
        mainbody.append(ele);
    }
    mainbody.addEventListener('click', function(e){
        alert(`You clicked on ${e.target.innerText}`);
});
}
intializeEventDelegation();