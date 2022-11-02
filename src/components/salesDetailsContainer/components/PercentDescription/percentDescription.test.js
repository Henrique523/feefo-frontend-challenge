import {render} from "@testing-library/react";
import { PercentDescription } from './index';

describe('Tests for PercentDescription component', () => {
   it('should render correctly when props are correctly passed', () => {
      const { getByText } = render(<PercentDescription description="New Description"/>);

      expect(getByText("New Description")).toBeInTheDocument();
   });

   it('should console an error if the prop type is incorrect', () => {
      jest.spyOn(console, 'error').mockImplementation(() => {});

      render(<PercentDescription description={25}/>);

      expect(console.error).toHaveBeenCalled();
   });

   it('should console an error if a required prop is not passed', () => {
      jest.spyOn(console, 'error').mockImplementation(() => {});

      render(<PercentDescription />);

      expect(console.error).toHaveBeenCalled();
   });
});
