
const mainContainer = document.getElementById('main-container');
function createStructure(){
const arraySizeInputBox =  document.createElement('input');
arraySizeInputBox.type = 'number';
arraySizeInputBox.id = 'array-size-input';
mainContainer.appendChild(arraySizeInputBox);

const generateArrayBtn = document.createElement('button');
generateArrayBtn.id = 'generate-array-btn';
generateArrayBtn.innerHTML = 'Generate Array';
mainContainer.appendChild(generateArrayBtn);

const arrayContainer = document.createElement('div');
arrayContainer.id = 'array-container';
mainContainer.appendChild(arrayContainer);


}
createStructure();

function makeEmptyParent(parent){
    let child = parent.lastElementChild;
    while(child){
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
}


function generateArray(y){
    const parent = document.getElementById('array-container');
    makeEmptyParent(parent);
    for(let i = 0; i < y.length; i++){
        let node = document.createElement('div');
        node.style.height = `${y[i]}px`;
        node.style.margin = '3px';
        node.className = 'child'
        console.log({node})
        parent.appendChild(node); 
    }
}

function handleGenerateArrayBtnClick(){
    console.log("Generate array button clicked");
    const arraySize = document.getElementById('array-size-input').value;
    let arr = [];
    for(let i = 0; i < parseInt(arraySize); i++){
        arr[i] = i+1;
        console.log('in')
    }
    generateArray(arr);
}

const generateArrayBtn = document.getElementById('generate-array-btn');
generateArrayBtn.addEventListener('click', handleGenerateArrayBtnClick);


