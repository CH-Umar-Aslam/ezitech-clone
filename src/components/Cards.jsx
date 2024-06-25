import "../App.css"
const Cards = () => {
  console.log("cards");
  return (
    <div>

      <div class=" grid   grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-4  rounded-[10px] " >
        <div class="card">
          <img src="/src/assets/images/artificial-intelligence-3-69x69.png" alt="ML & AI" />
          <p>ML & AI</p>
        </div>
        <div class="card">
          <img src="/src/assets/images/blockchain-69x69.png" alt="Block Chain" />
          <p>Block Chain</p>
        </div>
        <div class="card">
          <img src="/src/assets/images/aaaa-69x69.png" alt="Amazon" />
          <p>Amazon</p>
        </div>
        <div class="card">
          <img src="/src/assets/images/cccccc-69x69.png" alt="Cyber Security" />
          <p>Cyber Security</p>
        </div>
        <div class="card">
          <img src="/src/assets/images/ffff-69x69.png" alt="Development" />
          <p>Development</p>
        </div>
        <div class="card">
          <img src="/src/assets/images/www-69x69.png" alt="Designing" />
          <p>Designing</p>
        </div>
        <div class="card">
          <img src="/src/assets/images/gaming.png" alt="Gaming" />
          <p>Gaming</p>
        </div>
        <div class="card">
          <img src="/src/assets/ssss-69x69.png" alt="Architecture" />
          <p>Architecture</p>
        </div>
        <div class="card">
          <img src="/src/assets/images/ios.png" alt="IOS & AND" />
          <p>IOS & AND</p>
        </div>
        <div class="card">
          <img src="/src/assets/images/marketing.png" alt="Marketing" />
          <p>Marketing</p>
        </div>
        <div class="card">
          <img src="/src/assets/images/3d-68x68.png" alt="3D" />
          <p>3D</p>
        </div>
        <div class="card">
          <img src="/src/assets/images/animation-68x68.png" alt="Animation" />
          <p>Animation</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
