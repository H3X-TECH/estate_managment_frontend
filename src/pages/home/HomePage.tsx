import LeafletMap from "~/components/LeafletMap";
import { StyledButton } from "../../styled-components/StyledButton";

const HomePage = () => {
  return (
    <div className="p-8">
      <StyledButton>Primary Button</StyledButton>
      <div className="my-8">
        <LeafletMap />
      </div>
    </div>
  );
};

export default HomePage;
