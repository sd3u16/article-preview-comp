
    let foot_share = document.querySelector('footer .footer_share')
    let afterChange = document.querySelector('footer .footer_share')

    let fono = document.getElementsByClassName('.footer')[0]
    let fono2 = document.getElementsByTagName('footer')[0]

    let img_share = document.querySelector('footer .footer_share img')

    let fome = document.querySelector('footer .avatar-mich')

    let fome2 = document.querySelector('footer .avatar-mich')

    const mediaQuery = window.matchMedia("(min-width: 768px)")

    let origFooter = `<footer class="footer">
      <div class="avatar-mich">
        <img class="mich-ima" src="./images/avatar-michelle.jpg" alt="">

        <div class="dateName">
          <p class="dateName__para">Michelle Appleton</p>
          <time datetime="28/06/2020">28 Jun 2020</time>
        </div>


      </div>

      <div class="footer_share">
        
        <img src="./images/icon-share.svg" alt="">
      
      </div>
    </footer>`

    function listF(){

        if(mediaQuery.matches){
            let contentBox = document.createElement('div')
            contentBox.classList.add('content')
            contentBox.innerHTML = `<div class="eno" style="display:flex; justify-content:center; align-items:center; gap:1rem;"><p style="letter-spacing: 5px;">SHARE</p> <div style='display: flex; justify-content: center; gap: 0.8rem;'><div><i class="fa-brands fa-square-facebook"></i></div> <div><i class="fa-brands fa-twitter"></i></div> <div><i class="fa-brands fa-pinterest"></i></div>`
            contentBox.style.position = 'fixed';
            contentBox.style.top = '30px'
            foot_share.parentElement.appendChild(contentBox)
            foot_share.parentElement.style.position = 'relative'
            contentBox.style.position = 'absolute'
           // foot_share.parentElement.parentElement.style.width = '150px'
            return;

        }
        

        

        let secondDiv = document.createElement('div')
        secondDiv.innerHTML = `<div><div><i class="fa-brands fa-square-facebook"></i></div> <div><i class="fa-brands fa-twitter"></i></div> <div><i class="fa-brands fa-pinterest"></i></div></div>`
        foot_share.parentElement.style.backgroundColor ='#333'
        foot_share.style.width = '50px'
        foot_share.style.backgroundColor = '#222';
        foot_share.style.display = 'flex';
        foot_share.style.justifyContent = 'center';

        foot_share.style.padding = '5px 10px';
        foot_share.style.borderRadius = '50%'
        foot_share.parentElement.style.color = '#fff'
        fome.innerHTML = `<div class='evo'><div class="eno" style="display:flex; justify-content:center; align-items:center; gap:1rem;"><p style="letter-spacing: 5px;">SHARE</p> <div style='display: flex; justify-content: center; gap: 0.8rem;'><div><i class="fa-brands fa-square-facebook"></i></div> <div><i class="fa-brands fa-twitter"></i></div> <div><i class="fa-brands fa-pinterest"></i></div></div></div></div>`

     
       

    }

   

    


    foot_share.addEventListener('click', listF)



