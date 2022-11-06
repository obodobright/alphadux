import { Cards } from "./style.component";
const MusicCard = ({ data }) => {
  return (
    <Cards bg={data?.bg}>
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
