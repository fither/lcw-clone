import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-bootstrap";

export default function Home(props) {
  return (
    <div>
      <div className="my-3">
        <img src="https://img-lcwaikiki1.mncdn.com/mnresize/1920/-/Resource/Images/Banner/291021-29ekim.jpg" className="w-100" alt=""></img>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://img-lcwaikiki1.mncdn.com/mnresize/1920/-/Resource/Images/Banner/251021-xsidealeyna.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img-lcwaikiki1.mncdn.com/mnresize/1920/-/Resource/Images/Banner/251021-benetton4.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img-lcwaikiki1.mncdn.com/mnresize/1920/-/Resource/Images/Banner/251021-gamze.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img-lcwaikiki1.mncdn.com/mnresize/1920/-/Resource/Images/Banner/251021-29ekim.jpg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
      <div className="row bottom-row">
        <div className="col col-3">
          <img
            src="https://img-lcwaikiki1.mncdn.com/mnresize/360/-/Resource/Images/Banner/251021-kadin.jpg"
            alt=""
          />
        </div>
        <div className="col col-3">
          <img
            src="https://img-lcwaikiki1.mncdn.com/mnresize/360/-/Resource/Images/Banner/251021-erkek.jpg"
            alt=""
          />
        </div>
        <div className="col col-3">
          <img
            src="https://img-lcwaikiki1.mncdn.com/mnresize/360/-/Resource/Images/Banner/251021-cocuk.jpg"
            alt=""
          />
        </div>
        <div className="col col-3">
          <img
            src="https://img-lcwaikiki1.mncdn.com/mnresize/360/-/Resource/Images/Banner/251021-bebek.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="pb-3">
        <img
          src="https://img-lcwaikiki1.mncdn.com/mnresize/1920/-/Resource/Images/Banner/251021-coksatanlar.jpg"
          className="w-100"
          alt=""
        ></img>
      </div>
    </div>
  )
}
