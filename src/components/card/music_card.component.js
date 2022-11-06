import { Cards } from "./style.component";
import { gsap } from "gsap";
const MusicCard = ({ data }) => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.03 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  return (
    <Cards bg={data?.bg} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className="bg-background"></div>
      <div className="img_backdrop">
        <div className="img">
          <img src={data?.img} alt="" />
        </div>
      </div>
      <div className="info_data">
        <div className="info">
          <h4>{data?.title}</h4>
          <p className="info_details">{data?.description} </p>
        </div>
      </div>
    </Cards>
  );
};
export default MusicCard;
