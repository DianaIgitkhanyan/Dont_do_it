window.onload = main;
function main() {

    const btn = document.body.getElementsByClassName('key-sing-in-1')[0];
    btn.addEventListener('click', showPopup);

    const darkBg = document.createElement('div');
    darkBg.classList.add('dark-bg');
    darkBg.addEventListener('click', hidePopup);
    window.addEventListener('scroll', movePopup);
    darkBg.appendChild(addCardForm());

    function showPopup(event) {
        document.body.appendChild(darkBg);
        let close = document.body.getElementsByClassName('form_cross')[0];
        close.addEventListener('click', hidePopup);
        let sendbutton = document.getElementsByClassName('button_form')[0];
        sendbutton.addEventListener('click', sendform);
    }

    async function sendform(event){
        event.preventDefault();
{
        let name = document.body.getElementsByClassName('form_cart')[0];
        let email = document.body.getElementsByClassName('form_cart')[1];
        let activity = document.body.getElementsByClassName('form_cart_3')[0];
        let yes = document.body.getElementsByClassName('square_form')[0];

        let json = JSON.stringify({
            name: name.value,
            email: email.value,
            activity: activity.value,
            yes: yes.value,
        })
        console.log(json);
        
        
        const response = await fetch( 'register.php', {
            method: 'POST',
            body: json,
            headers: {
                'Content-type': 'application/json',
            }
        });
        let content = await response.json();
        let msg = document.createElement('h3');

        if (!response.ok) {
            alert(`An error has occurred: ${response.status}`);
           
            console.log(content);
            msg.innerText = 'Какая жалость, ошибка!';
        } else {
            alert(`Все хорошо: ${response.status}`);
            let btnform = document.getElementsByClassName('button_form')[0]
            btnform.addEventListener('click', hidePopup);
        }

        document.body.appendChild(msg);
        
    }
}

    

    function hidePopup(event) {
        const formCart = document.body.getElementsByClassName('cart')[0];
        const close = document.body.getElementsByClassName('form_cross')[0];
        if (!formCart.contains(event.target) || close.contains(event.target)) {
            document.body.removeChild(darkBg);
        }
    }
    function movePopup(event) {
        darkBg.style.top = window.scrollY + 'px';
    }
    function addCardForm() {
        const formPopup = document.createElement('div');
        formPopup.classList.add('cart')
        formPopup.innerHTML =
        `
        <div>
            <form class="cart" method="POST">
            <div>
                <img src="images/Cross.png" alt="Крестик" class="form_cross">   
            </div>
                <div>
                    <img src="images/welcome.png" alt="Человек, летящий в космосе">;
                    <p class="text_form_1">
                        Записаться на курс
                    </p>
        
                    <input class="form_cart" placeholder="Ваше имя" name="%name%">
        
        
                    <input class="form_cart" placeholder="Email" name="%email%">
                    
        
                    <select class="form_cart_3"  placeholder="Деятельность" name="%activity%">
                        
                        <option value="programmer">Программист</option>
                        <option value="designer">Дизайнер</option>
                        <option value="marketer">Маркетолог</option>
                    </select> 
        
                    <div class="checkbox_form">
                        <input name="%yes%" class="square_form " type="checkbox">
        
                        <span class="text_form_3">
                            Согласен получать информационные материалы о старте курса
                        </span>
                    </div>
                    <button class="button_form">
                        <p class="button_form__text ">
                            Записаться на курс
                        </p>
                    </button>   
        
                </div>
            </form>
        </div>
            `;

            return formPopup;
    }
}
