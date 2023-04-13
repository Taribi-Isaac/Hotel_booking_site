import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const {data, loading, error} = useFetch("/hotels/countByCity?cities=lagos,abuja,uyo")
  
  return (
    <div className="featured">
     { loading? ("Loading please wait...") : (
     <>
     <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1593717191400-84f38ee95485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1056&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lagos</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1554457606-ed16c39db884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Abuja</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.premiumtimesng.com/wp-content/files/2021/09/The-Dakkada-Towers-Uyo-inaugurated-by-Vice-President-Yemi-Osinbajo.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Uyo</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>
      )}
    </div>
  );
};

export default Featured;
