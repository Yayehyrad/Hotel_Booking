import CommonHeading from "../common/CommonHeading";
import { facility } from "../data/Data";
import * as apiClient from "../../api-client";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
export default function Rooms() {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );
  if (!hotels) {
    return <></>;
  }
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading heading="Latest Places" title="" subtitle="Explore" />
          <div className="row g-4">
            {hotels.map((item) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src={item.imageUrls[0]}
                      alt="img"
                    />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {item.pricePerNight}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{item.name}</h5>
                      <div className="ps-2">{item.starRating}</div>
                    </div>
                    <div className="d-flex mb-3">
                      {facility.map((item) => (
                        <small className="border-end me-3 pe-3">
                          {item.icon}
                          {item.quantity} {item.facility}
                        </small>
                      ))}
                    </div>
                    <p className="text-body mb-3 truncate">
                      {item.description}
                    </p>
                    <div className="d-flex justify-content-between">
                      <Link
                        to={`/detail/${item._id}`}
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
