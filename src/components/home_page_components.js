export function AppBar() {
  return (
    <>
      <div>
        <ul className="Appbar">
          <li>SHOP</li>
          <li>ACODY</li>
          <li>LONDONCREAM</li>
          <li>
            <span
              style={{
                fontSize: "60px",
                fontFamily: "Freestyle Script",
                paddingTop: "-10px",
                fontWeight: "bolder",
              }}
            >
              Table
            </span>
          </li>
          <li>BLOG</li>
          <li>STOCKMARKET</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </>
  );
}
export function Myfun() {
  return (
    <>
      <p className="App">CANDLE COMPANY</p>
      <div class="line"></div>
    </>
  );
}
export function Sec1() {
  return (
    <>
      <div className="sec1">
        <div className="sec-left">
          <div className="box">
            <span className="boxname">New</span>
            <p>SPRING/SUMMER</p>
            <p>COLLECTION</p>
            <div class="line" style={{ marginLeft: "10px" }}></div>
            <p
              style={{
                fontFamily: "cursive",
                textAlign: "left",
                paddingTop: "10px",
              }}
            >
              our product is one of the best product in our area.
            </p>
            <button type="button" className="btn">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="sec-right">
          <img src="asset/kitchen.jpg" style={{ width: "95%" }}></img>
        </div>
      </div>
    </>
  );
}
export function Sec2() {
  return (
    <div style={{ marginTop: "40px" }}>
      <span className="Span">Crafted with care</span>
    </div>
  );
}
export function Sec3() {
  let imageList = ["asset/cup2.jpg", "asset/cup.jpg", "asset/cup3.jpg"];
  return (
    <>
      <div className="boxes">
        {imageList.map((e) => (
          <div className="Box" id="box1">
            <img src={e} style={{ height: 350, width: 340 }}></img>
            <a className="btn1">SHOP CANDLES</a>
          </div>
        ))}

        {/* <div className="Box" id="box1">
            <img src="asset/cup2.jpg" style={{ height: 350, width: 340 }}></img>
            <a className="btn1">SHOP CANDLES</a>
          </div>
          <div className="Box" id="box2">
            <img src="asset/cup.jpg" style={{ height: 350, width: 340 }}></img>
            <a className="btn1">SHOP SETS</a>
          </div>
          <div className="Box" id="box3">
            <img src="asset/cup3.jpg" style={{ height: 350, width: 340 }}></img>
            <a className="btn1">SHOP EXTRAS</a>
          </div> */}
      </div>
    </>
  );
}
export function Sec4() {
  return (
    <>
      <div className="sec4">
        <div className="left">
          <img
            src="asset/cuphand2.jpg"
            style={{ height: 380, width: 750, marginLeft: 10 }}
          ></img>
        </div>
        <div className="right">
          <div className="rightbox">
            <span className="boxname">Team</span>
            <p>WE'RE JACOB .</p>
            <p>MADISON</p>
            <div
              class="line"
              style={{ marginLeft: "5px", backgroundColor: "white" }}
            ></div>
            <button
              type="button"
              className="btn1"
              style={{ marginTop: 30, marginLeft: 0 }}
            >
              READ OUR STORY
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export function Sec5() {
  return (
    <>
      <p className="Span">From the blog</p>
    </>
  );
}
export function Sec6() {
  return (
    <>
      <div className="sec6">
        <div className="secbox6">
          <div className="left1">
            <img src="asset/cup4.jpg" style={{ height: 280, width: 550 }}></img>
            <p>OUR FAVOURITE SPRING DIV PROJECTS</p>
            <p className="message">
              A cup is an open-top container used to hold liquids for pouring or
              drinking. Although mainly used for drinking, it also can be used
              to store solids for pouring
            </p>
          </div>
          <div className="right1">
            <img src="asset/cup5.jpg" style={{ height: 280, width: 550 }}></img>
            <p>OUR FAVOURITE SPRING DIV PROJECTS</p>
            <p className="message">
              A cup is an open-top container used to hold liquids for pouring or
              drinking. Although mainly used for drinking, it also can be used
              to store solids for pouring
            </p>
          </div>
        </div>
        <button
          type="button"
          className="btn1"
          style={{
            marginTop: 170,
            marginLeft: 600,
          }}
        >
          VISIT THE BLOG
        </button>
      </div>
    </>
  );
}
export function Sec7() {
  let footerImg = [
    "asset/cup.jpg",
    "asset/cup2.jpg",
    "asset/cup3.jpg",
    "asset/cup4.jpg",
    "asset/cup5.jpg",
    "asset/cuphand2.jpg",
    "asset/kitchen.jpg",
  ];
  return (
    <>
      <div className="sec7">
        {footerImg.map((e) => (
          <img src={e} style={{ height: 200, width: 180 }}></img>
        ))}
      </div>
    </>
  );
}
export function Sec8() {
  return (
    <>
      <div className="sec8">
        <div className="footerlast">
          <div className="f">
            <p className="para">SHOP</p>
            <p>PRODUCTS</p>
            <p>STOCKIST</p>
            <p>WHOLESALE</p>
            <p>COOKBOOK</p>
          </div>
          <div className="f">
            <p className="para">ABOUT</p>
            <p>OUT STORE</p>
            <p>BLOO</p>
            <p>CONTACT</p>
            <p>FAQ</p>
          </div>
          <div className="f">
            <p className="para">SOCIAL</p>
            <p>INSTAGRAM</p>
            <p>TWITTER</p>
            <p>PINTREST</p>
            <p>FACEBOOK</p>
          </div>
          <div className="f">
            <p className="para">GET NEWS - DEALS</p>
            <div className="footdiv">
              <input
                type="text"
                placeholder="   hjids@jzh"
                className="field"
              ></input>
            </div>
            <button type="button" className="btn1" style={{ marginTop: 10 }}>
              SIGN UP
            </button>
          </div>
        </div>
        <div className="last">
          <p>
            PHOTOS OF MIDLAND COPARATIVE CO. | SITE DESIGN MANDECATED BY STATION
            DEWIN
          </p>
        </div>
      </div>
    </>
  );
}
