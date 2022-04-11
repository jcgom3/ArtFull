import { InlineWidget } from "react-calendly";

export const Estimate = () => {
  return (
    <div id="estimates">
      <div className="container-fixed" >
        <div className="section-title text-center">
          <h2>Book an estimate for your next project with us</h2>
        </div>
      </div>
      <div className="row">
        <InlineWidget
          url="https://calendly.com/artfullrenovationsinc/60min"
          style={{ height: "700px"}}
        />
      </div>
    </div>
  );
};
