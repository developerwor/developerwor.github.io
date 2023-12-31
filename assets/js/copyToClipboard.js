/*function copyToClipboard(elementId) {
    // 텍스트를 복사할 요소를 가져옵니다.
    var textElement = document.getElementById(elementId);

    // 임시 input 요소를 생성합니다.
    var tempInput = document.createElement('input');
    tempInput.setAttribute('value', textElement.innerText);
    
    // 문서에 임시 input 요소를 추가합니다.
    document.body.appendChild(tempInput);
    
    // 임시 input 요소의 내용을 선택하고 복사합니다.
    tempInput.select();
    document.execCommand('copy');
    
    // 임시 input 요소와 선택을 해제합니다.
    document.body.removeChild(tempInput);
    window.getSelection().removeAllRanges();
}*/

function copyToClipboard(elementId) {
    var textElement = document.getElementById(elementId);
    
    navigator.clipboard.writeText(textElement.innerText)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch((error) => {
            console.error('Failed to copy text:', error);
        });
}

