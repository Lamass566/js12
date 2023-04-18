let bts = document.querySelectorAll('.btn');
let tmp;
let current;
function qwe(event)
{
    console.log(event);
    let evCode = event.code;
    if(evCode === 'Enter' || 'KeyS' || 'KeyE' || 'KeyO' || 'KeyN' || 'KeyL' || 'KeyZ')
    {
            if(tmp != null)
            {
                tmp.style.backgroundColor = 'black';
            }
        current = evCode;

        bts.forEach(element => {
            if(evCode === element.getAttribute('id'))
            {
                current = element;
                element.style.backgroundColor = 'blue';
                tmp = current;
            }
        });
    }
    
}
document.addEventListener('keydown', qwe);