import {render , screen} from "@testing-library/react";
import Form from "./Form";


it("form render",()=>{
    render(<Form/>)
    const selectedelement =screen.getByDisplayValue("Alaska");
    expect(selectedelement).toBeInTheDocument();
    const inputNode = screen.getByPlaceholderText('write your name');
    expect(inputNode).toBeInTheDocument();
    const imgelement = screen.getByAltText("Poster");
    expect(imgelement).toBeInTheDocument();
})
