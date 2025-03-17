
// properties render
let carlenght = [1,2,3,4,5,6,7,8,9 ];
let containerOfsale = document.getElementById("containerofsale")

carlenght.forEach((val,index)=>{
containerOfsale.innerHTML += `
        <div class="box">
          <div class="img-box">
            <img src="images/s-1.jpg" alt="">
          </div>
          <div class="detail-box">
            <h6>
              apertments house ${val}
            </h6>
            <p>
              There are many variations of passages of Lorem Ipsum available, but
            </p>
          </div>
        </div>

`
})
// properties render
