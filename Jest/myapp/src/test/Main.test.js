import {fireEvent, render,screen} from "@testing-library/react";
import Main from "./Main";
import fetchUserData from "../api/data";

jest.mock("../api/data")


test("test component",()=>{
    render(<Main/>)
    // const linkElement = screen.getByText(/Lists of Users/i);
    // const input = screen.getByLabelText('Username')
    // expect(input).toBeInTheDocument();
    const element = screen.getByTestId('custom-element')
    expect(element).toBeInTheDocument();
    const buttonelement = screen.getByRole('button')
    fireEvent.click(buttonelement)
    expect(screen.getByTestId('main-form')).toBeInTheDocument();
    const mockFetchData = jest.fn();
    fetchUserData.mockImplementation(mockFetchData); // Use the mock function as the implementation

    fetchUserData(); // Call the function under test
  
    expect(mockFetchData).toHaveBeenCalled();

});